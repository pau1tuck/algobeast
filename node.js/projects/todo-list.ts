import express, { Express, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

interface Todo {
	id: string;
	title: string;
	description: string;
	completed: boolean;
}

let todos: Todo[] = []; // Store

const app: Express = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set("view engine", "ejs");

/*** ROUTING ***/

// CREATE
app.post("/api/todos/create", (req: Request, res: Response) => {
	const todo: Todo = {
		id: uuidv4(),
		title: req.body.title,
		description: req.body.description,
		completed: false,
	};

	todos.push(todo);
	res.redirect("/"); // redirect back to homepage which lists todos
});

// READ + RENDER
app.get("/", (req: Request, res: Response) => {
	res.render("todo-list", { todos }); // render 'todos.ejs' passing the todos array
});

// UPDATE
app.post("/api/todos/:id/complete", (req: Request, res: Response) => {
	const todo = todos.find((t) => t.id === req.params.id);
	if (todo) {
		todo.completed = true;
	}
	res.redirect("/"); // redirect back to homepage which lists todos
});

// DELETE
app.post("/api/todos/:id/delete", (req: Request, res: Response) => {
	const index = todos.findIndex((t) => t.id === req.params.id);
	if (index !== -1) {
		todos.splice(index, 1);
	}
	res.redirect("/"); // redirect back to homepage which lists todos
});

// SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
