import React from 'react';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 'argan-oil',
      name: 'Pure Argan Oil',
      nameNl: 'Pure Arganolie',
      description: 'Organic argan oil from Morocco, perfect for skin and hair care.',
      descriptionNl: 'Biologische arganolie uit Marokko, perfect voor huid- en haarverzorging.',
      price: '€24.99',
      image: 'argan-oil.jpg',
      category: 'Oils'
    },
    {
      id: 'moroccan-soap',
      name: 'Traditional Moroccan Black Soap',
      nameNl: 'Traditionele Marokkaanse Zwarte Zeep',
      description: 'Authentic black soap made with olive oil, perfect for hammam rituals.',
      descriptionNl: 'Authentieke zwarte zeep gemaakt met olijfolie, perfect voor hammam rituelen.',
      price: '€12.99',
      image: 'black-soap.jpg',
      category: 'Soaps'
    },
    {
      id: 'herbal-tea',
      name: 'Moroccan Mint Tea Blend',
      nameNl: 'Marokkaanse Muntthee Melange',
      description: 'Premium blend of mint and green tea, traditional Moroccan recipe.',
      descriptionNl: 'Premium melange van munt en groene thee, traditioneel Marokkaans recept.',
      price: '€8.99',
      image: 'mint-tea.jpg',
      category: 'Teas'
    },
    {
      id: 'rose-water',
      name: 'Organic Rose Water',
      nameNl: 'Biologisch Rozenwater',
      description: 'Natural rose water from Dadès Valley, perfect toner and refresher.',
      descriptionNl: 'Natuurlijk rozenwater uit de Dadès vallei, perfecte toner en verfrissing.',
      price: '€15.99',
      image: 'rose-water.jpg',
      category: 'Skincare'
    },
    {
      id: 'gift-set',
      name: 'Wellness Gift Set',
      nameNl: 'Wellness Cadeauset',
      description: 'Complete set with argan oil, black soap, and rose water.',
      descriptionNl: 'Complete set met arganolie, zwarte zeep en rozenwater.',
      price: '€45.99',
      image: 'gift-set.jpg',
      category: 'Sets'
    }
  ];

  return (
    <div className="pt-8">
      <section className="text-center py-16 px-6 bg-white">
        <h1 className="text-secondary-500 mb-4">{t('navigation.products')}</h1>
        <p className="text-lg text-neutral-400">Authentic Moroccan products for your home wellness routine</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-16 px-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-moroccan overflow-hidden transition-transform hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
              <div className="hero-gradient h-full text-white flex items-center justify-center font-semibold">
                {product.name} Image
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-secondary-500 mb-4">{product.name}</h3>
              <p className="text-neutral-400 leading-relaxed mb-6">{product.description}</p>
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-neutral-400 bg-neutral-50 px-3 py-1 rounded-lg">{product.category}</span>
                <span className="text-xl font-semibold text-primary-400">{product.price}</span>
              </div>
              <button className="btn-primary w-full">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-white py-16 px-6 mt-16">
        <h2 className="text-center text-secondary-500 mb-16">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8">
            <h3 className="text-primary-400 mb-4 text-lg">🚚 Free Shipping</h3>
            <p className="text-neutral-400">On orders over €50 within Netherlands</p>
          </div>
          <div className="text-center p-8">
            <h3 className="text-primary-400 mb-4 text-lg">📦 Fast Delivery</h3>
            <p className="text-neutral-400">1-3 business days delivery time</p>
          </div>
          <div className="text-center p-8">
            <h3 className="text-primary-400 mb-4 text-lg">💝 Gift Wrapping</h3>
            <p className="text-neutral-400">Beautiful packaging available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;