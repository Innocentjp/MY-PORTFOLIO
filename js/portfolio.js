const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

const header = document.querySelector('header');
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        header.style.boxShadow = 'none';
    }

    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const modal = document.getElementById('certModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-modal');
const certLinks = document.querySelectorAll('.cert-link');

certLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const imgSrc = this.getAttribute('data-img'); 
        modalImg.src = imgSrc;
        modal.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => { modal.classList.remove('active'); });
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

const yearSpan = document.getElementById('currentYear');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const myProjects = [
    {
        url: "https://enugu-waterwatch.netlify.app",
        title: "Enugu WaterWatch (EWAW)",
        techStack: "React.js, JavaScript (ES6+), Leaflet.js, CartoDB Voyager, Tailwind CSS",
        description: "A digital utility platform designed for Enugu State to track public water infrastructure in real-time, report faulty boreholes, and coordinate Smart Tanker Pooling securely.",
        customImage: "./img/ewaw-hero.png"
    },
    {
        url: "https://cppaccreditation.co.uk/",
        title: "CPP Accreditation Portal",
        techStack: "HTML5, CSS3, JavaScript",
        description: "A fully functional membership and accreditation website built for a professional project management organization, featuring secure routing and responsive data layouts.",
        customImage: "./img/cpp-hero.png" 
    },
    {
        url: "https://abck-fashion-brand.netlify.app/",
        adminUrl: "https://abck-fashion-brand.netlify.app/admin.html",
        title: "ABCK Fashion Landing Page",
        techStack: "HTML5, CSS3, JavaScript",
        description: "A visually engaging e-commerce platform for a modern fashion brand. Features a comprehensive administrative dashboard to manage product inventory and track store updates effectively.",
        customImage: "./img/abck-hero.png"
    },
    {
        url: "https://physiotherapy-site.netlify.app/",
        title: "Clinical Physiotherapy Site",
        techStack: "Figma, HTML5, CSS3",
        description: "A professional, user-friendly clinical website focused on physical therapy services, patient resources, and modern UI/UX design principles.",
        customImage: "./img/physio-site-hero.png"
    },
    {
        url: "https://dr-ayodele-portfolio.netlify.app/",
        title: "IAPM&D · International Academy for Project Management & Development",
        techStack: "HTML5, CSS3, JavaScript",
        description: "An executive digital portfolio designed for the founder of the International Academy for Project Management & Development (IAPM&D), showcasing their leadership, professional milestones, and industry expertise.",
        customImage: "./img/iapmd-hero.png"
    },
    {
        url: "https://el-profile.netlify.app/",
        title: "EL Profile / Digital Resume",
        techStack: "React.js, CSS3",
        description: "A sleek, interactive digital profile and resume application designed to beautifully showcase professional milestones and creative design portfolios.",
        customImage: "./img/el-profile-hero.png"
    },
    {
        url: "https://plane-game-by-innocentjp.netlify.app/",
        title: "Aero Glide",
        techStack: "Phaser 3 (Arcade Physics System), HTML5, CSS3, JavaScript, Native Web Audio",
        description: "A high-fidelity, endless arcade flyer featuring dynamic difficulty scaling, custom physics, and responsive mobile controls.",
        customImage: "./img/plane-hero.png" 
    },
    {
        url: "https://snake-game-by-innocentjp.netlify.app/",
        title: "Retro Snake Clone",
        techStack: "Phaser.js, HTML5 Canvas, JavaScript",
        description: "A responsive web-based recreation of the classic Snake game, emphasizing core programming logic, array manipulation, and mobile responsiveness.",
        customImage: "./img/snake-hero.png"
    },
    {
        url: "https://web3-rialo-quiz.netlify.app/",
        title: "Web3 Rialo Quiz dApp",
        techStack: "Web3.js, React.js, Node.js",
        description: "A decentralized quiz application integrating blockchain concepts, designed to interact with Web3 wallets and test advanced cryptocurrency knowledge.",
        customImage: "./img/rialo-hero.png" 
    },
    {
        url: "https://physiology-quiz.netlify.app/",
        title: "Physiology Academic Quiz",
        techStack: "JavaScript, HTML5, CSS3",
        description: "An interactive educational platform tailored for medical rehabilitation students to rigorously test their knowledge of vital signs and exercise physiology.",
        customImage: "./img/physio-quiz-hero.png"
    }
];

const myDesigns = [
    { category: "flyer", img: "./img/Fl-4.jpg", alt: "Luxe Collection Jewelry Promotional Ad" },
    { category: "flyer", img: "./img/Fl-1.jpg", alt: "Savory Eats Restaurant Food Menu Design" },
    { category: "flyer", img: "./img/Fl-2.jpg", alt: "Annie's Crunchy Delight Snack Brand Flyer" },
    { category: "flyer", img: "./img/Fl-3.jpg", alt: "Blick Gold Premium Palm Oil Product Label" }
];

