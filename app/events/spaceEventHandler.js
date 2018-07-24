import Bullet from '../entity/bullet';
import { updateBattleField } from '../calculations/updateBattleField';
import { isNextPositionFree } from '../calculations/isNextPositionFree';
import { getBulletPosition } from '../calculations/getBulletPosition';
import { getNextTankPosition } from '../calculations/getNextTankPosition';
import { setBulletPositionOnBattleField, clearCurrentBulletPositionOnBattleField } from '../calculations/setBulletPositionOnBattleField';
// TODO update to uniq ID
let id = 0;
let isClearBulletPosition = true;

export let spaceEventHandler = (keyCode, tankPosition, bullets) => {
    bullets[id] = new Bullet(getBulletPosition(keyCode, tankPosition), keyCode, id);

    let destroyedBullets = [];
    Object.entries(bullets).forEach(([i, bullet]) => {
        let { position, direction } = bullet.getDrowData();
        // TODO: works only first iteration
        let nextPosition = getNextTankPosition(direction, position);

        setBulletPositionOnBattleField(direction, position, isClearBulletPosition);

        if (isNextPositionFree(direction, nextPosition)) {
            let isNotEdgeOfBattleField = position !== nextPosition;

            if (isNotEdgeOfBattleField) {
                setBulletPositionOnBattleField(direction, nextPosition);
            } else {
                destroyedBullets.push(bullet.id); // remove bullet if its on edge of the battle field
            }

            return bullet.updatePosition(nextPosition);
        } 

        updateBattleField(direction, nextPosition);
        destroyedBullets.push(bullet.id);
    });
    
    destroyedBullets.forEach(id => delete bullets[id]);
    id += 1;
};