import KEYBOADS_DATA from '../constants/eventsConstant';
import { spaceEventHandler } from './spaceEventHandler';
import { movementEventHandler } from './movementEventHandler';

import { bullets } from '../entity/battleFieldEntities';
import {updateTankPositionOnBattleField} from "../calculations/tank/updateTankPositionOnBattleField";

let handledKeyboardsKeys = Object.entries(KEYBOADS_DATA).map(([key, keyCode]) => keyCode);

let isDrowing = false; // disallow to drow until new position is not drown
export let onMoveKeyDownHandler = (tank, ctx, drowBattleField) => ({ keyCode }) => {
    let isKeyboardKeyNotSupported = handledKeyboardsKeys.every(key => +key !== keyCode);

    if (isKeyboardKeyNotSupported || isDrowing) {
        return;
    }

    isDrowing = true;

    if (keyCode === KEYBOADS_DATA.SPACE) {
        spaceEventHandler(tank.direction, tank.position, bullets);
    } else {
        movementEventHandler(keyCode, tank);
    }

    updateTankPositionOnBattleField(tank.getDrowData());
    drowBattleField();
    tank.drowGunDirection(); // drow tank-gun

    isDrowing = false;
};