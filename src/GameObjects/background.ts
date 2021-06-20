import { GameObject } from "@eva/eva.js";
import { Graphics } from "@eva/plugin-renderer-graphics";
import { GAME_SIZE } from '../CONST';
const BackGround = () => {
    const backGround = new GameObject("background", {
        size: { width: GAME_SIZE.WIDTH, height: GAME_SIZE.HEIGHT },
    });

    const bg = backGround.addComponent(
        new Graphics()
    );

    bg.graphics.beginFill(0xc9bf9c, 1)
    bg.graphics.drawRoundedRect(0, 0, GAME_SIZE.WIDTH, GAME_SIZE.HEIGHT, 12)
    bg.graphics.endFill()

    return backGround
}


export default BackGround