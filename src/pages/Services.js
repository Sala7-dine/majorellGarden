import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'sand_bath',
      title: t('services.sand_bath.title'),
      description: t('services.sand_bath.description'),
      price: '€89',
      duration: '60 min',
      benefits: [
        'Revitalizes the body',
        'Relieves muscle pain',
        'Improves circulation',
        'Detoxifies skin'
      ]
    },
    {
      id: 'massage',
      title: t('services.massage.title'),
      description: t('services.massage.description'),
      price: 'From €65',
      duration: '45-90 min',
      benefits: [
        'Deep relaxation',
        'Stress relief',
        'Improved flexibility',
        'Pain management'
      ]
    },
    {
      id: 'relaxation',
      title: t('services.relaxation.title'),
      description: t('services.relaxation.description'),
      price: 'Various',
      duration: 'Flexible',
      benefits: [
        'Natural products',
        'Artisanal quality',
        'Take-home experience',
        'Authentic Moroccan goods'
      ]
    }
  ];

  return (
    <div className="pt-8">
      <section className="text-center py-16 px-6 bg-white">
        <h1 className="text-secondary-500 mb-4">{t('services.title')}</h1>
        <p className="text-lg text-neutral-400">Discover our range of authentic wellness treatments</p>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 border-b border-neutral-200 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="placeholder-image w-full h-80">
                {service.title} Image
              </div>
            </div>
            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <h2 className="text-secondary-500 mb-6">{service.title}</h2>
              <p className="text-lg leading-7 text-neutral-400 mb-6">{service.description}</p>
              <div className="flex gap-8 mb-6">
                <span className="text-xl font-semibold text-primary-400">{service.price}</span>
                <span className="text-neutral-400 italic">{service.duration}</span>
              </div>
              <div className="mb-6">
                <h4 className="text-secondary-500 mb-4">Benefits:</h4>
                <ul className="list-none p-0">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-neutral-400 mb-2 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary-400 before:font-bold">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn-primary">
                {t('common.book_appointment')}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;