import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';


const Header = () => {
  // const { t } = useTranslation(); // TODO: Re-add when using translations
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const location = useLocation();

  // Navigation items
  const navigationItems = [
    { path: '/', label: 'Home', hasDropdown: false },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/pages', label: 'Pages', hasDropdown: false },
    { path: '/contact', label: 'Contact Us' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on home page and should show transparent header
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const shouldShowTransparent = (isHomePage || isAboutPage) && !isScrolled;

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Logo Component
  const Logo = () => (
    <Link to="/" className="flex items-center space-x-3 no-underline" onClick={closeMobileMenu}>
      <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-amber-700 rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L14.26 13.09L16 22L12 19L8 22L9.74 13.09L2 9L10.91 8.26L12 2Z"/>
        </svg>
      </div>
      <span className={`text-xl font-semibold transition-colors duration-300 ${
        shouldShowTransparent ? 'text-white' : 'text-amber-900'
      }`}>
        Majorille Garden
      </span>
    </Link>
  );

  // Navigation Link Component
  const NavLink = ({ path, label, hasDropdown = false, mobile = false }) => {
    const isActive = location.pathname === path;
    
    if (mobile) {
      return (
        <Link
          to={path}
          className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 no-underline ${
            isActive 
              ? "bg-orange-100 text-orange-700 font-semibold" 
              : "text-amber-800 hover:bg-orange-50 hover:text-orange-600 hover:translate-x-2"
          }`}
          onClick={closeMobileMenu}
        >
          {label}
          {hasDropdown && <span className="ml-1">▾</span>}
        </Link>
      );
    }

    return (
      <Link
        to={path}
        className={`relative font-medium transition-all duration-300 no-underline flex items-center ${
          shouldShowTransparent 
            ? `text-white hover:text-orange-200 ${isActive ? "text-orange-200 font-semibold" : ""}`
            : `text-amber-800 hover:text-orange-600 ${isActive ? "text-orange-600 font-semibold" : ""}`
        }`}
        onClick={mobile ? closeMobileMenu : undefined}
      >
        {label}
        {hasDropdown && <span className="ml-1 text-sm">▾</span>}
      </Link>
    );
  };

  // Mobile Menu Backdrop
  const MobileMenuBackdrop = () => (
    screenWidth < 1024 && (
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          mobileMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      />
    )
  );

  return (
    <>
      <header className={`${shouldShowTransparent ? 'absolute' : 'sticky'} top-0 w-full z-50 transition-all duration-300 ${
        shouldShowTransparent ? 'bg-transparent' : 'shadow-lg backdrop-blur-sm bg-white/95'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />
            
            {/* Desktop Navigation */}
            {screenWidth >= 1024 && (
              <nav className="block">
                <ul className="flex items-center space-x-8 list-none m-0 p-0">
                  {navigationItems.map((item) => (
                    <li key={item.path}>
                      <NavLink path={item.path} label={item.label} hasDropdown={item.hasDropdown} />
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            
            {/* Desktop Actions */}
            {screenWidth >= 1024 && (
              <div className="flex items-center space-x-6">
                <LanguageSwitch />
                <Link 
                  to="/contact" 
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 no-underline flex items-center space-x-2 ${
                    shouldShowTransparent 
                      ? 'bg-white/20 text-white border border-white/30 hover:bg-white hover:text-amber-900 backdrop-blur-sm'
                      : 'bg-amber-800 text-white hover:bg-amber-900'
                  }`}
                >
                  <span>Book Appointment</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            {screenWidth < 1024 && (
              <button 
                className={`relative z-50 p-2 rounded-lg transition-all duration-300 border-2 border-transparent focus:border-orange-400 focus:outline-none ${
                  mobileMenuOpen 
                    ? 'bg-orange-100 text-orange-600' 
                    : shouldShowTransparent 
                      ? 'hover:bg-white/20 text-white backdrop-blur-sm'
                      : 'hover:bg-gray-100 text-amber-800'
                }`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`} />
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 my-1.5 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`} />
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`} />
                </div>
              </button>
            )}
          </div>
        </div>

        
        {/* Mobile Menu */}
        {screenWidth < 1024 && (
          <div className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-neutral-50 z-40 transform transition-transform duration-300 ease-in-out shadow-2xl ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <Logo />
              <button 
                onClick={closeMobileMenu}
                className="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 overflow-y-auto py-6">
              <div className="px-4 space-y-2">
                {navigationItems.map((item) => (
                  <NavLink 
                    key={item.path} 
                    path={item.path} 
                    label={item.label} 
                    mobile={true} 
                  />
                ))}
              </div>
            </nav>
            
            {/* Mobile Actions */}
            <div className="border-t border-neutral-200 p-4 space-y-4">
              <div className="flex justify-center">
                <LanguageSwitch />
              </div>
              <Link 
                to="/contact" 
                className="bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-amber-900 block no-underline"
                onClick={closeMobileMenu}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
        )}
      </header>
      
      {/* Mobile Menu Backdrop */}
      <MobileMenuBackdrop />
    </>
  );
};

export default Header;