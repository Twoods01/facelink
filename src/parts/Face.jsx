// Must be kept in sync with IMG_SIZE in FaceBase
const imageSize = 256;
const imageCenter = imageSize / 2;

const circle =  {
    shape: 'circle',
    properties: {
        r: `${imageCenter - 5}`,
        cx: `${imageCenter}`,
        cy: `${imageCenter}`
    },
    anchors: {
        eyes: {
            left: {
                center: {
                    x: `${imageCenter - 35}`,
                    y: `${imageCenter - 40}`
                }
            },
            right: {
                center: {
                    x: `${imageCenter + 35}`,
                    y: `${imageCenter - 40}`
                }
            }
        },
        mouth: {
            left: {
                x: `${imageCenter - 50}`,
                y: `${imageCenter + 40}`
            },
            center: {
                x: `${imageCenter}`,
                y: `${imageCenter + 40}`
            },
            right: {
                x: `${imageCenter + 50}`,
                y: `${imageCenter + 40}`
            }
        }
    }
};

const square = {
    shape: 'rect',
    properties: {
        x: 0,
        y: 0,
        width: `${imageSize}`,
        height: `${imageSize}`
    },
    anchors: {
        eyes: {
            left: {
                center: {
                    x: `${imageCenter - 35}`,
                    y: `${imageCenter - 40}`
                }
            },
            right: {
                center: {
                    x: `${imageCenter + 35}`,
                    y: `${imageCenter - 40}`
                }
            }
        },
        mouth: {
            left:{
                x: `${imageCenter - 50}`,
                y: `${imageCenter + 40}`
            },
            center: {
                x: `${imageCenter}`,
                y: `${imageCenter + 40}`
            },
            right: {
                x: `${imageCenter + 50}`,
                y: `${imageCenter + 40}`
            }
        }
    }
};

const triangle = {
    shape: 'polygon',
    properties: {
        points: `0,${imageSize} ${imageCenter},0 ${imageSize},${imageSize}`
    },
    anchors: {
        eyes: {
            left: {
                center: {
                    x: `${imageCenter - 25}`,
                    y: `${imageCenter - 35}`
                }
            },
            right: {
                center: {
                    x: `${imageCenter + 25}`,
                    y: `${imageCenter - 35}`
                }
            }
        },
        mouth: {
            left: {
                x: `${imageCenter - 50}`,
                y: `${imageCenter + 40}`
            },
            center: {
                x: `${imageCenter}`,
                y: `${imageCenter + 40}`
            },
            right: {
                x: `${imageCenter + 50}`,
                y: `${imageCenter + 40}`
            }
        }
    }
};

const faces = [
    circle,
    square,
    triangle
];

export default function (code) {
    return faces[code];
}