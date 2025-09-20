import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici on implémentera l'envoi du formulaire
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-8">
      <section className="text-center py-16 px-6 bg-white">
        <h1 className="text-secondary-500 mb-4">{t('contact.title')}</h1>
        <p className="text-lg text-primary-400 font-semibold">{t('contact.subtitle')}</p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto py-16 px-6">
        <div className="card">
          <h2 className="text-secondary-500 mb-8">Get in Touch</h2>
          <div className="mb-8">
            <h3 className="text-primary-400 mb-4">{t('footer.address')}</h3>
            <p className="text-neutral-400 leading-relaxed">123 Wellness Street<br />1234 AB Amsterdam<br />Netherlands</p>
          </div>
          <div className="mb-8">
            <h3 className="text-primary-400 mb-4">{t('footer.hours')}</h3>
            <p className="text-neutral-400 leading-relaxed">
              Monday - Friday: 9:00 - 20:00<br />
              Saturday: 10:00 - 18:00<br />
              Sunday: 11:00 - 17:00
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-primary-400 mb-4">Contact</h3>
            <p className="text-neutral-400 leading-relaxed">
              Phone: +31 20 123 4567<br />
              Email: info@majorillegarden.nl
            </p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-secondary-500 mb-8">{t('contact.form.send')}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-semibold text-neutral-500">{t('contact.form.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold text-neutral-500">{t('contact.form.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block mb-2 font-semibold text-neutral-500">{t('contact.form.phone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-semibold text-neutral-500">{t('contact.form.message')}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="form-input"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              {t('contact.form.send')}
            </button>
          </form>
        </div>
      </section>

      {/* Calendly Integration Section */}
      <section className="bg-neutral-50 py-16 px-6 text-center">
        <h2 className="text-secondary-500 mb-4">{t('common.book_appointment')}</h2>
        <p className="text-neutral-400 mb-8">{t('contact.description')}</p>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-dashed border-neutral-200 py-16 px-8 rounded-lg text-center">
            <p className="text-neutral-400 mb-4">Calendly Widget will be integrated here</p>
            <p className="text-neutral-400 mb-8">Inline booking system for appointments</p>
            <button className="btn-primary">Open Calendly</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;