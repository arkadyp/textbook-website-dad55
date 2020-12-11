import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';

const Universities = ({section}) => {
    const images = _.get(section, 'images', [])
    return (
        <div>
            <div className="university-images-grid">
                {images.map(image => (
                    <img src={withPrefix(image)}/>
                ))}
            </div>
            <div className="university-images-row-mobile">
                {images.slice(0, 3).map(image => (
                    <img src={withPrefix(image)}/>
                ))}
            </div>
            <div className="university-images-row-mobile">
                {images.slice(3, 5).map(image => (
                    <img src={withPrefix(image)}/>
                ))}
            </div>
        </div>
    );
}

export default Universities;
