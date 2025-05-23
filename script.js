// Language Switcher
const langSwitcher = document.getElementById('lang-switcher');
let lang = 'en';
langSwitcher.addEventListener('click', () => {
  lang = (lang === 'en') ? 'mm' : 'en';
  updateLanguage();
  langSwitcher.textContent = (lang === 'en') ? 'မြန်မာ' : 'English';
});
function updateLanguage() {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
  document.querySelectorAll('input[data-placeholder-en], textarea[data-placeholder-en]').forEach(el => {
    el.placeholder = el.getAttribute('data-placeholder-' + lang);
  });
}
updateLanguage();

// Nav entrance & hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  // Hero entrance
  const hero = document.querySelector(".hero-content");
  setTimeout(() => {
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
  }, 160);

  // Nav entrance
  const navLinks = document.getElementById('nav-links');
  setTimeout(() => {
    navLinks.classList.add('nav-visible');
  }, 300);

  // Hamburger menu
  const navToggle = document.getElementById('nav-toggle');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-visible');
  });

  // Hide nav when clicking link (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 850) navLinks.classList.remove('nav-visible');
    });
  });

  // Products nav dropdown on mobile
  const productsNavParent = document.querySelector('.products-nav-parent');
  if (productsNavParent) {
    productsNavParent.addEventListener('click', function(e) {
      if(window.innerWidth <= 850) {
        e.stopPropagation();
        productsNavParent.classList.toggle('active');
      }
    });
    // Close on outside click mobile
    document.addEventListener('click', function(e) {
      if(window.innerWidth <= 850 && !productsNavParent.contains(e.target)) {
        productsNavParent.classList.remove('active');
      }
    });
  }

  // Animate solution and platform cards
  document.querySelectorAll('.solution-card').forEach((card, i) => {
    setTimeout(() => {
      card.style.transition = "all 0.85s cubic-bezier(.33,1.12,.8,1.01)";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 350 + i * 160);
  });
  document.querySelectorAll('.platform-card').forEach((card, i) => {
    setTimeout(() => {
      card.style.transition = "all 0.85s cubic-bezier(.33,1.12,.8,1.01)";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 800 + i * 120);
  });

  // Animate product cards with stagger
  document.querySelectorAll('.product-card').forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, 600 + i * 200);
  });
});

// Fake contact submit
document.addEventListener('submit', function(e) {
  if (e.target.matches('.contact-form')) {
    e.preventDefault();
    alert(lang === 'en'
      ? "Thank you for reaching out! We’ll contact you soon."
      : "ဆက်သွယ်မှုအတွက် ကျေးဇူးတင်ပါသည်။ မကြာမီပြန်လည်ဆက်သွယ်ပေးပါမည်။");
    e.target.reset();
  }
});
