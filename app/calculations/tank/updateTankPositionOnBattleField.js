import { COLOURS } from '../../constants/colours';
import { battleField } from '../../entity/battleField';
import { tankPosition } from '../../constants/tankPosition';

let EMPTY = COLOURS.EMPTY;

let redrowTankPositionOnBattleField = ({ x, y }, fillStyle) => {
    tankPosition.forEach(e => e.forEach(({offsetX, offsetY}) => (
        battleField[x + offsetX][y + offsetY].setFillStyle(fillStyle)))
    );
};

export let updateTankPositionOnBattleField = ({ position, fillStyle }) => (
    redrowTankPositionOnBattleField(position, fillStyle)
);

export let clearPreviousTankPositionOnBattleField = (position) => (
    redrowTankPositionOnBattleField(position, EMPTY)
);