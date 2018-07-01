const smile = {
    shape: 'path',
    properties: {
        d: (image) => {
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
        d: (image) => {
            const startPoint = `${image.anchors.mouth.left.x} ${image.anchors.mouth.left.y}`
            const mouthLength = image.anchors.mouth.right.x - image.anchors.mouth.left.x;
            const totalYOffset = -50;
            const relativeMidInflection = `${mouthLength / 2} ${totalYOffset}`;
            const relativeEndPoint = `${mouthLength} 0`;
            return `M ${startPoint} q ${relativeMidInflection} ${relativeEndPoint}`
        }
    }
};

const mouths = [
    smile,
    frown
]

export default mouths;