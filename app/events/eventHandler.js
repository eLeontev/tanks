import KEYBOADS_DATA from '../constants/eventsConstant';
import { isNextPositionFree } from '../calculations/isNextPositionFree';
import { getNextTankPosition } from '../calculations/getNextTankPosition';
import { clearPreviousTankPosition } from '../drowMethods/clearPreviousTankPosition';

let handledKeyboardsKeys = Object.entries(KEYBOADS_DATA).map(([key, keyCode]) => keyCode);

let isDrowing = false; // disallow to drow until new position is not drown
export let onKeyDownHandler = (tank, ctx, updateAndDrowBattleField) => ({ keyCode }) => {
    let isKeyboardKeyNotSupported = handledKeyboardsKeys.every(key => +key !== keyCode);
    
    if (isKeyboardKeyNotSupported || isDrowing) return;
    isDrowing = true;

    let position = tank.position;
	let nextTankPosition = getNextTankPosition(keyCode, position);

	if (position !== nextTankPosition && isNextPositionFree(keyCode, nextTankPosition)) {
        clearPreviousTankPosition(tank.getDrowData().position);
        tank.position = nextTankPosition;    
    }

    updateAndDrowBattleField(tank.getDrowData());
    tank.drowGunDirection(keyCode); // drow tank-gun

    isDrowing = false;
};