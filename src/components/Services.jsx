import { useTranslation } from 'react-i18next';
import '../styles/Services.css';

function Services() {
  const { t } = useTranslation();
  
  const services = [
    'technical',
    'medical',
    'legal',
    'literary',
    'notary',
    'interpretation'
  ];

  return (
    <div className="services">
      <h1>{t('services.title')}</h1>
      <div className="services-grid">
        {services.map(service => (
          <div key={service} className="service-card">
            <h3>{t(`services.${service}.title`)}</h3>
            <p>{t(`services.${service}.description`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;