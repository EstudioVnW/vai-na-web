import React from 'react';

// Components
import Layouts from '../components/layout';
import Header from '../components/casess/header';  
import Casess from '../components/casess/cases';
import Calltoaction from '../components/casess/calltoaction';

const Cases = () => (
  <Layouts>
    <Header />
    <Casess />
    <Calltoaction />
  </Layouts>
);

export default Cases;
