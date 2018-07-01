const twoCircles = [
    {
        shape: 'circle',
        properties: {
            r: 10,
            cx: image => `${image.anchors.eyes.left.center.x}`,
            cy: image => `${image.anchors.eyes.left.center.y}`
        }
    },
    {
        shape: 'circle',
        properties: {
            r: 10,
            cx: image => `${image.anchors.eyes.right.center.x}`,
            cy: image => `${image.anchors.eyes.right.center.y}`
        }
    }
];

const twoDots = [
    {
        shape: 'circle',
        properties: {
            r: 2,
            cx: image => `${image.anchors.eyes.left.center.x}`,
            cy: image => `${image.anchors.eyes.left.center.y}`
        }
    },
    {
        shape: 'circle',
        properties: {
            r: 2,
            cx: image => `${image.anchors.eyes.right.center.x}`,
            cy: image => `${image.anchors.eyes.right.center.y}`
        }
    }
];

const eyes = [
    twoCircles,
    twoDots
]

export default eyes;