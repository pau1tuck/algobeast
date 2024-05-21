import express, { Request, Response } from "express";
import mongoose, { Schema } from "mongoose";
import routes from "./routes";
import bcrypt from "bcrypt";

// MONGODB DATABASE
mongoose
    .connect("mongodb://localhost:27017/db", {
        user: "user",
        pass: "pass",
    })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log("Could not connect to database:", err));

// EXPRESS APP
const app = express();

// JSON BODY PARSER
app.use(express.json());

// ROUTES
app.use(routes);

// SERVER
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

/*** BLOG POST MODEL (SCHEMA) ------------------------------------***/
interface IPost extends mongoose.Document {
    id: number;
    title: string;
    body: string;
    author: IUser;
}
const postSchema = new Schema({
    id: Number,
    title: String,
    body: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

export const Post = mongoose.model<IPost>("Post", postSchema);

/*** BLOG ROUTE HANDLERS / ENDPOINTS (./routes.ts)------------------***/
const router = express.Router();
/***
 * CREATE
 ***/
// app.post("/register", async (req: Request, res: Response) => {
router.post("/create", async (req: Request, res: Response) => {
    const newPost = new User(req.body);
    await newPost.save();
    res.send(newPost);
});

/***
 * READ_ONE
 ***/
router.get("/posts/:id", async (req: Request, res: Response) => {
    const post = await Post.findById(req.params.id);
    res.send(post);
});

/***
 * READ_ALL
 ***/
router.get("/posts", async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
});

/***
 * UPDATE
 ***/
router.put("/posts/:id", async (req: Request, res: Response) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
    );
    res.send(updatedUser);
});

/***
 * DELETE
 ***/
router.delete("/posts/:id", async (req: Request, res: Response) => {
    const user = await User.findByIdAndRemove(req.params.id);
    res.send(user);
});

export default router;

/*** USER MODEL (SCHEMA) -------------------------------------------***/
interface IUser extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

export const User = mongoose.model<IUser>("User", userSchema);

/*** USER ROUTE HANDLERS (server.ts) --------------------------------***/
/***
 * CREATE
 ***/
app.post("/register", async (req: Request, res: Response) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
        ...req.body,
        password: hashedPassword,
    });
    await newUser.save();
    res.send(newUser);
});

/***
 * READ
 ***/
app.get("/users/:id", async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id);
    res.send(user);
});

/***
 * UPDATE
 ***/
app.put("/users/:id", async (req: Request, res: Response) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
    );
    res.send(updatedUser);
});

/***
 * DELETE
 ***/
app.delete("/users/:id", async (req: Request, res: Response) => {
    const user = await User.findByIdAndRemove(req.params.id);
    res.send(user);
});
