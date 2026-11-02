/* Feature switches and parameters. Every feature gets one switch here; switch off = engine skips it entirely. */
const settings = {
  stageRatio: 16 / 9,
  audio: { on: true, muted: new URLSearchParams(location.search).has('mute') },   // ?mute = run everything, make no sound (dev previews)
  debug: { on: /^(localhost|127\.0\.0\.1)$/.test(location.hostname) },
};
