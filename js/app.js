/**
 * Studio Console - Main Router & Application Controller
 * Handles sidebar rendering, route switching go(id, tabIndex), and dashboard view home().
 */

// Application Navigation State
var currentView = {
  moduleId: 'dashboard',
  tabIndex: 0
};

/**
 * Render the Dashboard view HTML string.
 * @returns {string} HTML string
 */
function home() {
  var upcomingEvents = [
    { title: 'Aarav and Meera wedding', sub: '14 Feb, Chennai', chip: 'Gallery ready', kind: 'ok' },
    { title: 'Kavya birthday shoot', sub: '16 Feb, Coimbatore', chip: 'Balance due', kind: 'warn' },
    { title: 'Nexa annual meet', sub: '19 Feb, Bengaluru', chip: 'Quote sent', kind: 'info' },
    { title: 'Rahul and Divya reception', sub: '22 Feb, Madurai', chip: 'Advance unpaid', kind: 'err' }
  ];

  var needsAttention = [
    { title: '12 unmatched photos', sub: 'Review in Photo sharing', targetMod: 'photos', targetTab: 2 },
    { title: 'Album waiting for approval', sub: 'Sent to client 3 days ago', targetMod: 'albums', targetTab: 2 },
    { title: 'Video render failed', sub: 'Retry from the render queue', targetMod: 'video', targetTab: 2 }
  ];

  var eventsHtml = upcomingEvents.map(function(e) {
    return li(e.title, e.sub, e.chip, e.kind);
  }).join('');

  var attentionHtml = needsAttention.map(function(item) {
    return '<div class="dash-list-item" style="cursor: pointer;" onclick="go(\'' + item.targetMod + '\', ' + item.targetTab + ')">' +
      '<div class="dash-item-left">' +
        '<span class="dash-item-title">' + item.title + '</span>' +
        '<span class="dash-item-sub">' + item.sub + '</span>' +
      '</div>' +
    '</div>';
  }).join('');

  var moduleCardsHtml = M.map(function(mod) {
    return '<div class="module-card" style="--card-color: ' + mod.color + ';" onclick="go(\'' + mod.id + '\', 0)" tabIndex="0" role="button">' +
      '<div class="module-card-title">' + mod.name + '</div>' +
      '<div class="module-card-desc">' + mod.desc + '</div>' +
    '</div>';
  }).join('');

  return '<div>' +
    '<h1>Good morning</h1>' +
    '<p class="subtitle">Three events this week. Two payments are waiting.</p>' +
    '<div class="dash-grid">' +
      '<div class="panel">' +
        '<h2>Upcoming events</h2>' +
        '<div class="dash-list">' + eventsHtml + '</div>' +
      '</div>' +
      '<div class="panel">' +
        '<h2>Needs attention</h2>' +
        '<div class="dash-list">' + attentionHtml + '</div>' +
      '</div>' +
    '</div>' +
    '<div style="margin-top: 28px;">' +
      '<h2 style="margin-bottom: 14px;">Studio Modules</h2>' +
      '<div class="module-cards-grid">' + moduleCardsHtml + '</div>' +
    '</div>' +
  '</div>';
}

/**
 * Navigation Router Function
 * @param {string} id Module ID or 'dashboard'
 * @param {number} [tabIndex] Screen tab index (0-based)
 */
function go(id, tabIndex) {
  var tIdx = typeof tabIndex === 'number' ? tabIndex : 0;
  var isModuleChange = (currentView.moduleId !== id);

  currentView.moduleId = id;
  currentView.tabIndex = tIdx;

  if (isModuleChange) {
    window.scrollTo(0, 0);
  }

  renderSidebarNav();
  renderMainContent();
}

/**
 * Re-renders only the current active screen content without changing scroll position.
 */
function renderActiveScreen() {
  renderMainContent();
}

/**
 * Render the sidebar navigation items.
 */
function renderSidebarNav() {
  var navContainer = document.getElementById('sidebar-nav');
  if (!navContainer) return;

  var isDashActive = (currentView.moduleId === 'dashboard');
  var dashAria = isDashActive ? 'aria-current="page"' : '';
  
  var html = '<ul class="nav-list">' +
    '<li class="nav-item">' +
      '<button type="button" ' + dashAria + ' onclick="go(\'dashboard\')">' +
        '<span class="nav-dot" style="background-color: #14171F;"></span>' +
        'Dashboard' +
      '</button>' +
    '</li>' +
    '<li class="nav-divider"></li>';

  M.forEach(function(mod) {
    var isActive = (currentView.moduleId === mod.id);
    var ariaAttr = isActive ? 'aria-current="page"' : '';
    html += '<li class="nav-item">' +
      '<button type="button" ' + ariaAttr + ' onclick="go(\'' + mod.id + '\', 0)">' +
        '<span class="nav-dot" style="background-color: ' + mod.color + ';"></span>' +
        mod.name +
      '</button>' +
    '</li>';
  });

  html += '</ul>';
  navContainer.innerHTML = html;
}

/**
 * Render main area content (Dashboard or active Module Screen).
 */
function renderMainContent() {
  var mainEl = document.getElementById('main-content');
  if (!mainEl) return;

  if (currentView.moduleId === 'dashboard') {
    mainEl.style.setProperty('--c', 'var(--gold)');
    mainEl.innerHTML = home();
    return;
  }

  // Find module in config array M
  var mod = M.find(function(m) { return m.id === currentView.moduleId; });
  if (!mod) {
    go('dashboard');
    return;
  }

  // Set CSS variable --c for accent color styling
  mainEl.style.setProperty('--c', mod.color);

  // Build Tab Bar HTML
  var tabsHtml = mod.tabs.map(function(tabName, idx) {
    var activeClass = (idx === currentView.tabIndex) ? ' active' : '';
    return '<button type="button" class="tab-btn' + activeClass + '" onclick="go(\'' + mod.id + '\', ' + idx + ')">' +
      tabName +
    '</button>';
  }).join('');

  // Get active screen HTML from registry R
  var screenFn = (R[mod.id] && R[mod.id][currentView.tabIndex]) ? R[mod.id][currentView.tabIndex] : function() { return '<div>Screen not found</div>'; };
  var screenContentHtml = screenFn();

  var modulePageHtml = '<div class="module-header">' +
    '<h1>' + mod.name + '</h1>' +
    '<p class="subtitle">' + mod.desc + '</p>' +
    '<div class="action-row">' +
      '<button type="button" class="btn" onclick="toast(\'' + mod.action + '\')">' + mod.action + '</button>' +
      '<button type="button" class="ghost" onclick="toast(\'Showing all items\')">View all</button>' +
    '</div>' +
    '<div class="tab-bar">' + tabsHtml + '</div>' +
  '</div>' +
  '<div class="module-screen">' + screenContentHtml + '</div>';

  mainEl.innerHTML = modulePageHtml;
}

// Global initialization when window loads
window.addEventListener('DOMContentLoaded', function() {
  go('dashboard');
});
