/**
 * Studio Console - Realistic Indian Photography Studio Dataset & Data Helpers
 */

var STUDIO_SNAPSHOT = {
  name: 'Studio Console Photography',
  logo: 'studio_logo_dark.png',
  address: '12 Khader Nawaz Khan Rd, Nungambakkam, Chennai, TN - 600034',
  gstin: '33AAAAA0000A1Z5',
  bankDetails: {
    bankName: 'HDFC Bank Ltd',
    accountName: 'Studio Console Photography',
    accountNumber: '50200012345678',
    ifsc: 'HDFC0001234',
    branch: 'Nungambakkam, Chennai',
    upiId: 'studioconsole@hdfcbank'
  }
};

// Initial Packages Repository
var INITIAL_PACKAGES = [
  {
    id: 'pkg-1',
    name: 'Royal Wedding Gold',
    eventType: 'Wedding & Reception',
    price: 296610.17, // Base rate (Total with 18% GST = ₹3,50,000)
    advancePercent: 50,
    active: true,
    inclusions: ['2 Lead Photographers (2 Days)', '4K Cinematic Teaser Video', '36-Spread Premium Flushmount Album', 'AI Selfie Photo Sharing'],
    addOns: [
      { name: 'Candid Drone Coverage', price: 25000 },
      { name: 'Parents Mini Album Copy', price: 15000 }
    ],
    taxPercent: 18
  },
  {
    id: 'pkg-2',
    name: 'Sangeet Luxury',
    eventType: 'Sangeet & Party',
    price: 186440.68, // Base rate (Total with 18% GST = ₹2,20,000)
    advancePercent: 40,
    active: true,
    inclusions: ['1 Lead Photographer + 1 Cinematographer', 'HD Event Highlights Video', '24-Spread Album'],
    addOns: [
      { name: 'Live LED Screen Display', price: 12000 }
    ],
    taxPercent: 18
  },
  {
    id: 'pkg-3',
    name: 'Pre-Wedding Special',
    eventType: 'Pre-Wedding Shoot',
    price: 152542.37, // Base rate (Total with 18% GST = ₹1,80,000)
    advancePercent: 30,
    active: true,
    inclusions: ['2 Outdoor Locations (Beach & Resort)', 'Instagram Reels Teaser (60s)', '20-Spread Photo Book'],
    addOns: [
      { name: 'Hair & Makeup Stylist', price: 10000 }
    ],
    taxPercent: 18
  },
  {
    id: 'pkg-4',
    name: 'Compact Event Package',
    eventType: 'Birthday / Small Event',
    price: 72033.90, // Base rate (Total with 18% GST = ₹85,000)
    advancePercent: 50,
    active: false, // HIDDEN PACKAGE - Must NOT appear on public booking page!
    inclusions: ['1 Photographer (4 Hours)', 'Digital Photo Gallery'],
    addOns: [],
    taxPercent: 18
  }
];

