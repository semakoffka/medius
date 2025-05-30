import { useTranslation } from 'react-i18next';
import '../styles/Header.css';

function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Медиус</h1>
          <span className="logo-subtitle">{t('home.subtitle')}</span>
        </div>
        <div className="header-right">
          <button className="language-toggle" onClick={toggleLanguage}>
            {i18n.language === 'ru' ? 'EN' : 'RU'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;