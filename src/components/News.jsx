import { useTranslation } from 'react-i18next';
import '../styles/News.css';

function News() {
  const { t } = useTranslation();

  const news = [
    {
      id: 1,
      date: '2024-03-15'
    },
    {
      id: 2,
      date: '2024-03-10'
    },
    {
      id: 3,
      date: '2024-03-05'
    }
  ];

  return (
    <div className="news">
      <h1>{t('news.title')}</h1>
      <div className="news-grid">
        {news.map(item => (
          <div key={item.id} className="news-card">
            <div className="news-date">{item.date}</div>
            <h3>{t(`news.items.${item.id}.title`)}</h3>
            <p>{t(`news.items.${item.id}.content`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;