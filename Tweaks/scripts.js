// Main script for TWEAKS website

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    mobileNav.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // Form validation for contact page
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;
            
            // Basic validation
            if (!name.value.trim()) {
                highlightError(name);
                isValid = false;
            } else {
                removeHighlight(name);
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                highlightError(email);
                isValid = false;
            } else {
                removeHighlight(email);
            }
            
            if (!message.value.trim()) {
                highlightError(message);
                isValid = false;
            } else {
                removeHighlight(message);
            }
            
            if (isValid) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('.submit-btn');
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(function() {
                    submitBtn.textContent = 'Message Sent!';
                    submitBtn.style.backgroundColor = '#28a745';
                    contactForm.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(function() {
                        submitBtn.textContent = 'Send Message';
                        submitBtn.style.backgroundColor = '';
                        submitBtn.disabled = false;
                    }, 3000);
                }, 2000);
            }
        });
    }
    
    // PG Card click handler
    const pgCards = document.querySelectorAll('.pg-card');
    
    if (pgCards.length > 0) {
        pgCards.forEach(card => {
            card.addEventListener('click', function() {
                // Navigate to the corresponding PG detail page
                // This is a backup in case the onclick attribute doesn't work
                const pgNumber = this.querySelector('h2').textContent.toLowerCase().replace(' ', '');
                window.location.href = `${pgNumber}.html`;
            });
        });
    }
});

// Helper functions
function highlightError(element) {
    element.style.borderColor = '#dc3545';
    element.style.backgroundColor = 'rgba(220, 53, 69, 0.1)';
}

function removeHighlight(element) {
    element.style.borderColor = '';
    element.style.backgroundColor = '';
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

// Additional PG pages (pg2.html and pg3.html will have similar structure to pg1.html)
function createPgPages() {
    // This is just a placeholder function - in a real implementation,
    // you would generate these pages dynamically if needed
    console.log('PG pages should be created individually');
}

