import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <h1>{t('contact.title')}</h1>
      <p className="contact-description">{t('contact.description')}</p>
      
      <div className="contact-list">
        <div className="contact-item">
          <h3>{t('contact.phone')}</h3>
          <a href="tel:+79085175043">+7 908 517 50 43</a>
          <p>{t('contact.phone.availability')}</p>
        </div>

        <div className="contact-item">
          <h3>{t('contact.email')}</h3>
          <a href="mailto:info@medius.ru">info@medius.ru</a>
          <p>{t('contact.email.response')}</p>
        </div>

        <div className="contact-item">
          <h3>{t('contact.address')}</h3>
          <p>{t('contact.address.value')}</p>
          <p>{t('contact.address.workingHours')}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;