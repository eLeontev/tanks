import { TANK_SCALE } from './config';

class Tank {
    constructor() {
        this.position = { x: 0, y: 0 };
        this.fillStyle = '#DBA42D';
		this.tankScale = TANK_SCALE;
	}

	addDrowFunction(drowCell) {
        this.drowCell = drowCell;
    }

    drow() {
        this.drowCell(this.getDrowData(), this.tankScale);
    }

	getDrowData() {
        return (({ position, fillStyle }) => ({ position, fillStyle }))(this);
    }
}

export default Tank;