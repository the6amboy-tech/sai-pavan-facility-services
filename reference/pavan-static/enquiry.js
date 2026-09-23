(() => {
  const PRIMARY_WHATSAPP = 'https://wa.me/919700012237';

  function serviceWhatsAppLink(service) {
    if (!service) return PRIMARY_WHATSAPP;
    const message = `Hello, I am interested in ${service}. Please share the details and quotation.`;
    return `${PRIMARY_WHATSAPP}?text=${encodeURIComponent(message)}`;
  }

  function setStatus(form, message, state) {
    const status = form.querySelector('.form-status');
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state || '';
  }

  function updateWhatsApp(form) {
    const service = form.querySelector('[name="service"]')?.value;
    const button = form.querySelector('.form-whatsapp');
    if (button) button.href = serviceWhatsAppLink(service);
  }

  document.querySelectorAll('.enquiry-form').forEach(form => {
    form.querySelector('[name="service"]')?.addEventListener('change', () => updateWhatsApp(form));
    updateWhatsApp(form);
  });

  document.addEventListener('click', event => {
    const formButton = event.target.closest('#emailEnquiry');
    if (!formButton) return;
    event.preventDefault();
    const service = formButton.dataset.service;
    document.querySelectorAll('.enquiry-form [name="service"]').forEach(select => {
      select.value = service;
      updateWhatsApp(select.closest('form'));
    });
    document.querySelector('#enquiryDialog')?.close();
    document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, true);

  document.addEventListener('submit', async event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches('.enquiry-form')) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    if (!form.checkValidity()) {
      setStatus(form, 'Please complete all required fields before submitting your enquiry.', 'error');
      form.reportValidity();
      return;
    }

    const submitButton = form.querySelector('.submit-form');
    const originalLabel = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending Enquiry…';
    setStatus(form, '', '');

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const result = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = await result.json().catch(() => ({}));

      if (!result.ok || !body.success) {
        throw new Error(body.message || 'We could not send your enquiry.');
      }

      form.reset();
      updateWhatsApp(form);
      setStatus(form, 'Thank you — your enquiry has been sent successfully. Our team will get back to you shortly.', 'success');
    } catch (error) {
      setStatus(form, error.message || 'We could not send your enquiry. Please use WhatsApp or call us directly.', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalLabel;
    }
  }, true);
})();
