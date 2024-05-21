import express from "express";
import mongoose, { ConnectOptions } from "mongoose";

const connectToDatabase_promise = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        mongoose
            .connect("mongodb://localhost:27017/db", {
                user: "user",
                pass: "pass",
            })
            .then(() => {
                console.log("Database connected!");
                resolve();
            })
            .catch((err: Error) => {
                console.log("Could not connect to database:", err);
                reject(err);
            });
    });
};

const connectToDatabase_aa = async (): Promise<void> => {
    try {
        await mongoose.connect("mongodb://localhost:27017/db", {
            user: "user",
            pass: "pass",
        });
        console.log("Database connected!");
    } catch (err) {
        console.log("Could not connect to database:", err);
        throw err; // Promise is rejected
    }
};

const app = express();

app.use(express.json());

const port: number = 3000;

// Reponse methods are still the same:
connectToDatabase_promise()
    .then(() => {
        app.listen(port, () =>
            console.log(`Server running on port ${port}`),
        );
    })
    .catch((err: Error) => {
        throw new Error(`Error connecting to the database: ${err}`);
    });

connectToDatabase_aa()
    .then(() => {
        app.listen(port, () =>
            console.log(`Server running on port ${port}`),
        );
    })
    .catch((err: Error) => {
        throw new Error(`Error connecting to the database: ${err}`);
    });
