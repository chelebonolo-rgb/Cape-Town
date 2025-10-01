// Cape Town Website Interactions - Full Overhaul 🌊⛰️🌞

// Confirm script load
console.log("🚀 script.js loaded: Welcome to Cape Town! 🚀");

// ===== FUN FACTS ABOUT CAPE TOWN =====
(function funFacts() {
  const facts = [
    "Table Mountain is one of the New7Wonders of Nature.",
    "Cape Town is home to the oldest wine industry outside of Europe.",
    "The city has one of the highest levels of biodiversity in the world.",
    "You can see both the Atlantic and Indian Oceans from Cape Point.",
    "Robben Island, where Nelson Mandela was imprisoned, is just off the coast."
  ];
  let lastIdx = -1;
  function showFact() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let i = Math.floor(Math.random() * facts.length);
    if (i === lastIdx) i = (i + 1) % facts.length;
    lastIdx = i;
    const wrap = document.createElement("div");
    wrap.className = "sj-fact-center";
    wrap.innerHTML = `<div class="sj-fact-card" role="status" aria-live="polite">${facts[i]}</div>`;
    document.body.appendChild(wrap);

    wrap.style.opacity = "0";
    wrap.style.transform = "translateY(14px) translateX(-50%)";
    requestAnimationFrame(() => { 
      wrap.style.transition = "opacity 480ms ease, transform 480ms ease"; 
      wrap.style.opacity = "1"; 
      wrap.style.transform = "translateY(0) translateX(-50%)"; 
    });
    setTimeout(() => {
      wrap.style.opacity = "0";
      wrap.style.transform = "translateY(10px) translateX(-50%)";
      setTimeout(() => wrap.remove(), 520);
    }, 6000);
  }
  // first fact, then interval
  setTimeout(showFact, 2000);
  const factInterval = setInterval(showFact, 15000);
  window.addEventListener("pagehide", () => clearInterval(factInterval));
})();

// ===== CONFETTI: CAPE TOWN STYLE =====
(function confettiClick() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const EMOJIS = ["✨","🎉","🌞","🌊","🦁","🍷","⛰️","🐧"];
  document.addEventListener("click", (e) => {
    const tag = e.target && e.target.tagName;
    if (["A","BUTTON","INPUT","TEXTAREA","SELECT","LABEL"].includes(tag)) return;
    for (let i=0; i<12; i++){
      const span = document.createElement("div");
      span.style.position = "fixed";
      span.style.left = (e.pageX + (Math.random()*16-8)) + "px";
      span.style.top  = (e.pageY + (Math.random()*16-8)) + "px";
      span.style.pointerEvents = "none";
      span.style.fontSize = `${Math.floor(Math.random()*16+12)}px`;
      span.style.opacity = "1";
      span.style.zIndex = 100000;
      span.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      span.style.filter = `drop-shadow(0 6px 10px rgba(0,0,0,0.35))`;
      span.style.transition = `transform 1.2s cubic-bezier(.2,.9,.2,1), opacity 1.2s ease-out`;
      document.body.appendChild(span);
      requestAnimationFrame(()=> {
        const dx = (Math.random()-0.5) * 120;
        const dy = Math.random() * 140 + 30;
        span.style.transform = `translate(${dx}px, ${dy}px) rotate(${Math.random()*720}deg)`;
        span.style.opacity = "0";
      });
      setTimeout(()=> span.remove(), 1600);
    }
  }, { passive: true });
})();

// ===== EASTER EGG: 'C' = Cape Town mode =====
(function keyboardEaster() {
  let party = false;
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "c") {
      party = !party;
      document.documentElement.style.transition = "filter 420ms ease";
      if (party) {
        document.documentElement.style.filter = "saturate(1.15) contrast(1.1)";
        const b = document.createElement("div");
        b.className = "sj-fact-center";
        b.innerHTML = `<div class="sj-fact-card">Cape Town mode: ON 🌊⛰️🍷</div>`;
        document.body.appendChild(b);
        setTimeout(()=> b.remove(), 1400);
      } else {
        document.documentElement.style.filter = "none";
        const b = document.createElement("div");
        b.className = "sj-fact-center";
        b.innerHTML = `<div class="sj-fact-card">Cape Town mode: OFF</div>`;
        document.body.appendChild(b);
        setTimeout(()=> b.remove(), 1400);
      }
    }
  });
})();
// Random Background Color
document.getElementById("color-btn").addEventListener("click", () => {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;
  document.body.style.backgroundColor = randomColor;
});
// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? "block" : "none";
  });
}

document.getElementById("next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.getElementById("prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Auto-play (every 4s)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);
// Random Background Color
document.getElementById("color-btn").addEventListener("click", () => {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;
  document.body.style.backgroundColor = randomColor;
});

// ===== LOG =====
console.log("✨ script.js ready — Cape Town header, nav, hero, gallery, facts, confetti, stars, ambient. ✨");
