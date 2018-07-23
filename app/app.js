import { CELLS_COUNT } from './config';
import { ARROW_UP } from './constants/eventsConstant';

import Tank from './entity/tank';
import { drowGun } from './drowMethods/drowGun';
import { onMoveKeyDownHandler } from './events/eventHandler';
import { drowCellContent } from './drowMethods/drowCellContent';
import { drowBattleField } from './drowMethods/drowBattleField';
import { updateTankPositionOnBattleField } from './calculations/updateTankPositionOnBattleField';

let playField = document.getElementById('playfield_canvas');
let ctx = playField.getContext('2d');

let cellSize = playField.getAttribute('width') / CELLS_COUNT;
let drowCell = drowCellContent(ctx, cellSize);

let tank = new Tank(ARROW_UP);
tank.addDrowFunction(drowGun(ctx, cellSize));

let updateAndDrowBattleField = (drowData) => {
    updateTankPositionOnBattleField(drowData);
    drowBattleField(drowCell);
};

updateAndDrowBattleField(tank.getDrowData());
tank.drowGunDirection(tank.direction);

document.addEventListener('keydown', onMoveKeyDownHandler(tank, ctx, updateAndDrowBattleField));
