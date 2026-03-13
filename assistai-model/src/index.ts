// assistai-model/src/index.ts
// TODO: Express server entry point
// Expected port: 3001

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import { routes } from './routes';

dotenv.config({ path: '../.env' });

const app = express();
const PORT = process.env.MODEL_PORT || 3001;

app.use(cors());
app.use(express.json());

// TODO: Mount routes
// app.use('/', routes);

app.get('/health', (_req, res) => {
    res.json({ status: 'ok', service: 'assistai-model' });
});

app.listen(PORT, () => {
    console.log(`assistai-model running on port ${PORT}`);
});
