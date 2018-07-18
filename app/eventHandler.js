import KEYBOADS_DATA from './constants/eventsConstant';
import getNextMoveDirection from './movmentsCalculation';

let handleredKeyboardsKeys = Object.entries(KEYBOADS_DATA).map(([key, keyCode]) => keyCode);

let onKeyPressHandler = (tank, ctx, drowCellContent) => ({ keyCode }) => {
    let isKeyboardKeyNotSupported = handleredKeyboardsKeys.every(key => +key !== keyCode); 
    if (isKeyboardKeyNotSupported) return;

    let position = tank.position;
	let nextTankPosition = getNextMoveDirection(keyCode, position);

    if (position === nextTankPosition) return;

    let cellSize = tank.cellSize;
	ctx.clearRect(position.x, position.y, cellSize, cellSize);
    tank.position = nextTankPosition;

    let drowCell = drowCellContent(ctx, cellSize);
	drowCell(false, { position }); // clolour previous cell
	drowCell(tank.cellSize, tank); // drow new tank position
};

export default onKeyPressHandler;