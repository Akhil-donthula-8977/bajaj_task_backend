import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
app.use(cors());
dotenv.config();
const app = express();
app.use(bodyParser.json());
import { postController } from './controllers/testControllers.mjs';
app.get('/', (req, res) => {
    res.status(200).json({"operation_code":1});
});
app.post('/data',postController);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
