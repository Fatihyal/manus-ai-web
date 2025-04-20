// Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Variables
    const header = document.getElementById('header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.querySelector('.back-to-top');
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const skillBars = document.querySelectorAll('.skill-progress');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const loadMoreBtn = document.getElementById('load-more');
    const contactForm = document.getElementById('contactForm');

    // Sticky Header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }

        // Back to Top Button
        if (window.scrollY > 500) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }

        // Animate elements on scroll
        animateOnScroll();

        // Animate skill bars when in viewport
        animateSkillBars();
    });

    // Mobile Navigation Toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Animate elements when they come into view
    function animateOnScroll() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('active');
            }
        });
    }

    // Animate skill bars when they come into view
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (barPosition < windowHeight - 50) {
                const progress = bar.getAttribute('data-progress');
                bar.style.setProperty('--progress', `${progress}%`);
                bar.classList.add('animate');
            }
        });
    }

    // Project filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.getAttribute('data-category').includes(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });

    // Load more projects (simulation)
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // This is a simulation - in a real scenario, you would load more projects from a database
            this.textContent = 'Loading...';
            
            setTimeout(() => {
                this.textContent = 'No More Projects';
                this.disabled = true;
            }, 1500);
        });
    }

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // In a real scenario, you would send this data to a server
            setTimeout(() => {
                // Reset form
                this.reset();
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'form-success';
                successMessage.textContent = 'Your message has been sent successfully!';
                this.appendChild(successMessage);
                
                // Reset button
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }, 1500);
        });
    }

    // Initialize animations on page load
    animateOnScroll();
    
    // Trigger initial skill bar animations
    setTimeout(animateSkillBars, 500);
});
