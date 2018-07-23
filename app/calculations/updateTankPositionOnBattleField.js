import { battleField } from '../entity/battleField';
import { tankPosition } from '../constants/tankPosition';

export let updateTankPositionOnBattleField = (tankDrowData) => {
    let { position: { x, y }, fillStyle } = tankDrowData;

    tankPosition.forEach(e => e.forEach(({ offsetX, offsetY }) => {
        battleField[x + offsetX][y + offsetY].setFillStyle(fillStyle);
    }));
};