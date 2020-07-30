import React from 'react';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import LanguageChanger from './language-changer';

const navItems = [
  { to: '/', title: 'button-home', exact: true },
  { to: '/posts', title: 'button-posts' },
  { to: '/projects', title: 'button-projects' },
  { to: '/about-me', title: 'button-about-me' },
];

const Menu = ({ isOpen, toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <nav
      className={isOpen ? 'navbar  is-fixed-top is-primary is-active' : 'navbar is-fixed-top is-primary'}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <img
            src="/images/logo-typo.png"
            alt="Logo which is written { @ } JOAOMARCUSLF"
            height="50"
          />
        </div>

        <button
          type="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenuTarget"
          onClick={() => toggleMenu(isOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div
        id="navbarMenuTarget"
        className={isOpen ? 'navbar-menu is-active' : 'navbar-menu'}
      >
        <div className="navbar-start is-hidden-mobile is-hidden-tablet-only">
          {navItems.map((link) => (
            <NavLink
              className="navbar-item"
              key={link.title}
              to={link.to}
              exact={!!link.exact}
              activeClassName="is-active"
            >
              {t(link.title)}
            </NavLink>
          ))}
        </div>

        <div className="navbar-start is-hidden-desktop">
          {navItems.map((link) => (
            <NavLink
              className="navbar-item"
              key={link.title}
              to={link.to}
              exact={!!link.exact}
              activeClassName="is-active"
              onClick={() => toggleMenu(isOpen)}
            >
              {t(link.title)}
            </NavLink>
          ))}
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
