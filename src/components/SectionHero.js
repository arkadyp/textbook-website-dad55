import React from 'react';
import _ from 'lodash';

import {withPrefix} from '../utils';

export default class SectionHero extends React.Component {
    render() {
        const section = _.get(this.props, 'section', null);
        const image = _.get(section, 'image', null);
        const imageAlt = _.get(section, 'image-alt', null);
        return (
            <section id={_.get(this.props, 'section.section_id', null)} className="hero">
                {image && (
                    <img
                        src={withPrefix(image)}
                        alt={imageAlt}
                    />
                )}
                {(_.get(section, 'title', null) || _.get(section, 'subtitle', null)) && (
                <div className="copy">
                    {_.get(section, 'title', null) && (
                    <h1>{_.get(section, 'title', null)}</h1>
                    )}
                    {_.get(section, 'subtitle', null) && (
                    <h3>{_.get(section, 'subtitle', null)}</h3>
                    )}
                </div>
                )}
            </section>
        );
    }
}
