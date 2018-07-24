import Bullet from '../entity/bullet';
import { updateBattleField } from '../calculations/updateBattleField';
import { isNextBulletPositionFree } from '../calculations/isNextBulletPositionFree';
import { getBulletPosition } from '../calculations/getBulletPosition';
import { getNextBulletPosition } from '../calculations/getNextBulletPosition';
import { setBulletPositionOnBattleField, clearCurrentBulletPositionOnBattleField } from '../calculations/setBulletPositionOnBattleField';
// TODO update to uniq ID
let id = 0;
let isClearBulletPosition = true;

let startAnimation = true;

export let spaceEventHandler = (keyCode, tankPosition, bullets) => {
    bullets[id] = new Bullet(getBulletPosition(keyCode, tankPosition), keyCode, id);

    let destroyedBullets = [];

    if (startAnimation) {
        setInterval(() => {
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
        }, 100);

        startAnimation = false;
    }

    id += 1;
};