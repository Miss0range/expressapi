import {Router} from 'express';
export const router = Router();

router.get('/help', (req, res) => {
    res.send({
        success: true, 
        message: 'You are using the calculator function',
        timestamp: req.timestamp,
        data: [
            {id: 1, label: 'Add'},
            {id: 2, label: 'minus'},
        ]
    });
});


router.get('/:id', (req, res)=>{
    res.send({
        success:true,
        timestamp: req.timestamp,
        message: "Hello" + req.params.id
    });
});