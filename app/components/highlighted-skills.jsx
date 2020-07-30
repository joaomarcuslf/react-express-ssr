import React from 'react';

import { useTranslation } from 'react-i18next';

import SkillsSection from './skills-section';

const HighlightedSkills = ({ title, highlightedSkills, seeMore = true }) => {
  const { t } = useTranslation();

  return (
    highlightedSkills.length > 0
    && (
    <SkillsSection
      title={t(title || 'text-highlight-skills')}
      items={highlightedSkills}
      seeMore={seeMore}
      out-sourced
      is-dark
    />
    )
  );
};

export default HighlightedSkills;
