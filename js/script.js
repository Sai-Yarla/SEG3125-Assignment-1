// Custom JavaScript logic goes here

document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded successfully.");
    
    // Example of a simple interaction, logging when a user views a case study
    const caseStudyLinks = document.querySelectorAll('.card .btn');
    caseStudyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log('User navigating to a case study view.');
        });
    });
});