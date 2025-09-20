# 🌿 Majorille Garden - Moroccan Wellness Center

Welcome to **Majorille Garden**, a Moroccan-inspired wellness center that combines tradition, modernity, and natural care. Located in the heart of the Netherlands, our center invites you to experience a unique sensory journey inspired by the famous Merzouga sand baths of Morocco.

## ✨ Features

- **Multilingual Support**: English and Dutch
- **Responsive Design**: Mobile-first approach
- **Modern Tech Stack**: React 19 with React Router
- **Booking Integration**: Ready for Calendly integration
- **Product Showcase**: E-commerce ready structure

## 🏗️ Architecture

### Pages Structure
```
📄 Home - Hero section with services preview
📄 About - Company story and values  
📄 Services - Detailed service offerings
📄 Products - Moroccan wellness products
📄 Contact - Contact form and appointment booking
```

### Components Structure
```
🗂️ src/
├── 📁 components/
│   ├── 📁 common/          # Reusable components
│   │   ├── Header/         # Navigation header
│   │   ├── Footer/         # Site footer
│   │   ├── LanguageSwitch/ # EN/NL language toggle
│   │   └── CalendlyWidget/ # Appointment booking
│   ├── 📁 sections/        # Page-specific sections
│   └── 📁 ui/             # Basic UI components
├── 📁 pages/              # Main pages
├── 📁 locales/            # Translations (EN/NL)
├── 📁 styles/             # Global styles
└── 📁 assets/             # Images and icons
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd majorillegarden
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🌐 Internationalization

The application supports English and Dutch languages using `react-i18next`. Language files are located in:
- `src/locales/en/translation.json` (English)
- `src/locales/nl/translation.json` (Dutch)

## 📅 Calendly Integration

To integrate Calendly booking:

1. Create your Calendly account and set up event types
2. Replace the placeholder URL in `CalendlyWidget.js`:
```javascript
const calendlyUrl = 'https://calendly.com/your-username/appointment';
```
3. Customize the widget height and styling as needed

## 🛍️ E-commerce Integration

The product showcase is ready for e-commerce integration. Consider integrating:
- **Shopify** - For full e-commerce functionality
- **Stripe** - For payment processing
- **PayPal** - Alternative payment method

## 🎨 Styling

### Color Palette (Moroccan-inspired)
- **Primary**: `#d4a574` (Gold/Sand)
- **Secondary**: `#8b4513` (Terracotta)
- **Accent**: `#c4302b` (Moroccan Red)
- **Text**: `#2c1810` (Dark Brown)

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🚢 Deployment

### Build for production
```bash
npm run build
```

### Docker Deployment
The project includes Docker configuration:
```bash
docker-compose up -d
```

## 📝 Development Scripts

- `npm start` - Development server
- `npm test` - Run tests
- `npm run build` - Production build
- `npm run eject` - Eject from Create React App

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific settings:
```
REACT_APP_CALENDLY_URL=your-calendly-url
REACT_APP_API_URL=your-api-url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Majorille Garden**
- Website: [majorillegarden.nl](https://majorillegarden.nl)
- Email: info@majorillegarden.nl
- Phone: +31 20 123 4567

---

*Experience the magic of Moroccan wellness in the Netherlands* 🇲🇦 ❤️ 🇳🇱

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
