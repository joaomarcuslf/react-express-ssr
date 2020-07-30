import React from 'react';

import { useTranslation } from 'react-i18next';

import Banner from '../components/banner';

import HighlitedSkills from '../containers/highlighted-skills';
import HighlitedPosts from '../containers/highlighted-posts';
import HighlitedProjects from '../containers/highlighted-projects';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className="main-page">
      <Banner
        title={t('text-main-title')}
        subtitle={t('text-main-subtitle')}
        is-info
      />

      <HighlitedSkills />

      <HighlitedPosts />

      <HighlitedProjects />
    </div>
  );
};

export default MainPage;