// Initial Bookings Repository
var INITIAL_BOOKINGS = [
  {
    id: 'bkg-1',
    client: { name: 'Aarav & Meera', phone: '+91 98765 43210', email: 'meera.s@gmail.com', address: '45 Anna Salai, Alwarpet, Chennai, TN - 600018', gstin: '33BBBBB1111B1Z2' },
    event: 'Royal Wedding & Reception',
    date: '14 Nov 2026',
    package: {
      name: 'Royal Wedding Gold',
      hsnSac: '998381',
      rate: 296610.17,
      qty: 1,
      addOns: [{ name: 'Candid Drone Coverage', hsnSac: '998381', qty: 1, rate: 25000 }]
    },
    payments: [
      { id: 'pay-1', date: '2026-08-10', method: 'UPI', reference: 'UPI/6289123891', amount: 250000 }
    ],
    invoiceId: null // READY TO INVOICE!
  },
  {
    id: 'bkg-2',
    client: { name: 'Rohan & Ananya', phone: '+91 98123 45678', email: 'rohan.a@gmail.com', address: '88 Boat Club Rd, R.A. Puram, Chennai, TN - 600028', gstin: '' },
    event: 'Sangeet & Reception',
    date: '02 Dec 2026',
    package: {
      name: 'Sangeet Luxury',
      hsnSac: '998381',
      rate: 186440.68,
      qty: 1,
      addOns: []
    },
    payments: [
      { id: 'pay-2', date: '2026-09-01', method: 'Bank Transfer', reference: 'HDFC/NEFT/88123', amount: 220000 }
    ],
    invoiceId: 'INV-2026-0001'
  },
  {
    id: 'bkg-3',
    client: { name: 'Vikram & Neha', phone: '+91 99400 11223', email: 'vikram.n@yahoo.com', address: '12 Beach Rd, ECR, Chennai, TN - 600115', gstin: '' },
    event: 'Pre-Wedding & Engagement',
    date: '08 Jan 2027',
    package: {
      name: 'Pre-Wedding Special',
      hsnSac: '998381',
      rate: 152542.37,
      qty: 1,
      addOns: []
    },
    payments: [
      { id: 'pay-3', date: '2026-07-15', method: 'UPI', reference: 'UPI/998127391', amount: 120000 }
    ],
    invoiceId: 'INV-2026-0002'
  },
  {
    id: 'bkg-4',
    client: { name: 'Rajesh & Sangeetha', phone: '+91 98840 55667', email: 'rajesh.patel@hotmail.com', address: '19 Poes Garden, Teynampet, Chennai, TN - 600086', gstin: '' },
    event: '25th Anniversary Gala',
    date: '10 Feb 2027',
    package: {
      name: 'Sangeet Luxury',
      hsnSac: '998381',
      rate: 93220.34,
      qty: 1,
      addOns: []
    },
    payments: [
      { id: 'pay-4', date: '2026-09-12', method: 'Cash', reference: 'CASH-REC-04', amount: 50000 }
    ],
    invoiceId: null // READY TO INVOICE!
  },
  {
    id: 'bkg-5',
    client: { name: 'Kapoor Family', phone: '+91 97890 12345', email: 'kapoor@gmail.com', address: '55 1st Main Rd, Anna Nagar, Chennai, TN - 600040', gstin: '' },
    event: 'Housewarming Ceremony',
    date: '18 Nov 2026',
    package: {
      name: 'Compact Event Package',
      hsnSac: '998381',
      rate: 50847.46,
      qty: 1,
      addOns: []
    },
    payments: [], // NO PAYMENT MADE YET -> NOT Ready to invoice!
    invoiceId: null
  }
];

