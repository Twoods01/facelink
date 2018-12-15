const none = []

const cat = [
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.ears.left.right.x}`,
            y1: image => `${image.anchors.ears.left.right.y}`,
            x2: image => `${image.anchors.ears.left.right.x - 20}`,
            y2: image => `${image.anchors.ears.left.right.y - 15}`,
        }
    },
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.ears.left.left.x}`,
            y1: image => `${image.anchors.ears.left.left.y}`,
            x2: image => `${image.anchors.ears.left.right.x - 20}`,
            y2: image => `${image.anchors.ears.left.right.y - 15}`,
        }
    },
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.ears.right.right.x}`,
            y1: image => `${image.anchors.ears.right.right.y}`,
            x2: image => `${image.anchors.ears.right.right.x + 20}`,
            y2: image => `${image.anchors.ears.right.right.y - 15}`,
        }
    },
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.ears.right.left.x}`,
            y1: image => `${image.anchors.ears.right.left.y}`,
            x2: image => `${image.anchors.ears.right.right.x + 20}`,
            y2: image => `${image.anchors.ears.right.right.y - 15}`,
        }
    }
]

const bolts = [
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.ears.left.right.x}`,
            y1: image => `${image.anchors.ears.left.right.y}`,
            x2: image => `${image.anchors.ears.left.right.x - 20}`,
            y2: image => `${image.anchors.ears.left.right.y}`,
        }
    },
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.ears.left.left.x}`,
            y1: image => `${image.anchors.ears.left.left.y}`,
            x2: image => `${image.anchors.ears.left.left.x - 20}`,
            y2: image => `${image.anchors.ears.left.left.y}`,
        }
    },
    {
        shape: 'circle',
        properties: {
            r: 10,
            cx: image => `${image.anchors.ears.left.center.x - 18}`,
            cy: image => `${image.anchors.ears.left.center.y}`
        }
    },
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.ears.right.right.x}`,
            y1: image => `${image.anchors.ears.right.right.y}`,
            x2: image => `${image.anchors.ears.right.right.x + 20}`,
            y2: image => `${image.anchors.ears.right.right.y}`,
        }
    },
    {
        shape: 'line',
        properties: {
            x1: image => `${image.anchors.ears.right.left.x}`,
            y1: image => `${image.anchors.ears.right.left.y}`,
            x2: image => `${image.anchors.ears.right.left.x + 20}`,
            y2: image => `${image.anchors.ears.right.left.y}`,
        }
    },
    {
        shape: 'circle',
        properties: {
            r: 10,
            cx: image => `${image.anchors.ears.right.center.x + 18}`,
            cy: image => `${image.anchors.ears.right.center.y}`
        }
    }
]

const ears = [
    cat,
    none,
    bolts
]

export default ears;