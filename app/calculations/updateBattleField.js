import { CELLS_COUNT } from '../config';
import { COLOURS } from '../constants/colours';
import { battleField } from '../entity/battleField';
import { CHECK_POSITIONS_BY_EVENT } from './isNextPositionFree';

let MIN = 0;
let MAX = CELLS_COUNT;
let CONCRETE = COLOURS.CONCRETE;
export let updateBattleField = (keyCode, { x, y }) => {
    CHECK_POSITIONS_BY_EVENT[keyCode].forEach(e => e.forEach(({ offsetX, offsetY }) => { 
        let xPosition = x + offsetX;
        let yPosition = y + offsetY;
        
        let inRange = xPosition >= MIN && xPosition < MAX 
            && yPosition >= MIN && yPosition < MAX;
        
        let isNotConcrete = battleField[xPosition][yPosition].fillStyle !== CONCRETE;
        
        console.log(battleField[xPosition][yPosition].fillStyle)
        console.log(`CONCRETE is: ${CONCRETE}`);
        console.log(isNotConcrete)
        if (inRange && isNotConcrete ) {
            battleField[x + offsetX][y + offsetY].setFillStyle(COLOURS.EMPTY);
        }
    }))
};