// Global Data Store
var MOCK_DATA = {
  studio: STUDIO_SNAPSHOT,
  invoiceCounter: 4,
  creditNoteCounter: 1,
  packages: loadPackagesData(),
  bookings: loadBookingsData(),
  invoices: [
    {
      id: 'inv-1',
      invoiceNumber: 'INV-2026-0001',
      bookingId: 'bkg-2',
      issueDate: '2026-09-01',
      dueDate: '2026-09-15',
      status: 'Paid',
      notes: 'Thank you for your business! Full payment received.',
      terms: 'Payment is non-refundable once shoot commences.',
      clientSnapshot: { name: 'Rohan & Ananya', phone: '+91 98123 45678', email: 'rohan.a@gmail.com', address: '88 Boat Club Rd, R.A. Puram, Chennai, TN - 600028', gstin: '' },
      studioSnapshot: STUDIO_SNAPSHOT,
      lineItems: [
        { description: 'Sangeet Luxury Package - Photography & Videography', hsnSac: '998381', qty: 1, rate: 186440.68, amount: 186440.68 }
      ],
      tax: { type: 'CGST+SGST', rate: 18, taxableAmount: 186440.68, cgstAmount: 16779.66, sgstAmount: 16779.66, igstAmount: 0, totalTax: 33559.32 },
      totals: { subtotal: 186440.68, discount: 0, taxableAmount: 186440.68, tax: 33559.32, grandTotal: 220000, amountPaid: 220000, balanceDue: 0 },
      payments: [
        { id: 'pay-2', date: '2026-09-01', method: 'Bank Transfer', reference: 'HDFC/NEFT/88123', amount: 220000 }
      ]
    },
    {
      id: 'inv-2',
      invoiceNumber: 'INV-2026-0002',
      bookingId: 'bkg-3',
      issueDate: '2026-07-20',
      dueDate: '2026-08-05',
      status: 'Partially paid',
      notes: 'Advance received. Balance due before album printing.',
      terms: 'Balance due 15 days prior to event date.',
      clientSnapshot: { name: 'Vikram & Neha', phone: '+91 99400 11223', email: 'vikram.n@yahoo.com', address: '12 Beach Rd, ECR, Chennai, TN - 600115', gstin: '' },
      studioSnapshot: STUDIO_SNAPSHOT,
      lineItems: [
        { description: 'Pre-Wedding Special Package (2 Locations + Teaser)', hsnSac: '998381', qty: 1, rate: 152542.37, amount: 152542.37 }
      ],
      tax: { type: 'CGST+SGST', rate: 18, taxableAmount: 152542.37, cgstAmount: 13728.81, sgstAmount: 13728.81, igstAmount: 0, totalTax: 27457.63 },
      totals: { subtotal: 152542.37, discount: 0, taxableAmount: 152542.37, tax: 27457.63, grandTotal: 180000, amountPaid: 120000, balanceDue: 60000 },
      payments: [
        { id: 'pay-3', date: '2026-07-15', method: 'UPI', reference: 'UPI/998127391', amount: 120000 }
      ]
    },
    {
      id: 'inv-3',
      invoiceNumber: 'INV-2026-0003',
      bookingId: null,
      issueDate: '2026-08-10',
      dueDate: '2026-08-25',
      status: 'Overdue',
      notes: 'Payment reminder sent.',
      terms: 'Late payment attracts 1.5% interest per month.',
      clientSnapshot: { name: 'Kavya Sharma', phone: '+91 97654 32109', email: 'kavya.sharma@outlook.com', address: '78 Cathedral Rd, Gopalapuram, Chennai, TN - 600086', gstin: '' },
      studioSnapshot: STUDIO_SNAPSHOT,
      lineItems: [
        { description: '18th Birthday Gala Photo Package', hsnSac: '998381', qty: 1, rate: 72033.90, amount: 72033.90 }
      ],
      tax: { type: 'CGST+SGST', rate: 18, taxableAmount: 72033.90, cgstAmount: 6483.05, sgstAmount: 6483.05, igstAmount: 0, totalTax: 12966.10 },
      totals: { subtotal: 72033.90, discount: 0, taxableAmount: 72033.90, tax: 12966.10, grandTotal: 85000, amountPaid: 40000, balanceDue: 45000 },
      payments: [
        { id: 'pay-5', date: '2026-08-10', method: 'UPI', reference: 'UPI/10928301', amount: 40000 }
      ]
    }
  ],
  creditNotes: []
};

// Storage Loaders
function loadPackagesData() {
  var stored = localStorage.getItem('studio_packages');
  if (stored) {
    try { return JSON.parse(stored); } catch (e) {}
  }
  return INITIAL_PACKAGES;
}

function savePackagesData(pkgs) {
  MOCK_DATA.packages = pkgs;
  localStorage.setItem('studio_packages', JSON.stringify(pkgs));
}

function loadBookingsData() {
  var stored = localStorage.getItem('studio_bookings');
  if (stored) {
    try { return JSON.parse(stored); } catch (e) {}
  }
  return INITIAL_BOOKINGS;
}

function saveBookingsData(bkgs) {
  MOCK_DATA.bookings = bkgs;
  localStorage.setItem('studio_bookings', JSON.stringify(bkgs));
}

// ==========================================================================
// DATA HELPER FUNCTIONS (Exclusively consumed by UI)
// ==========================================================================

