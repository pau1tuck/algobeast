import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { engine } from "express-handlebars";

// EXPRESS APP
const app = express();

const server = async () => {
	// JSON PARSER
	app.use(express.json());

	// VIEW ENGINE
	app.engine("handlebars", engine({ defaultLayout: "main" }));
	app.set("view engine", "handlebars");
	app.set("views", path.join(__dirname, "/views"));

	// STATIC FILES
	app.use(express.static(path.join(__dirname, "/public")));

	// EJS ROUTE
	app.get("/", (req: Request, res: Response) => {
		res.render("index");
	});

	// ERROR ROUTE
	app.get("/error", (req: Request, res: Response) => {
		throw new Error("Problem loading page.");
	});

	// ERROR HANDLING MIDDLEWARE
	app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		console.error(err.stack);
		res.status(500).send("Error!");
	});

	// SERVER
	app.listen(3000, () => console.log("Server running on port 3000"));
};

server();
