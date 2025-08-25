# محامي الهجرة والجنسية | Immigration & Citizenship Attorney

موقع ويب احترافي لمحامي الهجرة والجنسية متخصص في ألمانيا والاتحاد الأوروبي.

A professional website for an immigration and citizenship attorney specialized in Germany and the European Union.

## 🌟 الميزات | Features

### 🎯 الوظائف الأساسية | Core Functionality
- **دعم متعدد اللغات** - Arabic (RTL) + English support
- **تصميم متجاوب** - Responsive design for all devices
- **استمارة تواصل متعددة الخطوات** - Multi-step contact form
- **قسم أسئلة شائعة تفاعلي** - Interactive FAQ section
- **شهادات العملاء** - Client testimonials
- **أزرار الدعوة للفعل** - Strategic call-to-action buttons

### 🎨 التصميم | Design
- **نظافة وحداثة** - Clean, modern design
- **ألوان مهنية** - Professional color scheme
- **خطوط عربية محسّنة** - Optimized Arabic fonts
- **تباين عالي** - High contrast for accessibility
- **رسوم متحركة لطيفة** - Smooth animations

### 📱 التجربة المستخدم | User Experience
- **تنقل سهل** - Intuitive navigation
- **أزرار واتساب عائمة** - Floating WhatsApp button
- **تحميل سريع** - Fast loading times
- **تحسين SEO** - SEO optimized
- **إمكانية الوصول** - Accessibility features

## 🚀 البدء السريع | Quick Start

1. **استنساخ المشروع | Clone the repository**
```bash
git clone [repository-url]
cd lawyer-website
```

2. **فتح الموقع | Open the website**
```bash
# Open index.html for Arabic version
# Open en.html for English version
```

3. **تخصيص المحتوى | Customize content**
- Update contact information
- Replace placeholder images
- Modify service descriptions
- Add actual testimonials

## 📁 هيكل المشروع | Project Structure

```
lawyer-website/
├── index.html          # الصفحة الرئيسية (عربي)
├── en.html            # English homepage
├── css/
│   ├── style.css      # الأنماط الرئيسية
│   └── rtl.css        # أنماط RTL للعربية
├── js/
│   └── main.js        # وظائف JavaScript
├── assets/
│   ├── images/        # الصور (تحتاج للتحديث)
│   └── favicon.ico    # أيقونة الموقع
└── README.md          # هذا الملف
```

## 🔧 التخصيص | Customization

### 📞 معلومات الاتصال | Contact Information
Update the following in both `index.html` and `en.html`:
- Phone numbers
- Email addresses
- Office address
- Social media links

### 🎨 الألوان والخطوط | Colors & Fonts
Modify CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #1E3A8A;    /* اللون الأساسي */
    --secondary-color: #F59E0B;   /* اللون الثانوي */
    --accent-color: #059669;      /* لون التأكيد */
}
```

### 📷 الصور | Images
The website now includes custom-designed logos and graphics:

**🎨 الشعارات المُصممة | Designed Logos:**
- `logo.svg` - الشعار الرئيسي (Main logo)
- `logo-compact.svg` - شعار مضغوط للرأس (Compact header logo)
- `favicon.svg` - أيقونة الموقع (Website favicon)
- `hero-image.svg` - رسم توضيحي للقسم الرئيسي (Hero section illustration)

**📸 الصور المطلوبة للاستبدال | Images to Replace:**
- `attorney-photo.jpg` - صورة المحامي الشخصية (Attorney professional photo)
- `client1.jpg`, `client2.jpg`, `client3.jpg` - صور العملاء (Client photos)

**🎨 عناصر التصميم | Design Elements:**
- **الجواز**: يرمز للهجرة والسفر
- **ميزان العدالة**: يرمز للقانون والعدالة  
- **الألوان**: أزرق داكن (ثقة) + ذهبي (تميز) + أخضر (نجاح)

## 🌐 GitHub Pages النشر | Deployment

1. **رفع إلى GitHub | Push to GitHub**
```bash
git add .
git commit -m "Initial website setup"
git push origin main
```

2. **تفعيل GitHub Pages | Enable GitHub Pages**
- Go to repository Settings
- Scroll to "Pages" section
- Select "Source: Deploy from a branch"
- Choose "main" branch
- Click "Save"

3. **الوصول للموقع | Access website**
Your website will be available at: `https://[username].github.io/[repository-name]`

## 📱 الميزات المتقدمة | Advanced Features

### 📊 تتبع Google Analytics
Add your GA4 tracking code before `</head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 📧 استمارة الاتصال | Contact Form
The form is currently set up for front-end only. To make it functional:

1. **Use a form service** (Netlify Forms, Formspree, etc.)
2. **Set up a backend API**
3. **Use serverless functions**

Example with Netlify Forms:
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

### 🔒 HTTPS وSSL | HTTPS & SSL
GitHub Pages automatically provides HTTPS. For custom domains:
1. Add your domain in repository settings
2. Enable "Enforce HTTPS"

## 🛠️ الصيانة | Maintenance

### 📝 المحتوى | Content Updates
- Update legal information regularly
- Add new blog posts
- Refresh testimonials
- Update service descriptions

### 🔄 التحديثات التقنية | Technical Updates
- Monitor Core Web Vitals
- Update dependencies
- Test across devices
- Check accessibility compliance

## 📞 الدعم | Support

### 🆘 المساعدة | Getting Help
- Check browser console for errors
- Validate HTML/CSS
- Test on multiple devices
- Use lighthouse for performance audit

### 🐛 الأخطاء الشائعة | Common Issues
1. **Images not loading**: Check file paths
2. **Fonts not displaying**: Verify Google Fonts connection
3. **Form not working**: Set up backend processing
4. **Mobile menu issues**: Check JavaScript errors

## 📜 الترخيص | License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 المساهمة | Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📋 قائمة المراجعة | Checklist

Before going live, ensure you have:

- [ ] Updated all contact information
- [ ] Replaced placeholder images
- [ ] Added real testimonials
- [ ] Set up analytics tracking
- [ ] Configured contact form
- [ ] Tested on mobile devices
- [ ] Verified accessibility
- [ ] Optimized for SEO
- [ ] Added SSL certificate
- [ ] Set up domain (if custom)

---

**تم إنشاؤه بواسطة GitHub Copilot | Created with GitHub Copilot**

🌟 **Star this repository if you found it helpful!**
