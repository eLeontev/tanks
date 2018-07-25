import {getNextTankPosition} from '../calculations/tank/getNextTankPosition';
import {isNextTankPositionFree} from '../calculations/tank/isNextTankPositionFree';
import { clearPreviousTankPositionOnBattleField, updateTankPositionOnBattleField } from '../calculations/tank/updateTankPositionOnBattleField';

export let movementEventHandler = (keyCode, tank) => {
    let { position } = tank.getDrowData();
    let nextTankPosition = getNextTankPosition(keyCode, position);

    if (position !== nextTankPosition && isNextTankPositionFree(keyCode, nextTankPosition)) {
        clearPreviousTankPositionOnBattleField(position);
        tank.position = nextTankPosition;
    }

    updateTankPositionOnBattleField(tank.getDrowData());
    tank.direction = keyCode;
};