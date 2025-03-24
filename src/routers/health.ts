import {Router} from 'express';
export const router = Router();

router.get('/', (req, res)=> {
    throw new Error('e');
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