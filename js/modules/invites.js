/**
 * Studio Console - Digital Invitation Module
 * Accent Color: #7A1F2B
 * Screens: Template picker, Invitation editor, RSVP tracker
 * Live preview helper function: ip()
 */

// Selected template index (0: Wedding, 1: Birthday, 2: Corporate)
var selectedInviteTemplate = 0;

/**
 * Select a template card in Template picker.
 * @param {number} idx 
 */
function selectInviteTemplate(idx) {
  selectedInviteTemplate = idx;
  if (window.renderActiveScreen) {
    window.renderActiveScreen();
  }
}

/**
 * Live preview update function for Invitation editor.
 */
function ip() {
  var namesVal = document.getElementById('inv-input-names') ? document.getElementById('inv-input-names').value : 'Aarav and Meera';
  var dateVal = document.getElementById('inv-input-date') ? document.getElementById('inv-input-date').value : '14 February';
  var venueVal = document.getElementById('inv-input-venue') ? document.getElementById('inv-input-venue').value : 'Chennai Trade Centre';
  
  var prevNames = document.getElementById('inv-prev-names');
  var prevDate = document.getElementById('inv-prev-date');
  var prevVenue = document.getElementById('inv-prev-venue');

  if (prevNames) prevNames.textContent = namesVal || 'Names';
  if (prevDate) prevDate.textContent = dateVal || 'Date';
  if (prevVenue) prevVenue.textContent = venueVal || 'Venue';
}

R.invites = [
  // Screen 0: Template picker
  function screenTemplatePicker() {
    var templates = [
      { title: 'Wedding', color: '#7A1F2B', desc: 'Elegant traditional & modern layouts' },
      { title: 'Birthday', color: '#C9788A', desc: 'Vibrant celebratory designs' },
      { title: 'Corporate', color: '#14171F', desc: 'Clean formal event invitations' }
    ];

    var cardsHtml = '<div class="selectable-cards">';
    for (var i = 0; i < templates.length; i++) {
      var t = templates[i];
      var isSel = (i === selectedInviteTemplate);
      var selClass = isSel ? ' selected' : '';
      var ringStyle = isSel ? 'style="--c: ' + t.color + '"' : '';
      
      cardsHtml += '<div class="selectable-card' + selClass + '" ' + ringStyle + ' onclick="selectInviteTemplate(' + i + ')" tabIndex="0" role="button">' +
        '<div style="width: 100%; height: 80px; border-radius: 6px; background-color: ' + t.color + '; margin-bottom: 12px; display: flex; align-items: center; justify-content: center; color: #FFF; font-weight: 600;">' + t.title + '</div>' +
        '<div style="font-weight: 600; font-size: 15px; margin-bottom: 4px;">' + t.title + '</div>' +
        '<div style="font-size: 13px; color: var(--muted);">' + t.desc + '</div>' +
      '</div>';
    }
    cardsHtml += '</div>';

    return '<div class="panel">' +
      '<h2 style="margin-bottom: 16px;">Choose a Template</h2>' +
      cardsHtml +
    '</div>';
  },

  // Screen 1: Invitation editor
  function screenInvitationEditor() {
    return '<div class="grid-2col">' +
      '<div class="panel">' +
        '<div class="form-group">' +
          '<label class="form-label" for="inv-input-names">Names</label>' +
          '<input type="text" id="inv-input-names" class="form-control" value="Aarav and Meera" oninput="ip()">' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label" for="inv-input-date">Date</label>' +
          '<input type="text" id="inv-input-date" class="form-control" value="14 February" oninput="ip()">' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label" for="inv-input-venue">Venue</label>' +
          '<input type="text" id="inv-input-venue" class="form-control" value="Chennai Trade Centre" oninput="ip()">' +
        '</div>' +
        '<div class="form-group">' +
          '<label class="form-label" for="inv-lang">Language</label>' +
          '<select id="inv-lang" class="form-control">' +
            '<option value="en">English</option>' +
            '<option value="ta">Tamil</option>' +
            '<option value="hi">Hindi</option>' +
          '</select>' +
        '</div>' +
        '<div style="display: flex; gap: 12px; margin-top: 20px;">' +
          '<button type="button" class="btn" onclick="toast(\'Invitation sent\')">Send invitation</button>' +
          '<button type="button" class="ghost" onclick="toast(\'Map link copied\')">Copy map link</button>' +
        '</div>' +
      '</div>' +
      '<div>' +
        '<div class="maroon-preview-box">' +
          '<div style="font-size: 13px; opacity: 0.85; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Together with their families</div>' +
          '<div id="inv-prev-names" class="maroon-preview-names">Aarav and Meera</div>' +
          '<div id="inv-prev-date" style="font-size: 15px; margin-bottom: 6px;">14 February</div>' +
          '<div id="inv-prev-venue" style="font-size: 14px; opacity: 0.9;">Chennai Trade Centre</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  },

  // Screen 2: RSVP tracker
  function screenRSVPTracker() {
    return '<div>' +
      '<div class="stat-cards-grid">' +
        '<div class="stat-card">' +
          '<div class="stat-num">96</div>' +
          '<div class="stat-label">Invited</div>' +
        '</div>' +
        '<div class="stat-card">' +
          '<div class="stat-num">61</div>' +
          '<div class="stat-label">Attending</div>' +
        '</div>' +
        '<div class="stat-card">' +
          '<div class="stat-num">142</div>' +
          '<div class="stat-label">Headcount</div>' +
        '</div>' +
        '<div class="stat-card">' +
          '<div class="stat-num">24</div>' +
          '<div class="stat-label">No reply</div>' +
        '</div>' +
      '</div>' +
      '<div class="panel">' +
        '<h2 style="margin-bottom: 16px;">Guest Responses</h2>' +
        '<div class="dash-list" style="margin-bottom: 20px;">' +
          li('Sharma family', '4 guests', 'Attending', 'ok') +
          li('Iyer family', 'No reply', 'Waiting', 'warn') +
          li('Kumar family', 'Cannot attend', 'Declined', 'err') +
        '</div>' +
        '<button type="button" class="btn" onclick="toast(\'Reminders sent to 24 guests\')">Remind 24 guests</button>' +
      '</div>' +
    '</div>';
  }
];
