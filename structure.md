# Website Project Structure

## Directory Structure
```
website_project/
├── index.html          # Main HTML file
├── css/                # CSS stylesheets
│   ├── style.css       # Main stylesheet
│   ├── responsive.css  # Responsive design rules
│   └── animations.css  # Animation effects
├── js/                 # JavaScript files
│   ├── main.js         # Main JavaScript functionality
│   ├── timeline.js     # Timeline implementation
│   └── skills.js       # Skills visualization
├── images/             # Image assets
│   └── placeholder.jpg # Placeholder for profile image
├── assets/             # Other assets
│   └── CV_fatihyaldiz.pdf  # Downloadable CV
└── data/               # Data files
    └── cv_data.json    # CV data in JSON format
```

## HTML Structure
- `index.html`: Single-page website with sections:
  - Header with navigation
  - Hero section
  - About section
  - Experience section with timeline
  - Skills section with visualizations
  - Projects/Portfolio section
  - Education & Certifications section
  - Contact section
  - Footer with social links

## Responsive Design Approach
- Mobile-first design
- CSS Grid and Flexbox for layouts
- Media queries for breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## Interactive Elements
- Sticky navigation
- Smooth scrolling
- Animated skill bars
- Interactive timeline
- Project filtering
- Form validation
- Hover effects and transitions

## Technologies
- HTML5
- CSS3 (with variables and modern features)
- JavaScript (ES6+)
- No external frameworks to keep it lightweight

## Performance Considerations
- Optimized images
- Minified CSS and JS
- Lazy loading for images
- Efficient animations

## Accessibility Features
- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Color contrast compliance
- Screen reader compatibility
