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

/**
 * Render a reusable two-page album spread preview.
 */
function renderSpreadPreview() {
  return '<div class="spread-container">' +
    '<div class="spread-page">' +
      '<div class="page-tile-full" style="background: linear-gradient(135deg, #C9B8A3, #E0C68A); border-radius: 4px;"></div>' +
    '</div>' +
    '<div class="spread-page">' +
      '<div class="page-tile-grid">' +
        '<div style="background: linear-gradient(135deg, #9DB4C0, #8FB7AE); border-radius: 4px;"></div>' +
        '<div style="background: linear-gradient(135deg, #B5C4A1, #C7A0B0); border-radius: 4px;"></div>' +
        '<div style="background: linear-gradient(135deg, #D9B4A7, #B3B7BF); border-radius: 4px;"></div>' +
        '<div style="background: linear-gradient(135deg, #A9A1C4, #D6CDB0); border-radius: 4px;"></div>' +
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

  // Screen 1: Spread editor
  function screenSpreadEditor() {
    return '<div class="panel">' +
      '<div style="display: flex; gap: 10px; margin-bottom: 20px;">' +
        '<button type="button" class="ghost" onclick="toast(\'Classic style selected\')">Classic</button>' +
        '<button type="button" class="ghost" onclick="toast(\'Modern style selected\')">Modern</button>' +
        '<button type="button" class="ghost" onclick="toast(\'Minimal style selected\')">Minimal</button>' +
      '</div>' +
      renderSpreadPreview() +
      '<div style="display: flex; gap: 12px;">' +
        '<button type="button" class="ghost" onclick="toast(\'Previous spread\')">Previous spread</button>' +
        '<button type="button" class="ghost" onclick="toast(\'Next spread\')">Next spread</button>' +
        '<button type="button" class="btn" onclick="toast(\'Preview opened\')">Page-flip preview</button>' +
      '</div>' +
    '</div>';
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
