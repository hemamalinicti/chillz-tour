/**
 * Chillz Tour - Main JavaScript Logic with Motion & Scroll Animations
 * Developed by: Hemamalini S (CODETHRIVE INFOTECH)
 */

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initNavbar();
  initAOS();
  initStatsCounter();
  initFeaturedPackages();
  initQuickBookingForm();
  initPackagesPage();
  initGalleryPage();
  initContactForm();
  initPackageModal();
  initFAQAccordion();
  initMinDatePickers();
  init3DParticleCanvas();
  initHero3DParallax();
  initUniversal3DTilt();
  init3DStageCarousel();
  initMobileTestimonialsSlider();
});

/* Initialize AOS (Animate On Scroll) Library if available */
function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      once: true,
      offset: 60
    });
  }
}

/* Mobile Menu Navigation */
function initNavbar() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = toggleBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!toggleBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("active");
      }
    });
  }
}

/* Set Min Date for Date Inputs to Today */
function initMinDatePickers() {
  const today = new Date().toISOString().split("T")[0];
  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.setAttribute("min", today);
  });
}

/* Animated Counter for Stats */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute("data-count") || "0", 10);
        let count = 0;
        const step = Math.max(1, Math.ceil(countTo / 40));

        const timer = setInterval(() => {
          count += step;
          if (count >= countTo) {
            target.textContent = countTo + (target.getAttribute("data-suffix") || "");
            clearInterval(timer);
          } else {
            target.textContent = count + (target.getAttribute("data-suffix") || "");
          }
        }, 35);
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.4 });

  statNumbers.forEach(num => observer.observe(num));
}

/* Featured Packages on Home Page (4 Cards in 1 Row) */
function initFeaturedPackages() {
  const featuredContainer = document.getElementById("featuredPackagesGrid");
  if (!featuredContainer || typeof tourPackages === "undefined") return;

  // Pick 4 top featured packages for 4 cards in 1 row
  const featuredList = tourPackages.slice(0, 4);
  featuredContainer.innerHTML = featuredList.map((pkg, idx) => createPackageCardHTML(pkg, idx)).join("");
  
  if (typeof AOS !== "undefined") AOS.refresh();
}

