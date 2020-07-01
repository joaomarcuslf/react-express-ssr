import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import LanguageChanger from './language-changer';

const Menu = ({ isOpen, toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt=""
            width="112"
            height="28"
          />
        </div>

        <button
          type="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => toggleMenu(isOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div id="navbarBasicExample" className={isOpen ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            {t('menu-home')}
          </Link>

          <Link className="navbar-item" to="/">
            {t('menu-test')}
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <LanguageChanger />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
