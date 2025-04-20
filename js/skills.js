// Skills JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Variables
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillSection = document.getElementById('skills');
    
    // Initialize skill bars
    function initSkillBars() {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = '0';
            bar.style.setProperty('--progress', `${progress}%`);
        });
    }
    
    // Animate skill bars when they come into view
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (barPosition < windowHeight - 50) {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = `${progress}%`;
                bar.classList.add('animate');
            }
        });
    }
    
    // Event listeners
    window.addEventListener('scroll', animateSkillBars);
    
    // Initialize skill bars on page load
    initSkillBars();
    
    // Trigger initial animations if skills section is already in view
    setTimeout(animateSkillBars, 500);
    
    // Skill category tabs (for future enhancement)
    const skillCategories = document.querySelectorAll('.skill-category');
    
    // Function to create skill category tabs (for future enhancement)
    function createSkillTabs() {
        if (skillCategories.length <= 1) return;
        
        const skillsContent = document.querySelector('.skills-content');
        const tabsContainer = document.createElement('div');
        tabsContainer.className = 'skill-tabs';
        
        skillCategories.forEach((category, index) => {
            const categoryTitle = category.querySelector('h3').textContent;
            const tab = document.createElement('button');
            tab.className = 'skill-tab';
            tab.textContent = categoryTitle;
            tab.setAttribute('data-index', index);
            
            if (index === 0) {
                tab.classList.add('active');
                category.classList.add('active');
            } else {
                category.classList.add('hidden');
            }
            
            tab.addEventListener('click', function() {
                const tabIndex = this.getAttribute('data-index');
                
                // Remove active class from all tabs and categories
                document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
                skillCategories.forEach(c => c.classList.add('hidden'));
                
                // Add active class to clicked tab and corresponding category
                this.classList.add('active');
                skillCategories[tabIndex].classList.remove('hidden');
                
                // Re-trigger skill bar animations
                setTimeout(animateSkillBars, 100);
            });
            
            tabsContainer.appendChild(tab);
        });
        
        // Insert tabs before skill categories
        skillsContent.insertBefore(tabsContainer, skillsContent.firstChild);
    }
    
    // Interactive skill details (for future enhancement)
    function createSkillDetails() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            const skillName = item.querySelector('h4').textContent;
            const skillPercentage = item.querySelector('.skill-percentage').textContent;
            
            item.addEventListener('click', function() {
                const detailsContainer = document.createElement('div');
                detailsContainer.className = 'skill-details-modal';
                
                const detailsContent = document.createElement('div');
                detailsContent.className = 'skill-details-content';
                
                const closeBtn = document.createElement('button');
                closeBtn.className = 'skill-details-close';
                closeBtn.innerHTML = '&times;';
                
                const title = document.createElement('h3');
                title.textContent = skillName;
                
                const percentage = document.createElement('div');
                percentage.className = 'skill-details-percentage';
                percentage.textContent = skillPercentage;
                
                const description = document.createElement('p');
                description.textContent = `Detailed information about ${skillName} expertise and experience.`;
                
                detailsContent.appendChild(closeBtn);
                detailsContent.appendChild(title);
                detailsContent.appendChild(percentage);
                detailsContent.appendChild(description);
                detailsContainer.appendChild(detailsContent);
                
                document.body.appendChild(detailsContainer);
                
                // Show modal with animation
                setTimeout(() => {
                    detailsContainer.classList.add('active');
                }, 10);
                
                // Close modal when clicking close button
                closeBtn.addEventListener('click', function() {
                    detailsContainer.classList.remove('active');
                    setTimeout(() => {
                        detailsContainer.remove();
                    }, 300);
                });
                
                // Close modal when clicking outside content
                detailsContainer.addEventListener('click', function(e) {
                    if (e.target === this) {
                        detailsContainer.classList.remove('active');
                        setTimeout(() => {
                            detailsContainer.remove();
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Uncomment to enable skill tabs and details in future versions
    // createSkillTabs();
    // createSkillDetails();
});
