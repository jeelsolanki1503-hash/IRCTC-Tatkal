/** Converts seconds into a compact minute-and-second label. */
export function timeLabel(seconds) { return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`; }
/** Writes an accessible transient message into the global toast. */
export function toast(message) { const node = document.querySelector('#toast'); node.textContent = message; node.classList.add('is-visible'); setTimeout(() => node.classList.remove('is-visible'), 3500); }
/** Loads a reusable HTML component into a target element. */
export async function loadComponent(selector, path) { const response = await fetch(path); document.querySelector(selector).innerHTML = await response.text(); }
/** Creates an icon-plus-text status callout. */
export function statusCard(kind, title, copy, detail = '') { const icons = { success: '✓', pending: '◷', error: '×', info: 'i' }; return `<section class="status-card ${kind}" role="status"><span class="status-icon">${icons[kind]}</span><div><strong>${title}</strong><p>${copy}</p>${detail ? `<small>${detail}</small>` : ''}</div></section>`; }
/** Attaches shared header, footer, and reset interactions after a route renders. */
export function bindChrome(reset) { document.querySelectorAll('[data-reset]').forEach(button => button.addEventListener('click', reset)); document.querySelectorAll('[data-resume]').forEach(button => button.addEventListener('click', () => window.location.hash = '#/resume')); }
