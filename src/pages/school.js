import React from 'react';

//Components
import Layouts from '../components/layout';
import Header from '../components/school/header';
import Cards from '../components/school/cards';
import Classes from '../components/school/classes';
import Depositions from '../components/school/depositions';
import Projects from '../components/school/projects';

const school = () => {
  return (
    <Layouts>
      <Header />
      <Cards />
      <Classes />
      <Depositions />
      <Projects />
    </Layouts>
  )
}

export default school;
