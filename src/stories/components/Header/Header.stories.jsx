import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

export default {
  title: 'TE/Header',
  component: Header,
};



export const DefaultHeader = () => 
(
<Router>
<Header />;
</Router>
);