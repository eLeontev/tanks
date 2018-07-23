import { ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP } from '../constants/eventsConstant';
import { GUN_HEIGHT_RATE, GUN_OFFSET, GUN_SIZE } from '../constants/gunParameters';
import { TANK_SCALE } from '../config';

let GUN_HEIGHT = TANK_SCALE / GUN_HEIGHT_RATE;
let GUN_DIAMETR = GUN_SIZE * 2; // double radius
let GUN_START_POSITION = TANK_SCALE - GUN_HEIGHT;

export let getGunPosition = {
    [ARROW_UP]: ({ x, y }, cellSize) => ({
        xPosition: (x + GUN_OFFSET) * cellSize - GUN_SIZE,
        yPosition: y * cellSize,
        width: GUN_DIAMETR,
        height: cellSize * GUN_HEIGHT
    }),
    [ARROW_DOWN]: ({ x, y }, cellSize) => ({
        xPosition: (x + GUN_OFFSET) * cellSize - GUN_SIZE,
        yPosition: (y + GUN_START_POSITION) * cellSize,
        width: GUN_DIAMETR,
        height: cellSize * GUN_HEIGHT
    }),
    [ARROW_LEFT]: ({ x, y }, cellSize) => ({
        xPosition: x * cellSize,
        yPosition: (y + GUN_OFFSET) * cellSize - GUN_SIZE,
        width: cellSize * GUN_HEIGHT,
        height: GUN_DIAMETR
    }),
    [ARROW_RIGHT]: ({ x, y }, cellSize) => ({
        xPosition: (x + GUN_START_POSITION) * cellSize,
        yPosition: (y + GUN_OFFSET) * cellSize - GUN_SIZE,
        width: cellSize * GUN_HEIGHT,
        height: GUN_DIAMETR
    }),
};