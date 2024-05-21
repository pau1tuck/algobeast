import express from "express";
import { Sequelize, DataTypes, Model } from "sequelize";
import { User } from "./crud-rest-sequelize";

// SETUP SEQUELIZE
const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    database: "test",
    username: "postgres",
    password: "badpassword",
    port: 5432,
    logging: false,
});

class Product extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public price!: number;
    public imageUrl!: string;
}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        description: {
            type: new DataTypes.STRING(256),
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        imageUrl: {
            type: new DataTypes.STRING(256),
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: "products",
    },
);

class Cart extends Model {
    public id!: number;
    public userId!: number;
}

Cart.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "carts",
    },
);

Cart.belongsTo(User, { foreignKey: "userId" });
User.hasOne(Cart);

class CartItem extends Model {
    public cartId!: number;
    public productId!: number;
    public quantity!: number;
}

CartItem.init(
    {
        cartId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        productId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "cart_items",
    },
);

CartItem.belongsTo(Cart, { foreignKey: "cartId" });
CartItem.belongsTo(Product, { foreignKey: "productId" });
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

/* ------ */

const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/users/:userId/cart/products", async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = Number(req.params.userId);

    try {
        // Find or create a cart for the user
        let [cart, created] = await Cart.findOrCreate({
            where: { userId },
        });

        // Find or create the cart item (product in the cart)
        const [cartItem, itemCreated] = await CartItem.findOrCreate({
            where: { cartId: cart.id, productId },
            defaults: { quantity },
        });

        // If the cart item already exists, just update the quantity
        if (!itemCreated) {
            cartItem.quantity += quantity;
            await cartItem.save();
        }

        res.status(201).json(cartItem);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});

app.put(
    "/users/:userId/cart/products/:productId",
    async (req, res) => {
        const { quantity } = req.body;
        const userId = Number(req.params.userId);
        const productId = Number(req.params.productId);

        try {
            // Find the user's cart
            const cart = await Cart.findOne({ where: { userId } });
            if (!cart) {
                return res
                    .status(404)
                    .json({ message: "Cart not found" });
            }

            // Find the cart item and update the quantity
            const cartItem = await CartItem.findOne({
                where: { cartId: cart.id, productId },
            });
            if (cartItem) {
                cartItem.quantity = quantity;
                await cartItem.save();
                res.json(cartItem);
            } else {
                res.status(404).json({
                    message: "Product not found in cart",
                });
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    },
);
