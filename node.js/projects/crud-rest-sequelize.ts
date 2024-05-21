import express, { Express, Router, Request, Response } from "express";
import { Sequelize, DataTypes, Model } from "sequelize";

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

// DEFINE MODEL
export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
}

User.init(
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
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "users",
    },
);

/*** DATABASE SERVICE ***/
class UserService {
    async getAll(): Promise<User[]> {
        return await User.findAll();
    }

    async getOne(id: number): Promise<User | null> {
        return await User.findByPk(id);
    }

    async create(name: string, email: string): Promise<User | null> {
        return await User.create({ name, email });
    }

    async update(
        id: number,
        name: string,
        email: string,
    ): Promise<User | null> {
        await User.update({ name, email }, { where: { id } });
        return await this.getOne(id);
    }

    async delete(id: number): Promise<void> {
        await User.destroy({ where: { id } });
    }
}

const userService = new UserService();

// EXPRESS
const app: Express = express();

// JSON PARSING
app.use(express.json());

/*** CONTROLLER ***/
class UserController {
    async register(req: Request, res: Response): Promise<void> {
        const { name, email } = req.body;
        try {
            const newUser = await userService.create(name, email);
            res.status(201).json(newUser);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }
}

const userController = new UserController();

/*** ROUTES ***/
const router: Router = express.Router();
router.post("/register", userController.register);

// READ
app.get("/users", async (req, res) => {
    const users = await userService.getAll();
    res.json(users);
});

app.get("/users/:id", async (req, res) => {
    const user = await userService.getOne(Number(req.params.id));
    res.json(user);
});

// UPDATE
app.put("/users/:id", async (req, res) => {
    const { name, email } = req.body;
    const updatedUser = await userService.update(
        Number(req.params.id),
        name,
        email,
    );
    res.json(updatedUser);
});

// DELETE
app.delete("/users/:id", async (req, res) => {
    await userService.delete(Number(req.params.id));
    res.json({ message: "Deleted successfully" });
});

// SERVER
app.listen(3000, () => console.log("Server running on port 3000"));

// CONNECT TO DATABASE
sequelize
    .sync()
    .then(() => {
        console.log("Connected to database");
    })
    .catch(err => {
        console.log("Unable to connect to database", err);
    });
