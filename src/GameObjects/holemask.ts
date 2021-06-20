import { Scene } from '@eva/eva.js';
import { GameObject } from '@eva/eva.js';
import { Physics, PhysicsType } from '@eva/plugin-matterjs';
import { Img } from '@eva/plugin-renderer-img';
import { GAME_SIZE } from '../CONST';
import { Text } from '@eva/plugin-renderer-text'


const HoleMask = () => {
    const holeMask = new GameObject("holeMask", {
        size: {
            width: 424 * 2,
            height: 152 * 2
        },
        origin: { x: 0.5, y: 0.5 },
        position: {
            x: GAME_SIZE.WIDTH / 2,
            y: GAME_SIZE.HEIGHT / 2 + 152 / 2
        },
        scale: {
            x: 0.5,
            y: 0.5
        },
        anchor: {
            x: 0,
            y: 0
        }
    });

    holeMask.addComponent(
        new Img({
            resource: "holeMask"
        })
    );

    return holeMask;
}
export default HoleMask