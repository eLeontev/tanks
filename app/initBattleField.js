import level1Map from './constants/levels/level1';
import { VALUES, COLOURS }  from './constants/colours';

export let battleField = level1Map.map((e, x) => 
    e.map((type, y) => ({
        position: { x, y },
        fillStyle: COLOURS[VALUES[type]]
    })));

export let fillBattleFiled = (drowCell) =>
    battleField.forEach((row) => 
        row.forEach((elem) => drowCell(elem)));
