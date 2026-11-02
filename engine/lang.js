/* Language: two text tables with the same keys. `text` is the live binding; other modules read it at call time,
   so after lang.set() everything picks up the new language. The last choice is remembered as a default only. */
let text = text_en;
const lang = (() => {
  const key = 'missbaird-shift.lang';
  let current = 'en';
  function set(v) {
    current = v === 'zh' ? 'zh' : 'en';
    text = current === 'zh' ? text_zh : text_en;
    document.documentElement.lang = current === 'zh' ? 'zh-CN' : 'en';
    document.title = text.ui.title;
    try { localStorage.setItem(key, current); } catch (e) {}
  }
  function saved() { try { return localStorage.getItem(key); } catch (e) { return null; } }
  return { set, saved, current: () => current };
})();
