import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import session from "express-session";

declare module "express-session" {
    interface SessionData {
        jwt?: string; // This line adds the custom jwt property to the Session type
    }
}

// MONGODB DATABASE
mongoose
    .connect("mongodb://localhost:27017/userAPI")
    .then(() => console.log("Database connected!"))
    .catch(err => console.log("Could not connect to database:", err));

// USER DOCUMENT SCHEMA
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

// USER MODEL INTERFACE
interface IUser extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}

// USER MODEL
const User = mongoose.model<IUser>("User", userSchema);

// EXPRESS APP
const app = express();

// JSON PARSER
app.use(express.json());

// SESSION HANDLER
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    }),
);

// AUTH CHECKING MIDDLEWARE ???
app.use((req, res, next) => {
    if (!req.user) {
        res.status(401).send("Please log in.");
    } else {
        next();
    }
});

// REGISTER
app.post("/register", async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body as IUser;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).send(newUser);
    } catch (err) {
        res.status(500).send(err);
    }
});

// SIGN IN
app.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body as Pick<
            IUser,
            "email" | "password"
        >;
        const user = await User.findOne({ email: email });

        if (
            user &&
            user.password &&
            (await bcrypt.compare(password, user.password))
        ) {
            // User found and password matches
            const token = jwt.sign({ id: user._id }, "jwt secret", {
                expiresIn: "2h",
            });
            req.session.jwt = token;
            res.status(200).send({
                message: "Logged in",
                token: token,
            });
        } else {
            res.status(400).send({ message: "Invalid credentials" });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// SERVER
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
