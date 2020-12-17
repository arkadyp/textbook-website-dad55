import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';

export default class SectionContent extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="content">
                {_.get(section, 'title', null) && (
                <h2 className="copy">
                    {_.get(section, 'title', null)}
                </h2>
                )}
                <div className="section-content-container">
                    {_.get(section, 'image', null) && (<img className="inline-image" src={withPrefix(_.get(section, 'image', null))}/>)}
                    {_.get(section, 'content', null) && (
                    <div className="copy">
                        {markdownify(_.get(section, 'content', null))}
                    </div>
                    )}
                </div>
            </section>
        );
    }
}
