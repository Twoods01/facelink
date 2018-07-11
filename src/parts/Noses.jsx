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

const none = []

const sidewaysTriangle = {
    shape: 'polyline',
    properties: {
        points: image => {
            const startPoint = `${image.anchors.nose.center.x - 8},${image.anchors.nose.center.y - 10}`;
            const midPoint = `${image.anchors.nose.center.x + 8},${image.anchors.nose.center.y + 5}`;
            const endPoint = `${image.anchors.nose.center.x - 8},${image.anchors.nose.center.y + 10}`;
            return `${startPoint} ${midPoint} ${endPoint}`;
        }
    }
}

const curvedSideways = {
    shape: 'path',
    properties: {
        d: image => {
            const startPoint = `${image.anchors.nose.center.x - 8} ${image.anchors.nose.center.y - 10}`;
            const noseHeight = 15;
            const noseWidth = 16;
            const relativeMidInflection = `${noseWidth * 2} ${noseHeight}`;
            const relativeEndPoint = `0 ${noseHeight}`;

            return `M ${startPoint} q ${relativeMidInflection} ${relativeEndPoint}`
        }
    }
}

const twoDots = [
    {
        shape: 'circle',
        properties: {
            r: 2,
            cx: image => `${image.anchors.nose.center.x - 8}`,
            cy: image => `${image.anchors.nose.center.y}`
        }
    },
    {
        shape: 'circle',
        properties: {
            r: 2,
            cx: image => `${image.anchors.nose.center.x + 8}`,
            cy: image => `${image.anchors.nose.center.y}`
        }
    }
]

const noses = [
    dot,
    triangle,
    oval,
    none,
    sidewaysTriangle,
    curvedSideways,
    twoDots
]

export default noses;