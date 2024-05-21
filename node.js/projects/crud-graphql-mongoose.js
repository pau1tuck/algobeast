const express = require("express");
const path = require("path");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const { makeExecutableSchema } = require("graphql-tools");
const {
    mergeTypeDefs,
    mergeResolvers,
} = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

// Load schemas and resolvers
const typeDefs = mergeTypeDefs(
    loadFilesSync(path.join(__dirname, "**/*.graphql")),
);
const resolvers = mergeResolvers(
    loadFilesSync(path.join(__dirname, "resolver.js")),
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

mongoose
    .connect("mongodb://localhost:27017/db", {
       user: "user",
       pass: "pass,
    })
    .then(() => {
        console.log("Connected to the database.");

        const app = express();

        app.use(
            "/graphql",
            graphqlHTTP({
                schema: schema,
                graphiql: true,
            }),
        );

        app.listen(4000, () => {
            console.log("Server is running on port 4000");
        });
    })
    .catch(err => {
        console.log(err);
    });

/*** USER MODEL (SCHEMA) ***/

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model("User", userSchema);

/*** USER RESOLVER ***/

const User = require("./models/user");
// export const resolver = ...
module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id),
    },
    Mutation: {
        createUser: (_, { input }) => User.create(input), // ADD HASH PASSWORD
        updateUser: (_, { id, input }) =>
            User.findByIdAndUpdate(id, input, { new: true }), // ADD HASH PASSWORD
        deleteUser: (_, { id }) =>
            User.findByIdAndDelete(id).then(() => true),
    },
    User: {
        posts: user => Blog.find({ userId: user.id }),
    },
};

/*** BLOG MODEL (SCHEMA) ***/

// const Schema = mongoose.Schema;

// export const resolver = ...
const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model("Blog", blogSchema);

/*** BLOG RESOLVER ***/

const Blog = require("./models/blog");

// export const resolver = ...
module.exports = {
    Query: {
        blogs: () => Blog.find(),
        blog: (_, { id }) => Blog.findById(id),
    },
    Mutation: {
        createBlog: (_, { input }) => Blog.create(input),
        updateBlog: (_, { id, input }) =>
            Blog.findByIdAndUpdate(id, input, { new: true }),
        deleteBlog: (_, { id }) =>
            Blog.findByIdAndDelete(id).then(() => true),
    },
    Blog: {
        author: blog => User.findById(blog.userId),
    },
};
