/* ==========================================================================
   app.js - CORE INTERACTIONS & SERVERLESS WHATSAPP ROUTING
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // NAVIGATION MOBIL ACCESIBLE
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
            
            // Alternar ícono de menú hambuguesa a equis
            const icon = navToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });
    }

    // CIERRE AUTOMÁTICO DE MENÚ AL SELECCIONAR ENLACE (MOBILE)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.querySelector('i').className = 'fa-solid fa-bars';
            }
        });
    });

    // SISTEMA DE ACORDEÓN DE FAQS
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            
            // Cerrar otros acordeones abiertos para mantener orden
            document.querySelectorAll('.accordion-header').forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherHeader.parentElement.querySelector('.accordion-content').style.maxHeight = null;
                    otherHeader.querySelector('.icon').style.transform = 'rotate(0deg)';
                }
            });

            // Conmutar el actual
            if (!isExpanded) {
                header.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + "px";
                header.querySelector('.icon').style.transform = 'rotate(180deg)';
            } else {
                header.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
                header.querySelector('.icon').style.transform = 'rotate(0deg)';
            }
        });
    });

    // ENLACE DINÁMICO DESDE CARDS DE SERVICIO AL FORMULARIO
    const cardButtons = document.querySelectorAll('.btn-card-action');
    const serviceSelect = document.getElementById('form-service');

    cardButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetService = btn.getAttribute('data-service');
            if (serviceSelect) {
                serviceSelect.value = targetService;
                // Smooth scroll hacia el formulario de contacto
                document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // CONTROL DEL FORMULARIO Y CONEXIÓN CON API WHATSAPP
    const contactForm = document.getElementById('whatsapp-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Detiene el envío HTTP tradicional para procesar via API

            const name = document.getElementById('form-name').value.trim();
            const email = document.getElementById('form-email').value.trim();
            const phone = document.getElementById('form-phone').value.trim();
            const service = document.getElementById('form-service').value;
            const message = document.getElementById('form-message').value.trim();

            // Validación rápida de seguridad
            if (!name || !email || !phone || !service || !message) {
                alert('Por favor, complete todos los campos requeridos.');
                return;
            }

            // Construcción del mensaje estructurado para WhatsApp
            const basePhone = "5493874520000";
            const textTemplate = `Hola Conan Informática,\n\nSolicito presupuesto para el siguiente servicio:\n\n` +
                                 `*Servicio:* ${service}\n` +
                                 `*Nombre/Empresa:* ${name}\n` +
                                 `*Email:* ${email}\n` +
                                 `*Teléfono:* ${phone}\n\n` +
                                 `*Detalle del requerimiento:*\n${message}`;

            // Codificar el texto de forma segura para URIs
            const encodedText = encodeURIComponent(textTemplate);
            const whatsappUrl = `https://wa.me/${basePhone}?text=${encodedText}`;

            // Ejecuta la redirección nativa en pestaña limpia
            window.open(whatsappUrl, '_blank', 'noopener');
        });
    }
});