/* Tour Packages Page Filter & Search Logic */
function initPackagesPage() {
  const packagesContainer = document.getElementById("allPackagesGrid");
  const filterTabsContainer = document.getElementById("packageFilterTabs");
  const searchInput = document.getElementById("packageSearchInput");
  const sortSelect = document.getElementById("packageSortSelect");

  if (!packagesContainer || typeof tourPackages === "undefined") return;

  let currentCategory = "all";
  let currentSearch = "";
  let currentSort = "featured";

  function render() {
    let filtered = tourPackages.filter(pkg => {
      const matchCat = (currentCategory === "all") || 
                       (pkg.category === currentCategory) || 
                       (pkg.subCategory === currentCategory);
      
      const matchSearch = pkg.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                          pkg.location.toLowerCase().includes(currentSearch.toLowerCase()) || 
                          pkg.overview.toLowerCase().includes(currentSearch.toLowerCase());
                          
      return matchCat && matchSearch;
    });

    // Sort
    if (currentSort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
      packagesContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border);" data-aos="fade-up">
          <i class="fa-solid fa-compass" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
          <h3 style="font-size: 1.4rem; color: var(--secondary);">No Domestic Tour Packages Found</h3>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">Try adjusting your search criteria or filter tab.</p>
        </div>
      `;
    } else {
      packagesContainer.innerHTML = filtered.map((pkg, idx) => createPackageCardHTML(pkg, idx)).join("");
    }

    if (typeof AOS !== "undefined") AOS.refresh();
  }

  // Initial render
  render();

  // Tab Filter click
  if (filterTabsContainer) {
    filterTabsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-tab");
      if (!btn) return;

      filterTabsContainer.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");

      currentCategory = btn.getAttribute("data-category") || "all";
      render();
    });
  }

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim();
      render();
    });
  }

  // Sort Select
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      render();
    });
  }
}

/* Helper to Create Package Card HTML with Staggered Entrance Animations */
function createPackageCardHTML(pkg, idx = 0) {
  const badgeClass = pkg.tag.toLowerCase();
  const delay = (idx % 3) * 100 + 100;
  return `
    <div class="package-card" data-aos="fade-up" data-aos-delay="${delay}">
      <div class="package-image-wrapper">
        <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
        <span class="package-tag ${badgeClass}">${pkg.tag}</span>
        <div class="package-rating">
          <i class="fa-solid fa-star"></i> ${pkg.rating} <span>(${pkg.reviewsCount})</span>
        </div>
      </div>
      <div class="package-body">
        <div class="package-location">
          <i class="fa-solid fa-location-dot"></i> ${pkg.location}
        </div>
        <h3 class="package-title">${pkg.title}</h3>
        <div class="package-meta">
          <div class="package-meta-item">
            <i class="fa-regular fa-clock"></i> ${pkg.duration}
          </div>
          <div class="package-meta-item">
            <i class="fa-solid fa-user-group"></i> Min 2 Pax
          </div>
        </div>
        <div class="package-inclusions-icons" title="Inclusions: Hotel, Cab, Meals, Sightseeing">
          <i class="fa-solid fa-hotel"></i>
          <i class="fa-solid fa-car"></i>
          <i class="fa-solid fa-utensils"></i>
          <i class="fa-solid fa-camera"></i>
        </div>
        <div class="package-footer">
          <div class="package-price">
            <span class="price-label">Starting From</span>
            <div class="price-amount">₹${pkg.price.toLocaleString("en-IN")}</div>
            <span class="price-original">₹${pkg.originalPrice.toLocaleString("en-IN")}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="openPackageModal('${pkg.id}')">
            View Details <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

/* Package Modal Controller */
let activeModalPkg = null;

function switchToPackageModalTab(tabName) {
  const modal = document.getElementById("packageModal");
  if (!modal) return;

  const tabBtns = modal.querySelectorAll(".modal-tab-btn");
  const targetBtn = modal.querySelector(`.modal-tab-btn[data-tab="${tabName}"]`);
  
  if (targetBtn) {
    tabBtns.forEach(b => b.classList.remove("active"));
    modal.querySelectorAll(".modal-tab-content").forEach(c => c.classList.remove("active"));
    
    targetBtn.classList.add("active");
    const targetTab = modal.querySelector(`#tab-${tabName}`);
    if (targetTab) {
      targetTab.classList.add("active");
    }

    const modalBody = modal.querySelector(".modal-body");
    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    if (tabName === 'book') {
      updateModalBookingAmount();
      const firstInput = modal.querySelector('#tab-book input[name="name"]');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 150);
      }
    }
  }
}

function initPackageModal() {
  const modal = document.getElementById("packageModal");
  if (!modal) return;

  // Close modal on click outside box
  modal.addEventListener("click", (e) => {
    const dialogBounds = modal.getBoundingClientRect();
    if (
      e.clientX < dialogBounds.left ||
      e.clientX > dialogBounds.right ||
      e.clientY < dialogBounds.top ||
      e.clientY > dialogBounds.bottom
    ) {
      modal.close();
    }
  });

  // Modal Tabs switching
  const tabBtns = modal.querySelectorAll(".modal-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabName = btn.getAttribute("data-tab");
      switchToPackageModalTab(tabName);
    });
  });
}

