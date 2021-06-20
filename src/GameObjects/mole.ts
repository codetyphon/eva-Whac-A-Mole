import { Scene } from '@eva/eva.js';
import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img';
import { GAME_SIZE } from '../CONST';
import { Text } from '@eva/plugin-renderer-text'
import {
    Event,
} from '@eva/plugin-renderer-event';
import Action from '../Components/Action';

const Mole = () => {
    const mole = new GameObject("mole", {
        size: {
            width: 300 * 2,
            height: 275 * 2
        },
        origin: { x: 0.5, y: 0.5 },
        position: {
            x: GAME_SIZE.WIDTH / 2,
            y: GAME_SIZE.HEIGHT / 2 + 275
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

    mole.addComponent(
        new Img({
            resource: "mole"
        })
    );

    mole.addComponent(new Action())

    const evt = mole.addComponent(new Event())
    evt.on('tap', e => {
        try {
            const scene: Scene = mole.scene
            const score = scene.gameObjects.find((item) => { return item.name == "score" })
            if (score) {
                const text = score.getComponent(Text)
                const number: number = parseInt(text.text)
                text.text = (number + 1) + ""
            }
            mole.getComponent(Action).down()
        } catch (error) {

        }
    })

    return mole;
}
export default Mole