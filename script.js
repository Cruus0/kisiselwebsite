// 1. Yazı Yazma Efekti (Hocanın istediği gibi Front-end olarak güncellendi)
const text = "Front-end Developer | Modern Web Arayüzleri";
let index = 0;
const typing = document.getElementById("typing");

function typeEffect() {
    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}
typeEffect();

// 2. Scroll Reveal (Aşağı Kaydırma Animasyonu)
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// 3. Dark Mode (Kara Ekran Modu)
const darkBtn = document.getElementById("darkModeBtn");
if (localStorage.getItem("dark") === "on") {
    document.body.classList.add("dark");
}

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark",
        document.body.classList.contains("dark") ? "on" : "off"
    );
});

// 4. Mobil Menü
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// 5. Gelişmiş Dil Desteği (i18n) - TÜM SAYFAYI ÇEVİRİR
const translations = {
    tr: {
        nav_about: "Hakkımda", nav_game: "Oyun", nav_skills: "Yetkinlikler", nav_projects: "Projeler", nav_contact: "İletişim",
        about_title: "Hakkımda", 
        about_p1: "Merhaba, ben Arda Murat Toprak. İnternet ve Ağ Teknolojileri öğrencisiyim ve Front-end geliştirme alanında kendimi geliştiriyorum. Özellikle modern, kullanıcı odaklı ve mobil uyumlu web arayüzleri tasarlamaya ilgi duyuyorum.",
        about_p2: "Eğitim sürecimde HTML, CSS ve JavaScript teknolojileri ile çeşitli projeler geliştirdim. Amacım, yalnızca çalışan değil aynı zamanda estetik ve sürdürülebilir web projeleri üretmektir.",
        about_p3: "Front-end geliştirme alanında ilerlemeyi, yeni teknolojileri takip etmeyi ve öğrendiklerimi gerçek projelerde uygulamayı hedefliyorum.",
        skills_title: "Yetkinlikler", 
        edu_title: "Eğitim ve Hedefler",
        edu_p1: "Şu anda İnternet ve Ağ Teknolojileri bölümünde eğitimime devam etmekteyim. Aldığım dersler sayesinde yazılım geliştirme süreçleri, algoritma mantığı ve web teknolojileri hakkında güçlü bir temel oluşturdum.",
        edu_p2: "Kısa vadede Front-end geliştirme alanında uzmanlaşmayı, uzun vadede ise full-stack web geliştirici olarak profesyonel projelerde yer almayı hedefliyorum.",
        projects_title: "Projeler",
        proj1_title: "Kişisel Portfolyo Web Sitesi",
        proj1_desc1: "HTML, CSS ve JavaScript kullanılarak geliştirilmiş, responsive tasarıma sahip kişisel portfolyo web sitesidir.",
        proj1_desc2: "Bu projede modern tasarım prensipleri, kullanıcı deneyimi, dark mode, animasyonlar ve etkileşimli bileşenler kullanılmıştır.",
        proj2_title: "To-Do Uygulaması (Örnek Proje)",
        proj2_desc1: "JavaScript kullanılarak geliştirilen basit görev yönetim uygulamasıdır.",
        proj2_desc2: "Bu projede DOM manipülasyonu, event yönetimi ve temel kullanıcı etkileşimleri uygulanmıştır.",
        contact_title: "İletişim", 
        contact_desc: "Benimle iletişime geçmek veya projelerim hakkında bilgi almak için aşağıdaki kanalları kullanabilirsiniz.",
        contact_info: "Terminali açmak için 'T' tuşuna basın."
    },
    en: {
        nav_about: "About Me", nav_game: "Game", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
        about_title: "About Me", 
        about_p1: "Hello, I am Arda Murat Toprak. I am a Network Technologies student and focusing on Front-end development. I am especially interested in designing modern, user-oriented and mobile-compatible web interfaces.",
        about_p2: "During my education, I developed various projects with HTML, CSS and JavaScript technologies. My goal is to produce not only working but also aesthetic and sustainable web projects.",
        about_p3: "I aim to advance in the field of Front-end development, follow new technologies and apply what I have learned in real projects.",
        skills_title: "Skills", 
        edu_title: "Education and Goals",
        edu_p1: "I am currently continuing my education in the Internet and Network Technologies department. Thanks to the courses I took, I created a strong foundation in software development processes, algorithm logic and web technologies.",
        edu_p2: "I aim to specialize in Front-end development in the short term and to take part in professional projects as a full-stack web developer in the long term.",
        projects_title: "Projects",
        proj1_title: "Personal Portfolio Website",
        proj1_desc1: "It is a personal portfolio website with a responsive design developed using HTML, CSS and JavaScript.",
        proj1_desc2: "Modern design principles, user experience, dark mode, animations and interactive components were used in this project.",
        proj2_title: "To-Do App (Sample Project)",
        proj2_desc1: "A simple task management application developed using JavaScript.",
        proj2_desc2: "In this project, DOM manipulation, event management and basic user interactions were implemented.",
        contact_title: "Contact", 
        contact_desc: "You can use the channels below to contact me or get information about my projects.",
        contact_info: "Press 'T' to open terminal."
    }
};

