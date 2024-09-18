// BackButton.stories.jsx
import React from 'react';
import BackButton from './BackButton';

export default {
    title: 'TE/BackButton',
    component: BackButton,
};

export const Default = () => <BackButton onClick={() => alert('Going back!')} />;
