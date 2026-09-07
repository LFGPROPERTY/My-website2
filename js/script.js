const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('solid');
    else header.classList.remove('solid');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  document.querySelectorAll('.acc-item').forEach(item => {
    item.addEventListener('toggle', () => {
      if(item.open){
        document.querySelectorAll('.acc-item').forEach(o => { if(o!==item) o.open=false; });
      }
    });
  });

  const pfFilters = document.querySelectorAll('.pf-filter');
  const pfCards = document.querySelectorAll('.pf-card');
  pfFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      pfFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      pfCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('pf-hidden', !show);
      });
    });
  });

  const enquiryForm = document.getElementById('enquiryForm');
  const formNote = document.getElementById('formNote');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(enquiryForm);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const type = (data.get('type') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      const subject = `Enquiry from ${name} \u2014 ${type}`;
      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Enquiry type: ${type}`,
        '',
        message
      ];
      const mailto = `mailto:info@lfgproperty.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
      window.location.href = mailto;

      formNote.textContent = 'Opening your email client to send this enquiry\u2026';
      formNote.classList.add('success');
    });
  }
