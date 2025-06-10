/* ========================================
   CLARIA - LANDING PAGE JAVASCRIPT
   ======================================== */

// === SMOOTH SCROLL FOR NAVIGATION LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// === FADE IN ANIMATION ON SCROLL ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// === SUBTLE PARALLAX EFFECT FOR HERO SECTION ===
// EDIT: Remove this section if you don't want parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// === ADDITIONAL INTERACTIVE FEATURES ===
// You can add more JavaScript functionality here:

// Example: Form validation (if you add a contact form)
/*
function validateForm() {
    // Add your form validation logic here
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    if (!email.value || !message.value) {
        alert('Por favor completa todos los campos');
        return false;
    }
    
    return true;
}
*/

// Example: Analytics tracking (if needed)
/*
function trackEvent(eventName, eventData) {
    // Add your analytics tracking code here
    // gtag('event', eventName, eventData);
}
*/

// Example: Loading animations
/*
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
*/

// === PERFORMANCE OPTIMIZATION ===
// Throttle scroll events for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll-heavy functions if needed
// const throttledParallax = throttle(parallaxFunction, 16);