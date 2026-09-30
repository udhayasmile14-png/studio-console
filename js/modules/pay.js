/**
 * Studio Console - Packages and Payments Module
 * Accent Color: #2BB3A3
 * Screens: Package builder, Quote to invoice, Payments
 * Quote total calculation function: qt()
 */

// Selected package card index (0: Basic, 1: Standard, 2: Premium)
var selectedPkgIndex = 1;

/**
 * Select a package tier card.
 * @param {number} idx 
 */
function selectPkgTier(idx) {
  selectedPkgIndex = idx;
  if (window.renderActiveScreen) {
    window.renderActiveScreen();
  }
}

/**
 * Recalculate live totals for Quote to invoice.
 */
function qt() {
  var q1El = document.getElementById('qt-q1');
  var q2El = document.getElementById('qt-q2');
  var q3El = document.getElementById('qt-q3');

  var q1 = q1El ? Math.max(0, parseInt(q1El.value, 10) || 0) : 1;
  var q2 = q2El ? Math.max(0, parseInt(q2El.value, 10) || 0) : 1;
  var q3 = q3El ? Math.max(0, parseInt(q3El.value, 10) || 0) : 2;

  var p1 = 45000, p2 = 6000, p3 = 4500;
  var a1 = p1 * q1, a2 = p2 * q2, a3 = p3 * q3;

  var subtotal = a1 + a2 + a3;
  var gst = Math.round(subtotal * 0.18);
  var total = subtotal + gst;

  var a1El = document.getElementById('qt-a1');
  var a2El = document.getElementById('qt-a2');
  var a3El = document.getElementById('qt-a3');
  var subEl = document.getElementById('qt-subtotal');
  var gstEl = document.getElementById('qt-gst');
  var totEl = document.getElementById('qt-total');

  if (a1El) a1El.textContent = inr(a1);
  if (a2El) a2El.textContent = inr(a2);
  if (a3El) a3El.textContent = inr(a3);
  if (subEl) subEl.textContent = inr(subtotal);
  if (gstEl) gstEl.textContent = inr(gst);
  if (totEl) totEl.textContent = inr(total);
}

R.pay = [
  // Screen 0: Package builder
  function screenPackageBuilder() {
    var pkgs = [
      { name: 'Basic', price: 25000, desc: '1 photographer, 4 hours, online gallery' },
      { name: 'Standard', price: 45000, desc: '2 photographers, 8 hours, album' },
      { name: 'Premium', price: 80000, desc: 'Full day, album, highlight video' }
    ];

    var cardsHtml = '<div class="selectable-cards">';
    for (var i = 0; i < pkgs.length; i++) {
      var p = pkgs[i];
      var isSel = (i === selectedPkgIndex);
      var selClass = isSel ? ' selected' : '';
      
      cardsHtml += '<div class="selectable-card' + selClass + '" style="--c: #2BB3A3;" onclick="selectPkgTier(' + i + ')" tabIndex="0" role="button">' +
        '<div style="font-weight: 600; font-size: 16px; margin-bottom: 6px;">' + p.name + '</div>' +
        '<div style="font-size: 1.5rem; font-weight: 600; color: var(--text); margin-bottom: 8px;">' + inr(p.price) + '</div>' +
        '<div style="font-size: 13px; color: var(--muted);">' + p.desc + '</div>' +
      '</div>';
    }
    cardsHtml += '</div>';

    return '<div>' +
      '<div class="panel" style="margin-bottom: 20px;">' +
        '<h2 style="margin-bottom: 16px;">Select Base Package</h2>' +
        cardsHtml +
      '</div>' +
      '<div class="panel">' +
        '<h2 style="margin-bottom: 14px;">Add-ons</h2>' +
        '<div style="display: flex; flex-direction: column; gap: 12px;">' +
          '<label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 14px;">' +
            '<input type="checkbox" checked style="width: 18px; height: 18px; accent-color: #2BB3A3;">' +
            '<span>Drone coverage, ' + inr(6000) + '</span>' +
          '</label>' +
          '<label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 14px;">' +
            '<input type="checkbox" checked style="width: 18px; height: 18px; accent-color: #2BB3A3;">' +
            '<span>Extra album copy, ' + inr(4500) + '</span>' +
          '</label>' +
        '</div>' +
      '</div>' +
    '</div>';
  },

  // Screen 1: Quote to invoice
  function screenQuoteToInvoice() {
    return '<div class="panel">' +
      '<div class="table-responsive">' +
        '<table class="data-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Item</th>' +
              '<th>Price</th>' +
              '<th>Qty</th>' +
              '<th>Amount</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>' +
            '<tr>' +
              '<td style="font-weight: 500;">Standard package</td>' +
              '<td>' + inr(45000) + '</td>' +
              '<td><input type="number" id="qt-q1" value="1" min="0" oninput="qt()"></td>' +
              '<td id="qt-a1" style="font-weight: 600;">' + inr(45000) + '</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="font-weight: 500;">Drone coverage</td>' +
              '<td>' + inr(6000) + '</td>' +
              '<td><input type="number" id="qt-q2" value="1" min="0" oninput="qt()"></td>' +
              '<td id="qt-a2" style="font-weight: 600;">' + inr(6000) + '</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="font-weight: 500;">Extra album copy</td>' +
              '<td>' + inr(4500) + '</td>' +
              '<td><input type="number" id="qt-q3" value="2" min="0" oninput="qt()"></td>' +
              '<td id="qt-a3" style="font-weight: 600;">' + inr(9000) + '</td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
      '</div>' +
      '<div style="display: flex; flex-direction: column; align-items: flex-end; gap: 6px; margin: 20px 0 24px 0;">' +
        '<div style="font-size: 14px; color: var(--muted);">Subtotal: <strong id="qt-subtotal" style="color: var(--text);">' + inr(60000) + '</strong></div>' +
        '<div style="font-size: 14px; color: var(--muted);">GST 18%: <strong id="qt-gst" style="color: var(--text);">' + inr(10800) + '</strong></div>' +
        '<div style="font-size: 1.2rem; font-weight: 600; color: var(--text); margin-top: 4px;">Total: <span id="qt-total">' + inr(70800) + '</span></div>' +
      '</div>' +
      '<div style="display: flex; justify-content: flex-end; gap: 12px;">' +
        '<button type="button" class="ghost" onclick="toast(\'Quote sent\')">Send quote</button>' +
        '<button type="button" class="btn" onclick="toast(\'Converted to invoice\')">Convert to invoice</button>' +
      '</div>' +
    '</div>';
  },

  // Screen 2: Payments
  function screenPayments() {
    return '<div class="panel">' +
      '<h2 style="margin-bottom: 16px;">Payment Records</h2>' +
      '<div class="dash-list" style="margin-bottom: 20px;">' +
        li('Aarav and Meera wedding', 'Advance paid, balance due 10 Feb', 'Balance due', 'warn') +
        li('Kavya birthday shoot', 'Fully paid', 'Paid', 'ok') +
        li('Rahul and Divya reception', 'Advance not received', 'Unpaid', 'err') +
      '</div>' +
      '<div style="display: flex; gap: 12px;">' +
        '<button type="button" class="btn" onclick="toast(\'Reminder sent\')">Send reminder</button>' +
        '<button type="button" class="ghost" onclick="toast(\'Download receipt\')">Download receipt</button>' +
      '</div>' +
    '</div>';
  }
];
