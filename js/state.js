const key = 'tatkalfair_booking_state';
const defaults = { route: 'home', authenticated: false, showTokenIntro: false, tokenGuidanceDismissed: false, token: false, details: false, passengers: [], payment: 'idle', holdStarted: null, banner: true };
/** Gets the saved booking state and merges it with safe defaults. */
export function getState() { return { ...defaults, ...JSON.parse(localStorage.getItem(key) || '{}') }; }
/** Saves a partial booking-state update for resume after refresh. */
export function setState(update) { const next = { ...getState(), ...update }; localStorage.setItem(key, JSON.stringify(next)); return next; }
/** Clears the mock journey only when the user explicitly asks to reset it. */
export function resetState() { localStorage.removeItem(key); }
/** Calculates remaining seconds for the protected-seat hold. */
export function holdRemaining() { const start = getState().holdStarted; return start ? Math.max(0, 600 - Math.floor((Date.now() - start) / 1000)) : 600; }