function numberToWordsINR(num) {
  num = Math.round(Number(num) || 0);
  if (num === 0) return 'Rupees Zero Only';

  var a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  function inWords(n) {
    if (n < 20) return a[n];
    var digit = n % 10;
    return b[Math.floor(n / 10)] + (digit ? '-' + a[digit] : '');
  }

  var words = '';
  var crore = Math.floor(num / 10000000);
  num %= 10000000;
  var lakh = Math.floor(num / 100000);
  num %= 100000;
  var thousand = Math.floor(num / 1000);
  num %= 1000;
  var hundred = Math.floor(num / 100);
  var remaining = num % 100;

  if (crore > 0) words += inWords(crore) + ' Crore ';
  if (lakh > 0) words += inWords(lakh) + ' Lakh ';
  if (thousand > 0) words += inWords(thousand) + ' Thousand ';
  if (hundred > 0) words += inWords(hundred) + ' Hundred ';
  if (remaining > 0) words += (words !== '' ? 'and ' : '') + inWords(remaining) + ' ';

  return 'Rupees ' + words.trim() + ' Only';
}

function formatINR(val) {
  var num = Math.round(Number(val) || 0);
  return '₹' + num.toLocaleString('en-IN');
}

/**
 * Get Packages (with optional onlyActive filter)
 */
function getPackages(onlyActive) {
  var pkgs = MOCK_DATA.packages.slice();
  if (onlyActive) {
    return pkgs.filter(function(p) { return p.active === true; });
  }
  return pkgs;
}

/**
 * Toggle Package Active / Hidden state
 */
function togglePackageActive(pkgId) {
  var pkgs = MOCK_DATA.packages.slice();
  var p = pkgs.find(function(x) { return x.id === pkgId; });
  if (p) {
    p.active = !p.active;
    savePackagesData(pkgs);
  }
  return pkgs;
}

/**
 * Create New Package
 */
function createPackage(pkgData) {
  var pkgs = MOCK_DATA.packages.slice();
  var newPkg = {
    id: 'pkg-' + Date.now(),
    name: pkgData.name || 'Custom Package',
    eventType: pkgData.eventType || 'General Photography',
    price: Number(pkgData.price) || 50000,
    advancePercent: Number(pkgData.advancePercent) || 40,
    active: true,
    inclusions: pkgData.inclusions || ['High-Res Digital Photos'],
    addOns: pkgData.addOns || [],
    taxPercent: Number(pkgData.taxPercent) || 18
  };
  pkgs.push(newPkg);
  savePackagesData(pkgs);
  return newPkg;
}

/**
 * Get Bookings
 */
function getBookings() {
  return MOCK_DATA.bookings.slice();
}

/**
 * Save new public booking + advance payment into localStorage
 */
function savePublicBooking(bookingData) {
  var bkgs = loadBookingsData();
  var newId = 'bkg-' + Date.now();
  
  var newBooking = {
    id: newId,
    client: bookingData.client,
    event: bookingData.event,
    date: bookingData.date,
    package: bookingData.package,
    payments: [
      {
        id: 'pay-' + Date.now(),
        date: new Date().toISOString().split('T')[0],
        method: bookingData.paymentMethod || 'UPI',
        reference: 'UPI/WEB-' + Math.floor(100000 + Math.random() * 900000),
        amount: bookingData.advanceAmount
      }
    ],
    invoiceId: null
  };

  bkgs.unshift(newBooking);
  saveBookingsData(bkgs);
  localStorage.setItem('new_booking_flag', 'true');
  return newBooking;
}

/**
 * Get Payments Master List
 */
function getPayments() {
  var list = [];
  MOCK_DATA.bookings.forEach(function(b) {
    if (b.payments) {
      b.payments.forEach(function(p) {
        list.push({
          id: p.id,
          date: p.date,
          clientName: b.client.name,
          event: b.event,
          method: p.method,
          reference: p.reference,
          amount: p.amount,
          invoiceNumber: b.invoiceId || 'Uninvoiced'
        });
      });
    }
  });
  return list;
}

function getInvoices(filters) {
  filters = filters || {};
  var list = MOCK_DATA.invoices.slice();

  if (filters.status && filters.status !== 'all') {
    list = list.filter(function(inv) {
      return inv.status.toLowerCase() === filters.status.toLowerCase();
    });
  }

  if (filters.search) {
    var q = filters.search.trim().toLowerCase();
    list = list.filter(function(inv) {
      return inv.invoiceNumber.toLowerCase().includes(q) ||
             (inv.clientSnapshot && inv.clientSnapshot.name.toLowerCase().includes(q));
    });
  }

  return list;
}

