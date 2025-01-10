// Dynamic text rotation in the container
const dynamicTextElement = document.getElementById("dynamicText");
const textPhrases = [
    "Your journey starts here. Discover what's possible with us.",
    "Innovate your projects with top-tier solutions.",
    "Designing the future, one step at a time.",
    "Your trusted partner in digital transformation."
];
let currentPhraseIndex = 0;

// Function to cycle through phrases
function changeText() {
    dynamicTextElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        currentPhraseIndex = (currentPhraseIndex + 1) % textPhrases.length;
        dynamicTextElement.innerText = textPhrases[currentPhraseIndex];
        dynamicTextElement.style.opacity = 1; // Fade in
    }, 500);
}

// Start cycling text every 3 seconds
setInterval(changeText, 3000);

// Dynamic content for features
const features = [
    { title: "Innovative Solutions", description: "Discover groundbreaking solutions that elevate your projects." },
    { title: "User-Centric Design", description: "Enjoy seamless and intuitive experiences for every user." },
    { title: "Scalability", description: "Grow with confidence, knowing your needs are met at every stage." },
    { title: "24/7 Support", description: "We are here to assist you anytime, anywhere." },
    { title: "Advanced Analytics", description: "Gain insights to drive informed decisions and strategy." }
];

// Dynamically add features
const featureContainer = document.querySelector('.feature-container');

features.forEach((feature) => {
    const featureDiv = document.createElement('div');
    featureDiv.classList.add('feature');
    featureDiv.innerHTML = `
        <h2>${feature.title}</h2>
        <p>${feature.description}</p>
    `;
    featureContainer.appendChild(featureDiv);
});

// IntersectionObserver for animations
const featureElements = document.querySelectorAll('.feature');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Apply 'show' class when in view
            observer.unobserve(entry.target); // Stop observing once it's shown
        }
    });
}, observerOptions);

featureElements.forEach(feature => observer.observe(feature));

// Scroll to section function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
