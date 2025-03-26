import {Router, Request} from 'express';
import tarotData from '../JSON/tarot-images.json';
export const router = Router();
const tarotCards: Array<any> = tarotData.cards;

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

router.get('/one', (req, res) =>{
    const number = getRandomInt(1,tarotCards.length);
    const card = tarotCards[number];
    res.send({
        result: card
    });
});

router.get('/celtic', (req, res) =>{
    let hand : any = [];
    let handNumber : Array<number>= [];
    while(hand.length < 10) {
        const number = getRandomInt(1,tarotCards.length);
        if (!handNumber.includes(number)) {
            const card = tarotCards[number];
            hand.push(card);
        }
    }
    res.send({
        result: hand
    });
});