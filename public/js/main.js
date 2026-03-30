/* BIB shared layout utilities
   Provides: renderHeader(), renderFooter(), renderModal(),
             lang management, dropdown / mobile-menu logic   */

/* ── Language state ───────────────────────────────────── */
(function () {
  var urlLang = new URLSearchParams(window.location.search).get("lang");
  window.__bibLang = (urlLang === "en" || urlLang === "ge")
    ? urlLang
    : (localStorage.getItem("bib-lang") || "ge");
})();

function getLang() { return window.__bibLang; }

function setLang(l) {
  window.__bibLang = l;
  localStorage.setItem("bib-lang", l);
  var url = new URL(window.location.href);
  url.searchParams.set("lang", l);
  window.history.replaceState({}, "", url.toString());
  renderHeader(l);
  renderFooter(l);
  if (typeof renderPage === "function") renderPage(l);
}

/* ── SVG icons ────────────────────────────────────────── */
var ICON = {
  chevron:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  menu:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  pin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="footer-contact-icon"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="footer-contact-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.59 1.36h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1-1.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.86 15z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="footer-contact-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
};

/* ── Helper: nav link href ────────────────────────────── */
function detailHref(slug, lang) {
  return "/detail/" + slug + "?lang=" + lang;
}

function blogHref(lang) {
  return "/blog.html?lang=" + lang;
}

/* ── renderHeader ─────────────────────────────────────── */
function renderHeader(lang) {
  var d = BIB_DATA[lang];
  var el = document.getElementById("header-container");
  if (!el) return;

  var companyItems = d.companyDropdown.map(function (item) {
    return '<a href="' + detailHref(item.slug, lang) + '" class="dropdown-item">' + item.label + "</a>";
  }).join("");

  var productItems = d.productsDropdown.map(function (item) {
    return '<a href="' + detailHref(item.slug, lang) + '" class="dropdown-item">' + item.label + "</a>";
  }).join("");

  var companyMobile = d.companyDropdown.map(function (item) {
    return '<a href="' + detailHref(item.slug, lang) + '" class="mobile-nav-item">' + item.label + "</a>";
  }).join("");

  var productMobile = d.productsDropdown.map(function (item) {
    return '<a href="' + detailHref(item.slug, lang) + '" class="mobile-nav-item">' + item.label + "</a>";
  }).join("");

  el.innerHTML =
    '<header class="site-header">' +
      '<div class="container-bib header-inner">' +

        /* Logo */
        '<a href="/?lang=' + lang + '">' +
          '<img src="/bib-logo.png" alt="BIB Logo" class="header-logo">' +
        "</a>" +

        /* Desktop nav */
        '<nav class="desktop-nav" id="desktop-nav">' +

          /* Company dropdown */
          '<div class="nav-dropdown" id="nav-dd-company">' +
            '<button class="dropdown-trigger" id="btn-dd-company">' +
              d.nav.company + " " + ICON.chevron +
            "</button>" +
            '<div class="dropdown-panel" id="panel-dd-company">' +
              companyItems +
            "</div>" +
          "</div>" +

          /* Products dropdown */
          '<div class="nav-dropdown" id="nav-dd-products">' +
            '<button class="dropdown-trigger" id="btn-dd-products">' +
              d.nav.products + " " + ICON.chevron +
            "</button>" +
            '<div class="dropdown-panel" id="panel-dd-products">' +
              productItems +
            "</div>" +
          "</div>" +

          '<a href="' + blogHref(lang) + '" class="nav-link">' + d.nav.blog + "</a>" +
          '<a href="/contact?lang=' + lang + '" class="nav-link">' + d.nav.contact + "</a>" +

        "</nav>" +

        /* Desktop actions */
        '<div class="header-actions">' +
          '<button class="lang-toggle-btn" id="lang-toggle-btn">' + d.nav.langToggle + "</button>" +
          '<button class="btn-primary" id="header-cta-btn">' + d.nav.cta + "</button>" +
        "</div>" +

        /* Mobile hamburger */
        '<button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">' +
          ICON.menu +
        "</button>" +

      "</div>" +

      /* Mobile menu */
      '<div class="mobile-menu" id="mobile-menu">' +
        '<div class="mobile-menu-inner">' +
          '<span class="mobile-section-label">' + d.nav.company + "</span>" +
          companyMobile +
          '<span class="mobile-section-label">' + d.nav.products + "</span>" +
          productMobile +
          '<a href="' + blogHref(lang) + '" class="mobile-nav-link">' + d.nav.blog + "</a>" +
          '<a href="/contact?lang=' + lang + '" class="mobile-nav-link">' + d.nav.contact + "</a>" +
          '<div class="mobile-actions">' +
            '<button class="lang-toggle-btn" id="mobile-lang-toggle-btn">' + d.nav.langToggle + "</button>" +
            '<button class="btn-primary" id="mobile-cta-btn">' + d.nav.cta + "</button>" +
          "</div>" +
        "</div>" +
      "</div>" +

    "</header>";

  _attachHeaderEvents();
}

