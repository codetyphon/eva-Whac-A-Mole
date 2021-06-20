import { RESOURCE_TYPE } from "@eva/eva.js"

const Res = [
    {
        name: "background",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/background.png",
            },
        },
        preload: true,
    },
    {
        name: "mole",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/mole.png",
            },
        },
        preload: true,
    },
    {
        name: "holeMask",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/holeMask.png",
            },
        },
        preload: true,
    },
    {
        name: "hole",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/hole.png",
            },
        },
        preload: true,
    },
    {
        name: "bgSound",
        type: RESOURCE_TYPE.AUDIO,
        src: {
            audio: {
                type: "audio",
                url: "assets/Monkeys Spinning Monkeys.mp3",
            },
        },
        preload: true,
    },
    {
        name: "attackSound",
        type: RESOURCE_TYPE.AUDIO,
        src: {
            audio: {
                type: "audio",
                url: "assets/attack.mp3",
            },
        },
        preload: true,
    }
]
export default Res