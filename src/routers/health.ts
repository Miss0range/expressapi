import {Router} from 'express';
export const router = Router();

router.get('/', (req, res)=> {
    console.log(req.body);
    res.send({
        success:true,
        message: 'Getting player health',
        timestamp: req.timestamp,
        data: {
            label: 'health',
            value: 100
        }
    })
});