import React from 'react';

import { useTranslation } from 'react-i18next';

import ImagesSection from './images-section';

const HighlightedProjects = ({ title, highlightedProjects }) => {
  const { t } = useTranslation();

  return (
    highlightedProjects.length > 0
    && (
    <ImagesSection
      title={t(title || 'text-highlight-projects')}
      items={highlightedProjects}
      is-dark
    />
    )
  );
};

export default HighlightedProjects;
