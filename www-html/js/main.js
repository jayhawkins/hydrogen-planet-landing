/**
 * Hydrogen Planet Survey - Main JavaScript
 * Handles logo detection, animations, and interactive features
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize logo display
    initializeLogo();
    
    // Add smooth scroll behavior
    initializeSmoothScroll();
    
    // Add parallax effect to background
    initializeParallax();
    
    // Console message
    console.log('🪐 Hydrogen Planet Survey loaded successfully!');
});

/**
 * Initialize logo display
 * Shows logo if image exists, otherwise shows placeholder
 */
function initializeLogo() {
    const logoImg = document.getElementById('logo');
    const logoPlaceholder = document.getElementById('logoPlaceholder');
    
    if (logoImg) {
        logoImg.addEventListener('load', function() {
            // Logo loaded successfully, hide placeholder
            if (logoPlaceholder) {
                logoPlaceholder.style.display = 'none';
            }
            logoImg.style.display = 'block';
        });
        
        logoImg.addEventListener('error', function() {
            // Logo failed to load, show placeholder
            logoImg.style.display = 'none';
            if (logoPlaceholder) {
                logoPlaceholder.style.display = 'block';
            }
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Add parallax effect to cosmic background on scroll
 */
function initializeParallax() {
    const stars = document.querySelector('.stars');
    const stars2 = document.querySelector('.stars2');
    const stars3 = document.querySelector('.stars3');
    
    if (stars && stars2 && stars3) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            
            // Different parallax speeds for each star layer
            stars.style.transform = `translateY(${scrolled * 0.1}px)`;
            stars2.style.transform = `translateY(${scrolled * 0.15}px)`;
            stars3.style.transform = `translateY(${scrolled * 0.2}px)`;
        });
    }
}

/**
 * Add fade-in animation on scroll for elements
 * (Optional: uncomment to use)
 */
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with class 'fade-on-scroll'
    document.querySelectorAll('.fade-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Create shooting star effect
 * (Optional feature - can be activated)
 */
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: white;
        box-shadow: 0 0 10px 2px white;
        top: ${Math.random() * 50}%;
        left: ${Math.random() * 100}%;
        animation: shoot 1s linear forwards;
        pointer-events: none;
        z-index: 999;
    `;
    
    document.body.appendChild(shootingStar);
    
    setTimeout(() => {
        shootingStar.remove();
    }, 1000);
}

// Uncomment to enable periodic shooting stars
// setInterval(createShootingStar, 3000);

// Add shooting star animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shoot {
        0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateX(300px) translateY(300px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
