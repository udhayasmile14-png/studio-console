/**
 * Studio Console - Helper Functions
 * Provides UI formatters, toast notifications, progress bars, list items, and gradient tile grids.
 */

// Tile gradient color palette (12 colors)
var PAL = ['#C9B8A3', '#9DB4C0', '#B5C4A1', '#D9B4A7', '#A9A1C4', '#E0C68A', '#8FB7AE', '#C7A0B0', '#B3B7BF', '#D6CDB0', '#A5C0D6', '#C2A98E'];

/**
 * Format a number as Indian Rupee (INR) currency.
 * @param {number} number
 * @returns {string} Formatted INR string, e.g. ₹70,800
 */
function inr(number) {
  return '₹' + Number(number || 0).toLocaleString('en-IN');
}

/**
 * Global Toast Notification Timer
 */
var toastTimer = null;

/**
 * Display a toast notification at the bottom center of the screen.
 * Disappears after 1.8 seconds (1800ms).
 * @param {string} text
 */
function toast(text) {
  var el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast-msg';
    el.setAttribute('role', 'status');
    document.body.appendChild(el);
  }
  
  el.textContent = text;
  el.classList.add('show');
  
  if (toastTimer) {
    clearTimeout(toastTimer);
  }
  
  toastTimer = setTimeout(function() {
    el.classList.remove('show');
  }, 1800);
}

/**
 * Generate an HTML string for an 8px progress bar.
 * @param {number} percent 
 * @returns {string} HTML string
 */
function bar(percent) {
  var p = Math.max(0, Math.min(100, Number(percent) || 0));
  return '<div class="progress-bar-container"><div class="progress-bar-fill" style="width: ' + p + '%;"></div></div>';
}

/**
 * Generate an HTML string for a structured list item row.
 * @param {string} title 
 * @param {string} sub 
 * @param {string} [chip] 
 * @param {string} [kind] ok | warn | err | info
 * @returns {string} HTML string
 */
function li(title, sub, chip, kind) {
  var chipHtml = chip ? '<span class="chip ' + (kind || '') + '">' + chip + '</span>' : '';
  var subHtml = sub ? '<span class="dash-item-sub">' + sub + '</span>' : '';
  
  return '<div class="dash-list-item">' +
    '<div class="dash-item-left">' +
      '<span class="dash-item-title">' + title + '</span>' +
      subHtml +
    '</div>' +
    chipHtml +
  '</div>';
}

/**
 * Generate an HTML string for a grid of n tile boxes with dynamic gradient palette.
 * @param {number} n Number of tiles
 * @param {Array|Set|Function} [sel] Selected state definition
 * @param {string} [toggle] Function name to call on click, e.g. "toggleTile"
 * @returns {string} HTML string
 */
function tiles(n, sel, toggle) {
  var html = '<div class="tiles-grid">';
  for (var i = 0; i < n; i++) {
    var bg1 = PAL[i % 12];
    var bg2 = PAL[(i + 5) % 12];
    var bgStyle = 'background: linear-gradient(135deg, ' + bg1 + ', ' + bg2 + ');';
    
    var isSelected = false;
    if (typeof sel === 'function') {
      isSelected = Boolean(sel(i));
    } else if (Array.isArray(sel)) {
      isSelected = sel.includes(i) || Boolean(sel[i]);
    } else if (sel && typeof sel.has === 'function') {
      isSelected = sel.has(i);
    }
    
    var clickAttr = toggle ? 'onclick="' + toggle + '(' + i + ')"' : '';
    var selectedClass = isSelected ? ' selected' : '';
    var checkBadge = isSelected ? '<span class="tile-check-badge">✓</span>' : '';
    
    html += '<div class="tile-item' + selectedClass + '" style="' + bgStyle + '" ' + clickAttr + ' tabIndex="0" role="button" aria-label="Tile ' + (i + 1) + '">' +
      checkBadge +
    '</div>';
  }
  html += '</div>';
  return html;
}
