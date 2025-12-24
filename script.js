// ==================== MOBILE MENU TOGGLE ====================
function toggleMenu() {
  const menu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");

  menu.classList.toggle("open");
  hamburger.classList.toggle("open");
}

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");

    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
});

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ==================== ACTIVE NAV LINK ON SCROLL ====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
  let current = '';
  const scrollPosition = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNavLink);
window.addEventListener('load', highlightNavLink);

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ==================== BACK TO TOP BUTTON ====================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ==================== SCROLL REVEAL ANIMATIONS ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for scroll animations
const animateOnScroll = document.querySelectorAll(
  '.skill-category, .project-card, .timeline-item, .education-card, .cert-item, .about-highlights, .contact-item'
);

animateOnScroll.forEach(el => {
  observer.observe(el);
});

// Add fade-in animation styles dynamically
const style = document.createElement('style');
style.textContent = `
  .skill-category,
  .project-card,
  .timeline-item,
  .education-card,
  .cert-item,
  .about-highlights,
  .contact-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .skill-category.fade-in,
  .project-card.fade-in,
  .timeline-item.fade-in,
  .education-card.fade-in,
  .cert-item.fade-in,
  .about-highlights.fade-in,
  .contact-item.fade-in {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// ==================== TYPING EFFECT FOR HERO SUBTITLE ====================
function typeWriter() {
  const text = "Junior ML & AI Engineer | Data Analyst";
  const subtitleElement = document.querySelector('.hero-subtitle');

  if (!subtitleElement) return;

  let index = 0;
  subtitleElement.textContent = '';

  function type() {
    if (index < text.length) {
      subtitleElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }

  // Start typing after a short delay
  setTimeout(type, 500);
}

// Run typing effect on page load
window.addEventListener('load', typeWriter);

// ==================== SKILL TAGS ANIMATION ====================
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag, index) => {
  tag.style.animationDelay = `${index * 0.05}s`;
});

// ==================== DYNAMIC YEAR IN FOOTER ====================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-content p');
if (footerText) {
  footerText.textContent = `© ${currentYear} Shima Maleki. All rights reserved.`;
}

// ==================== PARALLAX EFFECT FOR HERO SECTION ====================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-image');

  if (heroImage && scrolled < window.innerHeight) {
    heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// ==================== FORM VALIDATION (IF CONTACT FORM IS ADDED) ====================
// This is a placeholder for future contact form functionality
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');

  // Add a subtle fade-in for the entire page
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// ==================== PRELOAD IMAGES ====================
function preloadImages() {
  const images = document.querySelectorAll('img[src]');
  images.forEach(img => {
    const tempImg = new Image();
    tempImg.src = img.src;
  });
}

window.addEventListener('load', preloadImages);

// ==================== COPY EMAIL TO CLIPBOARD ====================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const email = link.href.replace('mailto:', '');

    // Optional: Add a tooltip or notification when email is clicked
    if (navigator.clipboard) {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        // Show a temporary tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Email copied!';
        tooltip.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #667eea;
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          z-index: 10000;
          animation: fadeOut 2s forwards;
        `;

        // Add fadeOut animation
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
          @keyframes fadeOut {
            0% { opacity: 1; }
            70% { opacity: 1; }
            100% { opacity: 0; }
          }
        `;
        document.head.appendChild(styleSheet);

        document.body.appendChild(tooltip);

        setTimeout(() => {
          tooltip.remove();
          window.location.href = link.href;
        }, 2000);
      }).catch(() => {
        // If clipboard API fails, just open email client
        window.location.href = link.href;
      });
    }
  });
});

// ==================== EASTER EGG: KONAMI CODE ====================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join(',') === konamiSequence.join(',')) {
    // Easter egg: Add a fun animation to skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
      tag.style.animation = 'rainbow 2s linear infinite';
    });

    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
      @keyframes rainbow {
        0% { background: #667eea; color: white; }
        25% { background: #f093fb; color: white; }
        50% { background: #4facfe; color: white; }
        75% { background: #43e97b; color: white; }
        100% { background: #667eea; color: white; }
      }
    `;
    document.head.appendChild(rainbowStyle);
  }
});

// ==================== ANALYTICS (PLACEHOLDER) ====================
// Add Google Analytics or other tracking code here
function trackEvent(category, action, label) {
  // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
  console.log('Event tracked:', category, action, label);
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    trackEvent('Button', 'Click', btn.textContent.trim());
  });
});

// Track project views
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', () => {
    trackEvent('Project', 'View', link.closest('.project-card').querySelector('h3').textContent);
  });
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
  highlightNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// ==================== LOG PORTFOLIO LOADED ====================
console.log('%c👋 Welcome to Shima Maleki\'s Portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository on GitHub!', 'color: #718096; font-size: 14px;');
console.log('%chttps://github.com/shima-maleki', 'color: #667eea; font-size: 14px;');
