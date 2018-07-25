import { TANK_SCALE } from '../../config';
import { ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP } from '../../constants/eventsConstant';
import { isCheckedPositionsFree } from '../isCheckedPositionsFree';

export let BULLET_POSITIONS_BY_EVENT = {
    [ARROW_LEFT]: new Array(1).fill()
        .map((e, offsetX) => new Array(TANK_SCALE).fill()
        .map((e, offsetY) => ({ offsetX, offsetY }))),
    [ARROW_RIGHT]: new Array(1).fill()
        .map((e, offsetX) => new Array(TANK_SCALE).fill()
        .map((e, offsetY) => ({ offsetX, offsetY }))),
    [ARROW_UP]: new Array(TANK_SCALE).fill()
        .map((e, offsetX) => new Array(1).fill()
        .map((e, offsetY) => ({ offsetX, offsetY }))),
    [ARROW_DOWN]: new Array(TANK_SCALE).fill()
        .map((e, offsetX) => new Array(1).fill()
        .map((e, offsetY) => ({ offsetX, offsetY })))
};

export let isNextBulletPositionFree = (keyCode, position) => (
    isCheckedPositionsFree(position, BULLET_POSITIONS_BY_EVENT[keyCode])
);