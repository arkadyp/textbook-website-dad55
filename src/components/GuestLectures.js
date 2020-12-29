import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

const GuestLectures = ({section}) => {
    const lectures = _.get(section, 'lectures', [])
    return (
      <section className="content">
          {_.get(section, 'title', null) && (
          <h2 className="copy">
              {_.get(section, 'title', null)}
          </h2>
          )}
          {_.get(section, 'content', null) && (
          <div className="copy">
              {markdownify(_.get(section, 'content', null))}
          </div>
          )}
          <ul>
            {lectures.map(({author, lecture}) => (
              <li key={author}>
                <span className="bold">{author}</span>
                : {lecture}
              </li>
            ))}
          </ul>
      </section>
    );
}

export default GuestLectures;
