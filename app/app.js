import { CELLS_COUNT } from './config';
import { fillBattleFiled } from './initBattleField';
import drowCellContent from './drowMethods';
import onKeyPressHandler from './eventHandler';
import Tank from './tank';

let playField = document.getElementById('playfield_canvas');
let ctx = playField.getContext('2d');

let cellSize = playField.getAttribute('width') / CELLS_COUNT;
let drowCell = drowCellContent(ctx, cellSize);

let tank = new Tank();

fillBattleFiled(drowCell);

tank.addDrowFunction(drowCell);
tank.drow();

document.addEventListener('keydown', onKeyPressHandler(tank, ctx, () => fillBattleFiled(drowCell)));
