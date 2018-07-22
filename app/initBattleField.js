import level1Map from './constants/levels/level1';
import { VALUES, COLOURS }  from './constants/colours';
import Cell from './cell';
import { tankPosition } from './constants/tankPosition';

export let battleField = level1Map.map((e, x) => 
    e.map((type, y) => new Cell({ x, y }, COLOURS[VALUES[type]]))
);

export let fillBattleFiled = (drowCell, tankDrowData) => {
    let { position: { x, y }, fillStyle } = tankDrowData;

    tankPosition.forEach(e => e.forEach(({ offsetX, offsetY }) => {
        battleField[x + offsetX][y + offsetY].setFillStyle(fillStyle);
    }));

    battleField.forEach((row) => row.forEach((elem) => drowCell(elem)));
}
