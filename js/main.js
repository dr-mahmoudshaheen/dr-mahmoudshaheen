// Main JavaScript for Immigration Lawyer Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initSmoothScrolling();
    initFAQ();
    initContactForm();
    initScrollEffects();
    initWhatsAppFloat();
    
    // Add scroll behavior for header
    handleHeaderScroll();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = '0';
                    }
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });
}

// Multi-step Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    const steps = form.querySelectorAll('.form-step');
    const nextButtons = form.querySelectorAll('.next-step');
    const prevButtons = form.querySelectorAll('.prev-step');
    let currentStep = 0;
    
    // Show initial step
    showStep(currentStep);
    
    // Next step buttons
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });
    
    // Previous step buttons
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentStep--;
            showStep(currentStep);
        });
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateStep(currentStep)) {
            submitForm();
        }
    });
    
    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
        
        // Update progress indicator if exists
        updateProgressIndicator(stepIndex);
    }
    
    function validateStep(stepIndex) {
        const currentStepElement = steps[stepIndex];
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                showFieldError(field, getErrorMessage(field));
                isValid = false;
            } else {
                clearFieldError(field);
                
                // Additional validation
                if (field.type === 'email' && !isValidEmail(field.value)) {
                    showFieldError(field, 'يرجى إدخال بريد إلكتروني صحيح');
                    isValid = false;
                }
            }
        });
        
        return isValid;
    }
    
    function showFieldError(field, message) {
        clearFieldError(field);
        
        field.style.borderColor = '#EF4444';
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.color = '#EF4444';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
    }
    
    function clearFieldError(field) {
        field.style.borderColor = '';
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    function getErrorMessage(field) {
        const isArabic = document.documentElement.dir === 'rtl';
        const fieldName = field.getAttribute('name');
        
        const messages = {
            ar: {
                name: 'يرجى إدخال الاسم الكامل',
                email: 'يرجى إدخال البريد الإلكتروني',
                country: 'يرجى اختيار الدولة',
                service: 'يرجى اختيار نوع الخدمة',
                message: 'يرجى وصف حالتك'
            },
            en: {
                name: 'Please enter your full name',
                email: 'Please enter your email address',
                country: 'Please select your country',
                service: 'Please select service type',
                message: 'Please describe your case'
            }
        };
        
        const lang = isArabic ? 'ar' : 'en';
        return messages[lang][fieldName] || (isArabic ? 'هذا الحقل مطلوب' : 'This field is required');
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function updateProgressIndicator(stepIndex) {
        // Add progress indicator if needed
        const progress = ((stepIndex + 1) / steps.length) * 100;
        console.log(`Form progress: ${progress}%`);
    }
    
    function submitForm() {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = document.documentElement.dir === 'rtl' ? 'جاري الإرسال...' : 'Submitting...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            showSuccessMessage();
            form.reset();
            currentStep = 0;
            showStep(currentStep);
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
        
        // Track form submission for analytics
        trackEvent('form_submit', {
            service_type: data.service,
            country: data.country,
            urgency: data.urgency
        });
    }
    
    function showSuccessMessage() {
        const isArabic = document.documentElement.dir === 'rtl';
        const message = isArabic ? 
            'تم إرسال طلبك بنجاح! سنتواصل معك خلال 24 ساعة.' : 
            'Your request has been submitted successfully! We will contact you within 24 hours.';
        
        // Create success notification
        const notification = document.createElement('div');
        notification.className = 'success-notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10B981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
}

// Scroll Effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .about-content, .section-header');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .testimonial-card, .about-content, .section-header {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .service-card:nth-child(2) { transition-delay: 0.1s; }
        .service-card:nth-child(3) { transition-delay: 0.2s; }
        .testimonial-card:nth-child(2) { transition-delay: 0.1s; }
        .testimonial-card:nth-child(3) { transition-delay: 0.2s; }
    `;
    document.head.appendChild(style);
}

// Header Scroll Effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = 'none';
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// WhatsApp Float Button
function initWhatsAppFloat() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    if (whatsappBtn) {
        // Add click tracking
        whatsappBtn.addEventListener('click', function() {
            trackEvent('whatsapp_click', {
                source: 'floating_button'
            });
        });
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const showButton = scrollY > 300;
            
            whatsappBtn.style.opacity = showButton ? '1' : '0';
            whatsappBtn.style.pointerEvents = showButton ? 'auto' : 'none';
        });
    }
}

// Analytics Event Tracking
function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, parameters);
    }
    
    // Console log for development
    console.log('Event tracked:', eventName, parameters);
}

// CTA Button Tracking
document.addEventListener('click', function(e) {
    const button = e.target.closest('.btn');
    if (button) {
        const buttonText = button.textContent.trim();
        const buttonClass = button.className;
        
        trackEvent('cta_click', {
            button_text: buttonText,
            button_class: buttonClass,
            page_section: findPageSection(button)
        });
    }
});

function findPageSection(element) {
    const sections = ['hero', 'services', 'about', 'testimonials', 'faq', 'contact'];
    
    for (let section of sections) {
        if (element.closest(`#${section}`) || element.closest(`.${section}`)) {
            return section;
        }
    }
    
    return 'unknown';
}

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Performance Optimization
function optimizeImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Call image optimization
optimizeImages();

