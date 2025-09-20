import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switch flex gap-2">
      <button
        className={`px-3 py-2 border-2 border-neutral-200 bg-white text-neutral-500 rounded-lg cursor-pointer font-semibold transition-all hover:border-primary-400 hover:text-primary-400 ${
          i18n.language === 'en' ? 'bg-primary-400 border-primary-400 text-neutral-500' : ''
        }`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`px-3 py-2 border-2 border-neutral-200 bg-white text-neutral-500 rounded-lg cursor-pointer font-semibold transition-all hover:border-primary-400 hover:text-primary-400 ${
          i18n.language === 'nl' ? 'bg-primary-400 border-primary-400 text-neutral-500' : ''
        }`}
        onClick={() => changeLanguage('nl')}
      >
        NL
      </button>
    </div>
  );
};

export default LanguageSwitch;