import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-neutral-500 text-neutral-50 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="footer-section">
          <h3 className="text-primary-400 mb-4">Majorille Garden</h3>
          <p className="text-neutral-50 leading-relaxed">{t('footer.tagline')}</p>
        </div>
        
        <div className="footer-section">
          <h4 className="text-primary-400 mb-4">{t('footer.address')}</h4>
          <p className="text-neutral-50 leading-relaxed">
            123 Wellness Street<br />
            1234 AB Amsterdam<br />
            Netherlands
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="text-primary-400 mb-4">{t('footer.hours')}</h4>
          <p className="text-neutral-50 leading-relaxed">
            Mon-Fri: 9:00 - 20:00<br />
            Sat: 10:00 - 18:00<br />
            Sun: 11:00 - 17:00
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="text-primary-400 mb-4">Contact</h4>
          <p className="text-neutral-50 leading-relaxed">
            +31 20 123 4567<br />
            info@majorillegarden.nl
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="text-primary-400 mb-4">{t('footer.follow_us')}</h4>
          <div className="social-links flex gap-6 mt-4">
            <a href="#facebook" aria-label="Facebook" className="text-neutral-50 no-underline transition-colors hover:text-primary-400">Facebook</a>
            <a href="#instagram" aria-label="Instagram" className="text-neutral-50 no-underline transition-colors hover:text-primary-400">Instagram</a>
            <a href="#twitter" aria-label="Twitter" className="text-neutral-50 no-underline transition-colors hover:text-primary-400">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-neutral-400 py-6 text-center">
        <p className="text-neutral-400">&copy; 2025 Majorille Garden. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;