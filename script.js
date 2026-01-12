// Typing Effect

const text = "Frontend Developer | Modern Web Arayüzleri";
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

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Dark Mode (LocalStorage)
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

// Mobile Menu
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// 2. Dil Desteği (i18n)
const translations = {
    tr: {
        nav_about: "Hakkımda", nav_skills: "Yetkinlikler", nav_projects: "Projeler", nav_contact: "İletişim",
        about_title: "Hakkımda", about_p1: "Merhaba, ben Arda Murat Toprak. İnternet ve Ağ Teknolojileri öğrencisiyim...",
        about_p2: "Kullanıcı odaklı modern web arayüzleri tasarlıyorum.",
        skills_title: "Yetkinlikler", projects_title: "Projeler",
        proj1_title: "Portfolyo Sitesi", proj1_desc: "Modern ve responsive tasarım.",
        proj2_title: "To-Do Uygulaması", proj2_desc: "JS ile görev yönetimi.",
        contact_title: "İletişim", contact_info: "Terminali açmak için 'T' tuşuna basın."
    },
    en: {
        nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
        about_title: "About Me", about_p1: "Hello, I am Arda Murat Toprak. I am a Network Technologies student...",
        about_p2: "I design modern, user-focused web interfaces.",
        skills_title: "Skills", projects_title: "Projects",
        proj1_title: "Portfolio Website", proj1_desc: "Modern and responsive design.",
        proj2_title: "To-Do App", proj2_desc: "Task management with JS.",
        contact_title: "Contact", contact_info: "Press 'T' to open terminal."
    }
};


// Language Toggle
const langBtn = document.getElementById("langBtn");
let isTR = true;

langBtn.addEventListener("click", () => {
    document.querySelector("#about h2").innerText = isTR ? "About Me" : "Hakkımda";
    langBtn.innerText = isTR ? "TR" : "EN";
    isTR = !isTR;
});


function animateSkill(barSelector, percentId, target, duration) {
    const bar = document.querySelector(barSelector);
    const percentEl = document.getElementById(percentId);

    let startTime = null;
    let lastPercent = 0;

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function animate(time) {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);

        const value = Math.round(eased * target);

        bar.style.width = value + "%";

        // % yazısını sadece değiştiğinde güncelle
        if (value !== lastPercent) {
            percentEl.textContent = value + "%";
            lastPercent = value;
        }

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
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

// 3. Terminal Sistemi (T Tuşu Fixli)
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
// Komutları işleme
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
            response = "Arda Murat Toprak - Network & Web Developer";
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

        // Geçmişe ekle
        const newLog = document.createElement("div");
        newLog.innerHTML = `<div>$ ${command}</div><div style="color: #888;">> ${response}</div>`;
        termHistory.appendChild(newLog);
        
        // En aşağı kaydır
        termHistory.scrollTop = termHistory.scrollHeight;
        termInput.value = "";
    }
});