/* Attach dropdown + mobile menu event listeners */
function _attachHeaderEvents() {
  /* Dropdowns — hover on desktop */
  ["company", "products"].forEach(function (id) {
    var wrapper = document.getElementById("nav-dd-" + id);
    var panel   = document.getElementById("panel-dd-" + id);
    if (!wrapper || !panel) return;
    var timer;
    wrapper.addEventListener("mouseenter", function () {
      clearTimeout(timer);
      panel.classList.add("open");
    });
    wrapper.addEventListener("mouseleave", function () {
      timer = setTimeout(function () { panel.classList.remove("open"); }, 150);
    });
    /* Also toggle on click (for touch / keyboard) */
    var btn = document.getElementById("btn-dd-" + id);
    if (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        panel.classList.toggle("open");
      });
    }
  });

  /* Close dropdowns when clicking outside */
  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-panel.open").forEach(function (p) {
      p.classList.remove("open");
    });
  });

  /* Mobile hamburger */
  var mobileBtn = document.getElementById("mobile-menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");
      mobileBtn.innerHTML = mobileMenu.classList.contains("open") ? ICON.close : ICON.menu;
    });
  }

  /* Lang toggle */
  ["lang-toggle-btn", "mobile-lang-toggle-btn"].forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", function () {
        setLang(getLang() === "ge" ? "en" : "ge");
      });
    }
  });

  /* CTA → open modal */
  ["header-cta-btn", "mobile-cta-btn"].forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", function () {
        openModal();
        var mm = document.getElementById("mobile-menu");
        if (mm) mm.classList.remove("open");
      });
    }
  });
}

/* ── renderFooter ─────────────────────────────────────── */
function renderFooter(lang) {
  var d = BIB_DATA[lang];
  var el = document.getElementById("footer-container");
  if (!el) return;

  function ql(link) {
    var href = link.href ? link.href + "?lang=" + lang : detailHref(link.slug, lang);
    return '<li><a href="' + href + '" class="footer-link">' + link.label + "</a></li>";
  }

  var quickLinks = d.footerQuickLinks.map(ql).join("");
  var products   = d.footerProducts.map(ql).join("");

  el.innerHTML =
    '<footer class="site-footer">' +
      '<div class="container-bib">' +
        '<div class="footer-grid">' +

          /* About */
          '<div>' +
            '<a href="/?lang=' + lang + '" class="footer-brand-link">BIB</a>' +
            '<p class="footer-about">' + d.footerAbout + "</p>" +
          "</div>" +

          /* Quick links */
          '<div>' +
            '<h4 class="footer-heading">' + d.footerQuickLinksTitle + "</h4>" +
            '<ul class="footer-links">' + quickLinks + "</ul>" +
          "</div>" +

          /* Products */
          '<div>' +
            '<h4 class="footer-heading">' + d.footerProductsTitle + "</h4>" +
            '<ul class="footer-links">' + products + "</ul>" +
          "</div>" +

          /* Contact */
          '<div>' +
            '<h4 class="footer-heading">' + d.footerContactTitle + "</h4>" +
            '<ul>' +
              '<li class="footer-contact-item">' + ICON.pin + "<span>" + d.footerContact.address + "</span></li>" +
              '<li class="footer-contact-item">' + ICON.phone + '<a href="tel:' + d.footerContact.phone + '">' + d.footerContact.phone + "</a></li>" +
              '<li class="footer-contact-item">' + ICON.mail + '<a href="mailto:' + d.footerContact.email + '">' + d.footerContact.email + "</a></li>" +
            "</ul>" +
          "</div>" +

        "</div>" +
      "</div>" +

      '<div class="footer-bottom">' +
        '<div class="container-bib footer-bottom-inner">' +
          '<div class="footer-bottom-links">' +
            "<span>" + d.footerBottom.privacy + "</span>" +
            "<span>" + d.footerBottom.terms   + "</span>" +
          "</div>" +
          "<span>" + d.footerBottom.copyright + "</span>" +
        "</div>" +
      "</div>" +
    "</footer>";
}

