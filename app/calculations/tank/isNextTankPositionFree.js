import { TANK_SCALE } from '../../config';
import { ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP } from '../../constants/eventsConstant';
import { isCheckedPositionsFree } from '../isCheckedPositionsFree';

let TANK_POSITIONS_BY_EVENT = {
    [ARROW_LEFT]: new Array(1).fill()
        .map((e, offsetX) => new Array(TANK_SCALE).fill()
        .map((e, offsetY) => ({ offsetX, offsetY }))),
    [ARROW_RIGHT]: new Array(1).fill()
        .map((e, offsetX) => new Array(TANK_SCALE).fill()
        .map((e, offsetY) => ({ offsetX: offsetX + TANK_SCALE - 1, offsetY }))),
    [ARROW_UP]: new Array(TANK_SCALE).fill()
        .map((e, offsetX) => new Array(1).fill()
        .map((e, offsetY) => ({ offsetX, offsetY }))),
    [ARROW_DOWN]: new Array(TANK_SCALE).fill()
        .map((e, offsetX) => new Array(1).fill()
        .map((e) => ({ offsetX: offsetX, offsetY: TANK_SCALE - 1 })))
};

export let isNextTankPositionFree = (keyCode, position) => (
    isCheckedPositionsFree(position, TANK_POSITIONS_BY_EVENT[keyCode])
);