function getInvoice(idOrNum) {
  return MOCK_DATA.invoices.find(function(inv) {
    return inv.id === idOrNum || inv.invoiceNumber === idOrNum;
  }) || null;
}

function getReadyToInvoice() {
  return MOCK_DATA.bookings.filter(function(b) {
    var hasPackage = b.package && b.package.name;
    var hasPayment = b.payments && b.payments.length > 0;
    var notInvoiced = !b.invoiceId;
    return hasPackage && hasPayment && notInvoiced;
  });
}

function createInvoiceFromBooking(bookingId, options) {
  options = options || {};
  var booking = MOCK_DATA.bookings.find(function(b) { return b.id === bookingId; });
  if (!booking) throw new Error('Booking not found');

  if (!booking.package || !booking.payments || booking.payments.length === 0) {
    throw new Error('Booking must have a package and at least one payment before an invoice can be created.');
  }

  var nextNum = String(MOCK_DATA.invoiceCounter++).padStart(4, '0');
  var invNum = 'INV-2026-' + nextNum;

  var lineItems = [
    {
      description: booking.package.name + ' (' + booking.event + ')',
      hsnSac: booking.package.hsnSac || '998381',
      qty: booking.package.qty || 1,
      rate: booking.package.rate,
      amount: booking.package.rate
    }
  ];

  if (booking.package.addOns) {
    booking.package.addOns.forEach(function(add) {
      lineItems.push({
        description: add.name,
        hsnSac: add.hsnSac || '998381',
        qty: add.qty || 1,
        rate: add.rate || add.price || 0,
        amount: (add.rate || add.price || 0) * (add.qty || 1)
      });
    });
  }

  var subtotal = lineItems.reduce(function(acc, item) { return acc + item.amount; }, 0);
  var taxRate = 18;
  var totalTax = Math.round(subtotal * (taxRate / 100));
  var grandTotal = subtotal + totalTax;

  var payments = JSON.parse(JSON.stringify(booking.payments));
  var amountPaid = payments.reduce(function(acc, p) { return acc + p.amount; }, 0);
  var balanceDue = Math.max(0, grandTotal - amountPaid);

  var status = 'Issued';
  if (balanceDue === 0) {
    status = 'Paid';
  } else if (amountPaid > 0) {
    status = 'Partially paid';
  }

  var todayStr = new Date().toISOString().split('T')[0];
  var dueStr = options.dueDate || todayStr;

  var newInvoice = {
    id: 'inv-' + Date.now(),
    invoiceNumber: invNum,
    bookingId: booking.id,
    issueDate: todayStr,
    dueDate: dueStr,
    status: status,
    notes: options.notes || 'Thank you for choosing Studio Console!',
    terms: 'Payment due upon receipt or before final photo/album delivery.',
    clientSnapshot: JSON.parse(JSON.stringify(booking.client)),
    studioSnapshot: STUDIO_SNAPSHOT,
    lineItems: lineItems,
    tax: {
      type: 'CGST+SGST',
      rate: taxRate,
      taxableAmount: subtotal,
      cgstAmount: Math.round(totalTax / 2),
      sgstAmount: Math.round(totalTax / 2),
      igstAmount: 0,
      totalTax: totalTax
    },
    totals: {
      subtotal: subtotal,
      discount: 0,
      taxableAmount: subtotal,
      tax: totalTax,
      grandTotal: grandTotal,
      amountPaid: amountPaid,
      balanceDue: balanceDue
    },
    payments: payments
  };

  MOCK_DATA.invoices.unshift(newInvoice);
  booking.invoiceId = invNum;
  saveBookingsData(MOCK_DATA.bookings);

  return newInvoice;
}

