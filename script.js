document.addEventListener('DOMContentLoaded', function() {
   
    const heading = document.querySelector('header h1');

    
    const text = heading.textContent;

   
    const words = text.split(' ');
    heading.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');

   
    const colorChangeKeyframes = [
        { color: 'red' },
        { color: 'blue' },
        { color: 'green' },
        { color: 'orange' },
        { color: 'red' }
    ];

    
    const spans = heading.querySelectorAll('span');
    spans.forEach((span, index) => {
        span.style.animation = `colorChange 2s infinite ${index * 0.1}s`;
    });

    
    const blinkingKeyframes = [
        { opacity: 1 },
        { opacity: 0 }
    ];

    
    heading.style.animation = 'blinking 1s infinite';

    
    function applyIridescentCoralEffect(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            const iridescentCoralColors = ['#FF6B6B', '#FFE66D', '#6BFF6B', '#6D6DFF', '#6D6D6D']; // Array of iridescent coral colors
            let currentIndex = 0;

            function changeColor() {
                element.style.color = iridescentCoralColors[currentIndex];
                currentIndex = (currentIndex + 1) % iridescentCoralColors.length;
            }

            setInterval(changeColor, 1000); 
        });
    }

    
    applyIridescentCoralEffect('.about, .portfolio, .contact');

    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    
    const glowText = document.querySelectorAll('.glow-text');
    glowText.forEach(text => {
        setInterval(() => {
            text.style.color = getRandomColor();
        }, 3000);
    });
});
