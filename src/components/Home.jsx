import { useTranslation } from 'react-i18next';
import '../styles/Home.css';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h1>{t('home.title')}</h1>

      <div className="hero-section">
        <h2>{t('home.title')}</h2>
        <p>{t('home.subtitle')}</p>
      </div>
      <div className="features">
        <div className="feature">
          <h3>{t('services.technical.title')}</h3>
          <p>{t('services.technical.description')}</p>
        </div>
        <div className="feature">
          <h3>{t('services.medical.title')}</h3>
          <p>{t('services.medical.description')}</p>
        </div>
        <div className="feature">
          <h3>{t('services.legal.title')}</h3>
          <p>{t('services.legal.description')}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;