import '../../../../scripts/ui.js';
import '../../../../scripts/nav.js';
import '../main.scss';

const btn = document.querySelector('#themeBtn');
const themeValue = document.querySelector('#themeValue');

function setThemeValue(theme) {
  if (!themeValue) return;
  themeValue.textContent = theme;
}

function getTheme() {
  return document.body.getAttribute('data-theme') || 'prime';
}

function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  setThemeValue(theme);
}

btn?.addEventListener('click', () => {
  const current = getTheme();
  const next = current === 'prime' ? 'neon' : 'prime';
  setTheme(next);
});

// Initialize status from actual DOM state
setThemeValue(getTheme());
