// Must be kept in sync with IMG_SIZE in FaceBase
const imageSize = 256;
const imageCenter = imageSize / 2;

const circle =  {
    shape: 'circle',
    properties: {
        r: `${imageCenter - 30}`,
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
                y: `${imageCenter + 50}`
            },
            center: {
                x: `${imageCenter}`,
                y: `${imageCenter + 50}`
            },
            right: {
                x: `${imageCenter + 50}`,
                y: `${imageCenter + 50}`
            }
        },
        nose: {
            center: {
                x: `${imageCenter}`,
                y: `${imageCenter}`
            }
        }
    }
};

const square = {
    shape: 'rect',
    properties: {
        x: 30,
        y: 30,
        width: `${imageSize-60}`,
        height: `${imageSize-60}`
    },
    anchors: {
        eyes: {
            left: {
                center: {
                    x: `${imageCenter - 35}`,
                    y: `${imageCenter - 50}`
                }
            },
            right: {
                center: {
                    x: `${imageCenter + 35}`,
                    y: `${imageCenter - 50}`
                }
            }
        },
        mouth: {
            left:{
                x: `${imageCenter - 50}`,
                y: `${imageCenter + 50}`
            },
            center: {
                x: `${imageCenter}`,
                y: `${imageCenter + 50}`
            },
            right: {
                x: `${imageCenter + 50}`,
                y: `${imageCenter + 50}`
            }
        },
        nose: {
            center: {
                x: `${imageCenter}`,
                y: `${imageCenter}`
            }
        }
    }
};

const triangle = {
    shape: 'polygon',
    properties: {
        points: `30,${imageSize - 30} ${imageCenter},30 ${imageSize - 30},${imageSize - 30}`
    },
    anchors: {
        eyes: {
            left: {
                center: {
                    x: `${imageCenter - 25}`,
                    y: `${imageCenter - 10}`
                }
            },
            right: {
                center: {
                    x: `${imageCenter + 25}`,
                    y: `${imageCenter - 10}`
                }
            }
        },
        mouth: {
            left: {
                x: `${imageCenter - 50}`,
                y: `${imageCenter + 65}`
            },
            center: {
                x: `${imageCenter}`,
                y: `${imageCenter + 65}`
            },
            right: {
                x: `${imageCenter + 50}`,
                y: `${imageCenter + 65}`
            }
        },
        nose: {
            center: {
                x: `${imageCenter}`,
                y: `${imageCenter + 20}`
            }
        }
    }
};

const faces = [
    circle,
    square,
    triangle
];

export default faces;