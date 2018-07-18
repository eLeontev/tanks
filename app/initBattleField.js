import { CELLS_COUNT } from './config';
import COLOURS from './constants/colours';
import { randomInteger } from './util';

console.log(randomInteger);

let battleField = new Array(CELLS_COUNT).fill()
    .map((e, x) => new Array(CELLS_COUNT).fill()
        .map((e, y) => ({
            position: { x, y },
            fillStyle: COLOURS[randomInteger()]
        })));
    
let fillBattleFiled = (drowCell) => 
    battleField.forEach((row) => 
        row.forEach((elem) => drowCell(false, elem)));

export default fillBattleFiled;