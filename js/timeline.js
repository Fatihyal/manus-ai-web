// Timeline JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Variables
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Initialize timeline animations
    function initTimeline() {
        timelineItems.forEach(item => {
            item.classList.add('timeline-animate');
        });
    }
    
    // Animate timeline items when they come into view
    function animateTimelineItems() {
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemPosition < windowHeight - 50) {
                item.classList.add('active');
            }
        });
    }
    
    // Event listeners
    window.addEventListener('scroll', animateTimelineItems);
    
    // Initialize timeline on page load
    initTimeline();
    
    // Trigger initial animations
    setTimeout(animateTimelineItems, 500);
    
    // Timeline navigation (for future enhancement)
    const timelineYears = [
        { year: 'Present', label: 'Present' },
        { year: '2010', label: '2010' },
        { year: '2009', label: '2009' },
        { year: 'Prior', label: 'Prior Experience' }
    ];
    
    // Function to create timeline navigation (for future enhancement)
    function createTimelineNav() {
        const timelineContainer = document.querySelector('.timeline-container');
        
        if (!timelineContainer) return;
        
        const timelineNav = document.createElement('div');
        timelineNav.className = 'timeline-navigation';
        
        timelineYears.forEach(yearData => {
            const yearBtn = document.createElement('button');
            yearBtn.className = 'timeline-nav-btn';
            yearBtn.textContent = yearData.label;
            yearBtn.setAttribute('data-year', yearData.year);
            
            yearBtn.addEventListener('click', function() {
                const targetYear = this.getAttribute('data-year');
                scrollToTimelineItem(targetYear);
            });
            
            timelineNav.appendChild(yearBtn);
        });
        
        // Insert before the timeline
        timelineContainer.insertBefore(timelineNav, timelineContainer.firstChild);
    }
    
    // Function to scroll to specific timeline item (for future enhancement)
    function scrollToTimelineItem(year) {
        const targetItem = document.querySelector(`.timeline-item .timeline-date:contains('${year}')`).closest('.timeline-item');
        
        if (targetItem) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetItem.getBoundingClientRect().top + window.scrollY;
            
            window.scrollTo({
                top: targetPosition - headerHeight - 50,
                behavior: 'smooth'
            });
        }
    }
    
    // Uncomment to enable timeline navigation in future versions
    // createTimelineNav();
});
