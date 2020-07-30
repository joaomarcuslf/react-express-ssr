import React from 'react';

import { useTranslation } from 'react-i18next';

import Banner from '../components/banner';

import Timeline from '../containers/timeline';
import Skills from '../containers/skills';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="about-me-page">
      <Banner
        title={t('text-about-me-title')}
        subtitle={t('text-about-me-subtitle')}
        is-success
      />

      <Timeline />
      <Skills />
    </div>
  );
};

export default AboutMe;
