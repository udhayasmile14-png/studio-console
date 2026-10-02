/**
 * Studio Console - Session Management & Authentication Helpers
 */

(function(global) {
  var SESSION_KEY = 'studio_session';

  /**
   * Get current session object if present and unexpired.
   * @returns {Object|null}
   */
  function getSession() {
    var raw = localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;

    try {
      var session = JSON.parse(raw);
      if (session && session.expiresAt && Number(session.expiresAt) > Date.now()) {
        return session;
      }
    } catch (e) {}

    // Clear stale session
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
    return null;
  }

  /**
   * Require authentication guard for app pages.
   * Redirects to login.html if unauthenticated.
   */
  function requireAuth() {
    var session = getSession();
    if (!session) {
      location.replace('login.html');
      return null;
    }
    return session;
  }

  /**
   * Log out user and redirect to login page.
   */
  function logout() {
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
    location.replace('login.html');
  }

  /**
   * Get authenticated user.
   */
  function getUser() {
    var session = getSession();
    return session ? session.user : { id: 'u1', username: 'admin', name: 'Sana', role: 'Owner' };
  }

  /**
   * Wrapper for API requests attaching session token header.
   */
  function apiFetch(url, options) {
    options = options || {};
    options.headers = options.headers || {};

    var session = getSession();
    if (session && session.token) {
      options.headers['Authorization'] = 'Bearer ' + session.token;
    }

    return fetch(url, options);
  }

  // Export to global window scope
  global.getSession = getSession;
  global.requireAuth = requireAuth;
  global.logout = logout;
  global.getUser = getUser;
  global.apiFetch = apiFetch;
})(window);
