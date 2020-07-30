import React from 'react';

import { useTranslation } from 'react-i18next';

import Banner from '../components/banner';

import PostsView from '../containers/posts';

const Posts = () => {
  const { t } = useTranslation();

  return (
    <div className="posts-page">
      <Banner
        title={t('text-posts-title')}
        subtitle={t('text-posts-subtitle')}
        is-danger
      />

      <PostsView />
    </div>
  );
};

export default Posts;
