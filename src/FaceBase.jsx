import React from 'react';
import Face from './parts/Face';
import Eyes from './parts/Eyes';
import Mouth from './parts/Mouth';

const IMG_SIZE = 256;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function parseCode(code) {
    return {
        faceCode: getRandomInt(3),
        eyeCode: getRandomInt(2),
        mouthCode: getRandomInt(2)
    }
}

export default function(props) {
    const parsedCode = parseCode(props.code);
    const imageProps = {
        size: IMG_SIZE,
        center: IMG_SIZE / 2
    }
    return (
        <svg className="faceRender" width={IMG_SIZE} height={IMG_SIZE}>
            <Face code={parsedCode.faceCode} imageProps={imageProps} />
            <Eyes code={parsedCode.eyeCode} imageProps={imageProps} />
            <Mouth code={parsedCode.mouthCode} imageProps={imageProps} />
        </svg>
    );
}