function openPackageModal(pkgId) {
  const modal = document.getElementById("packageModal");
  if (!modal || typeof tourPackages === "undefined") return;

  const pkg = tourPackages.find(p => p.id === pkgId);
  if (!pkg) return;
  activeModalPkg = pkg;

  // Header content
  const header = modal.querySelector(".modal-header");
  header.style.backgroundImage = `url('${pkg.image}')`;
  modal.querySelector("#modalPkgTitle").textContent = pkg.title;
  modal.querySelector("#modalPkgLoc").textContent = pkg.location + " • " + pkg.duration;

  // Tab 1: Overview
  modal.querySelector("#modalPkgOverviewText").textContent = pkg.overview;
  modal.querySelector("#modalPkgPriceDisplay").textContent = `₹${pkg.price.toLocaleString("en-IN")}`;

  // Tab 2: Itinerary
  const itineraryContainer = modal.querySelector("#modalPkgItinerary");
  itineraryContainer.innerHTML = pkg.itinerary.map(day => `
    <div class="itinerary-step">
      <span class="itinerary-day-tag">Day ${day.day}</span>
      <h4 class="itinerary-step-title">${day.title}</h4>
      <p class="itinerary-step-details">${day.details}</p>
    </div>
  `).join("");

  // Tab 3: Inclusions / Exclusions
  const inclusionsList = modal.querySelector("#modalPkgInclusions");
  inclusionsList.innerHTML = pkg.inclusions.map(inc => `
    <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;">
      <i class="fa-solid fa-circle-check" style="color: var(--success); margin-top: 0.2rem;"></i> ${inc}
    </li>
  `).join("");

  const exclusionsList = modal.querySelector("#modalPkgExclusions");
  exclusionsList.innerHTML = pkg.exclusions.map(exc => `
    <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;">
      <i class="fa-solid fa-circle-xmark" style="color: var(--danger); margin-top: 0.2rem;"></i> ${exc}
    </li>
  `).join("");

  // Tab 4: Booking Form setup
  const bookingPkgName = modal.querySelector("#modalBookingPkgName");
  if (bookingPkgName) bookingPkgName.value = pkg.title;

  // Calculate live amount for default selection
  updateModalBookingAmount();

  // Reset tab to Overview
  switchToPackageModalTab("overview");

  modal.showModal();
}

/* Update Modal Booking Calculated Amount Live */
function updateModalBookingAmount() {
  const modal = document.getElementById("packageModal");
  if (!modal || !activeModalPkg) return;

  const select = modal.querySelector('select[name="travelers"]');
  const amountDetailsList = modal.querySelectorAll(".modalAmountDetails");
  const totalDisplayList = modal.querySelectorAll(".modalTotalAmountDisplay");

  if (!select) return;

  const count = parseInt(select.value, 10) || 1;
  const basePrice = activeModalPkg.price || 0;
  const totalAmount = basePrice * count;

  const detailsText = `₹${basePrice.toLocaleString("en-IN")} × ${count} Person${count > 1 ? "s" : ""}`;
  const totalText = `₹${totalAmount.toLocaleString("en-IN")}`;

  amountDetailsList.forEach(el => el.textContent = detailsText);
  totalDisplayList.forEach(el => el.textContent = totalText);
}

function closePackageModal() {
  const modal = document.getElementById("packageModal");
  if (modal) modal.close();
}

/* Handle Package Booking Form Submission */
function handleModalBookingSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const travelDate = form.travelDate.value;
  const travelersCount = parseInt(form.travelers.value, 10) || 1;
  const pkgTitle = form.pkgName ? form.pkgName.value : (activeModalPkg ? activeModalPkg.title : "Tour Package");
  const basePrice = activeModalPkg ? activeModalPkg.price : 0;
  const totalAmount = basePrice * travelersCount;

  if (!name || !phone || !email || !travelDate) {
    showToast("Please fill in all required booking fields!", "error");
    return;
  }

  // Create WhatsApp message link with calculated total amount
  const message = encodeURIComponent(
    `Hello Chillz Tour! 👋\nI would like to book the following tour package:\n\n` +
    `📌 *Package:* ${pkgTitle}\n` +
    `👤 *Name:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    `✉️ *Email:* ${email}\n` +
    `📅 *Travel Date:* ${travelDate}\n` +
    `👥 *Travelers:* ${travelersCount} Person(s)\n` +
    `💰 *Total Estimated Price:* ₹${totalAmount.toLocaleString("en-IN")} (₹${basePrice.toLocaleString("en-IN")} × ${travelersCount})\n\n` +
    `Please confirm booking availability & payment details.`
  );

  const whatsappURL = `https://wa.me/919876543210?text=${message}`;

  closePackageModal();
  showToast(`Booking request created! Total Amount: ₹${totalAmount.toLocaleString("en-IN")}. Opening WhatsApp...`, "success");

  setTimeout(() => {
    window.open(whatsappURL, "_blank");
  }, 1000);
}