// Service Worker Registration (for PWA functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// Contact Information Click Tracking
document.addEventListener('click', function(e) {
    const contactLink = e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
    if (contactLink) {
        const type = contactLink.href.startsWith('tel:') ? 'phone' : 'email';
        trackEvent('contact_click', {
            contact_type: type,
            contact_value: contactLink.href
        });
    }
});

// Language Switch Tracking
document.addEventListener('click', function(e) {
    const langSwitch = e.target.closest('.lang-switch');
    if (langSwitch) {
        const targetLang = langSwitch.textContent.includes('English') ? 'en' : 'ar';
        trackEvent('language_switch', {
            target_language: targetLang,
            source_language: document.documentElement.dir === 'rtl' ? 'ar' : 'en'
        });
    }
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    
    // Track errors in production
    if (window.location.hostname !== 'localhost') {
        trackEvent('javascript_error', {
            error_message: e.message,
            error_filename: e.filename,
            error_line: e.lineno
        });
    }
});

// Accessibility Enhancements
function enhanceAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = document.documentElement.dir === 'rtl' ? 'تخطي إلى المحتوى الرئيسي' : 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID
    const mainContent = document.querySelector('.hero') || document.querySelector('main');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
    
    // Enhance button accessibility
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
            const icon = button.querySelector('i');
            if (icon) {
                const ariaLabel = button.classList.contains('nav-toggle') ? 
                    (document.documentElement.dir === 'rtl' ? 'فتح القائمة' : 'Open menu') :
                    (document.documentElement.dir === 'rtl' ? 'زر' : 'Button');
                button.setAttribute('aria-label', ariaLabel);
            }
        }
    });
    
    // Enhance social links accessibility
    const socialLinks = document.querySelectorAll('.social-icon, .social-link');
    socialLinks.forEach(link => {
        if (!link.getAttribute('aria-label')) {
            const icon = link.querySelector('i');
            if (icon) {
                const classList = icon.className;
                let platform = 'social media';
                
                if (classList.includes('whatsapp')) platform = 'WhatsApp';
                else if (classList.includes('telegram')) platform = 'Telegram';
                else if (classList.includes('linkedin')) platform = 'LinkedIn';
                else if (classList.includes('facebook')) platform = 'Facebook';
                
                const isArabic = document.documentElement.dir === 'rtl';
                const ariaLabel = isArabic ? `تابعنا على ${platform}` : `Follow us on ${platform}`;
                link.setAttribute('aria-label', ariaLabel);
            }
        }
    });
}

// Call accessibility enhancements
enhanceAccessibility();