/* ── Modal ────────────────────────────────────────────── */
function renderModal() {
  var el = document.getElementById("modal-container");
  if (!el) return;

  el.innerHTML =
    '<div class="modal-overlay" id="bib-modal" role="dialog" aria-modal="true">' +
      '<div class="modal-box" style="max-width:480px;">' +
        '<button class="modal-close" id="modal-close-btn" aria-label="Close">×</button>' +
        '<h2 class="modal-title" id="modal-title"></h2>' +

        /* Success message */
        '<div id="modal-success" class="form-success" style="margin-bottom:12px;"></div>' +

        '<form id="modal-form" novalidate>' +
          /* Name */
          '<div style="margin-bottom:16px;">' +
            '<label style="display:block;font-size:14px;font-weight:500;color:var(--foreground);margin-bottom:4px;" id="modal-label-name"></label>' +
            '<input id="modal-input-name" type="text" maxlength="100"' +
              ' style="width:100%;border-radius:8px;border:1px solid hsl(31,30%,88%);background:hsl(40,33%,96%);padding:0 12px;height:40px;font-size:14px;color:var(--foreground);outline:none;font-family:inherit;">' +
            '<p id="modal-err-name" style="display:none;color:hsl(0,84%,60%);font-size:12px;margin-top:2px;"></p>' +
          "</div>" +

          /* Phone */
          '<div style="margin-bottom:16px;">' +
            '<label style="display:block;font-size:14px;font-weight:500;color:var(--foreground);margin-bottom:4px;" id="modal-label-phone"></label>' +
            '<input id="modal-input-phone" type="tel" maxlength="20"' +
              ' style="width:100%;border-radius:8px;border:1px solid hsl(31,30%,88%);background:var(--background);padding:0 12px;height:40px;font-size:14px;color:var(--foreground);outline:none;font-family:inherit;">' +
            '<p id="modal-err-phone" style="display:none;color:hsl(0,84%,60%);font-size:12px;margin-top:2px;"></p>' +
          "</div>" +

          /* Insurance type dropdown */
          '<div style="margin-bottom:16px;" id="modal-product-wrap">' +
            '<label style="display:block;font-size:14px;font-weight:500;color:var(--foreground);margin-bottom:4px;" id="modal-label-product"></label>' +
            '<select id="modal-input-product"' +
              ' style="width:100%;border-radius:8px;border:1px solid hsl(31,30%,88%);background:hsl(40,33%,96%);padding:0 12px;height:40px;font-size:14px;color:var(--foreground);outline:none;font-family:inherit;appearance:auto;">' +
            "</select>" +
          "</div>" +

          /* Message */
          '<div style="margin-bottom:16px;">' +
            '<label style="display:block;font-size:14px;font-weight:500;color:var(--foreground);margin-bottom:4px;" id="modal-label-message"></label>' +
            '<textarea id="modal-input-message" rows="3" maxlength="1000"' +
              ' style="width:100%;border-radius:8px;border:1px solid hsl(31,30%,88%);background:hsl(40,33%,96%);padding:8px 12px;font-size:14px;color:var(--foreground);outline:none;font-family:inherit;resize:none;"></textarea>' +
          "</div>" +

          /* Consent checkbox */
          '<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:16px;">' +
            '<input type="checkbox" id="modal-consent" value="yes"' +
              ' style="margin-top:2px;width:16px;height:16px;flex-shrink:0;accent-color:var(--primary);cursor:pointer;">' +
            '<label for="modal-consent" id="modal-label-consent"' +
              ' style="font-size:12px;color:var(--muted-foreground);line-height:1.45;cursor:pointer;"></label>' +
          "</div>" +
          '<p id="modal-err-consent" style="display:none;color:hsl(0,84%,60%);font-size:12px;margin-top:-8px;margin-bottom:12px;"></p>' +

          /* Submit */
          '<button type="submit" id="modal-submit-btn"' +
            ' style="width:100%;height:44px;border-radius:8px;background:var(--primary);color:var(--primary-foreground);font-size:14px;font-weight:500;font-family:inherit;cursor:pointer;border:none;transition:background 0.2s;">' +
          "</button>" +
        "</form>" +

      "</div>" +
    "</div>";

  /* Close handlers */
  var overlay = document.getElementById("bib-modal");
  document.getElementById("modal-close-btn").addEventListener("click", closeModal);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  /* Submit handler */
  document.getElementById("modal-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var lang   = getLang();
    var d      = BIB_DATA[lang];
    var name   = document.getElementById("modal-input-name").value.trim();
    var phone  = document.getElementById("modal-input-phone").value.trim();
    var consent = document.getElementById("modal-consent").checked;
    var req    = d.formLabels.required;

    /* Clear previous errors */
    ["name","phone","consent"].forEach(function (f) {
      var el = document.getElementById("modal-err-" + f);
      if (el) { el.style.display = "none"; el.textContent = ""; }
    });

    var hasError = false;
    if (!name) {
      var en = document.getElementById("modal-err-name");
      en.textContent = req; en.style.display = "block"; hasError = true;
    }
    if (!phone) {
      var ep = document.getElementById("modal-err-phone");
      ep.textContent = req; ep.style.display = "block"; hasError = true;
    }
    if (!consent) {
      var ec = document.getElementById("modal-err-consent");
      ec.textContent = req; ec.style.display = "block"; hasError = true;
    }
    if (hasError) return;

    /* Show success */
    var successEl = document.getElementById("modal-success");
    successEl.textContent = d.formLabels.success;
    successEl.classList.add("visible");
    document.getElementById("modal-form").reset();
    setTimeout(function () { successEl.classList.remove("visible"); }, 5000);
  });

  _updateModalText(getLang());
}