/* Gallery Filter & Lightbox */
function initGalleryPage() {
  const galleryContainer = document.getElementById("galleryGrid");
  const filterTabsContainer = document.getElementById("galleryFilterTabs");

  if (!galleryContainer || typeof galleryImages === "undefined") return;

  let currentCategory = "all";

  function renderGallery() {
    const filtered = currentCategory === "all" ? galleryImages : galleryImages.filter(img => img.category === currentCategory);

    galleryContainer.innerHTML = filtered.map((img, idx) => {
      const delay = (idx % 4) * 100 + 100;
      return `
        <div class="gallery-item" onclick="openLightbox(${img.id})" data-aos="zoom-in" data-aos-delay="${delay}">
          <img src="${img.url}" alt="${img.title}" loading="lazy">
          <div class="gallery-overlay">
            <span class="gallery-loc"><i class="fa-solid fa-location-dot"></i> ${img.location}</span>
            <h4 class="gallery-title">${img.title}</h4>
          </div>
        </div>
      `;
    }).join("");

    if (typeof AOS !== "undefined") AOS.refresh();
  }

  renderGallery();

  if (filterTabsContainer) {
    filterTabsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-tab");
      if (!btn) return;

      filterTabsContainer.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");

      currentCategory = btn.getAttribute("data-category") || "all";
      renderGallery();
    });
  }
}

let activeLightboxIndex = 0;

function openLightbox(imageId) {
  if (typeof galleryImages === "undefined") return;
  const idx = galleryImages.findIndex(i => i.id === imageId);
  if (idx === -1) return;

  activeLightboxIndex = idx;
  updateLightboxContent();

  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.add("active");
}

function updateLightboxContent() {
  const imgObj = galleryImages[activeLightboxIndex];
  const modal = document.getElementById("lightboxModal");
  if (!modal || !imgObj) return;

  modal.querySelector("#lightboxImg").src = imgObj.url;
  modal.querySelector("#lightboxCaption").textContent = `${imgObj.title} - ${imgObj.location}`;
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.remove("active");
}

function navLightbox(direction) {
  if (typeof galleryImages === "undefined") return;
  activeLightboxIndex = (activeLightboxIndex + direction + galleryImages.length) % galleryImages.length;
  updateLightboxContent();
}

/* Contact Form Handling */
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const phone = contactForm.phone.value.trim();
    const destination = contactForm.destination.value.trim();
    const travelDate = contactForm.travelDate.value;
    const message = contactForm.message.value.trim();

    let valid = true;

    // Validate Name
    if (!name) {
      setError(contactForm.name, "Name is required");
      valid = false;
    } else {
      clearError(contactForm.name);
    }

    // Validate Email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError(contactForm.email, "Valid email address is required");
      valid = false;
    } else {
      clearError(contactForm.email);
    }

    // Validate Phone
    if (!phone || phone.length < 10) {
      setError(contactForm.phone, "Valid 10-digit phone number required");
      valid = false;
    } else {
      clearError(contactForm.phone);
    }

    if (!valid) {
      showToast("Please fix the errors in the form!", "error");
      return;
    }

    // Direct WhatsApp Option
    const waText = encodeURIComponent(
      `Hello Chillz Tour! 👋\nI submitted an enquiry via your website:\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `✉️ *Email:* ${email}\n` +
      `📍 *Preferred Destination:* ${destination || 'Flexible'}\n` +
      `📅 *Travel Date:* ${travelDate || 'Not specified'}\n` +
      `📝 *Message:* ${message || 'No additional message'}`
    );

    const whatsappURL = `https://wa.me/919876543210?text=${waText}`;

    showToast("Enquiry submitted successfully! Thank you for contacting Chillz Tour.", "success");
    contactForm.reset();

    // Prompt optional WhatsApp chat
    setTimeout(() => {
      if (confirm("Would you like to send this enquiry directly to our WhatsApp support team?")) {
        window.open(whatsappURL, "_blank");
      }
    }, 1200);
  });
}

