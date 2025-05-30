import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t('footer.contact')}</h3>
          <div className="footer-contact-info">
            <p className="footer-address">
              <strong>{t('footer.address')}:</strong> {t('footer.city')}
            </p>
            <p className="footer-hours">
              <strong>{t('contact.address.workingHours')}</strong>
            </p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>{t('nav.services')}</h3>
          <ul className="footer-links">
            <li><a href="/services#technical">{t('services.technical.title')}</a></li>
            <li><a href="/services#medical">{t('services.medical.title')}</a></li>
            <li><a href="/services#legal">{t('services.legal.title')}</a></li>
            <li><a href="/services#literary">{t('services.literary.title')}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t('nav.about')}</h3>
          <ul className="footer-links">
            <li><a href="/about">{t('about.title')}</a></li>
            <li><a href="/news">{t('nav.news')}</a></li>
            <li><a href="/contact">{t('nav.contact')}</a></li>
          </ul>
        </div>


      </div>

    </footer>
  );
}

export default Footer;