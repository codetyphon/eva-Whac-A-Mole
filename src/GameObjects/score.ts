import { GameObject } from "@eva/eva.js"
import { Text } from '@eva/plugin-renderer-text'
import { GAME_SIZE } from '../CONST';
const Score = () => {
    const text = new GameObject('score', {
        position: {
            x: GAME_SIZE.WIDTH / 2,
            y: GAME_SIZE.HEIGHT / 6
        },
        origin: {
            x: 0.5,
            y: 0.5
        },
        anchor: {
            x: 0.5,
            y: 0.5
        }
    })
    text.addComponent(
        new Text({
            text: 0,
            style: {
                fontFamily: 'Arial',
                fontSize: 80,
                fontWeight: 'bold',
                fill: ['#fff'], // gradient
            }
        })
    )
    return text
}
export default Score