function setError(inputElement, msg) {
  inputElement.classList.add("error");
  const errText = inputElement.nextElementSibling;
  if (errText && errText.classList.contains("error-text")) {
    errText.textContent = msg;
  }
}

function clearError(inputElement) {
  inputElement.classList.remove("error");
}

/* FAQ Accordion Handling */
function initFAQAccordion() {
  const faqs = document.querySelectorAll("details.faq-item");
  faqs.forEach(faq => {
    faq.addEventListener("toggle", () => {
      if (faq.open) {
        faqs.forEach(otherFaq => {
          if (otherFaq !== faq) otherFaq.removeAttribute("open");
        });
      }
    });
  });
}

/* Toast Alert System */
function showToast(message, type = "success") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   3D ANIMATION ENGINE LOGIC
   ========================================================================== */

/* 1. Ambient 3D Star/Particle Dust Canvas Background */
function init3DParticleCanvas() {
  const canvas = document.getElementById("hero3DCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = canvas.parentElement.clientWidth);
  let height = (canvas.height = canvas.parentElement.clientHeight);

  window.addEventListener("resize", () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.clientWidth;
    height = canvas.height = canvas.parentElement.clientHeight;
  });

  const numParticles = Math.min(65, Math.floor(width / 18));
  const particles = [];

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 2 + 0.5,
      radius: Math.random() * 2.2 + 0.8,
      opacity: Math.random() * 0.7 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.5 - 0.2,
      color: Math.random() > 0.4 ? "#f59e0b" : "#ffffff"
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y < 0) {
        p.y = height;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * p.z, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.shadowBlur = 8 * p.z;
      ctx.shadowColor = p.color;
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(render);
  }

  render();
}

/* 2. Hero Stack Mouse 3D Parallax Effect */
function initHero3DParallax() {
  const hero = document.getElementById("hero3DSection");
  const cardStack = document.querySelector(".hero-card-stack");
  if (!hero || !cardStack) return;

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / (rect.height / 2)) * -14;
    const rotateY = (x / (rect.width / 2)) * 14;

    cardStack.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  hero.addEventListener("mouseleave", () => {
    cardStack.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
}

/* 3. Universal 3D Dynamic Card Tilt for All Cards */
function initUniversal3DTilt() {
  const selector = ".package-card, .feature-card, .destination-card, .hero-stat-card, .testimonial-card";
  
  document.addEventListener("mousemove", (e) => {
    const target = e.target.closest(selector);
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    target.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
    target.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
  });

  document.addEventListener("mouseout", (e) => {
    const target = e.target.closest(selector);
    if (target && (!e.relatedTarget || !target.contains(e.relatedTarget))) {
      target.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
  });
}

/* 4. 3D Stage Carousel Rotation Engine */
function init3DStageCarousel() {
  const cards = document.querySelectorAll(".stage-3d-card");
  const prevBtn = document.getElementById("prevStageBtn");
  const nextBtn = document.getElementById("nextStageBtn");
  const indicators = document.querySelectorAll("#stageIndicators .indicator");
  if (!cards.length) return;

  let currentIndex = 0;
  const total = cards.length;

  function updateStage() {
    cards.forEach((card, idx) => {
      card.className = "stage-3d-card";

      if (idx === currentIndex) {
        card.classList.add("active");
      } else if (idx === (currentIndex - 1 + total) % total) {
        card.classList.add("prev");
      } else if (idx === (currentIndex + 1) % total) {
        card.classList.add("next");
      } else if (idx < currentIndex) {
        card.classList.add("hidden-left");
      } else {
        card.classList.add("hidden-right");
      }
    });

    indicators.forEach((ind, idx) => {
      ind.classList.toggle("active", idx === currentIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + total) % total;
      updateStage();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % total;
      updateStage();
    });
  }

  indicators.forEach(ind => {
    ind.addEventListener("click", () => {
      currentIndex = parseInt(ind.getAttribute("data-slide") || "0", 10);
      updateStage();
    });
  });

  cards.forEach((card, idx) => {
    card.addEventListener("click", () => {
      if (idx !== currentIndex) {
        currentIndex = idx;
        updateStage();
      }
    });
  });

  updateStage();
}

/* 5. 2-Second Animated 3D Preloader Landing Handler (Runs ONLY on initial website load) */
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const percentText = document.getElementById("preloaderPercent");
  if (!preloader) return;

  // Check if website was already visited in current browser session
  if (sessionStorage.getItem("chillzTourVisited")) {
    preloader.style.display = "none";
    return;
  }

  // Set flag for current session
  sessionStorage.setItem("chillzTourVisited", "true");

  let progress = 0;
  const interval = setInterval(() => {
    progress += 2;
    if (percentText) percentText.textContent = `${Math.min(100, progress)}%`;
    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 38);

  setTimeout(() => {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 800);
  }, 2000);
}

/* 6. Quick Trip Booking Form Handler */
function initQuickBookingForm() {
  const form = document.getElementById("quickBookingForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dest = document.getElementById("quickDestSelect")?.value || "";
    const date = document.getElementById("quickTravelDate")?.value || "";
    const guests = document.getElementById("quickGuestsSelect")?.value || "2";

    showToast("Searching best domestic packages for your dates...", "success");

    setTimeout(() => {
      window.location.href = `packages.html?dest=${encodeURIComponent(dest)}&date=${encodeURIComponent(date)}&guests=${encodeURIComponent(guests)}`;
    }, 800);
  });
}

