import { TANK_SCALE, PLAYER_START_POSITION } from './config';
import { COLOURS } from './constants/colours';

class Tank {
    constructor() {
        this.position = PLAYER_START_POSITION;
        this.fillStyle = COLOURS.TANK;
		this.tankScale = TANK_SCALE;
	}

	addDrowFunction(drowCell, drowGun) {
        this.drowCell = drowCell;
        this.drowGun = drowGun;
    }

    drow(direction) {
        let drowData = this.getDrowData();
        this.drowCell(drowData, this.tankScale);
        this.drowGun(drowData.position, direction);
    }

	getDrowData() {
        return (({ position, fillStyle }) => ({ position, fillStyle }))(this);
    }
}

export default Tank;