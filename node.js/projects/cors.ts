import express from "express";
import cors from "cors";

const app = express();
const PORT: number = 5000;

// CORS configuration
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Example route
app.get("/", (req, res) => {
    res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