/* Privacy Policy & Terms Modal Controller */
function openPolicyModal(type) {
  let modal = document.getElementById("policyModal");
  if (!modal) {
    modal = document.createElement("dialog");
    modal.id = "policyModal";
    modal.className = "package-modal";
    document.body.appendChild(modal);
    modal.addEventListener("click", (e) => {
      const dialogBounds = modal.getBoundingClientRect();
      if (
        e.clientX < dialogBounds.left ||
        e.clientX > dialogBounds.right ||
        e.clientY < dialogBounds.top ||
        e.clientY > dialogBounds.bottom
      ) {
        modal.close();
      }
    });
  }

  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms & Conditions";
  const icon = isPrivacy ? "fa-shield-halved" : "fa-file-contract";

  const content = isPrivacy ? `
    <div style="padding: 1.5rem; color: var(--text-dark);">
      <h4 style="font-size: 1.05rem; color: var(--royal-navy); margin-bottom: 0.4rem;"><i class="fa-solid fa-database" style="color: var(--saffron-gold);"></i> 1. Information We Collect</h4>
      <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.25rem; line-height: 1.5;">Chillz Tour collects personal details such as full name, contact number, email address, and travel dates strictly for booking holiday packages, hotel accommodations, and private cab transfers across India.</p>
      
      <h4 style="font-size: 1.05rem; color: var(--royal-navy); margin-bottom: 0.4rem;"><i class="fa-solid fa-lock" style="color: var(--saffron-gold);"></i> 2. Data Protection & Sharing</h4>
      <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.25rem; line-height: 1.5;">Your personal details are used solely to confirm travel itineraries and process bookings. We never sell, rent, or lease customer data to third-party telemarketers or external entities.</p>
      
      <h4 style="font-size: 1.05rem; color: var(--royal-navy); margin-bottom: 0.4rem;"><i class="fa-solid fa-user-shield" style="color: var(--saffron-gold);"></i> 3. Security Standards</h4>
      <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.25rem; line-height: 1.5;">We employ strict administrative and technical safeguards to keep all client communication and payment information confidential and protected.</p>
      
      <h4 style="font-size: 1.05rem; color: var(--royal-navy); margin-bottom: 0.4rem;"><i class="fa-solid fa-headset" style="color: var(--saffron-gold);"></i> 4. Contact Information</h4>
      <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.5;">For any questions regarding our Privacy Policy, write to <strong>chillztours@gmail.com</strong> or call us at <strong>+91 98765 43210</strong>.</p>
    </div>
  ` : `
    <div style="padding: 1.5rem; color: var(--text-dark);">
      <h4 style="font-size: 1.05rem; color: var(--royal-navy); margin-bottom: 0.4rem;"><i class="fa-solid fa-receipt" style="color: var(--saffron-gold);"></i> 1. Booking & Payment Confirmation</h4>
      <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.25rem; line-height: 1.5;">An initial deposit is required to confirm resort reservations and vehicle blockings. Full package balance must be cleared before the commencement of the tour.</p>
      
      <h4 style="font-size: 1.05rem; color: var(--royal-navy); margin-bottom: 0.4rem;"><i class="fa-solid fa-ban" style="color: var(--saffron-gold);"></i> 2. Cancellation & Refund Policy</h4>
      <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.25rem; line-height: 1.5;">Cancellations made 15+ days prior to travel receive full refund minus non-refundable peak season resort charges. Cancellations within 7-14 days attract a 50% cancellation fee.</p>
      
      <h4 style="font-size: 1.05rem; color: var(--royal-navy); margin-bottom: 0.4rem;"><i class="fa-solid fa-sliders" style="color: var(--saffron-gold);"></i> 3. Itinerary Alterations</h4>
      <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.25rem; line-height: 1.5;">Travel dates and itinerary customizations can be adjusted subject to hotel availability and local transport schedules.</p>
      
      <h4 style="font-size: 1.05rem; color: var(--royal-navy); margin-bottom: 0.4rem;"><i class="fa-solid fa-triangle-exclamation" style="color: var(--saffron-gold);"></i> 4. Force Majeure & Limitation</h4>
      <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.5;">Chillz Tour is not liable for schedule delays caused by natural disasters, severe weather, landslide blockades, or government travel advisories.</p>
    </div>
  `;

  modal.innerHTML = `
    <div class="modal-header" style="height: 130px; background: var(--royal-navy); border-bottom: 2px solid var(--saffron-gold);">
      <div class="modal-header-overlay"></div>
      <button class="modal-close-btn" onclick="document.getElementById('policyModal').close()" aria-label="Close modal"><i class="fa-solid fa-xmark"></i></button>
      <div class="modal-title-box">
        <h3 style="font-size: 1.4rem; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid ${icon}" style="color: var(--sunset-gold);"></i> ${title}
        </h3>
        <p style="color: var(--sunset-gold); font-size: 0.85rem; font-weight: 600;">Chillz Tour • Official Policy Information</p>
      </div>
    </div>
    <div class="modal-body" style="max-height: 65vh; overflow-y: auto; padding: 0;">
      ${content}
    </div>
  `;

  modal.showModal();
}

