import { TANK_SCALE } from '../config';
import { COLOURS } from '../constants/colours';
import { battleField } from '../entity/battleField';
import { ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP } from '../constants/eventsConstant';

let verticalBulletPosition = new Array(1).fill()
    .map((e, offsetX) => new Array(TANK_SCALE).fill()
    .map((e, offsetY) => ({ offsetX, offsetY })));

let horizontalBulletPosition = new Array(TANK_SCALE).fill()
    .map((e, offsetX) => new Array(1).fill()
    .map((e, offsetY) => ({ offsetX, offsetY })));

let bulletPosition = {
    [ARROW_LEFT]: verticalBulletPosition,
    [ARROW_RIGHT]: verticalBulletPosition,
    [ARROW_UP]: horizontalBulletPosition,
    [ARROW_DOWN]: horizontalBulletPosition,
};


let EMPTY = COLOURS.EMPTY;
let BULLET = COLOURS.BULLET;

export let setBulletPositionOnBattleField = (direction, { x, y }, isClearBulletPosition) => {
    let fillStyle = isClearBulletPosition ? EMPTY : BULLET;

    bulletPosition[direction]
        .forEach(e => e
        .forEach(({ offsetX, offsetY }) => (
            battleField[x + offsetX][y + offsetY].setFillStyle(fillStyle)
        )));
};