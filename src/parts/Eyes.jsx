import PartsRenderer from './PartsRenderer';

const twoCircles = [
    {
        shape: 'circle',
        properties: {
            r: 10,
            cx: image => `${image.center + 35}`,
            cy: image => `${image.center - 40}`
        }
    },
    {
        shape: 'circle',
        properties: {
            r: 10,
            cx: image => `${image.center - 35}`,
            cy: image => `${image.center - 40}`
        }
    }
];

const twoDots = [
    {
        shape: 'circle',
        properties: {
            r: 2,
            cx: image => `${image.center + 35}`,
            cy: image => `${image.center - 40}`
        }
    },
    {
        shape: 'circle',
        properties: {
            r: 2,
            cx: image => `${image.center - 35}`,
            cy: image => `${image.center - 40}`
        }
    }
];

const eyes = [
    twoCircles,
    twoDots
]

export default function (props) {
    const config = eyes[props.code];
    return PartsRenderer(config, props.imageProps);
}