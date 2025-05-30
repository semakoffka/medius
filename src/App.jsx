import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';
import Left from './assets/left.jpg';
import Right from './assets/right.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="main-content">
        <section className="sidebar-left" aria-label="Main navigation">
          <nav className="desktop-nav">
            <ul>
              {[
                { to: '/medius', text: t('nav.home') },
                { to: '/news', text: t('nav.news') },
                { to: '/about', text: t('nav.about') },
                { to: '/contact', text: t('nav.contact') },
                { to: '/services', text: t('nav.services') },
              ].map((item, index) => (
                <li key={item.to} style={{ '--i': index }}>
                  <Link to={item.to} className="nav-link">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="banner">
            <img src={Left} alt={t('banner.left.alt')} loading="lazy" />
          </div>
        </section>
        <article className="main-article" role="main">
          <Routes>
            <Route path="/medius" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </article>
        <aside className="sidebar-right" aria-label="Additional information">
          <div className="tag-cloud">
            <h3>{t('tags')}</h3>
            <div className="tags">
              {[
                t('services.technical.title'),
                t('services.medical.title'),
                t('services.legal.title'),
                t('services.literary.title'),
                t('services.notary.title'),
                t('services.interpretation.title'),
              ].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="banner">
            <img src={Right} alt={t('banner.right.alt')} loading="lazy" />
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;