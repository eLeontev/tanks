import { TANK_SCALE, PLAYER_START_POSITION } from './config';
import { COLOURS } from './constants/colours';

class Tank {
    constructor() {
        this.position = PLAYER_START_POSITION;
        this.fillStyle = COLOURS.TANK;
		this.tankScale = TANK_SCALE;
	}

	addDrowFunction(drowGun) {
        this.drowGun = drowGun;
    }

    drowGunDirection(direction) {
        this.drowGun(this.getDrowData().position, direction);
    }

	getDrowData() {
        return (({ position, fillStyle }) => ({ position, fillStyle }))(this);
    }
}

export default Tank;