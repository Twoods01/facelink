const smile = {
    shape: 'path',
    properties: {
        d: image => {
            const startPoint = `${image.anchors.mouth.left.x} ${image.anchors.mouth.left.y - 15}`
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
            const startPoint = `${image.anchors.mouth.left.x} ${image.anchors.mouth.left.y + 15}`
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

const tongueOut = [
    flat,
    {
        shape: 'path',
        properties: {
            d: image => {
                const startPoint = `${image.anchors.mouth.right.x} ${image.anchors.mouth.right.y}`
                const mouthLength = image.anchors.mouth.right.x - image.anchors.mouth.left.x;
                const totalYOffset = 50;
                const relativeMidInflection = `0 ${totalYOffset}`;
                const relativeEndPoint = `-${mouthLength / 3} 0`;
                return `M ${startPoint} q ${relativeMidInflection} ${relativeEndPoint}`
            }
        }
    }
]

const triangle = {
    shape: 'polygon',
    properties: {
        points: image => {
            const topLeft = `${image.anchors.mouth.left.x},${image.anchors.mouth.left.y - 5}`;
            const topRight = `${image.anchors.mouth.right.x},${image.anchors.mouth.right.y - 5}`;
            const mouthLength = image.anchors.mouth.right.x - image.anchors.mouth.left.x;
            const bottom = `${image.anchors.mouth.left.x + (mouthLength / 2)},${image.anchors.mouth.left.y + 10}`;

            return `${topLeft} ${bottom} ${topRight}`;
        }
    }
}

const smallCircle = {
    shape: 'circle',
    properties: {
        r: 10,
        cx: image => `${image.anchors.mouth.center.x}`,
        cy: image => `${image.anchors.mouth.center.y}`
    }
}

const D = [
    flat,
    {
        shape: 'path',
        properties: {
            d: image => {
                const startPoint = `${image.anchors.mouth.right.x} ${image.anchors.mouth.right.y}`
                const mouthLength = image.anchors.mouth.right.x - image.anchors.mouth.left.x;
                const totalYOffset = 50;
                const relativeMidInflection = `-${mouthLength / 2} ${totalYOffset}`;
                const relativeEndPoint = `-${mouthLength} 0`;
                return `M ${startPoint} q ${relativeMidInflection} ${relativeEndPoint}`
            }
        }
    }
]

const mouths = [
    smile,
    frown,
    open,
    flat,
    tongueOut,
    triangle,
    smallCircle,
    D
]

export default mouths;