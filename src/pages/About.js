import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-8">
      <section className="text-center py-16 px-6 bg-white">
        <h1 className="text-secondary-500 mb-4">{t('about.title')}</h1>
        <h2 className="text-primary-400 font-serif italic">{t('about.subtitle')}</h2>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 px-6 max-w-6xl mx-auto">
        <div className="about-text">
          <p className="text-lg leading-7 text-neutral-400 mb-6">{t('about.description')}</p>
          <p className="text-lg leading-7 text-neutral-400 mb-6">{t('about.mission')}</p>
        </div>
        <div className="about-image">
          <div className="placeholder-image w-full h-80">
            About Image - Spa Interior
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <h2 className="text-center text-secondary-500 mb-16">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8">
            <h3 className="text-primary-400 mb-4">Authenticity</h3>
            <p className="text-neutral-400">Genuine Moroccan wellness traditions</p>
          </div>
          <div className="text-center p-8">
            <h3 className="text-primary-400 mb-4">Quality</h3>
            <p className="text-neutral-400">Premium natural products and expert care</p>
          </div>
          <div className="text-center p-8">
            <h3 className="text-primary-400 mb-4">Wellness</h3>
            <p className="text-neutral-400">Holistic approach to mind and body health</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;