function recordInvoicePayment(invoiceId, paymentData) {
  var inv = getInvoice(invoiceId);
  if (!inv) throw new Error('Invoice not found');
  if (inv.status === 'Cancelled') throw new Error('Cannot record payment on a cancelled invoice.');

  var payAmount = Number(paymentData.amount) || 0;
  if (payAmount <= 0) throw new Error('Payment amount must be greater than 0.');
  if (payAmount > inv.totals.balanceDue) throw new Error('Payment amount cannot exceed balance due.');

  var paymentObj = {
    id: 'pay-' + Date.now(),
    date: paymentData.date || new Date().toISOString().split('T')[0],
    method: paymentData.method || 'UPI',
    reference: paymentData.reference || ('REF-' + Date.now()),
    amount: payAmount
  };

  inv.payments.push(paymentObj);
  inv.totals.amountPaid += payAmount;
  inv.totals.balanceDue = Math.max(0, inv.totals.grandTotal - inv.totals.amountPaid);

  if (inv.totals.balanceDue === 0) {
    inv.status = 'Paid';
  } else {
    inv.status = 'Partially paid';
  }

  // Update booking payment record as well
  var booking = MOCK_DATA.bookings.find(function(b) { return b.id === inv.bookingId || b.invoiceId === inv.invoiceNumber; });
  if (booking) {
    booking.payments.push(paymentObj);
    saveBookingsData(MOCK_DATA.bookings);
  }

  return inv;
}

function issueCreditNote(invoiceId) {
  var inv = getInvoice(invoiceId);
  if (!inv) throw new Error('Invoice not found');

  var cnNum = 'CN-2026-' + String(MOCK_DATA.creditNoteCounter++).padStart(4, '0');
  inv.status = 'Cancelled';

  var creditNote = {
    id: 'cn-' + Date.now(),
    creditNoteNumber: cnNum,
    invoiceNumber: inv.invoiceNumber,
    issueDate: new Date().toISOString().split('T')[0],
    amount: inv.totals.grandTotal,
    clientSnapshot: inv.clientSnapshot,
    reason: 'Invoice cancelled / Credit note issued'
  };

  MOCK_DATA.creditNotes.push(creditNote);
  return creditNote;
}

/* ==========================================
   VIDEO ANIMATION DATA REPOSITORY & HELPERS
   ========================================== */

var INITIAL_VIDEO_PROJECTS = [
  {
    id: 'vid-1',
    title: 'Aarav & Meera Wedding Highlights',
    client: 'Aarav & Meera',
    eventId: 'bkg-1',
    type: 'Wedding highlight reel',
    templateId: 'tmpl-1',
    templateName: 'Royal Heritage Wedding',
    duration: '60s',
    aspectRatio: '16:9',
    mood: 'Romantic',
    status: 'Ready', // Draft, Queued, Rendering, Ready, Approved, Delivered, Failed
    lastUpdated: '2 hours ago',
    gradientBg: 'linear-gradient(135deg, #1C1917 0%, #78350F 50%, #B45309 100%)',
    versions: [
      { version: 'V2', date: '2026-10-02', status: 'Ready', notes: 'Added beat sync and color grading' },
      { version: 'V1', date: '2026-09-30', status: 'Revising', notes: 'Initial AI draft' }
    ],
    comments: [
      { author: 'Meera (Client)', time: '1 hour ago', text: 'Love the entrance transition! Can we lengthen the varmala shot by 2s?' },
      { author: 'Sana (Studio)', time: '45 mins ago', text: 'Sure Meera! Updating in V2.' }
    ],
    storyboard: [
      { id: 1, thumbnail: 'linear-gradient(45deg, #FF9A9E, #FECFEF)', duration: 5, transition: 'Crossfade', caption: 'Grand Entrance' },
      { id: 2, thumbnail: 'linear-gradient(45deg, #A1C4FD, #C2E9FB)', duration: 8, transition: 'Light Leak', caption: 'Varmala Ceremony' },
      { id: 3, thumbnail: 'linear-gradient(45deg, #FFECD2, #FCB69F)', duration: 7, transition: 'Wipe', caption: 'Pheras & Blessings' },
      { id: 4, thumbnail: 'linear-gradient(45deg, #D4FC79, #96E6A1)', duration: 10, transition: 'Zoom Blur', caption: 'Reception Sunset' }
    ]
  },
  {
    id: 'vid-2',
    title: 'Rohan & Ananya Sangeet Teaser',
    client: 'Rohan & Ananya',
    eventId: 'bkg-2',
    type: 'Cinematic teaser',
    templateId: 'tmpl-2',
    templateName: 'Sangeet Beats Reel',
    duration: '30s',
    aspectRatio: '9:16',
    mood: 'Energetic',
    status: 'Delivered',
    lastUpdated: '1 day ago',
    gradientBg: 'linear-gradient(135deg, #311B92 0%, #6A1B9A 50%, #AD1457 100%)',
    versions: [
      { version: 'V1', date: '2026-09-28', status: 'Delivered', notes: 'Final delivery approved by client' }
    ],
    comments: [],
    storyboard: []
  },
  {
    id: 'vid-3',
    title: 'Vikram & Neha Pre-Wedding Reel',
    client: 'Vikram & Neha',
    eventId: 'bkg-3',
    type: 'Social reel / short',
    templateId: 'tmpl-3',
    templateName: 'Minimalist Sunset',
    duration: '15s',
    aspectRatio: '9:16',
    mood: 'Elegant',
    status: 'Rendering',
    lastUpdated: '10 mins ago',
    gradientBg: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #3B82F6 100%)',
    versions: [],
    comments: [],
    storyboard: []
  },
  {
    id: 'vid-4',
    title: 'Kavya Baby Shower Memories',
    client: 'Kavya & Rahul',
    eventId: 'bkg-custom',
    type: 'Photo slideshow',
    templateId: 'tmpl-4',
    templateName: 'Classic Album Flipbook',
    duration: '2 min',
    aspectRatio: '16:9',
    mood: 'Traditional',
    status: 'Draft',
    lastUpdated: '3 hours ago',
    gradientBg: 'linear-gradient(135deg, #064E3B 0%, #047857 50%, #10B981 100%)',
    versions: [],
    comments: [],
    storyboard: []
  }
];

