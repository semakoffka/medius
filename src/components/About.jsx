import { useTranslation } from 'react-i18next';
import '../styles/About.css';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h1>{t('about.title')}</h1>
      <div className="about-content">
        <div className="about-section">
          <p>{t('about.description')}</p>
          <ul>
            <li>{t('about.experience')}</li>
            <li>{t('about.languages')}</li>
            <li>{t('about.clients')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;