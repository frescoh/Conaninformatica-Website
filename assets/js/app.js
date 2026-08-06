const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const tabButtons = document.querySelectorAll('.tab-button');
const servicePanels = document.querySelectorAll('.services-panel');
const requestButtons = document.querySelectorAll('[data-request-service]');
const contactForm = document.getElementById('contact-form');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navList.classList.toggle('show');
  });
}

if (tabButtons.length) {
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tabButtons.forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const selectedPanel = button.dataset.servicePanel;
      servicePanels.forEach((panel) => {
        panel.classList.toggle('active', panel.dataset.serviceView === selectedPanel);
      });
    });
  });
}

if (requestButtons.length) {
  requestButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const service = button.dataset.requestService;
      const message = encodeURIComponent(`Hola Conan Informática, mi nombre es ..., solicito presupuesto para el servicio de ${service}.`);
      window.open(`https://wa.me/5493874520000?text=${message}`, '_blank', 'noopener');
    });
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');

    if (!name || !email || !phone || !service || !message) {
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Hola Conan Informática, mi nombre es ${name}. Solicito presupuesto para el servicio de ${service}.\nTeléfono: ${phone}\nEmail: ${email}\nMensaje: ${message}`
    );
    window.open(`https://wa.me/5493874520000?text=${whatsappMessage}`, '_blank', 'noopener');
  });
}

const accordionTriggers = document.querySelectorAll('.accordion-trigger');
if (accordionTriggers.length) {
  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!expanded));
      const panel = trigger.nextElementSibling;
      if (panel) {
        panel.hidden = expanded;
      }
    });
  });
}
