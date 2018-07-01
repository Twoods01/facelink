import React from 'react';
import _ from 'lodash';

export default function renderPart(partConfig, imageProps) {
    if(!_.isArray(partConfig)) {
        partConfig = [partConfig]
    }

    return partConfig.map((configObj, i) => {
        let shapeProperties = _.reduce(configObj.properties, (props, value, key) => {
            if (_.isFunction(value)) {
                props[key] = value(imageProps);
            } else {
                props[key] = value;
            }

            return props;
        }, {});
        const Shape = configObj.shape;
        return (<Shape key={`Eye${i}`} stroke="black" fill="transparent" strokeWidth="4" {...shapeProperties} />);
    });
}