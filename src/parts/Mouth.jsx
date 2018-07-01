import PartsRenderer from './PartsRenderer';

const smile = {
    shape: 'path',
    properties: {
        d: (imageProps) => `M ${imageProps.center - 50} ${imageProps.center + 40} q 50 50 100 0`
    }
};

const frown = {
    shape: 'path',
    properties: {
        d: (imageProps) => `M ${imageProps.center - 50} ${imageProps.center + 40} q 50 -50 100 0`
    }
};

const mouths = [
    smile,
    frown
]

export default function (props) {
    const config = mouths[props.code];
    return PartsRenderer(config, props.imageProps);
}