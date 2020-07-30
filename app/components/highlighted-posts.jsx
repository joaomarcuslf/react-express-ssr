import React from 'react';

import { useTranslation } from 'react-i18next';

import ImagesSection from './images-section';

const HighlightedPosts = ({ title, highlightedPosts }) => {
  const { t } = useTranslation();

  return (
    highlightedPosts.length > 0
    && (
    <ImagesSection
      title={t(title || 'text-highlight-posts')}
      items={highlightedPosts}
      out-sourced
      is-light
    />
    )
  );
};

export default HighlightedPosts;
