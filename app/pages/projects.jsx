import React from 'react';

import { useTranslation } from 'react-i18next';

import Banner from '../components/banner';

import ProjectsView from '../containers/projects';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="projects-page">
      <Banner
        title={t('text-projects-title')}
        subtitle={t('text-projects-subtitle')}
        is-warning
      />

      <ProjectsView />
    </div>
  );
};

export default Projects;
