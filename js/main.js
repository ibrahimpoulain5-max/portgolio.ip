/* ============================================================
   MAIN.JS — Rendu du contenu (depuis data.js) + interactions
   Aucune dépendance externe.
   ============================================================ */
(function () {
  'use strict';

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* Le HTML démarre en « no-js » pour garantir le contenu sans JS. */
  document.documentElement.classList.remove('no-js');

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function has(v) { return typeof v === 'string' && v.trim() !== ''; }
  function setText(id, val) { var el = document.getElementById(id); if (el) el.textContent = val; }

  /* ---------- ICÔNES (SVG inline, stroke) ---------- */
  var ICONS = {
    code:     '<path d="M9 17l-5-5 5-5M15 7l5 5-5 5M13 4l-2 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    web:      '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.5 12h17M12 3.5c2.4 2.6 3.6 5.4 3.6 8.5S14.4 18 12 20.5C9.6 17.9 8.4 15.1 8.4 12S9.6 6.1 12 3.5z" fill="none" stroke="currentColor" stroke-width="1.7"/>',
    python:   '<path d="M12 3c-3 0-4.5 1.2-4.5 3.4V9H14v1H6.5C4.4 10 3 11.6 3 14s1.4 4 3.5 4H9v-2.6c0-2 1.6-3.4 3.6-3.4h4.4c1.7 0 3-1.4 3-3.1V6.4C20 4.2 18.4 3 15.4 3H12z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="9.5" cy="6.2" r="1" fill="currentColor"/>',
    terminal: '<rect x="3" y="4.5" width="18" height="15" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M7.5 9.5L10.5 12l-3 2.5M13 15h4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    network:  '<circle cx="12" cy="5" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="5" cy="18" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="19" cy="18" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 7.4v4.2M12 11.6L6.4 16M12 11.6l5.6 4.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    shield:   '<path d="M12 3l7.5 3v5.4c0 4.4-3.1 7.9-7.5 9.6-4.4-1.7-7.5-5.2-7.5-9.6V6L12 3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12l2.2 2.2L15.4 10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    cpu:      '<rect x="6.5" y="6.5" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="10" y="10" width="4" height="4" rx="1" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10 3.5v3M14 3.5v3M10 17.5v3M14 17.5v3M3.5 10h3M3.5 14h3M17.5 10h3M17.5 14h3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    tool:     '<path d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 005.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.code) + '</svg>';
  }

  var SITE_DATA = (typeof SITE !== 'undefined') ? SITE : {};

  /* ---------- 1. IDENTITÉ / HERO ---------- */
  function renderProfile() {
    var p = SITE_DATA.profile || {};
    var fullName = (p.firstName || '') + ' ' + (p.lastName || '');

    setText('heroName', fullName.trim() || 'Votre nom');
    setText('heroStatus', p.status || '');
    setText('heroDomain', p.domain || '');
    setText('heroTagline', p.tagline || '');
    setText('heroBadge', p.available || '');
    setText('heroLocation', p.location || '');
    setText('navInitials', p.initials || '_');
    setText('footerInitials', p.initials || '_');
    setText('tWhoami', (p.firstName || 'etudiant').toLowerCase().replace(/\s+/g, '_'));
    setText('tFocus', (p.domain || '').toLowerCase());
    setText('tStatus', '[ok] ' + (p.available || 'disponible').toLowerCase());
    document.title = fullName.trim() + ' — Portfolio';

    var emailEl = document.getElementById('heroEmail');
    if (emailEl && has(p.email)) {
      var mail = p.email.trim();
      emailEl.textContent = mail;
      emailEl.href = 'mailto:' + mail;
    }

    /* Séparateur du rôle : masque si une des deux parties manque */
    var sep = $('.hero__role-sep');
    if (sep && (!p.status || !p.domain)) sep.style.display = 'none';
  }

  /* ---------- 2. À PROPOS ---------- */
  function renderAbout() {
    var a = SITE_DATA.about || {};

    var intro = document.getElementById('aboutIntro');
    if (intro) {
      intro.innerHTML = (a.intro || []).map(function (t) {
        return '<p>' + esc(t) + '</p>';
      }).join('');
    }

    var goals = document.getElementById('aboutGoals');
    if (goals) {
      goals.innerHTML = (a.goals || []).map(function (t) {
        return '<li>' + esc(t) + '</li>';
      }).join('');
    }

    var facts = document.getElementById('aboutFacts');
    if (facts) {
      facts.innerHTML = (a.facts || []).map(function (f) {
        return '<div><dt>' + esc(f.label) + '</dt><dd>' + esc(f.value) + '</dd></div>';
      }).join('');
    }
  }

  /* ---------- 3. COMPÉTENCES ---------- */
  function renderSkills() {
    var grid = document.getElementById('skillsGrid');
    if (!grid) return;

    grid.innerHTML = (SITE_DATA.skills || []).map(function (cat, i) {
      var items = (cat.items || []).map(function (it) {
        return '<span class="chip">' + esc(it) + '</span>';
      }).join('');

      return '' +
        '<article class="skill" data-reveal data-reveal-delay="' + (i % 3) * 70 + '">' +
          '<div class="skill__head">' +
            '<span class="skill__icon">' + icon(cat.icon) + '</span>' +
            '<h3 class="skill__title">' + esc(cat.category) + '</h3>' +
            '<span class="skill__count">' + (cat.items || []).length + '</span>' +
          '</div>' +
          '<div class="skill__items">' + items + '</div>' +
        '</article>';
    }).join('');
  }

  /* ---------- 4. PROJETS ---------- */
  var STATUS_CLASS = {
    'Terminé':   'status--done',
    'En cours':  'status--wip',
    'Recherche': 'status--search'
  };

  function renderProjects() {
    var grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = (SITE_DATA.projects || []).map(function (pr, i) {
      var initial = (pr.name || '?').trim().charAt(0).toUpperCase();

      var media = has(pr.image)
        ? '<img src="' + esc(pr.image) + '" alt="Aperçu du projet ' + esc(pr.name) + '" loading="lazy" decoding="async">'
        : '<div class="project__fallback"><span>' + esc(initial) + '</span></div>';

      var status = pr.status || '';
      var badge = status
        ? '<span class="project__status ' + (STATUS_CLASS[status] || 'status--wip') + '">' + esc(status) + '</span>'
        : '';

      var tech = (pr.tech || []).map(function (t) {
        return '<span>' + esc(t) + '</span>';
      }).join('');

      var links = '';
      if (has(pr.github)) {
        links += '<a class="project__link" href="' + esc(pr.github) + '" target="_blank" rel="noopener">' +
                 '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 00-6 0C6.2 2.8 5.1 3.1 5.1 3.1a4.3 4.3 0 00-.1 3.2A4.6 4.6 0 003.7 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
                 'Code</a>';
      }
      if (has(pr.url)) {
        links += '<a class="project__link project__link--primary" href="' + esc(pr.url) + '" target="_blank" rel="noopener">' +
                 '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-8.5 8.5M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
                 'Voir le projet</a>';
      }

      return '' +
        '<article class="project" data-reveal data-reveal-delay="' + (i % 3) * 90 + '">' +
          '<div class="project__media">' + media + badge + '</div>' +
          '<div class="project__body">' +
            '<h3 class="project__name">' + esc(pr.name) + '</h3>' +
            '<p class="project__desc">' + esc(pr.description) + '</p>' +
            '<div class="project__tech">' + tech + '</div>' +
            (links ? '<div class="project__links">' + links + '</div>' : '') +
          '</div>' +
        '</article>';
    }).join('');
  }

  /* ---------- 5. TIMELINE ---------- */
  function renderTimeline() {
    var list = document.getElementById('timelineList');
    if (!list) return;

    var pin = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';

    list.innerHTML = (SITE_DATA.timeline || []).map(function (t, i) {
      return '' +
        '<div class="tl-item" data-reveal data-reveal-delay="' + (i % 2) * 90 + '">' +
          '<div class="tl-card">' +
            '<div class="tl-meta">' +
              '<span class="tl-date">' + esc(t.date) + '</span>' +
              '<span class="tl-type">' + esc(t.type) + '</span>' +
            '</div>' +
            '<h3 class="tl-title">' + esc(t.title) + '</h3>' +
            '<p class="tl-place">' + pin + esc(t.place) + '</p>' +
            '<p class="tl-desc">' + esc(t.description) + '</p>' +
          '</div>' +
        '</div>';
    }).join('');
  }


  /* ---------- 6. CV ---------- */
  function renderCv() {
    var cv = SITE_DATA.cv || {};

    var edu = document.getElementById('cvEducation');
    if (edu) {
      edu.innerHTML = (cv.education || []).map(function (e) {
        return '<li class="cv__item">' +
                 '<span class="cv__period">' + esc(e.period) + '</span>' +
                 '<span class="cv__title">' + esc(e.title) + '</span><br>' +
                 '<span class="cv__place">' + esc(e.place) + '</span>' +
               '</li>';
      }).join('');
    }

    var exp = document.getElementById('cvExperience');
    if (exp) {
      exp.innerHTML = (cv.experience || []).map(function (e) {
        return '<li class="cv__item">' +
                 '<span class="cv__period">' + esc(e.period) + '</span>' +
                 '<span class="cv__title">' + esc(e.title) + '</span><br>' +
                 '<span class="cv__place">' + esc(e.place) + '</span>' +
                 (e.detail ? '<p class="cv__detail">' + esc(e.detail) + '</p>' : '') +
               '</li>';
      }).join('');
    }

    var cert = document.getElementById('cvCertifications');
    if (cert) {
      cert.innerHTML = (cv.certifications || []).map(function (c) {
        return '<li class="cv__item">' +
                 '<span class="cv__period">' + esc(c.year) + '</span>' +
                 '<span class="cv__title">' + esc(c.name) + '</span><br>' +
                 '<span class="cv__place">' + esc(c.issuer) + '</span>' +
               '</li>';
      }).join('');
    }

    var langs = document.getElementById('cvLanguages');
    if (langs) {
      langs.innerHTML = (cv.languages || []).map(function (l) {
        return '<li class="lang">' +
                 '<div class="lang__top">' +
                   '<span class="lang__name">' + esc(l.name) + '</span>' +
                   '<span class="lang__level">' + esc(l.level) + '</span>' +
                 '</div>' +
                 '<div class="lang__track">' +
                   '<div class="lang__fill" data-level="' + (Number(l.value) || 0) + '"></div>' +
                 '</div>' +
               '</li>';
      }).join('');
    }

    var interests = document.getElementById('cvInterests');
    if (interests) {
      interests.innerHTML = (cv.interests || []).map(function (t) {
        return '<span>' + esc(t) + '</span>';
      }).join('');
    }

    /* Boutons « Télécharger mon CV » */
    if (has(cv.file)) {
      $$('[data-cv-link]').forEach(function (a) { a.setAttribute('href', cv.file); });
    }
  }

  /* ---------- 7. CONTACT ---------- */
  function renderContact() {
    var p = SITE_DATA.profile || {};
    var l = SITE_DATA.links || {};
    var c = SITE_DATA.contact || {};

    /* Canal non renseigné : devient inerte, sans lien cassé */
    function emptyChannel(el) {
      el.classList.add('is-empty');
      el.removeAttribute('href');
      el.removeAttribute('target');
      el.setAttribute('aria-disabled', 'true');
      var val = el.querySelector('.channel__value');
      if (val) val.textContent = 'À renseigner';
    }

    if (has(c.message)) setText('contactMessage', c.message);

    /* Email */
    var chEmail = document.getElementById('channelEmail');
    if (chEmail) {
      if (has(p.email)) {
        chEmail.href = 'mailto:' + p.email.trim();
        setText('channelEmailText', p.email.trim());
      } else {
        emptyChannel(chEmail);
      }
    }

    /* GitHub */
    var chGit = document.getElementById('channelGithub');
    if (chGit) {
      if (has(l.github)) {
        chGit.href = l.github;
      } else {
        emptyChannel(chGit);
      }
    }

    /* LinkedIn */
    var chIn = document.getElementById('channelLinkedin');
    if (chIn) {
      if (has(l.linkedin)) {
        chIn.href = l.linkedin;
      } else {
        emptyChannel(chIn);
      }
    }

    /* Téléphone */
    var chPhone = document.getElementById('channelPhone');
    if (chPhone) {
      if (has(l.phone)) {
        chPhone.href = 'tel:' + l.phone.replace(/\s+/g, '');
        setText('channelPhoneText', l.phone);
      } else {
        emptyChannel(chPhone);
      }
    }
  }


  /* ============================================================
     INTERACTIONS
     ============================================================ */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Apparitions au scroll (IntersectionObserver) --- */
  function initReveal() {
    var els = $$('[data-reveal]');

    els.forEach(function (el) {
      var d = el.getAttribute('data-reveal-delay');
      if (d) el.style.setProperty('--reveal-delay', d + 'ms');
    });

    if (prefersReduced || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    els.forEach(function (el) {
      // Le hero s'affiche immédiatement (aucun décalage au chargement)
      if (el.closest('#home')) {
        requestAnimationFrame(function () { el.classList.add('is-visible'); });
      } else {
        io.observe(el);
      }
    });
  }

  /* --- Navigation : état scrollé, barre de progression, section active, menu mobile --- */
  function initNav() {
    var nav      = document.getElementById('nav');
    var progress = document.getElementById('navProgress');
    var burger   = document.getElementById('navBurger');
    var links    = document.getElementById('navLinks');
    var navLinks = $$('.nav__link');
    var sections = $$('main section[id]');
    var toTop    = document.getElementById('toTop');
    var ticking  = false;

    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      var docH = document.documentElement.scrollHeight - window.innerHeight;

      nav.classList.toggle('is-scrolled', y > 24);
      if (progress) progress.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';
      if (toTop) toTop.classList.toggle('is-visible', y > 620);

      /* Section courante */
      var current = '';
      for (var i = 0; i < sections.length; i++) {
        if (y >= sections[i].offsetTop - 140) current = sections[i].id;
      }
      navLinks.forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
      });

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();

    /* Menu mobile */
    function closeMenu() {
      if (!burger) return;
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Ouvrir le menu');
      links.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    if (burger && links) {
      burger.addEventListener('click', function () {
        var open = burger.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', String(open));
        burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
        links.classList.toggle('is-open', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });

      links.addEventListener('click', function (e) {
        if (e.target.closest('a')) closeMenu();
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
      });

      window.addEventListener('resize', function () {
        if (window.innerWidth > 900) closeMenu();
      });
    }

    /* Retour en haut */
    if (toTop) {
      toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
      });
    }
  }


  /* --- Compteurs animés (section À propos) --- */
  function initCounters() {
    var els = $$('[data-count]');
    if (!els.length) return;

    function animate(el) {
      var target = Number(el.getAttribute('data-count')) || 0;
      if (prefersReduced) { el.textContent = target; return; }

      var start = performance.now();
      var dur = 1200;
      function step(now) {
        var t = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - t, 3);   // ease-out cubic
        el.textContent = Math.round(target * eased);
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.6 });

    els.forEach(function (el) { io.observe(el); });
  }

  /* --- Barres de niveau des langues --- */
  function initLanguageBars() {
    var bars = $$('.lang__fill');
    if (!bars.length) return;

    function fill(bar) { bar.style.width = (Number(bar.getAttribute('data-level')) || 0) + '%'; }

    if (!('IntersectionObserver' in window)) { bars.forEach(fill); return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { fill(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.5 });

    bars.forEach(function (b) { io.observe(b); });
  }

  /* --- Surbrillance suivant le pointeur (cartes compétences) --- */
  function initPointerGlow() {
    if (prefersReduced || window.matchMedia('(hover: none)').matches) return;

    document.addEventListener('pointermove', function (e) {
      var card = e.target.closest('.skill');
      if (!card) return;
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    }, { passive: true });
  }

  /* --- Léger effet de profondeur sur le terminal --- */
  function initTerminalTilt() {
    if (prefersReduced || window.matchMedia('(hover: none)').matches) return;
    if (window.innerWidth <= 1100) return;

    var term = document.getElementById('terminal');
    if (!term) return;

    var wrap = term.parentElement;
    wrap.addEventListener('pointermove', function (e) {
      var r = wrap.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      term.style.transform =
        'rotateY(' + (-7 + px * 7) + 'deg) rotateX(' + (2 - py * 6) + 'deg) translateY(-4px)';
    }, { passive: true });

    wrap.addEventListener('pointerleave', function () {
      term.style.transform = '';
    }, { passive: true });
  }

  /* --- Formulaire de contact --- */
  function initForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    var status = document.getElementById('formStatus');
    var endpoint = (SITE_DATA.contact && SITE_DATA.contact.formEndpoint) || '';

    function show(msg, ok) {
      if (!status) return;
      status.textContent = msg;
      status.classList.toggle('is-ok', !!ok);
      status.classList.toggle('is-err', !ok);
    }

    function validate() {
      var valid = true;
      $$('input, textarea', form).forEach(function (field) {
        var bad = field.required && !field.value.trim();
        if (field.type === 'email' && field.value.trim()) {
          bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
        }
        field.classList.toggle('is-invalid', bad);
        if (bad) valid = false;
      });
      return valid;
    }

    $$('input, textarea', form).forEach(function (field) {
      field.addEventListener('input', function () { field.classList.remove('is-invalid'); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validate()) {
        show('Merci de compléter correctement les champs signalés.', false);
        return;
      }

      var data = new FormData(form);

      /* Aucun endpoint configuré → ouverture du client mail (toujours fonctionnel) */
      if (!endpoint) {
        var subject = data.get('subject') || 'Message depuis le portfolio';
        var body = (data.get('message') || '') + '\n\n— ' + (data.get('name') || '') +
                   ' (' + (data.get('email') || '') + ')';
        var mail = (SITE_DATA.profile && SITE_DATA.profile.email || '').trim();
        var mailto = 'mailto:' + mail +
                     '?subject=' + encodeURIComponent(subject) +
                     '&body=' + encodeURIComponent(body);
        show('Ouverture de votre messagerie…', true);
        window.location.href = mailto;
        return;
      }

      var btn = $('button[type="submit"]', form);
      if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; }
      show('Envoi en cours…', true);

      fetch(endpoint, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          show('Message envoyé — merci ! Je vous répondrai rapidement.', true);
          form.reset();
        })
        .catch(function () {
          show("L'envoi a échoué. Réessayez ou contactez-moi directement par email.", false);
        })
        .finally(function () {
          if (btn) btn.disabled = false;
        });
    });
  }

  /* ============================================================
     INITIALISATION
     ============================================================ */
  function init() {
    renderProfile();
    renderAbout();
    renderSkills();
    renderProjects();
    renderTimeline();
    renderCv();
    renderContact();

    initReveal();
    initNav();
    initCounters();
    initLanguageBars();
    initPointerGlow();
    initTerminalTilt();
    initForm();

    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


