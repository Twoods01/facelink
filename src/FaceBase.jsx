import React from 'react';
import Faces from './parts/Faces';
import Eyes from './parts/Eyes';
import Mouths from './parts/Mouths';
import PartsRenderer from './parts/PartsRenderer';
import _ from 'lodash';

// Never change the order of this, only add new parts to the end
const parts = [Faces, Eyes, Mouths];
const partsBitLength = 5;
const IMG_SIZE = 256;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function parseFaceCode(code) {
    let partsBitMask = 0x1F;
    let codeNumber = parseInt(code, 16);

    return parts.map(part => {
        let partCode = codeNumber & partsBitMask;
        if(partCode >= part.length) {
            throw new Error("Invalid Code");
        }
        codeNumber = codeNumber >> partsBitLength;
        return partCode;
    });
}

function generateFaceCode() {
    const codes = parts.map(part =>{
        return getRandomInt(part.length);
    });

    let faceCode = _.reverse(codes).reduce((combination, code) => {
        return (combination | code) << partsBitLength
    }, 0);
    
    //The code will end up shifted one too many places, shift it back
    // and convert to hex
    return (faceCode >> partsBitLength).toString(16);
}

export default function(props) {
    try {
        const parsedCode = parseFaceCode(props.code);
        const face = Faces[parsedCode[0]];
        const imageProps = Object.assign({
            size: IMG_SIZE,
            center: IMG_SIZE / 2
        }, { anchors: face.anchors });

        return (
            <svg className="faceRender" width={IMG_SIZE} height={IMG_SIZE}>
                {parts.map((part, i) => PartsRenderer(part[parsedCode[i]], imageProps))}
            </svg>
        );
    } catch(err) {
        return <div> {err.message} </div>
    }
}

export {
    parseFaceCode,
    generateFaceCode
}