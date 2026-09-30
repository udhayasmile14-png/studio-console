/**
 * Studio Console - Animation Video Module
 * Accent Color: #8B6CF0
 * Screens: Scene timeline, Style and music, Render queue
 */

R.video = [
  // Screen 0: Scene timeline
  function screenSceneTimeline() {
    var durations = ["3 seconds", "4 seconds", "5 seconds"];
    var cardsHtml = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; margin-bottom: 20px;">';
    for (var i = 0; i < 6; i++) {
      var bg1 = PAL[i % 12];
      var bg2 = PAL[(i + 5) % 12];
      var bgStyle = 'background: linear-gradient(135deg, ' + bg1 + ', ' + bg2 + ');';
      var dur = durations[i % 3];
      
      cardsHtml += '<div class="panel" style="padding: 12px; display: flex; flex-direction: column; gap: 8px;">' +
        '<div style="width: 100%; aspect-ratio: 16/9; border-radius: 6px; ' + bgStyle + '"></div>' +
        '<div style="font-weight: 600; font-size: 14px;">Scene ' + (i + 1) + '</div>' +
        '<div style="font-size: 12px; color: var(--muted);">' + dur + '</div>' +
      '</div>';
    }
    cardsHtml += '</div>';

    return '<div class="panel">' +
      cardsHtml +
      '<div style="display: flex; gap: 12px;">' +
        '<button type="button" class="ghost" onclick="toast(\'Reordering scenes\')">Reorder</button>' +
        '<button type="button" class="ghost" onclick="toast(\'Trim mode enabled\')">Trim</button>' +
      '</div>' +
    '</div>';
  },

  // Screen 1: Style and music
  function screenStyleAndMusic() {
    return '<div class="grid-2col">' +
      '<div class="panel">' +
        '<div class="form-group">' +
          '<label class="form-label" for="vid-style">Style</label>' +
          '<select id="vid-style" class="form-control" onchange="updateVidPreview()">' +
            '<option value="Cinematic preview">Cinematic</option>' +
            '<option value="Warm memories preview">Warm memories</option>' +
            '<option value="Bright and fun preview">Bright and fun</option>' +
          '</select>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label" for="vid-music">Music</label>' +
          '<select id="vid-music" class="form-control">' +
            '<option value="piano">Soft piano</option>' +
            '<option value="acoustic">Upbeat acoustic</option>' +
            '<option value="strings">Classical strings</option>' +
          '</select>' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label" for="vid-title">Title text</label>' +
          '<input type="text" id="vid-title" class="form-control" value="Aarav and Meera" oninput="updateVidPreview()">' +
        '</div>' +
        '<button type="button" class="btn" style="margin-top: 8px;" onclick="toast(\'Sample ready\')">Preview 10-second sample</button>' +
      '</div>' +
      '<div>' +
        '<div class="dark-preview-box">' +
          '<div id="vid-prev-title" class="dark-preview-title">Aarav and Meera</div>' +
          '<div id="vid-prev-style" style="font-size: 14px; color: rgba(255,255,255,0.7);">Cinematic preview</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  },

  // Screen 2: Render queue
  function screenRenderQueue() {
    return '<div class="panel">' +
      '<h2 style="margin-bottom: 16px;">Render Queue</h2>' +
      '<div class="dash-list" style="margin-bottom: 24px;">' +
        li('Wedding highlights', 'Rendering, 64%', 'Rendering', 'info') +
        li('Sangeet reel', 'Ready, 1:42', 'Download', 'ok') +
        li('Reception teaser', 'Failed at scene 5', 'Retry', 'err') +
      '</div>' +
      '<div>' +
        '<div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 6px; color: var(--muted); font-weight: 500;">' +
          '<span>Rendering progress</span>' +
          '<span>64%</span>' +
        '</div>' +
        bar(64) +
      '</div>' +
    '</div>';
  }
];

/**
 * Live update helper for Animation video preview box
 */
function updateVidPreview() {
  var titleEl = document.getElementById('vid-title');
  var styleEl = document.getElementById('vid-style');
  var prevTitle = document.getElementById('vid-prev-title');
  var prevStyle = document.getElementById('vid-prev-style');
  
  if (prevTitle && titleEl) {
    prevTitle.textContent = titleEl.value || 'Untitled';
  }
  if (prevStyle && styleEl) {
    prevStyle.textContent = styleEl.options[styleEl.selectedIndex].text + ' preview';
  }
}
