import React from 'react';

// Components
import Layouts from '../components/layout';
import Header from '../components/model/header';
import Intro from '../components/model/intro';
import Quote from '../components/model/quote';
import SocialImpact from '../components/model/siaas';
import DigitalEconomy from '../components/model/digitalEconomy';
import Agenda from '../components/model/agenda';
import Participate from '../components/model/participate';

const Model = () => (
  <Layouts>
    <Header />
    <Intro />
    <Quote />
    <SocialImpact />
    <DigitalEconomy />
    <Agenda />
    <Participate />
  </Layouts>
);

export default Model;
