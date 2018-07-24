import { TANK_SCALE, PLAYER_START_POSITION } from '../config';
import { COLOURS } from '../constants/colours';

class Tank {
    constructor(direction) {
        this.position = PLAYER_START_POSITION;
        this.fillStyle = COLOURS.TANK;
        this.tankScale = TANK_SCALE;
        this.direction = direction;
	}

	addDrowFunction(drowGun) {
        this.drowGun = drowGun;
    }

    drowGunDirection() {
        this.drowGun(this.getDrowData().position, this.direction);
    }

	getDrowData() {
        return (({ position, fillStyle }) => ({ position, fillStyle }))(this);
    }
}

export default Tank;