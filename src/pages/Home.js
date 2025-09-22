import React from 'react';
import { useTranslation } from 'react-i18next';
import benefitsImage from '../assets/images/image1.png';

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
            background: `linear-gradient(to right, rgba(105, 71, 45, 0.9) 0%, rgba(170, 107, 58, 0.7) 30%, rgba(122, 79, 32, 0.5) 50%, rgba(170, 107, 58, 0.2) 70%, transparent 100%)`
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
      <section className="relative py-24 px-6 overflow-hidden bg-white">
        {/* Background with gradient */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom right, rgba(170, 107, 58, 0.05), rgba(182, 102, 18, 0.05), rgba(255, 255, 255, 0.8))'}}></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full blur-3xl" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)'}}></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full blur-3xl" style={{backgroundColor: 'rgba(182, 102, 18, 0.1)'}}></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              {/* Floating badge */}
              <div className="inline-flex items-center backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-8" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)'}}>
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
                  <div className="backdrop-blur-sm rounded-full p-4 shadow-xl bg-white" style={{borderColor: 'rgba(170, 107, 58, 0.3)', border: '1px solid'}}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(to right, #aa6b3a, #b66612)'}}>
                      <svg className="w-7 h-7 text-white animate-spin" style={{animationDuration: '8s'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Experience badge - repositioned center bottom */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="backdrop-blur-sm rounded-3xl px-8 py-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-white" style={{borderColor: 'rgba(170, 107, 58, 0.3)', border: '1px solid'}}>
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

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-8" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)'}}>
                <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#b66612'}}></div>
                <span className="font-semibold text-sm tracking-wide" style={{color: '#b66612'}}>Why Choose Us</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6" style={{color: '#090403'}}>
                Where healing, comfort, and{' '}
                <span className="italic" style={{color: '#b66612'}}>luxury come together</span>
              </h2>

              {/* Description */}
              <p className="text-lg mb-8 leading-relaxed" style={{color: '#090403', opacity: '0.8'}}>
                At our spa, you're more than a client — you're family. Our experienced therapists bring 
                compassion, skill, and personalized attention to every treatment.
              </p>

              {/* Services List */}
              <div className="space-y-8">
                {/* Hot Stone Therapy */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)'}}>
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center" style={{borderColor: '#b66612'}}>
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#b66612'}}></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3" style={{color: '#b66612'}}>
                      Hot Stone Therapy
                    </h3>
                    <p className="text-base leading-relaxed" style={{color: '#090403', opacity: '0.8'}}>
                      Experience the warmth of volcanic stones placed on key points to release 
                      tension and promote deep relaxation.
                    </p>
                  </div>
                </div>

                {/* Wellness Consultation */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)'}}>
                    <svg className="w-6 h-6" style={{color: '#b66612'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3" style={{color: '#b66612'}}>
                      Wellness Consultation & Personal Plan
                    </h3>
                    <p className="text-base leading-relaxed" style={{color: '#090403', opacity: '0.8'}}>
                      Meet with our wellness experts to create a custom self-care routine based on 
                      your goals and lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://demo.awaikenthemes.com/spawell/wellness-center/wp-content/uploads/2025/07/why-choose-us-image.jpg"
                  alt="Spa massage therapy treatment"
                  className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 rounded-3xl" style={{background: 'linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(182, 102, 18, 0.1) 100%)'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Benefits Section */}
      <section className="py-24 px-6" style={{backgroundColor: '#8B4513'}}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6" style={{backgroundColor: 'rgba(250, 240, 240, 0.1)'}}>
              <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#faf0f0'}}></div>
              <span className="font-semibold text-sm tracking-wide text-white">Our Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Wellness benefits that soothe, heal,
            </h2>
            <p className="text-2xl lg:text-3xl font-light italic text-white">
              and uplift every guest
            </p>
          </div>

          {/* Benefits Grid with Central Image */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Left Column */}
            <div className="space-y-12">
              {/* Personalized Wellness Plans */}
              <div className="text-right lg:text-right">
                <div className="flex items-center justify-end mb-4">
                  <h3 className="text-xl font-semibold text-white mr-4">Personalized Wellness Plans</h3>
                  <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Tailored treatments to meet your unique health and relaxation needs.
                </p>
              </div>

              {/* Natural & Organic Products */}
              <div className="text-right lg:text-right">
                <div className="flex items-center justify-end mb-4">
                  <h3 className="text-xl font-semibold text-white mr-4">Natural & Organic Products</h3>
                  <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  We use only clean, skin-safe, and eco-friendly ingredients.
                </p>
              </div>

              {/* Tranquil, Hygienic Environment */}
              <div className="text-right lg:text-right">
                <div className="flex items-center justify-end mb-4">
                  <h3 className="text-xl font-semibold text-white mr-4">Tranquil, Hygienic Environment</h3>
                  <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Enjoy peace of mind and total serenity in our spa sanctuary.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="https://demo.awaikenthemes.com/spawell/wellness-center/wp-content/uploads/2025/07/our-benefit-img.jpg"
                    alt="Spa wellness treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative candles around the image */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-yellow-300 rounded-full opacity-70"></div>
                <div className="absolute top-1/4 -left-6 w-4 h-4 bg-yellow-500 rounded-full opacity-60"></div>
                <div className="absolute bottom-1/4 -right-6 w-5 h-5 bg-yellow-400 rounded-full opacity-75"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Wide Range of Services */}
              <div className="text-left lg:text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Wide Range of Services</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  From massages and facials to holistic therapies and wellness coaching.
                </p>
              </div>

              {/* Holistic Wellness Approach */}
              <div className="text-left lg:text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Holistic Wellness Approach</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  We treat the whole you — not just symptoms — with a focus on mind, body, and spirit.
                </p>
              </div>

              {/* Flexible Appointments */}
              <div className="text-left lg:text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Flexible Appointments</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Convenient scheduling that fits your lifestyle — online or in-person.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)'}}>
              <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#b66612'}}></div>
              <span className="font-semibold text-sm tracking-wide" style={{color: '#b66612'}}>Our Programs</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4" style={{color: '#090403'}}>
              Holistic programs to restore
            </h2>
            <p className="text-2xl lg:text-3xl font-light italic" style={{color: '#b66612'}}>
              balance and vitality
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Relaxation & Stress Relief Program */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl">
              <div className="relative h-80">
                <img 
                  src="https://demo.awaikenthemes.com/spawell/wellness-center/wp-content/uploads/2025/07/case-study-3.jpg"
                  alt="Relaxation & Stress Relief Program"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    Relaxation & Stress Relief Program
                  </h3>
                  
                  {/* Arrow Button */}
                  <div className="flex justify-end mt-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/90 cursor-pointer">
                      <svg className="w-5 h-5" style={{color: '#b66612'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skin Rejuvenation Program */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl">
              <div className="relative h-80">
                <img 
                  src="https://demo.awaikenthemes.com/spawell/wellness-center/wp-content/uploads/2025/07/case-study-3.jpg"
                  alt="Skin Rejuvenation Program"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    Skin Rejuvenation Program
                  </h3>
                  
                  {/* Arrow Button */}
                  <div className="flex justify-end mt-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/90 cursor-pointer">
                      <svg className="w-5 h-5" style={{color: '#b66612'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Wellness Memberships */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl">
              <div className="relative h-80">
                <img 
                  src="https://demo.awaikenthemes.com/spawell/wellness-center/wp-content/uploads/2025/07/case-study-3.jpg"
                  alt="Monthly Wellness Memberships"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    Monthly Wellness Memberships
                  </h3>
                  
                  {/* Arrow Button */}
                  <div className="flex justify-end mt-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/90 cursor-pointer">
                      <svg className="w-5 h-5" style={{color: '#b66612'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6" style={{backgroundColor: '#8B4513'}}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-start justify-between mb-16">
            <div className="flex-1">
              <div className="inline-flex items-center backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6" style={{backgroundColor: 'rgba(250, 240, 240, 0.1)'}}>
                <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#faf0f0'}}></div>
                <span className="font-semibold text-sm tracking-wide text-white">Testimonials</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                Heartfelt stories of hope and
              </h2>
              <p className="text-2xl lg:text-3xl font-light italic text-white">
                success
              </p>
            </div>
            
            {/* Google Rating Card */}
            <div className="hidden lg:block ml-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Google Rating</div>
                    <div className="flex items-center space-x-1">
                      <span className="text-white text-lg font-bold">5.0</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-white font-bold text-lg">5k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Testimonial 1 - Jenny Wilson */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Jenny Wilson</h4>
                  <p className="text-white/80 text-sm">Senior Esthetician</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>
              <p className="text-white leading-relaxed">
                "My monthly massage here is my favorite self-care ritual. Their team knows exactly what I need every time."
              </p>
            </div>

            {/* Testimonial 2 - Theresa Webb */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-400 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Theresa Webb</h4>
                  <p className="text-white/80 text-sm">IVF Specialist</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>
              <p className="text-white leading-relaxed">
                "My monthly massage here is my favorite self-care ritual. Their team knows exactly what I need every time."
              </p>
            </div>

            {/* Testimonial 3 - Darlene Robertson */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-500 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Darlene Robertson</h4>
                  <p className="text-white/80 text-sm">Wellness Coach</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>
              <p className="text-white leading-relaxed">
                "My monthly massage here is my favorite self-care ritual. Their team knows exactly what I need every time."
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-3">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/40 rounded-full"></div>
            <div className="w-3 h-3 bg-white/40 rounded-full"></div>
            <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-8" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)'}}>
            <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#b66612'}}></div>
            <span className="font-semibold text-sm tracking-wide" style={{color: '#b66612'}}>Ready to Transform</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6" style={{color: '#090403'}}>
            Ready to experience wellness?
          </h2>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl font-light italic mb-8" style={{color: '#b66612'}}>
            Your journey to inner peace starts here
          </p>

          {/* Description */}
          <p className="text-lg mb-12 leading-relaxed max-w-2xl mx-auto" style={{color: '#090403', opacity: '0.8'}}>
            Book your personalized wellness experience today and discover the perfect balance 
            of relaxation, rejuvenation, and holistic healing that your mind and body deserve.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg" style={{backgroundColor: '#b66612', color: '#faf0f0'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#aa6b3a'} onMouseLeave={(e) => e.target.style.backgroundColor = '#b66612'}>
              Book An Appointment
            </button>
            <button className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1" style={{borderColor: '#b66612', color: '#b66612'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#b66612'; e.target.style.color = '#faf0f0'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#b66612'}}>
              View Our Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)'}}>
                <svg className="w-6 h-6" style={{color: '#b66612'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold" style={{color: '#090403'}}>Certified Therapists</p>
                <p className="text-sm" style={{color: '#090403', opacity: '0.7'}}>Professional & Licensed</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)'}}>
                <svg className="w-6 h-6" style={{color: '#b66612'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold" style={{color: '#090403'}}>Flexible Scheduling</p>
                <p className="text-sm" style={{color: '#090403', opacity: '0.7'}}>Book Online 24/7</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(170, 107, 58, 0.1)'}}>
                <svg className="w-6 h-6" style={{color: '#b66612'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold" style={{color: '#090403'}}>5-Star Reviews</p>
                <p className="text-sm" style={{color: '#090403', opacity: '0.7'}}>Trusted by 5k+ Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;