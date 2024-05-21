import express, {
    Application,
    Request,
    Response,
    NextFunction,
} from "express";
import session from "express-session";
import jwt from "jsonwebtoken";
import cors from "cors";

class ExpressServer {
    private app: Application;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        // Middleware setup
        this.setupMiddleware();

        // Routes setup
        this.setupRoutes();
    }

    private setupMiddleware() {
        this.app.use(cors());
        this.app.use(express.json());

        // Setup express-session
        this.app.use(
            session({
                secret: "your-secret-key",
                resave: false,
                saveUninitialized: true,
                cookie: { secure: false }, // For development, set secure to false. In production, use HTTPS and set secure to true.
            }),
        );
    }

    private setupRoutes() {
        this.app.get("/", (req: Request, res: Response) => {
            res.send("Hello, World!");
        });

        // JWT authentication middleware
        this.app.use(
            (req: Request, res: Response, next: NextFunction) => {
                const token = req.header("x-auth-token");
                if (!token)
                    return res
                        .status(401)
                        .json({
                            msg: "Access denied, no token provided",
                        });

                try {
                    const decoded = jwt.verify(
                        token,
                        "your-secret-key",
                    );
                    req.user = decoded;
                    next();
                } catch (ex) {
                    res.status(400).json({ msg: "Invalid token" });
                }
            },
        );

        // Protected route
        this.app.get("/protected", (req: Request, res: Response) => {
            res.send("Protected Route Accessed");
        });
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

const port = 5000;
const server = new ExpressServer(port);
server.start();
