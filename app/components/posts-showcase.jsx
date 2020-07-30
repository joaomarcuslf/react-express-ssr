import React from 'react';

import { useTranslation } from 'react-i18next';

import ImagesSection from './images-section';

const PostsShowCase = ({ title, posts }) => {
  const { t } = useTranslation();

  return (
    posts.length > 0
    && (
    <ImagesSection
      title={t(title || 'text-highlight-posts')}
      items={posts}
      out-sourced
      is-light
    />
    )
  );
};

export default PostsShowCase;
