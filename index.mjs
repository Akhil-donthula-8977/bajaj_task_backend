import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
import { postController } from './controllers/testControllers.mjs';
app.get('/', (req, res) => {
    res.status(200).json({"operation_code":1});
});
app.get('/bfhl',(req, res) => {
    res.status(200).json({"operation_code":1});
});
app.get('/data/bfhl',(req, res) => {
    res.status(200).json({"operation_code":1});
});
app.post('/data',postController);
app.post('/data/bfhl',postController);
app.post('/bfhl',postController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
