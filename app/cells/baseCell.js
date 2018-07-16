import {EMPTY_CELL} from '../constants/cellConstant.json';

class BaseCell {
    constructor(coord) {
        this.type = EMPTY_CELL; 
        this.coord = coord;
    }

    setEmptyType() {
        this.type = EMPTY_CELL;
    }

    getType() {
        return this.type;
    }

    isBusy() {
        return !!this.tank;
    }

    setTank(tank) {
        this.tank = tank;
    }

    getTank() {
        return this.tank;
    }

    moveTank() {
        this.tank = null;
    }
}

export default BaseCell;