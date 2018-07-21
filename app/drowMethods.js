import { COLOURS } from './constants/colours';
import { getGunPosition } from './movmentsCalculation';

let CELL_SCALE = 1;

export let drowCellContent = (ctx, cellSize) => ({ position: { x, y }, fillStyle }, entityScale = CELL_SCALE) => {
    let entitySize = cellSize * entityScale;
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x * cellSize, y * cellSize, entitySize, entitySize);
};


export let drowGun = (ctx, cellSize) => (position, direction) => {
    ctx.fillStyle = COLOURS.GUN;
    let {xPosition, yPosition, width, height } = getGunPosition[direction](position, cellSize);
    ctx.fillRect(xPosition, yPosition, width, height);
};