/* Mobile Automatic Reviews Slider Handler */
function initMobileTestimonialsSlider() {
  const container = document.querySelector(".testimonials-grid");
  if (!container) return;

  const cards = Array.from(container.querySelectorAll(".testimonial-card"));
  if (!cards.length) return;

  let dotsContainer = document.getElementById("testimonialsMobileDots");
  if (!dotsContainer) {
    dotsContainer = document.createElement("div");
    dotsContainer.id = "testimonialsMobileDots";
    dotsContainer.className = "testimonials-mobile-dots";
    container.parentNode.appendChild(dotsContainer);
  }

  dotsContainer.innerHTML = cards.map((_, i) => `<span class="testi-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join("");
  const dots = Array.from(dotsContainer.querySelectorAll(".testi-dot"));

  let currentIndex = 0;
  let intervalId = null;

  function showSlide(index) {
    currentIndex = index;
    cards.forEach((card, idx) => {
      if (window.innerWidth <= 768) {
        if (idx === index) {
          card.classList.add("active-mobile");
        } else {
          card.classList.remove("active-mobile");
        }
      } else {
        card.classList.remove("active-mobile");
      }
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  function startAutoPlay() {
    if (intervalId) clearInterval(intervalId);
    if (window.innerWidth <= 768) {
      dotsContainer.style.display = "flex";
      showSlide(currentIndex);
      intervalId = setInterval(() => {
        const nextIndex = (currentIndex + 1) % cards.length;
        showSlide(nextIndex);
      }, 3500);
    } else {
      dotsContainer.style.display = "none";
      cards.forEach(card => card.classList.remove("active-mobile"));
    }
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      showSlide(idx);
      startAutoPlay();
    });
  });

  startAutoPlay();

  window.addEventListener("resize", startAutoPlay);
}
