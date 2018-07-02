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

const horizontalLines = [
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.eyes.left.center.x - 10}`,
            y1: image => `${image.anchors.eyes.left.center.y}`,
            x2: image => `${image.anchors.eyes.left.center.x + 10}`,
            y2: image => `${image.anchors.eyes.left.center.y}`
        }
    }, 
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.eyes.right.center.x - 10}`,
            y1: image => `${image.anchors.eyes.right.center.y}`,
            x2: image => `${image.anchors.eyes.right.center.x + 10}`,
            y2: image => `${image.anchors.eyes.right.center.y}`
        }
    }
]

const verticalLines = [
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.eyes.left.center.x}`,
            y1: image => `${image.anchors.eyes.left.center.y-10}`,
            x2: image => `${image.anchors.eyes.left.center.x}`,
            y2: image => `${image.anchors.eyes.left.center.y+10}`
        }
    },
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.eyes.right.center.x}`,
            y1: image => `${image.anchors.eyes.right.center.y-10}`,
            x2: image => `${image.anchors.eyes.right.center.x}`,
            y2: image => `${image.anchors.eyes.right.center.y+10}`
        }
    }
]

const eyes = [
    twoCircles,
    twoDots,
    horizontalLines,
    verticalLines
]

export default eyes;