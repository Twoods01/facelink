const smile = {
    shape: 'path',
    properties: {
        d: image => {
            const startPoint = `${image.anchors.mouth.left.x} ${image.anchors.mouth.left.y}`
            const mouthLength = image.anchors.mouth.right.x - image.anchors.mouth.left.x;
            const totalYOffset = 50;
            const relativeMidInflection = `${mouthLength / 2} ${totalYOffset}`;
            const relativeEndPoint = `${mouthLength} 0`;
            return `M ${startPoint} q ${relativeMidInflection} ${relativeEndPoint}`
        }
    }
};

const frown = {
    shape: 'path',
    properties: {
        d: image => {
            const startPoint = `${image.anchors.mouth.left.x} ${image.anchors.mouth.left.y}`
            const mouthLength = image.anchors.mouth.right.x - image.anchors.mouth.left.x;
            const totalYOffset = -50;
            const relativeMidInflection = `${mouthLength / 2} ${totalYOffset}`;
            const relativeEndPoint = `${mouthLength} 0`;
            return `M ${startPoint} q ${relativeMidInflection} ${relativeEndPoint}`
        }
    }
};

const open = {
    shape: 'ellipse',
    properties: {
        cx: image => `${image.anchors.mouth.center.x}`,
        cy: image => `${image.anchors.mouth.center.y}`,
        rx: image => {
            const mouthLength = image.anchors.mouth.right.x - image.anchors.mouth.left.x;
            return `${mouthLength / 2}`
        },
        ry: "25"
    }
}

const flat = {
    shape: 'line',
    properties: {
        x1: image => `${image.anchors.mouth.left.x}`,
        y1: image => `${image.anchors.mouth.left.y}`,
        x2: image => `${image.anchors.mouth.right.x}`,
        y2: image => `${image.anchors.mouth.right.y}`
    }
}

const mouths = [
    smile,
    frown,
    open,
    flat
]

export default mouths;