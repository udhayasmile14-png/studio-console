/**
 * Studio Console - Module Configuration & Screen Registry
 * Holds the metadata array M for all studio modules and screen render registry R.
 */

// Global registry object for screen rendering functions (e.g. R.photos = [screen1, screen2, screen3])
var R = {};

// Config array M listing all 6 system modules
var M = [
  {
    id: 'photos',
    name: 'Photo sharing',
    color: '#D4A857',
    desc: 'Guests find their own photos with a selfie.',
    action: 'Create gallery',
    tabs: ['Gallery setup', 'Guest view', 'Delivery report']
  },
  {
    id: 'albums',
    name: 'Album design',
    color: '#C9788A',
    desc: 'AI picks photos and lays out spreads.',
    action: 'Start album',
    tabs: ['Photo selection', 'Spread editor', 'Client approval']
  },
  {
    id: 'video',
    name: 'Animation video',
    color: '#8B6CF0',
    desc: 'Highlight reels and animated event videos.',
    action: 'New video',
    tabs: ['Scene timeline', 'Style and music', 'Render queue']
  },
  {
    id: 'invites',
    name: 'Digital invitation',
    color: '#7A1F2B',
    desc: 'Invitations with RSVP and map link.',
    action: 'New invitation',
    tabs: ['Template picker', 'Invitation editor', 'RSVP tracker']
  },
  {
    id: 'pay',
    name: 'Packages and payments',
    color: '#2BB3A3',
    desc: 'Packages, quotes, invoices and payments.',
    action: 'New quote',
    tabs: ['Package builder', 'Quote to invoice', 'Payments']
  },
  {
    id: 'data',
    name: 'Clients and data',
    color: '#4C8DF6',
    desc: 'Admin area for managing all records.',
    action: 'Add client',
    tabs: ['Clients and events', 'Users and roles', 'Storage and backups']
  }
];
