import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {htmlToReact} from '../utils';
import withPrefix from '../utils/withPrefix';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

const instructors = [{
  name: 'Phillip Compeau',
  department: 'Department of Computational Biology',
  university: 'Carnegie Mellon University',
  link: 'http://compeau.cbd.cmu.edu/',
  img: 'images/phillip-compeau.jpg',
}, {
  name: 'Alexey Gurevich',
  department: 'Center for Algorithmic Biotechnology',
  university: 'Saint Petersburg University',
  link: 'https://cab.spbu.ru/employees/alexey-gurevich/',
  img: 'images/alexey_gurevich.jpg',
}, {
  name: 'Pavel Pevzner',
  department: 'Department of Computer Science and Engineering',
  university: 'University of California at San Diego',
  link: 'https://bioalgorithms.ucsd.edu/',
  img: 'images/pavel_pevzner.png',
}, {
  name: 'Ben Raphael',
  department: 'Computer Science Department',
  university: 'Princeton University',
  link: 'http://compbio.cs.brown.edu/',
  img: 'images/ben-raphael.jpg',
}, {
  name: 'Steven Salzberg',
  department: 'Departments of Biomedical Engineering, Computer Science, and Biostatistics',
  university: 'Johns Hopkins University',
  link: 'https://salzberg-lab.org/',
  img: 'images/steven-salzberg.jpg',
}, {
  name: 'Rachel Sherman',
  department: 'Departments of Biomedical Engineering, Computer Science, and Biostatistics',
  university: 'Johns Hopkins University',
  link: 'https://salzberg-lab.org/',
  img: 'images/rachel-sherman.png',
}];

const Instructor = ({
  img,
  link,
  name,
  university,
  department,
}) => (
  <div className="instructor-container">
    <img src={withPrefix(img)}/>
    <div>
      <a
        className="animated-link large"
        target="_blank"
        href={link}
      >
        {name}
      </a>
      <div className="department">{department}</div>
      <div className="university">{university}</div>
    </div>
  </div>
);

const Instructors = (props) => {
  return (
    <Layout {...props}>
      <section className="page">
          <header className="hero">
              <div className="copy">
                  <h1>{_.get(props, 'pageContext.frontmatter.title', null)}</h1>
                  {_.get(props, 'pageContext.frontmatter.subtitle', null) && (
                  <h3>{htmlToReact(_.get(props, 'pageContext.frontmatter.subtitle', null))}</h3>
                  )}
              </div>
          </header>
          <div className="content">
            <p>
              In Winter 2021, the online multi-university bioinformatics course will be
              simultaneously offered by the following instructors:
            </p>
            <section>
              {instructors.map((data) => <Instructor key={data.name} {...data}/>)}
            </section>
          </div>
      </section>
    </Layout>
  );
}

export default Instructors;
