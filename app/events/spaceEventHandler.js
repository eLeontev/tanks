import Bullet from '../entity/bullet';
import { updateBattleField } from '../calculations/updateBattleField';
import { isNextBulletPositionFree } from '../calculations/bullet/isNextBulletPositionFree';
import { getStartBulletPosition } from '../calculations/bullet/getStartBulletPosition';
import { getNextBulletPosition } from '../calculations/bullet/getNextBulletPosition';
import { setBulletPositionOnBattleField, clearCurrentBulletPositionOnBattleField } from '../calculations/bullet/setBulletPositionOnBattleField';

// TODO update to uniq ID
let id = 0;
let isClearBulletPosition = true;

export let spaceEventHandler = (keyCode, tankPosition, bullets) => {
    bullets[id] = new Bullet(getStartBulletPosition(keyCode, tankPosition), keyCode, id);

    let destroyedBullets = [];

    Object.entries(bullets).forEach(([i, bullet]) => {
        let { position, direction } = bullet.getDrowData();
        let nextPosition = getNextBulletPosition(direction, position);

        setBulletPositionOnBattleField(direction, position, isClearBulletPosition);

        if (position !== nextPosition) { // if nextPosition available
            if (isNextBulletPositionFree(direction, nextPosition)) {
                setBulletPositionOnBattleField(direction, nextPosition);
                return bullet.updatePosition(nextPosition);
            }

            updateBattleField(direction, nextPosition);
        }

        // destroy all bullets if they can not move further of if they faced any barrier
        destroyedBullets.push(bullet.id);
    });

    destroyedBullets.forEach(id => delete bullets[id]);
    id += 1;
};