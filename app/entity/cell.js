import { COLOURS } from '../constants/colours';

export default class Cell {
    constructor(position, fillStyle) {
        this.position = position;
        this.fillStyle = fillStyle;
    }

    isEmpty() {
        return this.fillStyle === COLOURS.EMPTY; 
    }

    getPosition() {
        return this.position;
    }

    getFillSyle() {
        this.fillStyle;
    }

    setFillStyle(fillStyle) {
        this.fillStyle = fillStyle;
    }
}