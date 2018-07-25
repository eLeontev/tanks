import { COLOURS } from '../constants/colours';
import { getGunPosition } from '../calculations/gun/getGunPosition';

export let drowGun = (ctx, cellSize) => (position, direction) => {
    ctx.fillStyle = COLOURS.GUN;
    let {xPosition, yPosition, width, height } = getGunPosition(direction, position, cellSize);
    ctx.fillRect(xPosition, yPosition, width, height);
};