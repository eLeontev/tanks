import { CELLS_COUNT } from '../config';
import { COLOURS } from '../constants/colours';
import { battleField } from '../entity/battleField';
import { CHECK_POSITIONS_BY_EVENT } from './isNextBulletPositionFree';

let MIN = 0;
let MAX = CELLS_COUNT;
let CONCRETE = COLOURS.CONCRETE;

export let updateBattleField = (keyCode, { x, y }) => {
    CHECK_POSITIONS_BY_EVENT[keyCode].forEach(e => e.forEach(({ offsetX, offsetY }) => { 
        let xPosition = x + offsetX;
        let yPosition = y + offsetY;
        
        let inRange = xPosition >= MIN && xPosition < MAX 
            && yPosition >= MIN && yPosition < MAX;

        // TODO update to iteraction with other entities: bullets/tanks/eagle
        let isNotConcrete = battleField[xPosition][yPosition].fillStyle !== CONCRETE;
        
        if (inRange && isNotConcrete ) {
            battleField[x + offsetX][y + offsetY].setFillStyle(COLOURS.EMPTY);
        }
    }))
};