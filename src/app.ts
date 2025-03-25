import express from 'express';
import { healthRouter, calculatorRouter, tarotRouter } from './routers';
import {errorHandler, logger} from './middleware'
import { addTimestamp } from './middleware';
const app = express();
const port = 3000;

app.use(express.json());
app.use(addTimestamp);
app.use(logger);



app.use('/health', healthRouter);
app.use('/calculator', calculatorRouter);
app.use('/tarot', tarotRouter);
app.use(errorHandler);
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}.`);
});