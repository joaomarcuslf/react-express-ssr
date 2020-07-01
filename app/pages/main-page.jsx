import React from 'react';

import { useTranslation } from 'react-i18next';

import Menu from '../containers/menu';
import UserForm from '../components/user-form';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <Menu />

      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{t('intro-title')}</h1>
            <h2 className="subtitle">{t('intro-subtitle')}</h2>
          </div>
        </div>
      </section>

      <UserForm />
    </div>
  );
};

export default MainPage;
