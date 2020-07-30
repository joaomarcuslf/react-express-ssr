import React from 'react';

import { useTranslation } from 'react-i18next';

import SkillsSection from './skills-section';

const SkillsShowcase = ({ title, skills, seeMore = true }) => {
  const { t } = useTranslation();

  return (
    skills.length > 0
    && (
    <SkillsSection
      title={t(title || 'text-highlight-skills')}
      items={skills}
      seeMore={seeMore}
      out-sourced
      is-dark
    />
    )
  );
};

export default SkillsShowcase;
