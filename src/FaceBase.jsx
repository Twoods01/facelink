import React from 'react';
import Face from './parts/Face';
import Eyes from './parts/Eyes';
import Mouth from './parts/Mouth';
import PartsRenderer from './parts/PartsRenderer';

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
    const face = Face(parsedCode.faceCode);
    const imageProps = Object.assign({
        size: IMG_SIZE,
        center: IMG_SIZE / 2
    }, {anchors: face.anchors});
    
    return (
        <svg className="faceRender" width={IMG_SIZE} height={IMG_SIZE}>
            {PartsRenderer(face, imageProps)}
            {PartsRenderer(Eyes(parsedCode.eyeCode), imageProps)}
            {PartsRenderer(Mouth(parsedCode.mouthCode), imageProps)}
        </svg>
    );
}