import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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
            <li><Link to="/services#technical">{t('services.technical.title')}</Link></li>
            <li><Link to="/services#medical">{t('services.medical.title')}</Link></li>
            <li><Link to="/services#legal">{t('services.legal.title')}</Link></li>
            <li><Link to="/services#literary">{t('services.literary.title')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t('nav.about')}</h3>
          <ul className="footer-links">
            <li><Link to="/about">{t('about.title')}</Link></li>
            <li><Link to="/news">{t('nav.news')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
          </ul>
        </div>


      </div>

    </footer>
  );
}

export default Footer;