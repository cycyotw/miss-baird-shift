/* Entry point: title screen → choose language → scene. */
(() => {
  stage.init();
  const title = document.getElementById('title-screen');
  const scene = document.getElementById('scene');
  title.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => {
    stage.enterFullscreen();
    lang.set(b.dataset.lang);
    title.hidden = true;
    scene.querySelector('.placeholder').textContent = text.ui.placeholder;
    scene.hidden = false;
  }));
})();
