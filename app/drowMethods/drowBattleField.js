import { battleField } from '../entity/battleField';

export let drowBattleField = (drowCell) => battleField.forEach((row) => row.forEach((elem) => drowCell(elem)));