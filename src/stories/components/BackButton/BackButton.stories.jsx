// BackButton.stories.jsx
import React from 'react';
import BackButton from 'TE./BackButton';

export default {
    title: 'Components/BackButton',
    component: BackButton,
};

export const Default = () => <BackButton onClick={() => alert('Going back!')} />;
