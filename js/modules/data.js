/**
 * Studio Console - Clients and Data Module
 * Accent Color: #4C8DF6
 * Screens: Clients and events, Users and roles, Storage and backups
 */

R.data = [
  // Screen 0: Clients and events
  function screenClientsAndEvents() {
    return '<div class="panel">' +
      '<div class="table-responsive">' +
        '<table class="data-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Client</th>' +
              '<th>Events</th>' +
              '<th>Files</th>' +
              '<th>Balance</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>' +
            '<tr>' +
              '<td style="font-weight: 600;">Aarav and Meera</td>' +
              '<td>3</td>' +
              '<td>412</td>' +
              '<td style="font-weight: 600;">' + inr(24000) + '</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="font-weight: 600;">Kavya S.</td>' +
              '<td>1</td>' +
              '<td>96</td>' +
              '<td style="font-weight: 600;">' + inr(0) + '</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="font-weight: 600;">Nexa Pvt Ltd</td>' +
              '<td>2</td>' +
              '<td>188</td>' +
              '<td style="font-weight: 600;">' + inr(59000) + '</td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
      '</div>' +
    '</div>';
  },

  // Screen 1: Users and roles
  function screenUsersAndRoles() {
    return '<div class="panel">' +
      '<h2 style="margin-bottom: 16px;">Team Members</h2>' +
      '<div class="dash-list" style="margin-bottom: 20px;">' +
        li('Sana (owner)', 'Full access', 'Admin', 'ok') +
        li('Dev (editor)', 'Galleries, albums, videos', 'Editor', 'info') +
        li('Priya (accounts)', 'Quotes and payments only', 'Finance', 'warn') +
      '</div>' +
      '<button type="button" class="btn" onclick="toast(\'Invite sent\')">Invite team member</button>' +
    '</div>';
  },

  // Screen 2: Storage and backups
  function screenStorageAndBackups() {
    return '<div class="panel">' +
      '<h2 style="margin-bottom: 20px;">Storage Allocation</h2>' +
      '<div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 24px;">' +
        '<div>' +
          '<div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 6px;">' +
            '<span style="font-weight: 600;">Wedding Aarav and Meera</span>' +
            '<span style="color: var(--muted);">38 GB (76%)</span>' +
          '</div>' +
          bar(76) +
        '</div>' +
        '<div>' +
          '<div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 6px;">' +
            '<span style="font-weight: 600;">Nexa annual meet</span>' +
            '<span style="color: var(--muted);">21 GB (42%)</span>' +
          '</div>' +
          bar(42) +
        '</div>' +
        '<div>' +
          '<div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 6px;">' +
            '<span style="font-weight: 600;">Kavya birthday</span>' +
            '<span style="color: var(--muted);">6 GB (12%)</span>' +
          '</div>' +
          bar(12) +
        '</div>' +
      '</div>' +
      '<div style="display: flex; gap: 12px;">' +
        '<button type="button" class="ghost" onclick="toast(\'Archived\')">Archive old events</button>' +
        '<button type="button" class="ghost" onclick="toast(\'Restore started\')">Restore backup</button>' +
      '</div>' +
    '</div>';
  }
];
