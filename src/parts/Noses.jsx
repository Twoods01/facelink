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

const noses = [
    dot,
    triangle,
    oval
]

export default noses;