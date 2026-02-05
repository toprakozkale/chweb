<div align="center">
  <img src="assets/img/CHLOGO2.jpeg" alt="Can Hoca Logo" width="200"/>
  
  # Can Hoca - Elite Athletic Coaching
  
  [![Live Demo](https://img.shields.io/badge/demo-live-success)](https://canhoca.com)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
  
  **Professional sports coaching and performance consulting website**
  
  [Live Demo](https://canhoca.com) · [Report Bug](https://github.com/yourusername/canhoca/issues) · [Request Feature](https://github.com/yourusername/canhoca/issues)
</div>

---

## 📋 About The Project

Can Hoca is a modern, SEO-optimized website for an elite athletic coach and performance consultant. The site showcases coaching services, athlete success stories, and provides easy contact options through WhatsApp integration.

### ✨ Key Features

- 🎯 **SEO Optimized** - Rich meta tags, Open Graph, Twitter Cards, and Schema.org markup
- 📱 **Fully Responsive** - Mobile-first design with smooth animations
- ⚡ **High Performance** - Optimized assets with aggressive caching strategies
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🔗 **Social Integration** - Direct WhatsApp contact and Instagram links
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📸 **Media Gallery** - Showcase training videos and nutrition programs
- 📅 **Appointment System** - Integrated calendar for booking consultations

---

## 🛠️ Built With

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Tailwind CSS
- **Vanilla JavaScript** - No framework dependencies

### Libraries & Tools
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [GSAP](https://greensock.com/gsap/) - Professional-grade animation
- [Google Fonts](https://fonts.google.com/) - Lexend font family
- [Material Symbols](https://fonts.google.com/icons) - Icon library

### Deployment
- [Vercel](https://vercel.com/) / [Netlify](https://netlify.com/) - Hosting platform
- GitHub Actions - CI/CD pipeline

---

## 🚀 Getting Started

### Prerequisites

No build tools required! This is a static website that runs directly in the browser.

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/canhoca.git
   cd canhoca
   ```

2. **Start a local server**
   ```bash
   # Using Python 3
   python3 -m http.server 8080
   
   # Or using Node.js
   npx serve
   
   # Or using PHP
   php -S localhost:8080
   ```

3. **Open in browser**
   ```
   http://localhost:8080
   ```

### Production Deployment

#### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

Or simply connect your GitHub repository to Vercel/Netlify for automatic deployments.

---

## 📁 Project Structure

```
canhoca/
├── assets/
│   └── img/              # Images and media files
├── index.html            # Homepage
├── about.html            # About page
├── gallery.html          # Media gallery
├── contact.html          # Contact & appointment page
├── main.js               # JavaScript animations and interactions
├── style.css             # Additional custom styles
├── vercel.json           # Vercel deployment config
├── netlify.toml          # Netlify deployment config
└── README.md             # This file
```

---

## 🎨 Features Breakdown

### SEO & Meta Tags
- Comprehensive Open Graph tags for social sharing
- Twitter Card support
- Schema.org Person markup with `sameAs` properties
- Canonical URLs and proper meta descriptions

### Performance
- Aggressive browser caching (1 year for static assets)
- Optimized images and lazy loading
- Minified CSS and JavaScript
- CDN delivery via Vercel/Netlify

### Accessibility
- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast ratios

### Security
- Content Security Policy headers
- XSS protection
- Clickjacking prevention
- HTTPS enforcement

---

## 📊 Performance Metrics

| Metric | Score |
|--------|-------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

*Tested with Google Lighthouse*

---

## 🔧 Configuration

### Updating Contact Information

Edit the following in HTML files:

```html
<!-- WhatsApp Number -->
<a href="https://wa.me/905458779222">

<!-- Instagram Profile -->
<a href="https://www.instagram.com/canhoca0">

<!-- Phone Number -->
<a href="tel:05458779222">
```

### Customizing Colors

Edit `tailwind.config` in HTML files:

```javascript
colors: {
  "primary": "#e21836",        // Main brand color
  "background-light": "#f8f6f6", // Light mode background
  "background-dark": "#1a0d0e",  // Dark mode background
}
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Contact

**Can Hoca**

- Website: [canhoca.com](https://canhoca.com)
- Instagram: [@canhoca0](https://www.instagram.com/canhoca0)
- WhatsApp: [+90 545 877 92 22](https://wa.me/905458779222)

---

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the amazing utility framework
- [GSAP](https://greensock.com/) for smooth animations
- [Vercel](https://vercel.com/) for seamless deployment
- All the athletes who trusted in the coaching process

---

<div align="center">
  Made with ❤️ by Can Hoca
  
  ⭐ Star this repo if you find it helpful!
</div>
