import express from "express";
import * as session from "express-session";
import Redis from "ioredis";
import ConnectRedis from "connect-redis";
import { v4 as uuid } from "uuid";

let debug = true;

const app = express();

const redisClient = new Redis({
	host: "localhost",
	port: 6379,
	name: "userSession",
	// family: env.REDIS_FAMILY,
	// db: env.REDIS_DB,
	enableReadyCheck: true,
});

const RedisStore = new ConnectRedis({
	client: redisClient,
	disableTouch: true,
	disableTTL: true,
});

redisClient.monitor((error, monitor) => {
	if (!error) {
		console.log(`Connected to Redis database on localhost`);
	}
	if (debug) {
		monitor!.on("monitor", (time, args, source) => {
			console.log(time, args, source);
		});
	}
});

const sessionConfig = {
	name: "session",
	genid: () => uuid(),
	store: RedisStore,
	cookie: {
		maxAge: 36000 * 24 * 365,
		httpOnly: true,
		sameSite: "lax" as const,
		secure: "auto" as const,
	},
	secret: "badsecret",
	resave: false,
	saveUninitialized: false,
};

// Create an Express session to store user session data:
app.use((session as any)(sessionConfig));

// Define the shape of the user object.
type User = {
	id: number;
	name: string;
};

// Simulate a user login and store user data in session
app.post("/login", (req: express.Request, res: express.Response) => {
	// This would normally involve checking a username/password, etc.
	// For simplicity, we'll just simulate a user logging in with a static user object.
	req.session.user = {
		id: 123,
		name: "John Doe",
	} as User;
	res.send("User logged in");
});

// Simulate retrieving a blog post for the
