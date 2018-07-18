import COLOURS from './constants/colours';
import { randomInteger } from './util';

let drowCellContent = (ctx, cellSize) => (presetSize, { position: { x, y }, fillStyle }) => {
    let size = presetSize || cellSize;
    ctx.fillStyle = fillStyle || COLOURS[randomInteger()];
    ctx.fillRect(x * cellSize, y * cellSize, size, size);
};

export default drowCellContent;