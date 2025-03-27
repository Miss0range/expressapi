import {Router, Request, Response} from 'express';
import { CalculatorOperationBody } from '../types/calculator';
import { validateCalculator as validator } from '../middleware/';
export const router = Router();

router.get('/help', (req, res) => {
    res.send({
        success: true, 
        message: 'You are using the calculator function. Currently accepting operations: + - * /',
        timestamp: req.timestamp,
        data: [
            {id: 1, label: '+'},
            {id: 2, label: '-'},
            {id: 3, label: '*'},
            {id: 4, label: '/'},
        ]
    });
});

router.get('/', validator, (req: Request<{}, any, CalculatorOperationBody>, res: Response) =>{
    let calculation : string = `${Number(req.body.oprandLeft)} ${req.body.operator} ${Number(req.body.oprandRight)}`;
    let result : number = eval(calculation);
    console.log(result);
    res.send({
        success: true,
        timestamp: req.timestamp,
        message: `The result is : ${result}`,
        result: result
    });
});