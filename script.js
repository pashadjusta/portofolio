// ===== Form Submit =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Pesan berhasil dikirim!");
      form.reset(); // opsional: reset form setelah submit
    });
  }
});

// ===== Random Stars =====
document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.getElementById("stars-container");
  if (starsContainer) {
    const numStars = 200; // jangan terlalu besar biar ringan
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";

      // ukuran acak (1 - 3 px)
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // posisi acak
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      // animasi acak biar nggak kedip bareng
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.animationDelay = `${Math.random() * 5}s`;

      starsContainer.appendChild(star);
    }
  }
});

// ===== Sub Navbar (Skills, License, Work Experience) =====
function showSection(id, btn) {
  const sections = ["skills", "license", "experience"];
  
  sections.forEach(sec => {
    const section = document.getElementById(sec);
    if (section) section.classList.add("hidden");
  });

  // tampilkan section sesuai tombol yang ditekan
  const activeSection = document.getElementById(id);
  if (activeSection) activeSection.classList.remove("hidden");

  // reset style tombol
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.remove("bg-blue-600", "text-white");
    b.classList.add("bg-gray-700", "text-gray-200");
  });

  // aktifkan tombol yang dipilih
  if (btn) {
    btn.classList.remove("bg-gray-700", "text-gray-200");
    btn.classList.add("bg-blue-600", "text-white");
  }
}

// Default tampil "skills"
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.getElementById("skills");
  if (skills) skills.classList.remove("hidden");

  const firstTab = document.querySelector(".tab-btn");
  if (firstTab) {
    firstTab.classList.add("bg-blue-600", "text-white");
  }
});

// ===== Animasi Fade & Slide =====
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(
    ".fade-up, .slide-in, .fade-right, .fade-left, .fade-down"
  );

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // hanya sekali animasi
    });
  }, appearOptions);

  faders.forEach((fader) => appearOnScroll.observe(fader));
});
