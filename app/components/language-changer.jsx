import React from 'react';

import { useTranslation } from 'react-i18next';

import { setLanguage } from '../helpers/translations';

const LanguageChanger = () => {
  const { i18n } = useTranslation();

  const setLanguageClick = (lang) => setLanguage(lang).then(() => i18n.changeLanguage(lang));

  return (
    <div className="flag-toggle">
      <button type="button" className={i18n.language === 'en' ? 'flag-item is-active' : 'flag-item'} onClick={() => setLanguageClick('en')}>
        <img
          src="/images/icons/flag-uk.png"
          alt="Flag icon for English language."
        />
      </button>

      <button type="button" className={i18n.language === 'pt' ? 'flag-item is-active' : 'flag-item'} onClick={() => setLanguageClick('pt')}>
        <img
          src="/images/icons/flag-br.png"
          alt="Flag icon for Portuguese language."
        />
      </button>
    </div>
  );
};

export default LanguageChanger;
