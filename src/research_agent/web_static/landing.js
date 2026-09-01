(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  function syncMotionPreference() {
    document.documentElement.classList.toggle("motion-paused", document.hidden || reducedMotion.matches);
  }

  document.addEventListener("visibilitychange", () => {
    syncMotionPreference();
  });
  reducedMotion.addEventListener("change", syncMotionPreference);

  window.requestAnimationFrame(() => {
    document.documentElement.classList.add("motion-ready");
    syncMotionPreference();
  });
})();
