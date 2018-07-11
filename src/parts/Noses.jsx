const dot = {
    shape: 'circle',
    properties: {
        r: 2,
        cx: image => `${image.anchors.nose.center.x}`,
        cy: image => `${image.anchors.nose.center.y}`,
    }
}

const triangle = {
    shape: 'polygon',
    properties: {
        points: image => {
            let botLeft = `${image.anchors.nose.center.x - 5},${image.anchors.nose.center.y - 5}`;
            let top = `${image.anchors.nose.center.x},${image.anchors.nose.center.y + 5}`;
            let botRight = `${image.anchors.nose.center.x + 5},${image.anchors.nose.center.y - 5}`;

            return `${botLeft} ${top} ${botRight}`;
        }
    }
}

const oval = {
    shape: 'ellipse',
    properties: {
        cx: image => `${image.anchors.nose.center.x}`,
        cy: image => `${image.anchors.nose.center.y}`,
        rx: 15,
        ry: 5
    }
}

const halfTriangle = [
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.nose.center.x}`,
            y1: image => `${image.anchors.nose.center.y - 40}`,
            x2: image => `${image.anchors.nose.center.x + 19}`,
            y2: image => `${image.anchors.nose.center.y + 1}`,
        }
    },
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.nose.center.x + 20}`,
            y1: image => `${image.anchors.nose.center.y}`,
            x2: image => `${image.anchors.nose.center.x}`,
            y2: image => `${image.anchors.nose.center.y}`,
        }
    }
]

const twoDots = [
    {
        shape: 'circle',
        properties: {
            r: 1,
            cx: image => `${image.anchors.nose.center.x - 10}`,
            cy: image => `${image.anchors.nose.center.y}`
        }
    },
    {
        shape: 'circle',
        properties: {
            r: 1,
            cx: image => `${image.anchors.nose.center.x + 10}`,
            cy: image => `${image.anchors.nose.center.y}`
        }
    }
]

const pig = twoDots.concat([{
    shape: 'ellipse',
    properties: {
        cx: image => `${image.anchors.nose.center.x}`,
        cy: image => `${image.anchors.nose.center.y}`,
        rx: 20,
        ry: 15
    }
}]);

const noses = [
    dot,
    triangle,
    oval,
    halfTriangle,
    twoDots,
    pig
]

export default noses;