import express from 'express';
import cors from 'cors';
import { router } from './routes/data-routes';

const port: number = 5000;
const app = express();

app.use(cors());

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

app.use('/data', router);
