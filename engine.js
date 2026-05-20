document.addEventListener('DOMContentLoaded', () => {
    const coreEngine = (() => {
        
        const initLoader = () => {
            const loader = document.querySelector('.screen-loader');
            if (loader) {
                window.addEventListener('load', () => {
                    setTimeout(() => {
                        loader.classList.add('fade-out');
                    }, 600);
                });
            }
        };

        const initCounters = () => {
            const controls = document.querySelectorAll('.ctrl-btn');
            controls.forEach(button => {
                button.addEventListener('click', (e) => {
                    const direction = e.currentTarget.getAttribute('data-dir');
                    const input = e.currentTarget.closest('.counter-input').querySelector('input');
                    let val = parseInt(input.value, 10);
                    
                    if (direction === 'up' && val < 19) {
                        val++;
                    } else if (direction === 'down' && val > 1) {
                        val--;
                    }
                    input.value = val;
                });
            });
        };

        const initInteractiveFleet = () => {
            const cards = document.querySelectorAll('.fleet-card');
            cards.forEach(card => {
                card.addEventListener('click', (e) => {
                    cards.forEach(c => c.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                });
            });
        };

        const initSmoothScroll = () => {
            const triggers = document.querySelectorAll('.nav-link[href^="#"]');
            triggers.forEach(trigger => {
                trigger.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        };

        return {
            ignite: () => {
                initLoader();
                initCounters();
                initInteractiveFleet();
                initSmoothScroll();
            }
        };
    })();

    coreEngine.ignite();
});