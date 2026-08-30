/* =========================================
   CUSTOMIZE YOUR PORTFOLIO HERE
========================================= */

const portfolioData = {

    /* ---------- PERSONAL INFO ---------- */

    name: "Sundar",

    role: "Computer Science Student",

    course: "B.E Computer Science",

    bio:
        "I’m a good student interested in technology, web development and building creative digital experiences.",

    about:
        "I am a motivated student who enjoys learning new technologies and turning ideas into useful projects.",


    /* ---------- SOCIAL LINKS ---------- */

    github:
        "https://github.com/yourusername",

    linkedin:
        "https://www.linkedin.com/in/yourusername/",

    email:
        "your.sundarkvp2@example.com",


    /* ---------- SKILLS ---------- */

    skills: [

        {
            name: "HTML",
            icon: "fa-brands fa-html5"
        },

        {
            name: "CSS",
            icon: "fa-brands fa-css3-alt"
        },

        {
            name: "JavaScript",
            icon: "fa-brands fa-js"
        },

        {
            name: "Python",
            icon: "fa-brands fa-python"
        },

        {
            name: "Java",
            icon: "fa-brands fa-java"
        },

        {
            name: "React",
            icon: "fa-brands fa-react"
        },

        {
            name: "Git",
            icon: "fa-brands fa-git-alt"
        },

    

    ],


    /* ---------- PROJECTS ---------- */

    projects: [

     


        {
            title: "Weather Application",

            description:
                "A responsive weather application that displays current weather information using an API.",

            tags: [
                "JavaScript",
                "API",
                "CSS"
            ],

            link:
                "https://github.com/yourusername/weather-app"
        },


        {
            title: "Portfolio Website",

            description:
                "A modern glassmorphism portfolio website designed to showcase my skills and projects.",

            tags: [
                "HTML",
                "CSS",
                "JavaScript"
            ],

            link:
                "https://github.com/yourusername/portfolio"
        },


        {
            title: "AI Study Assistant",

            description:
                "A concept project for helping students organize study materials and improve productivity.",

            tags: [
                "Python",
                "AI",
                "Web"
            ],

            link:
                "https://github.com/yourusername/ai-study-assistant"
        }

    ],


    /* =========================================
       ADD YOUR CERTIFICATIONS HERE
       
       Copy this format to add more certificates.
    ========================================= */

    certifications: [

        {
            title: "Python for Everybody",

            organization: "Coursera",

            year: "2026",

            link:
                "https://example.com/certificate"
        },


        {
            title: "Web Development Fundamentals",

            organization: "freeCodeCamp",

            year: "2026",

            link:
                "https://example.com/certificate"
        },


        {
            title: "JavaScript Algorithms and Data Structures",

            organization: "freeCodeCamp",

            year: "2026",

            link:
                "https://example.com/certificate"
        }

    ],


    /* ---------- EDUCATION ---------- */

    education: [

        {
            degree: "B.Tech Computer Science",

            school: "T.J.S Engineering colllege",

            year: "2024 - 2028",

            description:
                "Currently pursuing a degree in Computer Science with an interest in software development and emerging technologies."
        },


        {
            degree: "Higher Secondary Education",

            school: "HSS Kavaraipettai",

            year: "2022 - 2024",

            description:
                "Completed higher secondary education with a focus on mathematics and computer science."
        }

    ]

};


/* =========================================
   LOAD PERSONAL INFORMATION
========================================= */

document.getElementById("navName").textContent =
    portfolioData.name;

document.getElementById("heroName").textContent =
    portfolioData.name;

document.getElementById("cardName").textContent =
    portfolioData.name;

document.getElementById("footerName").textContent =
    portfolioData.name;

document.getElementById("heroRole").textContent =
    portfolioData.role;

document.getElementById("cardCourse").textContent =
    portfolioData.course;

document.getElementById("heroBio").textContent =
    portfolioData.bio;

document.getElementById("aboutText").textContent =
    portfolioData.about;


/* =========================================
   SOCIAL LINKS
========================================= */

document.getElementById("githubLink").href =
    portfolioData.github;

document.getElementById("linkedinLink").href =
    portfolioData.linkedin;

document.getElementById("emailLink").href =
    `mailto:${portfolioData.email}`;

document.getElementById("contactEmail").href =
    `mailto:${portfolioData.email}`;


/* =========================================
   SKILLS
========================================= */

const skillsContainer =
    document.getElementById("skillsContainer");

portfolioData.skills.forEach(skill => {

    const skillElement =
        document.createElement("div");

    skillElement.className =
        "skill glass";

    skillElement.innerHTML = `
        <i class="${skill.icon}"></i>
        <span>${skill.name}</span>
    `;

    skillsContainer.appendChild(skillElement);

});


/* =========================================
   PROJECTS
========================================= */

const projectsContainer =
    document.getElementById("projectsContainer");

portfolioData.projects.forEach((project, index) => {

    const projectElement =
        document.createElement("div");

    projectElement.className =
        "project-card glass";

    const tags =
        project.tags
            .map(tag => `<span>${tag}</span>`)
            .join("");

    projectElement.innerHTML = `

        <span class="project-number">
            PROJECT ${String(index + 1).padStart(2, "0")}
        </span>

        <h3>${project.title}</h3>

        <p>
            ${project.description}
        </p>

        <div class="project-tags">
            ${tags}
        </div>

        <a
            class="project-link"
            href="${project.link}"
            target="_blank"
            aria-label="View project"
        >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
    `;

    projectsContainer.appendChild(projectElement);

});


/* =========================================
   CERTIFICATIONS
========================================= */

const certificationsContainer =
    document.getElementById("certificationsContainer");

portfolioData.certifications.forEach(cert => {

    const certElement =
        document.createElement("div");

    certElement.className =
        "cert-card glass";

    certElement.innerHTML = `

        <div class="cert-icon">
            <i class="fa-solid fa-certificate"></i>
        </div>

        <div>

            <h3>${cert.title}</h3>

            <p>
                ${cert.organization}
            </p>

            <small>
                ${cert.year}
            </small>

            <br><br>

            <a
                href="${cert.link}"
                target="_blank"
                class="cert-link"
            >
                View Certificate →
            </a>

        </div>
    `;

    certificationsContainer.appendChild(certElement);

});


/* =========================================
   EDUCATION
========================================= */

const educationContainer =
    document.getElementById("educationContainer");

portfolioData.education.forEach(education => {

    const educationElement =
        document.createElement("div");

    educationElement.className =
        "education-card glass";

    educationElement.innerHTML = `

        <span>
            ${education.year}
        </span>

        <h3>
            ${education.degree}
        </h3>

        <p>
            ${education.school}
        </p>

        <p>
            ${education.description}
        </p>
    `;

    educationContainer.appendChild(educationElement);

});


/* =========================================
   STATISTICS
========================================= */

document.getElementById("projectCount").textContent =
    portfolioData.projects.length;

document.getElementById("certCount").textContent =
    portfolioData.certifications.length;

document.getElementById("skillCount").textContent =
    portfolioData.skills.length;


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const nav =
        document.querySelector(".nav-links");

    nav.classList.toggle("active");

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .querySelector(".nav-links")
                .classList.remove("active");

        });

    });
