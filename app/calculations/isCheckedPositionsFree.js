import { battleField } from '../entity/battleField';

export let isCheckedPositionsFree = ({ x, y }, checkedPositions) => checkedPositions.every(e =>
    e.every(({offsetX, offsetY}) => battleField[x + offsetX][y + offsetY].isEmpty())
);