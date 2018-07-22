import { TANK_SCALE } from '../config';

export let tankPosition = new Array(TANK_SCALE).fill()
	.map((e, x) => new Array(TANK_SCALE).fill()
		.map((e, y) => ({ offsetX: x, offsetY: y })));