var INITIAL_TEMPLATES = [
  {
    id: 'tmpl-1',
    name: 'Royal Heritage Wedding',
    category: 'Wedding',
    bestFor: 'Grand Indian Weddings & Receptions',
    aspectRatios: ['16:9', '9:16'],
    durationRange: '30s - 3 min',
    mood: 'Traditional',
    gradient: 'linear-gradient(135deg, #4A154B 0%, #570680 50%, #D97706 100%)',
    description: 'Gold filigree transitions with slow-motion cinematic color grading.'
  },
  {
    id: 'tmpl-2',
    name: 'Sangeet Beats Reel',
    category: 'Teaser & Reels',
    bestFor: 'Dance Performances & Night Events',
    aspectRatios: ['9:16', '1:1'],
    durationRange: '15s - 60s',
    mood: 'Energetic',
    gradient: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)',
    description: 'Fast cuts, beat-synced light leaks, and vibrant color pops.'
  },
  {
    id: 'tmpl-3',
    name: 'Minimalist Sunset',
    category: 'Pre-Wedding',
    bestFor: 'Outdoor Beach & Sunset Couples',
    aspectRatios: ['16:9', '9:16', '1:1'],
    durationRange: '15s - 60s',
    mood: 'Romantic',
    gradient: 'linear-gradient(135deg, #F97316 0%, #E11D48 50%, #4F46E5 100%)',
    description: 'Soft crossfades, subtle grain, and typography overlays.'
  },
  {
    id: 'tmpl-4',
    name: 'Classic Album Flipbook',
    category: 'Slideshow',
    bestFor: 'Anniversaries, Baby Showers & Albums',
    aspectRatios: ['16:9'],
    durationRange: '60s - 5 min',
    mood: 'Elegant',
    gradient: 'linear-gradient(135deg, #1E293B 0%, #475569 50%, #94A3B8 100%)',
    description: 'Photorealistic 3D page turn effect with acoustic background score.'
  }
];