function _updateModalText(lang) {
  var d = BIB_DATA[lang];
  var f = d.formLabels;

  var title = document.getElementById("modal-title");
  if (title) title.textContent = f.fillForm;

  var lblName = document.getElementById("modal-label-name");
  if (lblName) lblName.textContent = f.name + " *";

  var lblPhone = document.getElementById("modal-label-phone");
  if (lblPhone) lblPhone.textContent = f.phone + " *";

  var lblProduct = document.getElementById("modal-label-product");
  if (lblProduct) lblProduct.textContent = f.insuranceType;

  /* Rebuild product options */
  var sel = document.getElementById("modal-input-product");
  if (sel) {
    sel.innerHTML = '<option value="" disabled selected>' + f.insuranceTypePlaceholder + "</option>" +
      d.productsDropdown.map(function (p) {
        return '<option value="' + p.slug + '">' + p.label + "</option>";
      }).join("");
  }

  var lblMsg = document.getElementById("modal-label-message");
  if (lblMsg) lblMsg.textContent = f.message;

  var lblConsent = document.getElementById("modal-label-consent");
  if (lblConsent) lblConsent.textContent = f.consent;

  var btn = document.getElementById("modal-submit-btn");
  if (btn) btn.textContent = f.submit;

  var success = document.getElementById("modal-success");
  if (success && success.classList.contains("visible"))
    success.textContent = f.success;
}

function openModal() {
  _updateModalText(getLang());
  var m = document.getElementById("bib-modal");
  if (m) m.classList.add("open");
}

function closeModal() {
  var m = document.getElementById("bib-modal");
  if (m) m.classList.remove("open");
}

/* ── Excerpt helper ───────────────────────────────────── */
function excerpt(body, maxLen) {
  maxLen = maxLen || 140;
  var para = body.split("\n\n")[0];
  if (para.length <= maxLen) return para;
  return para.substring(0, maxLen).replace(/\s+\S*$/, "") + "…";
}

/* ── Init (called on every page after DOM ready) ──────── */
function bibInit() {
  var lang = getLang();
  renderHeader(lang);
  renderFooter(lang);
  renderModal();
  if (typeof renderPage === "function") renderPage(lang);
}

document.addEventListener("DOMContentLoaded", bibInit);
