import { GameObject } from "@eva/eva.js";
import { Graphics } from "@eva/plugin-renderer-graphics";
import { GAME_SIZE } from '../CONST';
const Mask = () => {
    const mask = new GameObject("background", {
        size: { width: GAME_SIZE.WIDTH, height: GAME_SIZE.HEIGHT },
    });

    const bg = mask.addComponent(
        new Graphics()
    );

    bg.graphics.beginFill(0xc9bf9c, 1)
    bg.graphics.drawRoundedRect(0, GAME_SIZE.HEIGHT / 2 + 152, GAME_SIZE.WIDTH, GAME_SIZE.HEIGHT, 12)
    bg.graphics.endFill()

    return mask
}


export default Mask