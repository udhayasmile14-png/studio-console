# Studio Console - Backend REST API Specification

This document details the API contract for integrating the Studio Console frontend with a real backend service (Node.js, Python FastAPI, Go, etc.).

## 1. Authentication & Session Management

### `POST /api/v1/auth/login`
Authenticates a user and returns a session bearer token.

**Request Body:**
```json
{
  "username": "admin",
  "password": "password123",
  "keep": true
}
```

**Response (200 OK):**
```json
{
  "ok": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresAt": 1790800000000,
  "user": {
    "id": "u1",
    "username": "admin",
    "name": "Sana",
    "role": "Owner"
  }
}
```

---

## 2. Dashboard Endpoints

### `GET /api/v1/dashboard/stats`
Returns top-level metric counters.

**Headers:**
`Authorization: Bearer <token>`

**Response (200 OK):**
```json
{
  "stats": [
    { "label": "Total Revenue", "value": "₹8,45,000", "trend": "+14.2%", "positive": true, "icon": "ti-currency-rupee" },
    { "label": "Active Albums", "value": "14 Spreads", "trend": "+3 this week", "positive": true, "icon": "ti-photo-album" }
  ]
}
```

---

## 3. Album Management

### `GET /api/v1/albums`
Retrieves album layout spreads.

### `POST /api/v1/albums`
Initializes a new album layout.
