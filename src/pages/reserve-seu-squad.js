import React from 'react';

// Components
import SEO from '../components/SEO';
import Layouts from '../components/layout';
import Form from '../components/contact/form';
import Header from '../components/contact/header';

const Contact = () => (
  <Layouts>
    <SEO />
    <Header />
    <Form />
  </Layouts>
);

export default Contact;
