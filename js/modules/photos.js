/**
 * Studio Console - Photo Sharing Module
 * Accent Color: #D4A857
 * Screens: Gallery setup, Guest view, Delivery report
 */

// State for Delivery report unmatched photos selection (indexes where i%3 !== 1 start selected)
var photoUnmatchedSel = {};
(function initPhotoState() {
  for (var i = 0; i < 12; i++) {
    photoUnmatchedSel[i] = (i % 3 !== 1);
  }
})();

/**
 * Toggle selection of an unmatched photo in Delivery report.
 * @param {number} i 
 */
function togglePhotoUnmatched(i) {
  photoUnmatchedSel[i] = !photoUnmatchedSel[i];
  if (window.renderActiveScreen) {
    window.renderActiveScreen();
  }
}

R.photos = [
  // Screen 0: Gallery setup
  function screenGallerySetup() {
    return '<div class="grid-2col">' +
      '<div class="panel drop-zone">' +
        '<div style="font-weight: 600; font-size: 16px;">Drop event photos here</div>' +
        '<button type="button" class="ghost" onclick="toast(\'Choose files to upload\')">Browse files</button>' +
        '<div style="font-size: 13px; color: var(--muted); margin-top: 8px;">248 photos uploaded</div>' +
      '</div>' +
      '<div class="panel">' +
        '<h2 style="margin-bottom: 16px;">Gallery Settings</h2>' +
        '<div class="form-group">' +
          '<label class="form-label" for="gal-link">Gallery link</label>' +
          '<input type="text" id="gal-link" class="form-control" value="studio.app/g/aarav-meera" readonly>' +
        '</div>' +
        '<div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">' +
          '<div class="qr-box"></div>' +
          '<div>' +
            '<div style="font-weight: 600;">QR code</div>' +
            '<div style="font-size: 13px; color: var(--muted);">Print it on table cards.</div>' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label" for="gal-dl-perm">Who can download</label>' +
          '<select id="gal-dl-perm" class="form-control">' +
            '<option value="anyone">Anyone with the link</option>' +
            '<option value="matched">Matched guests only</option>' +
            '<option value="nobody">Nobody (view only)</option>' +
          '</select>' +
        '</div>' +
        '<button type="button" class="btn" style="margin-top: 8px;" onclick="toast(\'Gallery published\')">Publish gallery</button>' +
      '</div>' +
    '</div>';
  },

  // Screen 1: Guest view
  function screenGuestView() {
    return '<div class="grid-2col">' +
      '<div class="panel" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px 18px;">' +
        '<h2>Find your photos</h2>' +
        '<p class="subtitle" style="margin-bottom: 20px;">Take a selfie and we will match it.</p>' +
        '<div style="width: 96px; height: 96px; border-radius: 50%; background-color: var(--border); margin-bottom: 20px; display: flex; align-items: center; justify-content: center; color: var(--muted); font-size: 28px;">📷</div>' +
        '<button type="button" class="btn" onclick="toast(\'Matching photos...\')">Take selfie</button>' +
      '</div>' +
      '<div class="panel">' +
        '<h2>Your 18 photos</h2>' +
        tiles(9) +
        '<div style="display: flex; gap: 12px; margin-top: 16px;">' +
          '<button type="button" class="btn" onclick="toast(\'Download started\')">Download all</button>' +
          '<button type="button" class="ghost" onclick="toast(\'Opening WhatsApp\')">Share on WhatsApp</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  },

  // Screen 2: Delivery report
  function screenDeliveryReport() {
    return '<div>' +
      '<div class="stat-cards-grid">' +
        '<div class="stat-card">' +
          '<div class="stat-num">132</div>' +
          '<div class="stat-label">Link opens</div>' +
        '</div>' +
        '<div class="stat-card">' +
          '<div class="stat-num">87</div>' +
          '<div class="stat-label">Guests downloaded</div>' +
        '</div>' +
        '<div class="stat-card">' +
          '<div class="stat-num">12</div>' +
          '<div class="stat-label">Unmatched photos</div>' +
        '</div>' +
      '</div>' +
      '<div class="panel">' +
        '<h2 style="margin-bottom: 16px;">Unmatched photos to review</h2>' +
        tiles(12, function(i) { return photoUnmatchedSel[i]; }, 'togglePhotoUnmatched') +
        '<div style="margin-top: 16px;">' +
          '<button type="button" class="btn" onclick="toast(\'Photos assigned\')">Assign selected</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }
];
