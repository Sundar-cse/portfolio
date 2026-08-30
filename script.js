/* =========================================
   CUSTOMIZE YOUR PORTFOLIO HERE
========================================= */

const portfolioData = {
    name: "Sundar",
    role: "Computer Science Student",
    course: "B.E Computer Science",
    bio: "I’m a good student interested in technology, web development and building creative digital experiences.",
    about: "I am a motivated student who enjoys learning new technologies and turning ideas into useful projects.",

    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername/",
    email: "your.sundarkvp2@example.com",

    skills: [
        { name: "HTML", icon: "fa-brands fa-html5" },
        { name: "CSS", icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "Java", icon: "fa-brands fa-java" },
        { name: "React", icon: "fa-brands fa-react" },
        { name: "Git", icon: "fa-brands fa-git-alt" }
    ],

    projects: [
        {
            title: "Weather Application",
            description: "A responsive weather application that displays current weather information using an API.",
            tags: ["JavaScript", "API", "CSS"],
            link: "https://github.com/yourusername/weather-app"
        },
        {
            title: "Portfolio Website",
            description: "A modern glassmorphism portfolio website designed to showcase my skills and projects.",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/yourusername/portfolio"
        },
        {
            title: "AI Study Assistant",
            description: "A concept project for helping students organize study materials and improve productivity.",
            tags: ["Python", "AI", "Web"],
            link: "https://github.com/yourusername/ai-study-assistant"
        }
    ],

    /* =========================================
       CERTIFICATIONS
       Add your certificate image files inside:
       assets/certificates/

       Example:
       image: "assets/certificates/python.jpg"
    ========================================= */
    certifications: [
        {
            title: "Python for Everybody",
            organization: "Coursera",
            year: "2026",
            image: "assets/certificates/certificate-01.jpg"
        },
        {
            title: "Web Development Fundamentals",
            organization: "freeCodeCamp",
            year: "2026",
            image: "assets/certificates/certificate-02.jpg"
        },
        {
            title: "JavaScript Algorithms and Data Structures",
            organization: "freeCodeCamp",
            year: "2026",
            image: "assets/certificates/certificate-03.jpg"
        }
    ],

    education: [
        {
            degree: "B.Tech Computer Science",
            school: "T.J.S Engineering colllege",
            year: "2024 - 2028",
            description: "Currently pursuing a degree in Computer Science with an interest in software development and emerging technologies."
        },
        {
            degree: "Higher Secondary Education",
            school: "HSS Kavaraipettai",
            year: "2022 - 2024",
            description: "Completed higher secondary education with a focus on mathematics and computer science."
        }
    ]
};

/* PERSONAL INFORMATION */
document.getElementById("navName").textContent = portfolioData.name;
document.getElementById("heroName").textContent = portfolioData.name;
document.getElementById("cardName").textContent = portfolioData.name;
document.getElementById("footerName").textContent = portfolioData.name;
document.getElementById("heroRole").textContent = portfolioData.role;
document.getElementById("cardCourse").textContent = portfolioData.course;
document.getElementById("heroBio").textContent = portfolioData.bio;
document.getElementById("aboutText").textContent = portfolioData.about;

/* SOCIAL LINKS */
document.getElementById("githubLink").href = portfolioData.github;
document.getElementById("linkedinLink").href = portfolioData.linkedin;
document.getElementById("emailLink").href = `mailto:${portfolioData.email}`;
document.getElementById("contactEmail").href = `mailto:${portfolioData.email}`;

/* SKILLS */
const skillsContainer = document.getElementById("skillsContainer");
portfolioData.skills.forEach(skill => {
    const skillElement = document.createElement("div");
    skillElement.className = "skill glass";
    skillElement.innerHTML = `<i class="${skill.icon}"></i><span>${skill.name}</span>`;
    skillsContainer.appendChild(skillElement);
});

/* PROJECTS */
const projectsContainer = document.getElementById("projectsContainer");
portfolioData.projects.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.className = "project-card glass";
    const tags = project.tags.map(tag => `<span>${tag}</span>`).join("");
    projectElement.innerHTML = `
        <span class="project-number">PROJECT ${String(index + 1).padStart(2, "0")}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${tags}</div>
        <a class="project-link" href="${project.link}" target="_blank" aria-label="View project">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>`;
    projectsContainer.appendChild(projectElement);
});

/* CERTIFICATIONS - CASCADING IMAGE VIEWER */
const certificationsContainer = document.getElementById("certificationsContainer");

portfolioData.certifications.forEach((cert, index) => {
    const certElement = document.createElement("article");
    certElement.className = "cert-card glass";
    certElement.style.setProperty("--cert-offset", (index % 2 === 0 ? index * 3 : index * -3));

    certElement.innerHTML = `
        <div class="cert-image-wrap" role="button" tabindex="0" aria-label="Open ${cert.title}">
            <img class="cert-image" src="${cert.image}" alt="${cert.title} certificate from ${cert.organization}" loading="lazy">
            <div class="cert-image-overlay">
                <span class="cert-badge">CERTIFICATE ${String(index + 1).padStart(2, "0")}</span>
                <span class="cert-zoom"><i class="fa-solid fa-expand"></i></span>
            </div>
        </div>
        <div class="cert-info">
            <div>
                <h3>${cert.title}</h3>
                <p>${cert.organization}</p>
            </div>
            <span class="cert-year">${cert.year}</span>
        </div>`;

    const imageWrap = certElement.querySelector(".cert-image-wrap");
    imageWrap.addEventListener("click", () => openCertificate(cert.image, cert.title));
    imageWrap.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openCertificate(cert.image, cert.title);
        }
    });

    certificationsContainer.appendChild(certElement);
});

/* FULL-SCREEN CERTIFICATE MODAL */
const certModal = document.createElement("div");
certModal.className = "cert-modal";
certModal.innerHTML = `
    <div class="cert-modal-content">
        <button class="cert-modal-close" aria-label="Close certificate viewer">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <img class="cert-modal-image" src="" alt="">
    </div>`;
document.body.appendChild(certModal);

const certModalImage = certModal.querySelector(".cert-modal-image");
const certModalClose = certModal.querySelector(".cert-modal-close");

function openCertificate(image, title) {
    certModalImage.src = image;
    certModalImage.alt = title;
    certModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCertificate() {
    certModal.classList.remove("active");
    certModalImage.src = "";
    document.body.style.overflow = "";
}

certModalClose.addEventListener("click", closeCertificate);
certModal.addEventListener("click", event => {
    if (event.target === certModal) closeCertificate();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeCertificate();
});

/* EDUCATION */
const educationContainer = document.getElementById("educationContainer");
portfolioData.education.forEach(education => {
    const educationElement = document.createElement("div");
    educationElement.className = "education-card glass";
    educationElement.innerHTML = `
        <span>${education.year}</span>
        <h3>${education.degree}</h3>
        <p>${education.school}</p>
        <p>${education.description}</p>`;
    educationContainer.appendChild(educationElement);
});

/* STATISTICS */
document.getElementById("projectCount").textContent = portfolioData.projects.length;
document.getElementById("certCount").textContent = portfolioData.certifications.length;
document.getElementById("skillCount").textContent = portfolioData.skills.length;

/* CURRENT YEAR */
document.getElementById("year").textContent = new Date().getFullYear();

/* MOBILE MENU */
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("active");
    });
});
