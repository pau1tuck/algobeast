import express, { Express, Router, Request, Response } from "express";
import { Pool } from "pg";

// POSTGRESQL DATABASE
const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "test",
	password: "badpassword",
	port: 5432,
});

interface User {
	id: number;
	name: string;
	email: string;
}

/*** DATABASE SERVICE ***/
class UserService {
	async getAll(): Promise<User[]> {
		const res = await pool.query("SELECT * FROM users");
		return res.rows as User[];
	}

	async getOne(id: number): Promise<User | null> {
		const res = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
		return (res.rows[0] as User) || null;
	}

	async create(name: string, email: string): Promise<User | null> {
		const res = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
		return (res.rows[0] as User) || null;
	}

	async update(id: number, name: string, email: string): Promise<User | null> {
		const res = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *", [name, email, id]);
		return (res.rows[0] as User) || null;
	}

	async delete(id: number): Promise<User | null> {
		const res = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
		return (res.rows[0] as User) || null;
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
	const updatedUser = await userService.update(Number(req.params.id), name, email);
	res.json(updatedUser);
});

// DELETE
app.delete("/users/:id", async (req, res) => {
	const deletedUser = await userService.delete(Number(req.params.id));
	res.json(deletedUser);
});

// SERVER
app.listen(3000, () => console.log("Server running on port 3000"));
