import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className=" ">
      {/* Hero Section - Full viewport from top */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat flex items-center  pt-20"
        style={{
          backgroundImage: `url('https://demo.awaikenthemes.com/spawell/wellness-center/wp-content/uploads/2025/07/hero-img.jpg')`,
          height: '100vh'
        }}
      >
        {/* Gradient Overlay - Opacity effect from left to right */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(182, 102, 18, 0.9) 0%, rgba(170, 107, 58, 0.7) 30%, rgba(182, 102, 18, 0.5) 50%, rgba(170, 107, 58, 0.2) 70%, transparent 100%)`
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Relax, recharge, and reconnect with inner{' '}
              <span className="italic font-light">peace today</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-xl">
              Step into a haven of calm where every treatment is designed to tension, 
              renew your energy, and restore a deep sense of inner peace.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <button className="px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2" style={{backgroundColor: '#faf0f0', color: '#090403'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#b8b8b8'} onMouseLeave={(e) => e.target.style.backgroundColor = '#faf0f0'}>
                <span>Book An Appointment</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="border-2 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2" style={{borderColor: '#faf0f0'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#faf0f0'; e.target.style.color = '#090403'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'}}>
                <span>Our Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* About Us Section - Modern Design */}
      <section className="relative py-24 px-6 overflow-hidden" style={{backgroundColor: '#faf0f0'}}>
        {/* Background with gradient */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom right, rgba(170, 107, 58, 0.1), rgba(182, 102, 18, 0.1), rgba(250, 240, 240, 0.3))'}}></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full blur-3xl" style={{backgroundColor: 'rgba(170, 107, 58, 0.2)'}}></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full blur-3xl" style={{backgroundColor: 'rgba(182, 102, 18, 0.2)'}}></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              {/* Floating badge */}
              <div className="inline-flex items-center backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-8" style={{backgroundColor: 'rgba(250, 240, 240, 0.9)'}}>
                <div className="w-3 h-3 rounded-full mr-3 animate-pulse" style={{background: 'linear-gradient(to right, #aa6b3a, #b66612)'}}></div>
                <span className="font-semibold text-sm tracking-wide" style={{color: '#b66612'}}>✨ About Our Journey</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                <span style={{color: '#b66612'}}>Wellness</span>{' '}
                <span style={{color: '#090403'}}>meets</span>{' '}
                <span className="italic" style={{background: 'linear-gradient(to right, #aa6b3a, #b66612)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>artistry</span>
              </h2>

              {/* Description */}
              <p className="text-lg mb-8 leading-relaxed" style={{color: '#090403'}}>
                Découvrez une expérience spa unique où chaque soin est une œuvre d'art dédiée à votre bien-être. 
                Nos thérapeutes experts créent des moments de pure sérénité.
              </p>

         
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="group text-white px-6 py-3 rounded-xl font-medium transition-all duration-500 hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2" style={{background: 'linear-gradient(to right, #aa6b3a, #b66612)'}}>
                  <span>Découvrir nos soins</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <button className="group border-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2" style={{borderColor: '#b66612', color: '#b66612'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#b66612'; e.target.style.color = 'white'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#b66612'}}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M12 9v1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Notre équipe</span>
                </button>
              </div>
            </div>

            {/* Right Side - Side by Side Large Images */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative h-[600px]">
                
                {/* Background decorative shapes */}
                <div className="absolute top-8 left-8 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{background: 'linear-gradient(to bottom right, rgba(170, 107, 58, 0.3), rgba(182, 102, 18, 0.2))'}}></div>
                <div className="absolute bottom-8 right-8 w-72 h-72 rounded-full opacity-25 blur-3xl" style={{background: 'linear-gradient(to top left, rgba(182, 102, 18, 0.3), rgba(184, 184, 184, 0.2))'}}></div>
                
                {/* Two Large Images Side by Side */}
                <div className="flex gap-6 h-full items-center">
                  
                  {/* Left Large Image */}
                  <div className="flex-1 h-5/6 transform rotate-2 hover:rotate-6 transition-transform duration-700 z-10">
                    <img 
                      src="https://demo.awaikenthemes.com/spawell/wellness-center/wp-content/uploads/2025/07/about-img-1.jpg"
                      alt="Spa massage therapy"
                      className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-900/20 rounded-3xl"></div>
                  </div>
                  
                  {/* Right Large Image */}
                  <div className="flex-1 h-5/6 transform -rotate-2 hover:-rotate-6 transition-transform duration-700 z-10">
                    <img 
                      src="https://demo.awaikenthemes.com/spawell/wellness-center/wp-content/uploads/2025/07/about-img-1-252x300.jpg"
                      alt="Relaxing spa environment"
                      className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                    />
                    <div className="absolute inset-0 rounded-3xl" style={{background: 'linear-gradient(to bottom left, transparent, transparent, rgba(182, 102, 18, 0.2))'}}></div>
                  </div>
                </div>
                
                {/* Floating star element */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="backdrop-blur-sm rounded-full p-4 shadow-xl" style={{backgroundColor: 'rgba(250, 240, 240, 0.95)', borderColor: 'rgba(184, 184, 184, 0.5)', border: '1px solid'}}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(to right, #aa6b3a, #b66612)'}}>
                      <svg className="w-7 h-7 text-white animate-spin" style={{animationDuration: '8s'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Experience badge - repositioned center bottom */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="backdrop-blur-sm rounded-3xl px-8 py-6 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{backgroundColor: 'rgba(250, 240, 240, 0.95)', borderColor: 'rgba(184, 184, 184, 0.5)', border: '1px solid'}}>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3" style={{background: 'linear-gradient(to right, #aa6b3a, #b66612)'}}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="text-3xl font-bold" style={{color: '#b66612'}}>15+</div>
                      </div>
                      <div className="text-base font-semibold" style={{color: '#090403'}}>Années d'expertise</div>
                      <div className="text-sm" style={{color: '#b66612'}}>en soins wellness</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating particles around images */}
                <div className="absolute top-24 left-8 w-4 h-4 rounded-full animate-bounce opacity-70" style={{backgroundColor: '#aa6b3a'}}></div>
                <div className="absolute bottom-24 right-8 w-3 h-3 rounded-full animate-pulse opacity-80" style={{backgroundColor: '#b66612'}}></div>
                <div className="absolute top-1/2 left-4 w-5 h-5 rounded-full animate-ping opacity-60" style={{backgroundColor: '#b8b8b8'}}></div>
                <div className="absolute top-1/2 right-4 w-3 h-3 rounded-full animate-bounce opacity-75" style={{backgroundColor: '#aa6b3a'}}></div>
                
                {/* Contact floating button - repositioned between images */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
                  <button className="group rounded-full w-20 h-20 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500 border-4" style={{background: 'linear-gradient(to right, #aa6b3a, #b66612)', borderColor: '#faf0f0'}}>
                    <svg className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-6" style={{backgroundColor: '#faf0f0'}}>
        <h2 className="text-center mb-16" style={{color: '#b66612'}}>{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card text-center transition-transform hover:-translate-y-2" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)', padding: '2rem', borderRadius: '1rem'}}>
            <h3 className="mb-6" style={{color: '#b66612'}}>{t('services.sand_bath.title')}</h3>
            <p className="leading-relaxed" style={{color: '#090403'}}>{t('services.sand_bath.description')}</p>
          </div>
          <div className="card text-center transition-transform hover:-translate-y-2" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)', padding: '2rem', borderRadius: '1rem'}}>
            <h3 className="mb-6" style={{color: '#b66612'}}>{t('services.massage.title')}</h3>
            <p className="leading-relaxed" style={{color: '#090403'}}>{t('services.massage.description')}</p>
          </div>
          <div className="card text-center transition-transform hover:-translate-y-2" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)', padding: '2rem', borderRadius: '1rem'}}>
            <h3 className="mb-6" style={{color: '#b66612'}}>{t('services.relaxation.title')}</h3>
            <p className="leading-relaxed" style={{color: '#090403'}}>{t('services.relaxation.description')}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white text-center py-16 px-6" style={{background: 'linear-gradient(135deg, #b66612, #aa6b3a)'}}>
        <h2 className="text-white mb-6">{t('contact.subtitle')}</h2>
        <p className="text-lg mb-8 opacity-90">{t('contact.description')}</p>
        <button className="text-lg px-8 py-4 rounded-lg font-semibold transition-all hover:-translate-y-1" style={{backgroundColor: '#faf0f0', color: '#b66612'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#b8b8b8'} onMouseLeave={(e) => e.target.style.backgroundColor = '#faf0f0'}>
          {t('common.book_appointment')}
        </button>
      </section>
    </div>
  );
};

export default Home;