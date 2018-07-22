import KEYBOADS_DATA from './constants/eventsConstant';
import { getNextMoveDirection, isNextPositionFree, clearPreviousTankPosition } from './movmentsCalculation';

let handleredKeyboardsKeys = Object.entries(KEYBOADS_DATA).map(([key, keyCode]) => keyCode);

let isDrowing = false; // disallow to drow until new position is not drown
let onKeyPressHandler = (tank, ctx, drowBatleField) => ({ keyCode }) => {
    let isKeyboardKeyNotSupported = handleredKeyboardsKeys.every(key => +key !== keyCode); 
    
    if (isKeyboardKeyNotSupported || isDrowing) return;
    isDrowing = true;

    let position = tank.position;
	let nextTankPosition = getNextMoveDirection(keyCode, position);

	if (position !== nextTankPosition && isNextPositionFree(keyCode, nextTankPosition)) {
        clearPreviousTankPosition(tank.getDrowData().position);
        tank.position = nextTankPosition;    
    }

    drowBatleField(tank.getDrowData());
    tank.drowGunDirection(keyCode); // drow tank-gun

    isDrowing = false;
};

export default onKeyPressHandler;