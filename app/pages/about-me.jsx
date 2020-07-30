import React from 'react';

import { useTranslation } from 'react-i18next';

import Banner from '../components/banner';

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

      <Skills />
    </div>
  );
};

export default AboutMe;
