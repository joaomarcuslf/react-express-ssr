import React from 'react';

import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="buttons">
      <button type="button" className="button is-light" onClick={() => i18n.changeLanguage('en')}>
        {
          i18n.language === 'en'
            ? <strong>{t('language-en')}</strong>
            : t('language-en')
        }
      </button>
      <button type="button" className="button is-light" onClick={() => i18n.changeLanguage('pt')}>
        {
          i18n.language === 'pt'
            ? <strong>{t('language-pt')}</strong>
            : t('language-pt')
        }
      </button>
    </div>
  );
};

export default LanguageChanger;
