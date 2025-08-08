
  const translations = {
    fr: {
      welcome: "Bienvenue sur mon portfolio",
      description: "Je suis un data scientist passionné par l'IA."
    },
    en: {
      welcome: "Welcome to my portfolio",
      description: "I am a data scientist passionate about AI."
    }
  };

  const selector = document.getElementById("languageSelector");
  selector.addEventListener("change", changeLanguage);

  function changeLanguage() {
    const lang = selector.value;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key];
    });
  }
// Navigation fluide et highlight
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling pour les liens d'ancrage
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80, // Ajustez selon la hauteur de votre header
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Highlight de la section active
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.header-nav a');

            window.addEventListener('scroll', function() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (window.scrollY >= (sectionTop - 200)) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });

            // Active la première section au chargement
            if (window.location.hash) {
                const target = document.querySelector(window.location.hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'auto'
                    });
                }
            }
        });

        // Close mobile menu when clicking a link
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                links.forEach(link => {
                    link.style.animation = '';
                });
            });
        });

         // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
