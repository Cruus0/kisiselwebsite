/**
 * Arda Murat Toprak — Portfolio Scripts
 * Modern, Dependency-Free ES6+ JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

  const backToTopBtn = document.getElementById('back-to-top');

  /* ==========================================================================
     1. INTERNATIONALIZATION (i18n)
     ========================================================================== */
  let currentLang = 'tr';

  const translations = {
    tr: {
      skip_link: "İçeriğe Geç",
      nav_about: "Hakkımda",
      nav_skills: "Yetenekler",
      nav_education: "Eğitim",
      nav_projects: "Projeler",
      nav_game: "Oyun",
      nav_contact: "İletişim",
      
      hero_greeting: "Merhaba, ben",
      hero_subtitle_static: "Ben bir",
      hero_description: "İnternet ve Ağ Teknolojileri öğrencisi olarak modern, erişilebilir ve performanslı web deneyimleri oluşturuyorum.",
      hero_cta_projects: "Projelerimi Gör",
      hero_cta_cv: "CV İndir",
      hero_scroll: "Keşfet",
      
      about_tag: "Tanışalım",
      about_title: "Hakkımda",
      about_p1: "Merhaba! Ben <strong>Arda Murat Toprak</strong>, Nişantaşı Üniversitesi'nde <strong>İnternet ve Ağ Teknolojileri</strong> bölümünde öğrenim gören bir <strong>Front-End Developer</strong> adayıyım.",
      about_p2: "Web teknolojilerine olan tutkum sayesinde HTML, CSS, JavaScript ve C# gibi dillerde kendimi sürekli geliştiriyorum. Temiz kod yazmayı, kullanıcı deneyimini ön planda tutmayı ve erişilebilir tasarımlar oluşturmayı hedefliyorum.",
      about_p3: "Amacım, teknolojiyi kullanarak insanların hayatını kolaylaştıran, estetik ve fonksiyonel web çözümleri üretmektir. Sürekli öğrenmeye ve kendimi geliştirmeye devam ediyorum.",
      about_detail_name: "İsim:",
      about_detail_email: "E-posta:",
      about_detail_location: "Konum:",
      about_detail_location_val: "Türkiye",
      about_detail_study: "Bölüm:",
      about_detail_study_val: "İnternet ve Ağ Teknolojileri",
      
      stat_tech: "Teknoloji",
      stat_projects: "Proje",
      stat_lines: "Satır Kod",
      stat_motivation: "Motivasyon",
      
      skills_tag: "Neler Yapabiliyorum",
      skills_title: "Yeteneklerim",
      skill_html_desc: "Semantik yapılar, erişilebilirlik ve SEO uyumlu markup.",
      skill_css_desc: "Responsive tasarım, Flexbox, Grid, animasyonlar ve modern layout.",
      skill_js_desc: "DOM manipülasyonu, ES6+, async programlama ve interaktif deneyimler.",
      skill_csharp_desc: "OOP prensipleri, .NET framework ve uygulama geliştirme.",
      
      edu_tag: "Akademik Yolculuğum",
      edu_title: "Eğitim",
      edu_badge_current: "Devam Ediyor",
      edu_uni_name: "Nişantaşı Üniversitesi",
      edu_uni_dept: "İnternet ve Ağ Teknolojileri — Ön Lisans",
      edu_uni_date: "2024 — Devam Ediyor",
      edu_uni_desc: "Web geliştirme, ağ altyapıları ve bilgi teknolojileri alanında kapsamlı eğitim. Front-end teknolojilerine odaklanarak projeler geliştiriyorum. Mezuniyet sonrası alanımda kariyer yapmayı ve sürekli öğrenmeyi hedefliyorum.",
      edu_tag_network: "Ağ Teknolojileri",
      edu_badge_goal: "Hedef",
      edu_goal_title: "Sürekli Gelişim",
      edu_goal_subtitle: "React, TypeScript ve modern frameworkler",
      edu_goal_date: "2025 ve Sonrası",
      edu_goal_desc: "React, TypeScript gibi modern teknolojileri öğrenmeye devam ederek full-stack geliştirici olmayı hedefliyorum. Açık kaynak projelere katkıda bulunmak ve sektörde deneyim kazanmak önceliklerim arasında.",
      
      proj_tag: "Neler Yaptım",
      proj_title: "Projelerim",
      proj_view: "Projeyi İncele",
      proj_portfolio_title: "Kişisel Portfolio",
      proj_portfolio_desc: "Modern tasarım, glassmorphism efektleri, çoklu dil desteği ve tamamen responsive kişisel portföy web sitesi. Vanilla JS ile geliştirildi.",
      proj_live: "Canlı Demo",
      proj_code: "Kaynak Kod",
      proj_play: "Oyna",
      proj_memory_title: "Hafıza Oyunu",
      proj_memory_desc: "Kart eşleştirme mekanikli interaktif hafıza oyunu. Skor takibi, zamanlayıcı ve animasyonlar ile zenginleştirilmiş kullanıcı deneyimi.",
      proj_soon_title: "Yakında...",
      proj_soon_desc: "Yeni projeler üzerinde çalışıyorum. Bu alan yakında güncellenecek. Gelişmeleri takip etmek için bağlantıda kalın!",
      
      contact_tag: "Bana Ulaşın",
      contact_title: "İletişim",
      contact_email: "E-posta",
      contact_uni_email: "Üniversite E-posta",
      contact_phone: "Telefon",
      contact_github_val: "Profili Ziyaret Et",
      form_name: "İsim",
      form_name_placeholder: "Adınız Soyadınız",
      form_email: "E-posta",
      form_email_placeholder: "ornek@mail.com",
      form_subject: "Konu",
      form_subject_placeholder: "Mesajınızın konusu",
      form_message: "Mesaj",
      form_message_placeholder: "Mesajınızı buraya yazın...",
      form_submit: "Mesaj Gönder",
      
      footer_desc: "Modern ve erişilebilir web deneyimleri oluşturan Front-End Developer adayı.",
      footer_nav_title: "Hızlı Erişim",
      footer_social_title: "Sosyal Medya",
      footer_copyright: "© 2026 Arda Murat Toprak. Tüm hakları saklıdır.",
      footer_made: "ile Türkiye'den yapıldı"
    },
    en: {
      skip_link: "Skip to Content",
      nav_about: "About",
      nav_skills: "Skills",
      nav_education: "Education",
      nav_projects: "Projects",
      nav_game: "Game",
      nav_contact: "Contact",
      
      hero_greeting: "Hello, I am",
      hero_subtitle_static: "I am a",
      hero_description: "As an Internet & Network Technologies student, I create modern, accessible, and high-performance web experiences.",
      hero_cta_projects: "View Projects",
      hero_cta_cv: "Download CV",
      hero_scroll: "Explore",
      
      about_tag: "Get to know me",
      about_title: "About Me",
      about_p1: "Hello! I am <strong>Arda Murat Toprak</strong>, an aspiring <strong>Front-End Developer</strong> studying <strong>Internet & Network Technologies</strong> at Nişantaşı University.",
      about_p2: "Driven by my passion for web technologies, I continuously improve in HTML, CSS, JavaScript, and C#. My priority is writing clean code, user experience, and accessible design.",
      about_p3: "My goal is to create aesthetic and functional web solutions that make people's lives easier using technology. I am committed to lifelong learning.",
      about_detail_name: "Name:",
      about_detail_email: "Email:",
      about_detail_location: "Location:",
      about_detail_location_val: "Turkey",
      about_detail_study: "Department:",
      about_detail_study_val: "Internet & Network Technologies",
      
      stat_tech: "Technologies",
      stat_projects: "Projects",
      stat_lines: "Lines of Code",
      stat_motivation: "Motivation",
      
      skills_tag: "What I Can Do",
      skills_title: "My Skills",
      skill_html_desc: "Semantic structure, accessibility, and SEO-friendly markup.",
      skill_css_desc: "Responsive design, Flexbox, Grid, animations, and modern layout.",
      skill_js_desc: "DOM manipulation, ES6+, async programming, and interactive experiences.",
      skill_csharp_desc: "OOP principles, .NET framework, and application development.",
      
      edu_tag: "My Academic Journey",
      edu_title: "Education",
      edu_badge_current: "Present",
      edu_uni_name: "Nişantaşı University",
      edu_uni_dept: "Internet & Network Technologies — Associate Degree",
      edu_uni_date: "2024 — Present",
      edu_uni_desc: "Comprehensive education in web development, network infrastructure, and IT. Actively building projects with a focus on modern front-end tech.",
      edu_tag_network: "Network Technologies",
      edu_badge_goal: "Goal",
      edu_goal_title: "Continuous Growth",
      edu_goal_subtitle: "React, TypeScript and modern frameworks",
      edu_goal_date: "2025 and Beyond",
      edu_goal_desc: "Advancing toward becoming a full-stack developer by mastering React, TypeScript, and modern ecosystems while contributing to open-source.",
      
      proj_tag: "What I've Built",
      proj_title: "Featured Projects",
      proj_view: "Explore Project",
      proj_portfolio_title: "Personal Portfolio",
      proj_portfolio_desc: "Responsive personal portfolio website featuring glassmorphism effects, multi-language support, and clean vanilla JS architecture.",
      proj_live: "Live Demo",
      proj_code: "Source Code",
      proj_play: "Play",
      proj_memory_title: "Memory Game",
      proj_memory_desc: "Interactive card-matching memory game with score tracking, timer, and smooth card flipping animations.",
      proj_soon_title: "Coming Soon...",
      proj_soon_desc: "Working on exciting new projects. This area will be updated soon. Stay tuned!",
      
      contact_tag: "Get In Touch",
      contact_title: "Contact",
      contact_email: "Email",
      contact_uni_email: "University Email",
      contact_phone: "Phone",
      contact_github_val: "Visit Profile",
      form_name: "Name",
      form_name_placeholder: "Your Full Name",
      form_email: "Email",
      form_email_placeholder: "your@email.com",
      form_subject: "Subject",
      form_subject_placeholder: "Subject of message",
      form_message: "Message",
      form_message_placeholder: "Write your message here...",
      form_submit: "Send Message",
      
      footer_desc: "Aspiring Front-End Developer creating modern and accessible web experiences.",
      footer_nav_title: "Quick Links",
      footer_social_title: "Social Media",
      footer_copyright: "© 2026 Arda Murat Toprak. All rights reserved.",
      footer_made: "made with heart in Turkey"
    }
  };

  const langToggleBtn = document.getElementById('lang-toggle');
  const langCurrentEl = document.getElementById('lang-current');
  const langOtherEl = document.getElementById('lang-other');

  function updateLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    if (langCurrentEl && langOtherEl) {
      langCurrentEl.textContent = lang.toUpperCase();
      langOtherEl.textContent = lang === 'tr' ? 'EN' : 'TR';
    }

    document.documentElement.setAttribute('lang', lang);

    // Restart typing effect with new words
    initTyping();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'tr' ? 'en' : 'tr';
      updateLanguage(nextLang);
    });
  }

  /* ==========================================================================
     3. TYPING EFFECT
     ========================================================================== */
  const typedEl = document.getElementById('typed-text');
  let typingTimeout = null;

  const roles = {
    tr: [
      "Front-End Developer",
      "Ağ Teknolojileri Öğrencisi",
      "Modern Web Arayüz Tasarımcısı",
      "UI/UX Meraklısı"
    ],
    en: [
      "Front-End Developer",
      "Network Tech Student",
      "Modern Web Interface Creator",
      "UI/UX Enthusiast"
    ]
  };

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function initTyping() {
    if (typingTimeout) clearTimeout(typingTimeout);
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeLoop();
  }

  function typeLoop() {
    if (!typedEl) return;
    const currentRoles = roles[currentLang] || roles.tr;
    const currentText = currentRoles[roleIndex % currentRoles.length];

    if (isDeleting) {
      typedEl.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedEl.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 35 : 70;

    if (!isDeleting && charIndex === currentText.length) {
      delay = 2000; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex++;
      delay = 400; // Pause before new word
    }

    typingTimeout = setTimeout(typeLoop, delay);
  }

  initTyping();

  /* ==========================================================================
     4. NAVBAR SCROLL & ACTIVE LINK HIGHLIGHTING
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.navbar__link');
  const sections = document.querySelectorAll('section[id]');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;

    // Background blur & shadow on scroll
    if (navbar) {
      if (currentY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Hide navbar when scrolling down fast, show on scroll up
      if (currentY > 300 && currentY > lastScrollY && !navbar.classList.contains('nav-hidden')) {
        navbar.classList.add('nav-hidden');
      } else if (currentY < lastScrollY && navbar.classList.contains('nav-hidden')) {
        navbar.classList.remove('nav-hidden');
      }
    }
    lastScrollY = currentY;

    // Active Section Link
    let currentSectionId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (currentY >= top && currentY < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });

    // Back to top visibility
    if (backToTopBtn) {
      if (currentY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  /* ==========================================================================
     5. MOBILE HAMBURGER MENU
     ========================================================================== */
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('nav-links');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navLinksContainer.classList.toggle('show');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinksContainer.classList.remove('show');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navLinksContainer.classList.contains('show')) {
        hamburger.classList.remove('open');
        navLinksContainer.classList.remove('show');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ==========================================================================
     6. INTERSECTION OBSERVER (SKILLS & STATS & REVEAL)
     ========================================================================== */
  // 6A: Skill bars animated on scroll
  const skillBars = document.querySelectorAll('.skill-card__fill');
  if (skillBars.length > 0) {
    const skillsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute('data-width') || '80';
          bar.style.width = targetWidth + '%';
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.2 });

    skillBars.forEach(bar => skillsObserver.observe(bar));
  }

  // 6B: Stats counter animated on scroll
  const statNumbers = document.querySelectorAll('.stat-card__number[data-count]');
  if (statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          animateCounter(el, target, 1600);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(num => statsObserver.observe(num));
  }

  function animateCounter(el, target, duration) {
    const startTime = performance.now();
    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(eased * target);
      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(update);
  }

  /* ==========================================================================
     6. BACK TO TOP
     ========================================================================== */
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     8. CONTACT FORM SUBMISSION (Real Delivery via FormSubmit)
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.contact-form__submit');
      const originalBtnHTML = submitBtn.innerHTML;

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        if (formStatus) {
          formStatus.style.display = 'block';
          formStatus.style.background = 'rgba(239, 68, 68, 0.15)';
          formStatus.style.color = '#f87171';
          formStatus.style.border = '1px solid rgba(239, 68, 68, 0.3)';
          formStatus.textContent = currentLang === 'tr' 
            ? 'Lütfen gerekli alanları (İsim, E-posta, Mesaj) doldurunuz.' 
            : 'Please fill in all required fields (Name, Email, Message).';
        }
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>⏳ ${currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...'}</span>`;
      if (formStatus) formStatus.style.display = 'none';

      try {
        const response = await fetch('https://formsubmit.co/ajax/ardatoprak058@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            _subject: `Portfolyo Web Sitesinden Yeni Mesaj: ${subject || 'İletişim Formu'}`,
            message: message,
            _template: 'table'
          })
        });

        const data = await response.json();

        if (response.ok || data.success === 'true' || data.success === true) {
          submitBtn.innerHTML = `<span>✓ ${currentLang === 'tr' ? 'Mesajınız İletildi!' : 'Message Sent!'}</span>`;
          submitBtn.style.background = 'linear-gradient(135deg, #10b981, #00d4aa)';
          if (formStatus) {
            formStatus.style.display = 'block';
            formStatus.style.background = 'rgba(16, 185, 129, 0.15)';
            formStatus.style.color = '#34d399';
            formStatus.style.border = '1px solid rgba(16, 185, 129, 0.3)';
            formStatus.textContent = currentLang === 'tr'
              ? 'Mesajınız başarıyla iletildi! En kısa sürede e-posta ile dönüş yapacağım.'
              : 'Your message has been sent successfully! I will reply as soon as possible.';
          }
          contactForm.reset();

          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
            submitBtn.style.background = '';
            if (formStatus) formStatus.style.display = 'none';
          }, 6000);
        } else {
          throw new Error('Gönderim başarısız');
        }
      } catch (err) {
        // Fallback: normal form submit if AJAX is blocked
        contactForm.submit();
      }
    });
  }

  /* ==========================================================================
     9. TERMINAL EASTER EGG (Press 'T' to open)
     ========================================================================== */
  const terminal = document.getElementById('terminal');
  const terminalClose = document.getElementById('terminal-close');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');

  function openTerminal() {
    if (!terminal) return;
    terminal.removeAttribute('hidden');
    terminal.setAttribute('aria-hidden', 'false');
    if (terminalInput) {
      terminalInput.focus();
    }
  }

  function closeTerminal() {
    if (!terminal) return;
    terminal.setAttribute('hidden', '');
    terminal.setAttribute('aria-hidden', 'true');
  }

  if (terminalClose) {
    terminalClose.addEventListener('click', closeTerminal);
  }

  window.addEventListener('keydown', (e) => {
    // Avoid triggering when focused on input/textarea
    const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea') {
      if (e.key === 'Escape') {
        closeTerminal();
      }
      return;
    }

    if (e.key.toLowerCase() === 't') {
      e.preventDefault();
      if (terminal.hasAttribute('hidden')) {
        openTerminal();
      } else {
        closeTerminal();
      }
    }
  });

  const commands = {
    help: () => `
Mevcut Komutlar:
  • whoami    : Profil bilgisi
  • skills    : Yetkinlik özeti
  • projects  : Projeler listesi
  • contact   : İletişim bilgileri
  • edu       : Eğitim bilgisi
  • clear     : Ekranı temizle
  • theme     : Tema bilgisi
  • date      : Tarih ve saat
  • matrix    : Matrix modu
  • exit      : Terminali kapat
`,
    whoami: () => "Arda Murat Toprak — Front-End Developer & Nişantaşı Üniv. İnternet ve Ağ Teknolojileri Öğrencisi.",
    skills: () => "HTML5: %90 | CSS3: %80 | JavaScript: %70 | C#: %85",
    projects: () => "1. Kişisel Portfolio (cruus0.github.io/kisiselwebsite/)\n2. Hafıza Oyunu (blog.html)\n3. Modern Web Projeleri (Yakında)",
    contact: () => "E-posta: ardatoprak058@gmail.com\nLinkedIn: linkedin.com/in/ardatoprakk/\nTel: +90 539 691 1288",
    edu: () => "Nişantaşı Üniversitesi — İnternet ve Ağ Teknolojileri (2024 - Devam)",
    theme: () => "Theme: Midnight Aurora (Electric Indigo #6c63ff + Teal #00d4aa)",
    date: () => new Date().toLocaleString('tr-TR'),
    matrix: () => "Wake up, Neo... Follow the white rabbit. 🐇",
    clear: () => {
      terminalOutput.innerHTML = '';
      return '';
    },
    exit: () => {
      closeTerminal();
      return '';
    }
  };

  if (terminalInput) {
    // Initial welcome message
    terminalOutput.innerHTML = `<div>&gt; Arda Toprak Terminal v2.0</div><div>&gt; Komut listesi için <span style="color:#00d4aa;">'help'</span> yazabilirsiniz.</div><br>`;

    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = terminalInput.value.trim().toLowerCase();
        terminalInput.value = '';

        if (!cmd) return;

        const cmdDiv = document.createElement('div');
        cmdDiv.style.color = '#6c63ff';
        cmdDiv.textContent = `visitor@arda:~$ ${cmd}`;
        terminalOutput.appendChild(cmdDiv);

        let outputText = '';
        if (commands[cmd]) {
          outputText = commands[cmd]();
        } else {
          outputText = `Komut bulunamadı: '${cmd}'. Yardım için 'help' yazın.`;
        }

        if (outputText) {
          const respDiv = document.createElement('div');
          respDiv.style.whiteSpace = 'pre-wrap';
          respDiv.textContent = outputText;
          terminalOutput.appendChild(respDiv);
        }

        const body = document.getElementById('terminal-body');
        if (body) body.scrollTop = body.scrollHeight;
      }
    });
  }

});
