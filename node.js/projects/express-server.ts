import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { engine } from 'express-handlebars';

// EXPRESS APP
const app = express();

// JSON PARSER
app.use(express.json());

// VIEW ENGINE
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

// STATIC FILES
app.use(express.static(path.join(__dirname, '/public')));

// ROUTES
// Serving the Homepage - 'index.handlebars'
app.get('/', (req: Request, res: Response) => {
    res.render('index');
});

// Error Routes
app.get('/error', (req: Request, res: Response) => {
    throw new Error('This is a forced error.');
});

// ERROR HANDLING MIDDLEWARE
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// SERVER
app.listen(3000, () => console.log("Server running on port 3000"));
