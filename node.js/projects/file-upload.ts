import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";

/* express.d.ts */
declare namespace Express {
    export interface Request {
        file: any;
    }
}

const app = express();

// Connect to MongoDB using Mongoose
mongoose
    .connect("mongodb://localhost:27017/file-upload-db", {})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

// Define a schema and model for file information
const FileSchema = new mongoose.Schema({
    filename: String,
    path: String,
    size: Number,
});

const File = mongoose.model("File", FileSchema);

// Set up multer for storing uploaded files to disk
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Routes
app.post("/upload", upload.single("file"), async (req, res) => {
    try {
        // Save file information to database
        const file = new File({
            filename: req.file?.filename,
            path: req.file?.path,
            size: req.file?.size,
        });

        const savedFile = await file.save();
        res.json({ file: savedFile });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
