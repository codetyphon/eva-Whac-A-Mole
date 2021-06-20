import { GameObject, Transform } from "@eva/eva.js";
import { Component } from "@eva/eva.js";
import { GAME_SIZE } from '../CONST';
enum State {
    up,
    down
}
export default class Action extends Component {
    gameObject: GameObject;
    static componentName = "Action";
    game: any
    state: State
    constructor() {
        super();
        this.state = State.up
    }

    up() {
        this.state = State.up
    }
    down() {
        this.state = State.down
    }

    update() {
        const { y } = this.gameObject.getComponent(Transform).position

        if (this.state == State.up) {
            this.gameObject.getComponent(Transform).position.y -= 5
        }
        if (this.state == State.down) {
            this.gameObject.getComponent(Transform).position.y += 5
        }
        if (y >= GAME_SIZE.HEIGHT - 275) {
            this.up()
        }
        if (y <= GAME_SIZE.HEIGHT / 2) {
            this.down()
        }
    }
}