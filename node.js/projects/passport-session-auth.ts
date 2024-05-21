// Import required modules
import express, { Express } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";


// MONGODB DATABASE
mongoose
    .connect("mongodb://localhost:27017/userAPI")
    .then(() => console.log("Database connected!"))
    .catch((err: any) => console.log("Could not connect to database:", err));


// USER SCHEMA
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

// USER MODEL
const User = mongoose.model("User", userSchema);

// EXPRESS
const app: Express = express();
app.use(express.json());

// PASSPORT CONFIGURATION
app.use((session as any) ({
    secret: "secret", resave: false, saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({ usernameField: "email" },
    async (email: string, password: string, done: any) => {
        const user: any = await User.findOne({ email: email });
        if (!user) {
            return done(null, false, { message: 'No user with that email' });
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect password' });
            }
        } catch (e) {
            return done(e);
        }
    }
));

passport.serializeUser((user: any, done: any) => done(null, user.id));
passport.deserializeUser((id: any, done: any) => {
    User.findById(id, (err: any, user: any) => done(err, user));
});

// REGISTER
app.post("/register", async (req: express.Request, res: express.Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({ name: req.body.name, email: req.body.email, password: hashedPassword });
        await newUser.save();
        res.status(201).send(newUser);
    } catch {
        res.status(500).send();
    }
});

// SIGN IN
app.post("/login", passport.authenticate('local'), (req: express.Request, res: express.Response) => {
    res.status(200).send({ message: "Logged in" });
});

// SERVER
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