var INITIAL_RENDER_QUEUE = [
  {
    id: 'job-1',
    projectId: 'vid-3',
    projectTitle: 'Vikram & Neha Pre-Wedding Reel',
    type: 'Social reel / short',
    resolution: '1080p',
    progress: 65,
    status: 'Rendering', // Queued, Rendering, Ready, Failed
    started: '5 mins ago',
    eta: '2 mins left'
  },
  {
    id: 'job-2',
    projectId: 'vid-4',
    projectTitle: 'Kavya Baby Shower Memories',
    type: 'Photo slideshow',
    resolution: '4K',
    progress: 0,
    status: 'Queued',
    started: 'Just now',
    eta: '6 mins left'
  }
];

function loadVideoProjectsData() {
  var stored = localStorage.getItem('studio_video_projects');
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  localStorage.setItem('studio_video_projects', JSON.stringify(INITIAL_VIDEO_PROJECTS));
  return INITIAL_VIDEO_PROJECTS;
}

function saveVideoProjectsData(data) {
  localStorage.setItem('studio_video_projects', JSON.stringify(data));
}

function loadRenderQueueData() {
  var stored = localStorage.getItem('studio_render_queue');
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  localStorage.setItem('studio_render_queue', JSON.stringify(INITIAL_RENDER_QUEUE));
  return INITIAL_RENDER_QUEUE;
}

function saveRenderQueueData(data) {
  localStorage.setItem('studio_render_queue', JSON.stringify(data));
}

function getVideoProjects() {
  return loadVideoProjectsData();
}

function getVideoProject(id) {
  var projects = loadVideoProjectsData();
  return projects.find(function(p) { return p.id === id; }) || null;
}

function createVideoProject(projectData) {
  var projects = loadVideoProjectsData();
  var newProj = {
    id: 'vid-' + Date.now(),
    title: projectData.title || 'Untitled Video Project',
    client: projectData.client || 'Client',
    eventId: projectData.eventId || 'bkg-1',
    type: projectData.type || 'Wedding highlight reel',
    templateId: projectData.templateId || 'tmpl-1',
    templateName: projectData.templateName || 'Royal Heritage Wedding',
    duration: projectData.duration || '60s',
    aspectRatio: projectData.aspectRatio || '16:9',
    mood: projectData.mood || 'Romantic',
    status: projectData.status || 'Draft',
    lastUpdated: 'Just now',
    gradientBg: projectData.gradientBg || 'linear-gradient(135deg, #1C1917 0%, #78350F 50%, #B45309 100%)',
    versions: projectData.versions || [{ version: 'V1', date: new Date().toISOString().split('T')[0], status: projectData.status || 'Draft', notes: 'Initial AI draft' }],
    comments: projectData.comments || [],
    storyboard: projectData.storyboard || []
  };

  projects.unshift(newProj);
  saveVideoProjectsData(projects);
  return newProj;
}

function updateVideoProject(id, updateData) {
  var projects = loadVideoProjectsData();
  var idx = projects.findIndex(function(p) { return p.id === id; });
  if (idx !== -1) {
    Object.assign(projects[idx], updateData);
    projects[idx].lastUpdated = 'Just now';
    saveVideoProjectsData(projects);
    return projects[idx];
  }
  return null;
}

function getTemplates() {
  return INITIAL_TEMPLATES;
}

function getRenderQueue() {
  return loadRenderQueueData();
}

function saveRenderQueue(queue) {
  saveRenderQueueData(queue);
}

// Export functions to window
window.numberToWordsINR = numberToWordsINR;
window.formatINR = formatINR;
window.getPackages = getPackages;
window.togglePackageActive = togglePackageActive;
window.createPackage = createPackage;
window.getBookings = getBookings;
window.savePublicBooking = savePublicBooking;
window.getPayments = getPayments;
window.getInvoices = getInvoices;
window.getInvoice = getInvoice;
window.getReadyToInvoice = getReadyToInvoice;
window.createInvoiceFromBooking = createInvoiceFromBooking;
window.recordInvoicePayment = recordInvoicePayment;
window.issueCreditNote = issueCreditNote;

// Export Video Animation helpers
window.getVideoProjects = getVideoProjects;
window.getVideoProject = getVideoProject;
window.createVideoProject = createVideoProject;
window.updateVideoProject = updateVideoProject;
window.getTemplates = getTemplates;
window.getRenderQueue = getRenderQueue;
window.saveRenderQueue = saveRenderQueue;

