import React from 'react';

// Components
import Layouts from '../components/layout';
import SEO from '../components/SEO';
import Header from '../components/school/header';
import Cards from '../components/school/cards';
import Classes from '../components/school/classes';
import Depositions from '../components/school/depositions';
import Projects from '../components/school/projects';

const school = () => (
  <Layouts>
    <SEO />
    <Header />
    <Cards />
    <Classes />
    <Depositions />
    <Projects />
  </Layouts>
);

export default school;
