let CELL_SCALE = 1;

export let drowCellContent = (ctx, cellSize) => ({ position: { x, y }, fillStyle }, entityScale = CELL_SCALE) => {
    let entitySize = cellSize * entityScale;
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x * cellSize, y * cellSize, entitySize, entitySize);
};