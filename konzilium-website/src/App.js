// src/App.js
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';

import ContactPage from './pages/ContactPage';
import PriceListPage from './pages/PriceListPage';

import './index.css'; // ensure global styles apply

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PriceListPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
