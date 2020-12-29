import React from 'react';
import _ from 'lodash';

import {withPrefix} from '../utils';

const Universities = ({section}) => {
    const imageData = _.get(section, 'imageData', [])
    return (
        <div>
            <div className="university-images-grid">
                {imageData.map(({image, alt}) => (
                    <img src={withPrefix(image)} alt={alt}/>
                ))}
            </div>
            <div className="university-images-row-mobile">
                {imageData.slice(0, 3).map(({image, alt}) => (
                    <img src={withPrefix(image)} alt={alt}/>
                ))}
            </div>
            <div className="university-images-row-mobile">
                {imageData.slice(3, 5).map(({image, alt}) => (
                    <img src={withPrefix(image)} alt={alt}/>
                ))}
            </div>
        </div>
    );
}

export default Universities;
