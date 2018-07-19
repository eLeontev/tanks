import KEYBOADS_DATA from './constants/eventsConstant';
import { getNextMoveDirection, isNextPositionFree } from './movmentsCalculation';

let handleredKeyboardsKeys = Object.entries(KEYBOADS_DATA).map(([key, keyCode]) => keyCode);

let isDrowing = false;
let onKeyPressHandler = (tank, ctx, cellSize, drowCellContent, drowBatleField) => ({ keyCode }) => {
    let isKeyboardKeyNotSupported = handleredKeyboardsKeys.every(key => +key !== keyCode); 
    
    if (isKeyboardKeyNotSupported || isDrowing) return;
    isDrowing = true;

    let position = tank.position;
	let nextTankPosition = getNextMoveDirection(keyCode, position);

    if (position !== nextTankPosition && isNextPositionFree(nextTankPosition)) {
        tank.position = nextTankPosition;

        let tankSize = cellSize * 2;
        let drowCell = drowCellContent(ctx, cellSize);

        drowBatleField();
        drowCell(tankSize, tank); // drow new tank position
    }
    
    isDrowing = false;
};

export default onKeyPressHandler;