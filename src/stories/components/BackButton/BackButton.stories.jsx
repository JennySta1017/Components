import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BackButton from './BackButton';

export default {
  title: 'TE/BackButton',
  component: BackButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <BackButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
