import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      {/* Hero Section - Full viewport from top */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center -mt-20 pt-20"
        style={{
          backgroundImage: `url('https://demo.awaikenthemes.com/spawell/wellness-center/wp-content/uploads/2025/07/hero-img.jpg')`
        }}
      >
        {/* Gradient Overlay - Opacity effect from left to right */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(101, 67, 33, 0.9) 0%, rgba(101, 67, 33, 0.7) 30%, rgba(101, 67, 33, 0.5) 50%, rgba(101, 67, 33, 0.2) 70%, transparent 100%)`
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Relax, recharge, and reconnect with inner{' '}
              <span className="italic font-light">peace today</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-xl">
              Step into a haven of calm where every treatment is designed to tension, 
              renew your energy, and restore a deep sense of inner peace.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 flex items-center justify-center space-x-2">
                <span>Book An Appointment</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-amber-900 flex items-center justify-center space-x-2">
                <span>Our Services</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            
            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Personalized Wellness</div>
                  <div className="text-white/80 text-sm">Programs</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Experienced and Certified</div>
                  <div className="text-white/80 text-sm">Wellness Practitioners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-center mb-16 text-secondary-500">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card bg-neutral-50 text-center transition-transform hover:-translate-y-2">
            <h3 className="text-secondary-500 mb-6">{t('services.sand_bath.title')}</h3>
            <p className="text-neutral-400 leading-relaxed">{t('services.sand_bath.description')}</p>
          </div>
          <div className="card bg-neutral-50 text-center transition-transform hover:-translate-y-2">
            <h3 className="text-secondary-500 mb-6">{t('services.massage.title')}</h3>
            <p className="text-neutral-400 leading-relaxed">{t('services.massage.description')}</p>
          </div>
          <div className="card bg-neutral-50 text-center transition-transform hover:-translate-y-2">
            <h3 className="text-secondary-500 mb-6">{t('services.relaxation.title')}</h3>
            <p className="text-neutral-400 leading-relaxed">{t('services.relaxation.description')}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white text-center py-16 px-6">
        <h2 className="text-white mb-6">{t('contact.subtitle')}</h2>
        <p className="text-lg mb-8 opacity-90">{t('contact.description')}</p>
        <button className="bg-white text-secondary-500 text-lg px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-all hover:-translate-y-1">
          {t('common.book_appointment')}
        </button>
      </section>
    </div>
  );
};

export default Home;