const projectsContainer = document.getElementById('dynamic-projects');
const masonryContainer = document.getElementById('dynamic-masonry');
const filterBtns = document.querySelectorAll('.masonry-filter .filter-btn');

async function generateProjectCards() {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = '';

    for (const project of myProjects) {
        let imageUrl = project.customImage || './img/p2.jpeg';

        const adminBtn = project.adminUrl 
            ? `<a href="${project.adminUrl}" class="btn-admin" target="_blank" onclick="event.stopPropagation()"><i class="fa-solid fa-user-shield"></i> Admin View</a>` 
            : '';

        const cardHTML = `
            <article class="project-card" onclick="window.open('${project.url}', '_blank')">
                <img src="${imageUrl}" alt="${project.title} thumbnail" loading="lazy">
                <div class="card-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="tech-stack">${project.techStack}</p>
                    <p>${project.description}</p>
                    <div class="project-links">
                        <a href="${project.url}" class="live-link" target="_blank" onclick="event.stopPropagation()">View Live Project &rarr;</a>
                        ${adminBtn}
                    </div>
                </div>
            </article>
        `;
        projectsContainer.innerHTML += cardHTML;
    }
}

function generateMasonryCards(filterCategory = 'all') {
    if (!masonryContainer) return;
    
    if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.getAll().forEach(t => {
            if (t.trigger && t.trigger.classList && t.trigger.classList.contains('masonry-item')) {
                t.kill();
            }
        });
    }

    masonryContainer.innerHTML = '';

    const filteredDesigns = filterCategory === 'all' 
        ? myDesigns 
        : myDesigns.filter(d => d.category === filterCategory);

    for (const design of filteredDesigns) {
        const itemHTML = `
            <div class="masonry-item">
                <img src="${design.img}" alt="${design.alt}" loading="lazy">
            </div>
        `;
        masonryContainer.innerHTML += itemHTML;
    }

    const currentMasonryItems = masonryContainer.querySelectorAll('.masonry-item');
    currentMasonryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgElement = this.querySelector('img');
            modalImg.src = imgElement.src;
            modal.classList.add('active');
        });
    });

    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        setTimeout(() => {
            gsap.utils.toArray(".masonry-item").forEach(item => {
                gsap.fromTo(item, 
                    { y: 50, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: item,
                            start: "top 95%",
                            end: "bottom 5%",
                            toggleActions: "play reverse play reverse"
                        },
                        y: 0, opacity: 1, duration: 0.6, ease: "power2.out"
                    }
                );
            });
            ScrollTrigger.refresh();
        }, 100);
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');
        generateMasonryCards(filterValue);
    });
});

async function initPortfolio() {
    await generateProjectCards();
    generateMasonryCards('all');
    
    if (typeof gsap !== "undefined") {
        initGSAPAnimations();
    }
}

initPortfolio();

function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    const safeTrigger = (element) => ({
        trigger: element,
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse"
    });

    gsap.fromTo(".hero-content > *", 
        { y: 40, opacity: 0 },
        { scrollTrigger: safeTrigger(".hero"), y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );

    gsap.fromTo(".hero-image", 
        { scale: 0.8, opacity: 0 },
        { scrollTrigger: safeTrigger(".hero"), scale: 1, opacity: 1, duration: 1, delay: 0.3, ease: "back.out(1.5)" }
    );

    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title, { y: 30, opacity: 0 }, { scrollTrigger: safeTrigger(title), y: 0, opacity: 1, duration: 0.6, ease: "power2.out" });
    });

    gsap.utils.toArray(".skill-tag").forEach(skill => {
        gsap.fromTo(skill, { y: 30, scale: 0.9, opacity: 0 }, { scrollTrigger: safeTrigger(skill), y: 0, scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" });
    });

    gsap.utils.toArray('#dynamic-projects .project-card').forEach(card => {
        gsap.fromTo(card, { y: 60, opacity: 0 }, { scrollTrigger: safeTrigger(card), y: 0, opacity: 1, duration: 0.7, ease: "power3.out" });
    });

    gsap.utils.toArray(".cert-grid .project-card").forEach(cert => {
        gsap.fromTo(cert, { y: 40, opacity: 0 }, { scrollTrigger: safeTrigger(cert), y: 0, opacity: 1, duration: 0.6, ease: "power2.out" });
    });

    gsap.utils.toArray(".contact-socials a").forEach(social => {
        gsap.fromTo(social, { y: 20, scale: 0.8, opacity: 0 }, { scrollTrigger: safeTrigger(social), y: 0, scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" });
    });

    document.querySelectorAll('img').forEach(img => {
        if (img.complete) {
            ScrollTrigger.refresh();
        } else {
            img.addEventListener('load', () => ScrollTrigger.refresh());
        }
    });

    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
}