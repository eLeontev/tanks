import COLOURS from './constants/colours';

let drowCellContent = (ctx, cellSize) => (presetSize, { position: { x, y }, fillStyle }) => {
    let size = presetSize || cellSize;
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x * cellSize, y * cellSize, size, size);
};

export default drowCellContent;