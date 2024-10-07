import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

export default {
  title: 'TE/Header',
  component: Header,
};

export const DefaultHeader = () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);