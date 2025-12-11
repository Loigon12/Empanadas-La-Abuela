document.addEventListener('DOMContentLoaded', () => {
            // Mobile Menu Toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });

            // Smooth Scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const headerHeight = document.querySelector('.main-header').offsetHeight;
                        const targetPosition = targetElement.offsetTop - headerHeight;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Menu Detail Pop-up (mejorado con span en lugar de alert)
            document.querySelectorAll('.view-details-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const flavor = e.target.dataset.flavor;
                    const itemTitle = e.target.closest('.menu-item').querySelector('.item-title').textContent;
                    
                    let message = '';
                    switch(flavor) {
                        case 'beef':
                            message = `¡Excelente elección! Nuestra ${itemTitle} lleva carne de res lenta, papa y especias tradicionales. Acompáñala con nuestro ají casero.`;
                            break;
                        case 'chicken':
                            message = `El ${itemTitle} se prepara con pechuga desmenuzada, arroz y achiote natural para un sabor profundo y cálido.`;
                            break;
                        case 'cheese':
                            message = `Nuestra ${itemTitle} combina quesos mozzarella, costeño, doble crema y queso fresco. ¡Fundido perfecto en cada bocado!`;
                            break;
                        case 'specialty':
                            message = `La ${itemTitle} es un postre tradicional: plátano maduro y dulce de guayaba artesanal. Ideal con café de olla.`;
                            break;
                        default:
                            message = `Pronto tendremos más detalles de ${itemTitle} — ¡pregúntanos en tienda!`;
                    }
                    alert(message);
                });
            });
        });