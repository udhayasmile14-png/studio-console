/**
 * Studio Console - Central Multi-Page Application Shell Controller
 * Provides renderShell(), topbar customization, sidebar link navigation, drawer toggles, and modals.
 */

// Navigation Items Configuration
var NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'ti-smart-home', href: 'index.html' },
  { id: 'photo-sharing', label: 'Photo Sharing', icon: 'ti-photo', href: 'photo-sharing.html', badge: { text: '12', bg: '#F7EBD2', color: '#7A5514' } },
  { id: 'albums', label: 'Album Design', icon: 'ti-book', href: 'albums.html', badge: { text: '1', bg: '#F8E3E8', color: '#993556' } },
  { id: 'pay', label: 'Packages & Pay', icon: 'ti-receipt', href: 'packages-pay.html', badge: { text: '2', bg: '#FBEBCF', color: '#8A5A0B' } },
  { id: 'clients', label: 'Clients & Data', icon: 'ti-users', href: 'clients.html' },
  { id: 'animation-video', label: 'Animation Video', icon: 'ti-video', href: 'animation-video.html' },
  { id: 'digital-invitation', label: 'Digital Invitation', icon: 'ti-mail-heart', href: 'digital-invitation.html' },
  { id: 'team', label: 'Team', icon: 'ti-user-check', href: 'team.html' },
  { id: 'settings', label: 'Settings', icon: 'ti-settings', href: 'settings.html' }
];

/**
 * Render shared Shell layout (Sidebar and Topbar)
 * @param {Object} options
 * @param {string} options.active - Active navigation ID
 * @param {string|null} [options.searchPlaceholder] - Search placeholder or null to hide
 * @param {Array} [options.actions] - Array of action button specs: [{ label, icon, variant, onclick }]
 */
function renderShell(options) {
  options = options || {};
  var activeId = options.active || 'dashboard';

  // 1. Render Sidebar Navigation Links
  var navEl = document.getElementById('sidebar-nav');
  if (navEl) {
    navEl.innerHTML = NAV_ITEMS.map(function(item) {
      var isActive = (
        item.id === activeId ||
        item.href === activeId ||
        (item.href && item.href.replace('.html', '') === activeId) ||
        (item.id === 'pay' && activeId === 'invoices') ||
        (item.id === 'albums' && activeId === 'album-design') ||
        (item.id === 'clients' && (activeId === 'clients-data' || activeId === 'clients'))
      );
      var activeClass = isActive ? ' active' : '';
      var badgeHtml = item.badge ? '<span class="badge" style="background:' + item.badge.bg + '; color:' + item.badge.color + ';">' + item.badge.text + '</span>' : '';
      
      return '<a href="' + item.href + '" class="nav-item' + activeClass + '">' +
        '<div class="nav-item-left">' +
          '<div class="nav-item-icon"><i class="ti ' + item.icon + '"></i></div>' +
          '<span>' + item.label + '</span>' +
        '</div>' +
        badgeHtml +
      '</a>';
    }).join('');
  }

  // 2. Render Page-Specific Topbar (Search Box)
  var searchBoxEl = document.getElementById('topbarSearch');
  if (searchBoxEl) {
    if (options.searchPlaceholder) {
      searchBoxEl.hidden = false;
      searchBoxEl.style.display = 'block';
      var input = searchBoxEl.querySelector('input');
      if (input) {
        input.placeholder = options.searchPlaceholder;
      }
    } else {
      searchBoxEl.hidden = true;
      searchBoxEl.style.display = 'none';
    }
  }

  // 3. Render Page-Specific Topbar (Action Buttons)
  var actionsEl = document.getElementById('topbarActions');
  if (actionsEl) {
    actionsEl.innerHTML = '';
    if (options.actions && options.actions.length > 0) {
      options.actions.forEach(function(act) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = (act.variant === 'ghost' ? 'btn-ghost' : 'btn-gold');
        if (act.onclick) btn.setAttribute('onclick', act.onclick);
        
        var iconHtml = act.icon ? '<i class="ti ' + act.icon + '"></i> ' : '';
        btn.innerHTML = iconHtml + act.label;
        actionsEl.appendChild(btn);
      });
    }
  }

  // Close drawer if open
  closeDrawer();
}

/* Mobile Drawer Controls */
function toggleDrawer() {
  var col = document.getElementById('sidebarCol');
  if (col) col.classList.toggle('open');
}

function closeDrawer() {
  var col = document.getElementById('sidebarCol');
  if (col) col.classList.remove('open');
}

/* Toast Notifications */
function toast(msg) {
  var t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast-msg';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() {
    t.classList.remove('show');
  }, 3000);
}

/* Modal Helpers */
function openModal(id) {
  var m = document.getElementById(id);
  if (m) m.classList.add('show');
}

function closeModal(id) {
  var m = document.getElementById(id);
  if (m) m.classList.remove('show');
}

/* Helper to render empty states */
function renderEmptyState(title, desc, icon) {
  return '<div class="glass-card" style="padding: 48px 24px; text-align: center; margin-top: 20px;">' +
    '<div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(212,168,87,0.15); color: var(--gold); display: inline-flex; align-items: center; justify-content: center; font-size: 26px; margin-bottom: 14px;">' +
      '<i class="ti ' + (icon || 'ti-inbox') + '"></i>' +
    '</div>' +
    '<h3 style="font-size: 1.3rem; margin-bottom: 6px;">' + title + '</h3>' +
    '<p style="color: var(--muted); font-size: 14px; max-width: 360px; margin: 0 auto;">' + desc + '</p>' +
  '</div>';
}

/* Helper to render skeleton loading state */
function renderSkeletonList(count) {
  count = count || 3;
  var items = [];
  for (var i = 0; i < count; i++) {
    items.push(
      '<div class="glass-panel" style="padding: 16px; margin-bottom: 12px; display: flex; gap: 16px; align-items: center;">' +
        '<div class="skeleton" style="width: 42px; height: 42px; border-radius: 50%; flex-shrink: 0;"></div>' +
        '<div style="flex: 1;">' +
          '<div class="skeleton" style="width: 40%; height: 16px; margin-bottom: 8px;"></div>' +
          '<div class="skeleton" style="width: 65%; height: 12px;"></div>' +
        '</div>' +
      '</div>'
    );
  }
  return items.join('');
}
