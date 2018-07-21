import { CELLS_COUNT } from './config';
import { ARROW_UP } from './constants/eventsConstant';
import { COLOURS } from './constants/colours';

import { fillBattleFiled } from './initBattleField';
import { drowCellContent, drowGun } from './drowMethods';
import onKeyPressHandler from './eventHandler';
import Tank from './tank';

let playField = document.getElementById('playfield_canvas');
let ctx = playField.getContext('2d');

let cellSize = playField.getAttribute('width') / CELLS_COUNT;
let drowCell = drowCellContent(ctx, cellSize);

let tank = new Tank();

fillBattleFiled(drowCell);

tank.addDrowFunction(drowCell, drowGun(ctx, cellSize));
tank.drow(ARROW_UP);

document.addEventListener('keydown', onKeyPressHandler(tank, ctx, () => fillBattleFiled(drowCell)));
