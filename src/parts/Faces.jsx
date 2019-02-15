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
        },
        ears: {
            right: {
                right: {
                    x: `${imageCenter + 75}`,
                    y: `${imageCenter - 65}`
                },
                center: {
                    x: `${imageCenter + 83}`,
                    y: `${imageCenter - 55}`
                },
                left: {
                    x: `${imageCenter + 88}`,
                    y: `${imageCenter - 45}`
                }
            },
            left: {
                right: {
                    x: `${imageCenter - 75}`,
                    y: `${imageCenter - 65}`
                },
                center: {
                    x: `${imageCenter - 83}`,
                    y: `${imageCenter - 55}`
                },
                left: {
                    x: `${imageCenter - 88}`,
                    y: `${imageCenter - 45}`
                }
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
        },
        ears: {
            left: {
                left: {
                    x: `${imageCenter - 98}`,
                    y: `${imageCenter - 50}`
                },
                center: {
                    x: `${imageCenter - 98}`,
                    y: `${imageCenter - 60}`
                },
                right: {
                    x: `${imageCenter - 98}`,
                    y: `${imageCenter - 70}`
                },
            },
            right: {
                left: {
                    x: `${imageCenter + 98}`,
                    y: `${imageCenter - 50}`
                },
                center: {
                    x: `${imageCenter + 98}`,
                    y: `${imageCenter - 60}`
                },
                right: {
                    x: `${imageCenter + 98}`,
                    y: `${imageCenter - 70}`
                },
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
        },
        ears: {
            left: {
                left: {
                    x: `${imageCenter - 51}`,
                    y: `${imageCenter}`
                },
                center: {
                    x: `${imageCenter - 48}`,
                    y: `${imageCenter - 10}`
                },
                right: {
                    x: `${imageCenter - 40}`,
                    y: `${imageCenter - 20}`
                }
            },
            right: {
                left: {
                    x: `${imageCenter + 51}`,
                    y: `${imageCenter}`
                },
                center: {
                    x: `${imageCenter + 48}`,
                    y: `${imageCenter - 10}`
                },
                right: {
                    x: `${imageCenter + 40}`,
                    y: `${imageCenter - 20}`
                }
            }
        }
    }
};

const flatJaw = {
    shape: 'path',
    properties: { d: `M ${imageSize * 0.5}  ${imageSize * 0.1} 
        C ${imageSize * 0.6}  ${imageSize * 0.1}      ${imageSize * 0.7}  ${imageSize * 0.15}    ${imageSize * 0.75} ${imageSize * 0.3}
        C ${imageSize * 0.8}  ${imageSize * 0.45}     ${imageSize * 0.8}  ${imageSize * 0.45}    ${imageSize * 0.85} ${imageSize * 0.65}
        C ${imageSize * 0.86} ${imageSize * 0.7}      ${imageSize * 0.87} ${imageSize * 0.75}    ${imageSize * 0.85} ${imageSize * 0.8}
        C ${imageSize * 0.8}  ${imageSize * 0.95}     ${imageSize * 0.55} ${imageSize * 0.95}    ${imageSize * 0.5}  ${imageSize * 0.95}
        C ${imageSize * 0.45} ${imageSize * 0.95}     ${imageSize * 0.20} ${imageSize * 0.95}    ${imageSize * 0.15} ${imageSize * 0.8}
        C ${imageSize * 0.13} ${imageSize * 0.75}      ${imageSize * 0.14} ${imageSize * 0.7}     ${imageSize * 0.15} ${imageSize * 0.65}
        C ${imageSize * 0.2}  ${imageSize * 0.45}     ${imageSize * 0.2}  ${imageSize * 0.45}    ${imageSize * 0.25} ${imageSize * 0.3}
        C ${imageSize * 0.3}  ${imageSize * 0.15}     ${imageSize * 0.4}  ${imageSize * 0.1}     ${imageSize * 0.5}  ${imageSize * 0.1}`
    },
    anchors: {
        eyes: {
            left: {
                center: {
                    x: `${imageCenter - 25}`,
                    y: `${imageCenter - 20}`
                }
            },
            right: {
                center: {
                    x: `${imageCenter + 25}`,
                    y: `${imageCenter - 20}`
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
        },
        ears: {
            left: {
                left: {
                    x: `${imageCenter - 81}`,
                    y: `${imageCenter}`
                },
                center: {
                    x: `${imageCenter - 81}`,
                    y: `${imageCenter - 10}`
                },
                right: {
                    x: `${imageCenter - 73}`,
                    y: `${imageCenter - 20}`
                }
            },
            right: {
                left: {
                    x: `${imageCenter + 81}`,
                    y: `${imageCenter}`
                },
                center: {
                    x: `${imageCenter + 81}`,
                    y: `${imageCenter - 10}`
                },
                right: {
                    x: `${imageCenter + 73}`,
                    y: `${imageCenter - 20}`
                }
            }
        }
    }
};

const faces = [
    circle,
    square,
    triangle,
    flatJaw
];

export default faces;

export {imageSize};