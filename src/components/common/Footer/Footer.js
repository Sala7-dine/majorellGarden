import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-white py-16 px-6" style={{backgroundColor: '#8B4513'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Left Section - Logo and Contact */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" style={{color: '#8B4513'}} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">Spawell</span>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="text-white font-semibold mb-3">Toll free customer care</h4>
              <p className="text-2xl font-bold text-white">+1 (246) 333-0085</p>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-3">Need live support!</h4>
              <p className="text-white">support@domain.com</p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow On</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" style={{color: '#8B4513'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" style={{color: '#8B4513'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" style={{color: '#8B4513'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" style={{color: '#8B4513'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.343c-.091.378-.293 1.194-.334 1.362-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter email address"
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" style={{color: '#8B4513'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Our Charity Links */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4">Our Charity</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Healing Therapy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Herbal Body Scrub & Wrap</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Rejuvenating Facial Therapy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Signature Full-Body</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Help</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Term's & Condition</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">Copyright © 2025 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;