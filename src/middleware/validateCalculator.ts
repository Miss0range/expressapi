import {Request, Response, NextFunction} from 'express';
import { CalculatorOperationBody } from '../types/calculator';

export const validateCalculator = (req: Request<{}, any, CalculatorOperationBody>, res:Response, next: NextFunction) => {
    if (!Number.isNaN(req.body.oprandLeft)|| !Number.isNaN(req.body.oprandRight)) {
        console.log('not a number');
        res.send({
            success: false,
            message: 'Oprand must be number'
        });
    }
}