/* Stage: size is all CSS (cqw); JS only sets the ratio and handles fullscreen.
   Fullscreen goes on #frame, not #stage, and must be triggered by a user gesture. */
const stage = (() => {
  const frame = document.getElementById('frame');
  const el = document.getElementById('stage');
  function enterFullscreen() {
    if (document.fullscreenElement || !frame.requestFullscreen) return;
    frame.requestFullscreen().catch(e => console.warn('fullscreen refused:', e.message));
  }
  function init() { el.style.setProperty('--ratio', String(settings.stageRatio)); }
  return { el, frame, init, enterFullscreen };
})();
