import React from 'react';

import { useTranslation } from 'react-i18next';

import ImagesSection from './images-section';

const ProjectsShowcase = ({ title, projects }) => {
  const { t } = useTranslation();

  return (
    projects.length > 0
    && (
    <ImagesSection
      title={t(title || 'text-highlight-projects')}
      items={projects}
      is-dark
    />
    )
  );
};

export default ProjectsShowcase;
