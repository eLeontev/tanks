import { COLOURS } from '../constants/colours';
import { battleField } from '../entity/battleField';
import { tankPosition } from '../constants/tankPosition';

let EMPTY = COLOURS.EMPTY;

export let clearPreviousTankPosition = ({ x, y }) =>
    tankPosition.forEach(e => e
        .forEach(({ offsetX, offsetY }) => battleField[x + offsetX][y + offsetY].setFillStyle(EMPTY))
);