import Bullet from '../entity/bullet';
import { updateBattleField } from '../calculations/updateBattleField';
import { isNextPositionFree } from '../calculations/isNextPositionFree';
import { getNextTankPosition } from '../calculations/getNextTankPosition';
// TODO update to uniq ID
let id = 0;
let bullets = {};

export let spaceEventHandler = (keyCode, position) => {
    bullets[id] = new Bullet(position, keyCode, id);

    let destroyedBullets = [];
    Object.entries(bullets).forEach(([i, bullet]) => {
        let {  position, direction } = bullet.getDrowData();
        let nextPosition = getNextTankPosition(direction, position);
             
        if (isNextPositionFree(direction, nextPosition)) {
           return bullet.updatePosition(position);
        } 

        updateBattleField(direction, nextPosition);
        destroyedBullets.push(bullet.id); 
    });
    
    destroyedBullets.forEach(id => delete bullets[id]);
    id += 1;
}

// let drowBullets = (bullets, drowBullet) => drowBullet(bullets);

// requestAnimationFrame(drowBullets);