import PartsRenderer from './PartsRenderer';

const circle =  {
    shape: 'circle',
    properties: {
        r: image => `${image.center - 5}`,
        cx: image => `${image.center}`,
        cy: image => `${image.center}`
    }
};

const square = {
    shape: 'rect',
    properties: {
        x: 0,
        y: 0,
        width: image => `${image.size}`,
        height: image => `${image.size}`
    }
};

const triangle = {
    shape: 'polygon',
    properties: {
        points: image => `0,${image.size} ${image.center},0 ${image.size},${image.size}`
    }
};

const faces = [
    circle,
    square,
    triangle
];

export default function (props) {
    const config = faces[props.code];
    return PartsRenderer(config, props.imageProps);
}