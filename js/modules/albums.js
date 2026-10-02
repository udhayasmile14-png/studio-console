/**
 * Studio Console - Album Design Module
 * Accent Color: #C9788A
 * Screens: Photo selection, Spread editor, Client approval
 */

// State for Photo selection (24 tiles, first 18 selected by default)
var albumPhotoSel = {};
(function initAlbumState() {
  for (var i = 0; i < 24; i++) {
    albumPhotoSel[i] = (i < 18);
  }
})();

/**
 * Toggle selection of a photo in Photo selection tab.
 * @param {number} i 
 */
function toggleAlbumPhotoSel(i) {
  albumPhotoSel[i] = !albumPhotoSel[i];
  if (window.renderActiveScreen) {
    window.renderActiveScreen();
  }
}

// State for Spread editor
var currentSpread = 3;
var currentTheme = 'Classic'; // 'Classic' | 'Modern'
var currentLayout = 1; // 1 | 2 | 3 | 4

/**
 * Set active spread number (1..24)
 * @param {number} n 
 */
function setSpread(n) {
  currentSpread = Math.max(1, Math.min(24, n));
  renderSpreadEditorArea();
}

/**
 * Set active theme ('Classic' | 'Modern')
 * @param {string} theme 
 */
function setTheme(theme) {
  currentTheme = theme;
  renderSpreadEditorArea();
}

/**
 * Set active layout (1 | 2 | 3 | 4)
 * @param {number} layoutNum 
 */
function setLayout(layoutNum) {
  currentLayout = layoutNum;
  renderSpreadEditorArea();
}

/**
 * Helper to get flat palette color for current spread
 * @param {number} offset 
 * @returns {string} Hex color
 */
function getSpreadColor(offset) {
  return PAL[(currentSpread - 1 + offset) % 12];
}

/**
 * Render HTML for the modern 3-part Spread Editor
 * @returns {string} HTML string
 */
