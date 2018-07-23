import level1Map from '../constants/levels/level1';
import {COLOURS, VALUES} from '../constants/colours';
import Cell from './cell';

export let battleField = level1Map.map((e, x) =>
    e.map((type, y) => new Cell( { x, y }, COLOURS[VALUES[type]]))
);