const FORM_LINK = "https://forms.gle/Lrhpf3tNNxsHa7Nx6";

const formLinkTargets = document.querySelectorAll("[data-form-link]");
formLinkTargets.forEach((el) => {
  el.href = FORM_LINK;
});

const revealElements = document.querySelectorAll("[data-reveal]");

if (!("IntersectionObserver" in window)) {
  revealElements.forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}
