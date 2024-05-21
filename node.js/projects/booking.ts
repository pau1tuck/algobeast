import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

mongoose.connect("mongodb://localhost/restaurant", {});

app.use(bodyParser.json());

// MONGO SCHEMA
const reservationSchema = new mongoose.Schema({
    datetime: Date,
    name: String,
    numOfGuests: Number,
    infants: { type: Number, default: 0 },
    allergies: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// `UPDATED_AT` MIDDLEWARE
reservationSchema.pre("save", function (next) {
    this.updatedAt = new Date(); // <-- Here we use new Date() to ensure it's a date object
    next();
});

const Reservation = mongoose.model("Reservation", reservationSchema);

// CREATE
app.post("api/reservations", async (req, res) => {
    const newReservation = new Reservation(req.body);
    try {
        const savedReservation = await newReservation.save();
        res.json(savedReservation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ_ALL
app.get("api/reservations", async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ_ONE
app.get("api/reservations/:id", async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        res.json(reservation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE
app.put("api/reservations/:id", async (req, res) => {
    try {
        const updatedReservation =
            await Reservation.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true },
            );
        res.json(updatedReservation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE
app.delete("api/reservations/:id", async (req, res) => {
    try {
        await Reservation.findByIdAndRemove(req.params.id);
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
