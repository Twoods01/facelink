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

const roundGlassesRadius = 15
const roundGlasses = [
    {
        shape: 'circle',
        properties: {
            r: roundGlassesRadius,
            cx: image => `${image.anchors.eyes.left.center.x}`,
            cy: image => `${image.anchors.eyes.left.center.y}`
        }
    },
    {
        shape: 'circle',
        properties: {
            r: roundGlassesRadius,
            cx: image => `${image.anchors.eyes.right.center.x}`,
            cy: image => `${image.anchors.eyes.right.center.y}`
        }
    },
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.eyes.left.center.x - roundGlassesRadius}`,
            y1: image => `${image.anchors.eyes.left.center.y}`,
            x2: image => `${image.anchors.ears.left.right.x}`,
            y2: image => `${image.anchors.ears.left.right.y}`
        }
    }, 
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.eyes.right.center.x + roundGlassesRadius}`,
            y1: image => `${image.anchors.eyes.right.center.y}`,
            x2: image => `${image.anchors.ears.right.right.x}`,
            y2: image => `${image.anchors.ears.right.right.y}`
        }
    }, 
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.eyes.left.center.x + roundGlassesRadius}`,
            y1: image => `${image.anchors.eyes.left.center.y}`,
            x2: image => `${image.anchors.eyes.right.center.x - roundGlassesRadius}`,
            y2: image => `${image.anchors.eyes.right.center.y}`
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
            y1: image => `${image.anchors.eyes.left.center.y - 10}`,
            x2: image => `${image.anchors.eyes.left.center.x}`,
            y2: image => `${image.anchors.eyes.left.center.y + 10}`
        }
    },
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.eyes.right.center.x}`,
            y1: image => `${image.anchors.eyes.right.center.y - 10}`,
            x2: image => `${image.anchors.eyes.right.center.x}`,
            y2: image => `${image.anchors.eyes.right.center.y + 10}`
        }
    }
]

const angryEyes = [
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.eyes.left.center.x - 10}`,
            y1: image => `${image.anchors.eyes.left.center.y - 10}`,
            x2: image => `${image.anchors.eyes.left.center.x + 10}`,
            y2: image => `${image.anchors.eyes.left.center.y + 10}`,
        }
    },
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.eyes.right.center.x + 10}`,
            y1: image => `${image.anchors.eyes.right.center.y - 10}`,
            x2: image => `${image.anchors.eyes.right.center.x - 10}`,
            y2: image => `${image.anchors.eyes.right.center.y + 10}`,
        }
    }
]

const backSlant = [
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.eyes.left.center.x - 10}`,
            y1: image => `${image.anchors.eyes.left.center.y + 10}`,
            x2: image => `${image.anchors.eyes.left.center.x + 10}`,
            y2: image => `${image.anchors.eyes.left.center.y - 10}`,
        }
    },
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.eyes.right.center.x + 10}`,
            y1: image => `${image.anchors.eyes.right.center.y + 10}`,
            x2: image => `${image.anchors.eyes.right.center.x - 10}`,
            y2: image => `${image.anchors.eyes.right.center.y - 10}`,
        }
    }
]

const ovals = [
    {
        shape: 'ellipse',
        properties: {
            cx: image => `${image.anchors.eyes.left.center.x}`,
            cy: image => `${image.anchors.eyes.left.center.y}`,
            rx: "10",
            ry: "5"
        }
    },
    {
        shape: 'ellipse',
        properties: {
            cx: image => `${image.anchors.eyes.right.center.x}`,
            cy: image => `${image.anchors.eyes.right.center.y}`,
            rx: "10",
            ry: "5"
        }
    }
]

const openAndClosed = [
    twoCircles[0],
    twoDots[1]
]

const twoTriangles = [
    {
        shape: 'polygon',
        properties: {
            points: image => {
                let botLeft = `${image.anchors.eyes.left.center.x - 5},${image.anchors.eyes.left.center.y + 5}`;
                let top = `${image.anchors.eyes.left.center.x},${image.anchors.eyes.left.center.y - 5}`;
                let botRight = `${image.anchors.eyes.left.center.x + 5},${image.anchors.eyes.left.center.y + 5}`;

                return `${botLeft} ${top} ${botRight}`;
            }
        }
    },
    {
        shape: 'polygon',
        properties: {
            points: image => {
                let botLeft = `${image.anchors.eyes.right.center.x - 5},${image.anchors.eyes.right.center.y + 5}`;
                let top = `${image.anchors.eyes.right.center.x},${image.anchors.eyes.right.center.y - 5}`;
                let botRight = `${image.anchors.eyes.right.center.x + 5},${image.anchors.eyes.right.center.y + 5}`;

                return `${botLeft} ${top} ${botRight}`;
            }
        }
    }
]

const asterisks = [
    ...angryEyes,
    ...backSlant
]

const circledVerticalLines = [
    ...twoCircles,
    ...verticalLines
]

const circledAsterisks = [
    ...asterisks,
    ...twoCircles
]

const circledHorizontalLines = [
    ...twoCircles,
    ...horizontalLines
]

const circledDots = [
    ...twoCircles,
    ...horizontalLines
]

const eyes = [
    twoCircles,
    roundGlasses,
    twoDots,
    horizontalLines,
    verticalLines,
    angryEyes,
    backSlant,
    ovals,
    openAndClosed,
    twoTriangles,
    asterisks,
    circledVerticalLines,
    circledAsterisks,
    circledHorizontalLines,
    circledDots
]

export default eyes;