const langBtn = document.getElementById("langBtn");
let currentLang = "tr";

langBtn.addEventListener("click", () => {
    currentLang = currentLang === "tr" ? "en" : "tr";
    langBtn.innerText = currentLang === "tr" ? "EN" : "TR";

    // Sayfadaki tüm data-i18n etiketlerini bulur ve çevirir
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
});

// 6. Yetkinlik Bar Animasyonu
function animateSkill(barSelector, percentId, target, duration) {
    const bar = document.querySelector(barSelector);
    const percentEl = document.getElementById(percentId);
    let startTime = null;
    let lastPercent = 0;

    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

    function animate(time) {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const value = Math.round(eased * target);

        bar.style.width = value + "%";
        if (value !== lastPercent) {
            percentEl.textContent = value + "%";
            lastPercent = value;
        }
        if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

window.addEventListener("load", () => {
    setTimeout(() => {
        animateSkill(".fill.html", "htmlPercent", 90, 3500);
        animateSkill(".fill.css", "cssPercent", 80, 3500);
        animateSkill(".fill.js", "jsPercent", 70, 3500);
        animateSkill(".fill.c", "cPercent", 85, 3000)
    }, 400);
});

// 7. Particles.js Ayarları
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": "#3b82f6" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#3b82f6",
            "opacity": 0.4,
            "width": 1
        },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "grab" } }
    }
});

// 8. Terminal Sistemi
const termInput = document.getElementById("term-input");
const termHistory = document.getElementById("term-history");
const terminalDiv = document.getElementById("terminal");

window.addEventListener("keydown", (e) => {
    if (document.activeElement === termInput) {
        if (e.key === "Escape") terminalDiv.style.display = "none";
        return; 
    }
    if (e.key.toLowerCase() === "t") {
        e.preventDefault();
        terminalDiv.style.display = terminalDiv.style.display === "none" ? "block" : "none";
        if (terminalDiv.style.display === "block") setTimeout(() => termInput.focus(), 10);
    }
});

termInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const command = termInput.value.toLowerCase().trim();
        let response = "";

        if (command === "help") {
            response = "Komutlar: help, projects, skills, clear, exit, whoami";
        } else if (command === "projects") {
            response = "Portfolyo, To-Do App, Network Dashboard";
        } else if (command === "skills") {
            response = "HTML, CSS, JS, C#, Network Protocols";
        } else if (command === "whoami") {
            response = "Arda Murat Toprak - Network & Front-end Developer";
        } else if (command === "clear") {
            termHistory.innerHTML = "";
            termInput.value = "";
            return;
        } else if (command === "exit") {
            terminalDiv.style.display = "none";
            termInput.value = "";
            return;
        } else {
            response = "Komut bulunamadı: " + command;
        }

        const newLog = document.createElement("div");
        newLog.innerHTML = `<div>$ ${command}</div><div style="color: #888;">> ${response}</div>`;
        termHistory.appendChild(newLog);
        termHistory.scrollTop = termHistory.scrollHeight;
        termInput.value = "";
    }
});