function renderSpreadEditorHTML() {
  var themeClass = (currentTheme === 'Classic') ? 'theme-classic' : 'theme-modern';
  var thumbColors = ['#E0C68A', '#C7A0B0', '#A9A1C4', '#8FB7AE'];
  
  var thumbsHtml = thumbColors.map(function(color, idx) {
    var targetSpread = idx + 1;
    var isActive = (currentSpread === targetSpread) || ((currentSpread - 1) % 4 === idx);
    var activeClass = isActive ? ' active' : '';
    return '<button type="button" class="spread-thumb-item' + activeClass + '" style="background: ' + color + ';" onclick="setSpread(' + targetSpread + ')" aria-label="Spread ' + targetSpread + '"></button>';
  }).join('');

  var pagesHtml = '';
  if (currentLayout === 1) {
    pagesHtml = '<div class="spread-page-box ' + themeClass + '">' +
      '<div style="background-color: ' + getSpreadColor(3) + '; width: 100%; height: 100%; border-radius: 3px;"></div>' +
    '</div>' +
    '<div class="spread-page-box ' + themeClass + '">' +
      '<div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 5px; width: 100%; height: 100%;">' +
        '<div style="background-color: ' + getSpreadColor(1) + '; border-radius: 3px;"></div>' +
        '<div style="background-color: ' + getSpreadColor(2) + '; border-radius: 3px;"></div>' +
        '<div style="background-color: ' + getSpreadColor(0) + '; border-radius: 3px;"></div>' +
        '<div style="background-color: ' + getSpreadColor(10) + '; border-radius: 3px;"></div>' +
      '</div>' +
    '</div>';
  } else if (currentLayout === 2) {
    pagesHtml = '<div class="spread-page-box ' + themeClass + '">' +
      '<div style="background-color: ' + getSpreadColor(3) + '; width: 100%; height: 100%; border-radius: 3px;"></div>' +
    '</div>' +
    '<div class="spread-page-box ' + themeClass + '">' +
      '<div style="background-color: ' + getSpreadColor(1) + '; width: 100%; height: 100%; border-radius: 3px;"></div>' +
    '</div>';
  } else if (currentLayout === 3) {
    pagesHtml = '<div class="spread-page-box ' + themeClass + '">' +
      '<div style="display: flex; flex-direction: column; gap: 5px; width: 100%; height: 100%;">' +
        '<div style="background-color: ' + getSpreadColor(3) + '; flex: 1; border-radius: 3px;"></div>' +
        '<div style="display: flex; gap: 5px; flex: 1;">' +
          '<div style="background-color: ' + getSpreadColor(4) + '; flex: 1; border-radius: 3px;"></div>' +
          '<div style="background-color: ' + getSpreadColor(5) + '; flex: 1; border-radius: 3px;"></div>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="spread-page-box ' + themeClass + '">' +
      '<div style="display: flex; flex-direction: column; gap: 5px; width: 100%; height: 100%;">' +
        '<div style="display: flex; gap: 5px; flex: 1;">' +
          '<div style="background-color: ' + getSpreadColor(1) + '; flex: 1; border-radius: 3px;"></div>' +
          '<div style="background-color: ' + getSpreadColor(2) + '; flex: 1; border-radius: 3px;"></div>' +
        '</div>' +
        '<div style="background-color: ' + getSpreadColor(6) + '; flex: 1; border-radius: 3px;"></div>' +
      '</div>' +
    '</div>';
  } else {
    pagesHtml = '<div class="spread-page-box ' + themeClass + '" style="flex: 2; padding: 0; overflow: hidden;">' +
      '<div style="background-color: ' + getSpreadColor(3) + '; width: 100%; height: 100%; border-radius: 4px;"></div>' +
    '</div>';
  }

  return '<div class="spread-editor-wrapper">' +
    '<div class="spread-editor-topbar">' +
      '<div class="spread-editor-title">Aarav and Meera wedding album</div>' +
      '<span class="chip-draft">Draft</span>' +
      '<button type="button" class="ghost" onclick="toast(\'Preview opened\')">Preview</button>' +
      '<button type="button" class="btn-pink" onclick="toast(\'Sent for approval\')">Send for approval</button>' +
    '</div>' +
    '<div class="spread-editor-body">' +
      '<div class="spread-thumb-strip">' +
        '<div class="spread-thumb-list">' + thumbsHtml + '</div>' +
        '<div class="spread-thumb-caption">Spread ' + currentSpread + ' of 24</div>' +
      '</div>' +
      '<div class="spread-canvas">' +
        '<div class="spread-card">' +
          '<div class="spread-pages-wrapper">' + pagesHtml + '</div>' +
        '</div>' +
        '<div class="spread-nav-bar">' +
          '<button type="button" class="ghost" onclick="setSpread(' + (currentSpread - 1) + ')"' + (currentSpread <= 1 ? ' disabled style="opacity:0.5;cursor:not-allowed;"' : '') + '>Previous spread</button>' +
          '<button type="button" class="ghost" onclick="setSpread(' + (currentSpread + 1) + ')"' + (currentSpread >= 24 ? ' disabled style="opacity:0.5;cursor:not-allowed;"' : '') + '>Next spread</button>' +
          '<button type="button" class="btn" onclick="toast(\'Preview opened\')">Page-flip preview</button>' +
        '</div>' +
      '</div>' +
      '<div class="spread-right-panel">' +
        '<div>' +
          '<div class="spread-panel-label">Theme</div>' +
          '<div class="spread-theme-pills">' +
            '<button type="button" class="theme-pill-btn ' + (currentTheme === 'Classic' ? 'active' : 'inactive') + '" onclick="setTheme(\'Classic\')" aria-label="Classic theme">Classic</button>' +
            '<button type="button" class="theme-pill-btn ' + (currentTheme === 'Modern' ? 'active' : 'inactive') + '" onclick="setTheme(\'Modern\')" aria-label="Modern theme">Modern</button>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div class="spread-panel-label">Layout</div>' +
          '<div class="layout-grid-choices">' +
            '<button type="button" class="layout-choice-btn ' + (currentLayout === 1 ? 'selected' : '') + '" onclick="setLayout(1)" aria-label="Layout 1: 1 left, 4 right">' +
              '<div style="flex:1; height:100%; background:#C9B8A3; border-radius:2px;"></div>' +
              '<div style="flex:1; height:100%; display:grid; grid-template-columns:1fr 1fr; grid-template-rows:1fr 1fr; gap:1px;"><div style="background:#9DB4C0; border-radius:1px;"></div><div style="background:#B5C4A1; border-radius:1px;"></div><div style="background:#D9B4A7; border-radius:1px;"></div><div style="background:#A9A1C4; border-radius:1px;"></div></div>' +
            '</button>' +
            '<button type="button" class="layout-choice-btn ' + (currentLayout === 2 ? 'selected' : '') + '" onclick="setLayout(2)" aria-label="Layout 2: 1 photo per page">' +
              '<div style="flex:1; height:100%; background:#C9B8A3; border-radius:2px;"></div>' +
              '<div style="flex:1; height:100%; background:#9DB4C0; border-radius:2px;"></div>' +
            '</button>' +
            '<button type="button" class="layout-choice-btn ' + (currentLayout === 3 ? 'selected' : '') + '" onclick="setLayout(3)" aria-label="Layout 3: 3 photos per page">' +
              '<div style="flex:1; height:100%; display:flex; flex-direction:column; gap:1px;"><div style="flex:1; background:#C9B8A3; border-radius:1px;"></div><div style="flex:1; display:flex; gap:1px;"><div style="flex:1; background:#B5C4A1; border-radius:1px;"></div><div style="flex:1; background:#D9B4A7; border-radius:1px;"></div></div></div>' +
              '<div style="flex:1; height:100%; display:flex; flex-direction:column; gap:1px;"><div style="flex:1; display:flex; gap:1px;"><div style="flex:1; background:#9DB4C0; border-radius:1px;"></div><div style="flex:1; background:#A9A1C4; border-radius:1px;"></div></div><div style="flex:1; background:#E0C68A; border-radius:1px;"></div></div>' +
            '</button>' +
            '<button type="button" class="layout-choice-btn ' + (currentLayout === 4 ? 'selected' : '') + '" onclick="setLayout(4)" aria-label="Layout 4: Full bleed photo">' +
              '<div style="width:100%; height:100%; background:#C9B8A3; border-radius:2px;"></div>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<button type="button" class="ghost" style="width:100%; text-align:center;" onclick="toast(\'Choose a photo to swap\')">Swap photo</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

/**
 * Re-render only the editor area without whole page refresh
 */
function renderSpreadEditorArea() {
  var root = document.getElementById('spread-editor-root');
  if (root) {
    root.innerHTML = renderSpreadEditorHTML();
  }
}

/**
 * Render a reusable two-page album spread preview for Client approval.
 */
function renderSpreadPreview() {
  return '<div class="spread-container">' +
    '<div class="spread-page">' +
      '<div class="page-tile-full" style="background: #C9B8A3; border-radius: 4px;"></div>' +
    '</div>' +
    '<div class="spread-page">' +
      '<div class="page-tile-grid">' +
        '<div style="background: #9DB4C0; border-radius: 4px;"></div>' +
        '<div style="background: #B5C4A1; border-radius: 4px;"></div>' +
        '<div style="background: #D9B4A7; border-radius: 4px;"></div>' +
        '<div style="background: #A9A1C4; border-radius: 4px;"></div>' +
      '</div>' +
    '</div>' +
  '</div>';
}

R.albums = [
  // Screen 0: Photo selection
  function screenPhotoSelection() {
    return '<div class="panel">' +
      '<p class="subtitle" style="margin-bottom: 16px;">60 of 248 photos picked. Tap a photo to keep or remove it.</p>' +
      tiles(24, function(i) { return albumPhotoSel[i]; }, 'toggleAlbumPhotoSel') +
      '<div style="display: flex; gap: 12px; margin-top: 20px;">' +
        '<button type="button" class="btn" onclick="toast(\'Selection approved\')">Approve selection</button>' +
        '<button type="button" class="ghost" onclick="toast(\'Re-picked\')">Pick again</button>' +
      '</div>' +
    '</div>';
  },

  // Screen 1: Spread editor (Modern 3-part layout)
  function screenSpreadEditor() {
    return '<div id="spread-editor-root">' + renderSpreadEditorHTML() + '</div>';
  },

  // Screen 2: Client approval
  function screenClientApproval() {
    return '<div class="grid-2col">' +
      '<div>' +
        renderSpreadPreview() +
      '</div>' +
      '<div class="panel">' +
        '<h2>Comments</h2>' +
        '<div class="dash-list" style="margin-bottom: 20px;">' +
          li('Meera', 'Spread 4: swap the left photo', 'Open', 'warn') +
          li('Aarav', 'Love the cover', 'Resolved', 'ok') +
        '</div>' +
        '<button type="button" class="btn" onclick="toast(\'Album approved\')">Approve album</button>' +
      '</div>' +
    '</div>';
  }
];
