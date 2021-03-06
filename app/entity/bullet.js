import { COLOURS } from '../constants/colours';

export default class Bullet {
    constructor(position, direction, id) {
        this.id = id;
        this.position = position;
        this.direction = direction;
        this.fillStyle = COLOURS.BULLET;
    }

    updatePosition(position) {
        this.position = position;
    }

    getDrowData() {
        return (({ position, direction }) => ({ position, direction }))(this);
    }
}