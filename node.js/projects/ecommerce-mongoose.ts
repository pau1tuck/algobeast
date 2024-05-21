import mongoose from "mongoose";
import express, { Request, Response } from "express";

const mongoURI = "mongodb://localhost:27017/test";
mongoose.connect(mongoURI, {});
const db = mongoose.connection;

/* --- */

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    imageUrl: String,
});

const Product = mongoose.model("Product", ProductSchema);

const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Cart = mongoose.model("Cart", CartSchema);

/* --- */

const CartItemSchema = new mongoose.Schema({
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
    },
});

const CartItem = mongoose.model("CartItem", CartItemSchema);

/* --- */
const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/users/:userId/cart/products", async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.params.userId;

    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId });
            await cart.save();
        }

        let cartItem = await CartItem.findOne({
            cartId: cart._id,
            productId,
        });
        if (cartItem) {
            cartItem.quantity += quantity;
            await cartItem.save();
        } else {
            cartItem = new CartItem({
                cartId: cart._id,
                productId,
                quantity,
            });
            await cartItem.save();
        }

        res.status(201).json(cartItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.put(
    "/users/:userId/cart/products/:productId",
    async (req, res) => {
        const { quantity } = req.body;
        const userId = req.params.userId;
        const productId = req.params.productId;

        try {
            const cart = await Cart.findOne({ userId });
            if (!cart) {
                return res
                    .status(404)
                    .json({ message: "Cart not found" });
            }

            const cartItem = await CartItem.findOne({
                cartId: cart._id,
                productId,
            });
            if (!cartItem) {
                return res
                    .status(404)
                    .json({ message: "Product not found in cart" });
            }

            cartItem.quantity = quantity;
            await cartItem.save();

            res.json(cartItem);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
);
