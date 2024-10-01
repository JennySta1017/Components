import React from 'react';
import SearchResult from './SearchResult';

// Exportera standardkonfiguration för komponentens story
export default {
  title: 'TE/SearchResult',
  component: SearchResult,
};

// Template för att rendera komponenten
const Template = (args) => <SearchResult {...args} />;

// Story med sökresultat
export const WithResults = Template.bind({});
WithResults.args = {
  results: [
    { title: 'Grönt te', description: 'Ett uppfriskande och hälsosamt te.' },
    { title: 'Svart te', description: 'Klassiskt te med en rik och fyllig smak.' },
    { title: 'Oolong te', description: 'En blandning av grönt och svart te.' },
  ],
};

// Story utan sökresultat
export const NoResults = Template.bind({});
NoResults.args = {
  results: [], // Ingen data för att visa tomt state
};
