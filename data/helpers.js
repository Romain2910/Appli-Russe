/* =========================================================
   HELPERS (icones SVG, echappement HTML)
   ========================================================= */

const ICONS = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/>',
  type: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
  list: '<line x1="9" y1="6" x2="21" y2="6"/><line x1="9" y1="12" x2="21" y2="12"/><line x1="9" y1="18" x2="21" y2="18"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
  book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
  layers: '<polygon points="12 2 2 7.5 12 13 22 7.5 12 2"/><polyline points="2 16.5 12 22 22 16.5"/><polyline points="2 11.5 12 17 22 11.5"/>',
  file: '<path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8.5" y1="13" x2="15.5" y2="13"/><line x1="8.5" y1="17" x2="15.5" y2="17"/>',
  headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><rect x="16" y="14" width="5" height="7" rx="2"/><rect x="3" y="14" width="5" height="7" rx="2"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v1a7 7 0 0 0 14 0v-1"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/>',
  chat: '<path d="M21 12.5a8 8 0 0 1-8 8H8l-5 3 1-5.2A8 8 0 1 1 21 12.5z"/>',
  award: '<circle cx="12" cy="8.5" r="6.5"/><polyline points="8 14.5 6.5 22 12 19 17.5 22 16 14.5"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  play: '<polygon points="6 4 20 12 6 20 6 4"/>',
  square: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
  arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  refresh: '<polyline points="1 4 1 10 7 10"/><path d="M3.5 15a9 9 0 1 0 1.5-9.5L1 10"/>',
};

function ic(name, size=18){ return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||''}</svg>`; }

function escapeHTML(str){
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
