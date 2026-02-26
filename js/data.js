// ==================== TABLEFINDER PRO - SHARED DATA LAYER ====================
// This module is shared between the customer app and admin panel.
// State is synced via localStorage + BroadcastChannel for real-time updates.

const TF = window.TF || {};

// ---- BroadcastChannel for cross-tab sync ----
TF.channel = new BroadcastChannel('tablefinder-sync');

// ---- Default venue data ----
TF.DEFAULT_VENUES = [
    {
        id: 1,
        name: "Cafe Mocha",
        type: "cafe",
        address: "123 Main St, Downtown",
        lat: 40.7580, lon: -73.9855,
        phone: "(555) 123-4567",
        rating: 4.5, reviewCount: 234,
        priceRange: "$$",
        cuisine: "Cafe & Coffee",
        openHours: "7:00 AM - 10:00 PM",
        avgWaitTime: 15,
        acceptsReservations: true,
        hasWifi: true, hasParking: false,
        wheelchairAccessible: true, outdoorSeating: true,
        subscriptionTier: 'pro',
        features: ['WiFi', 'Outdoor Seating', 'Wheelchair Accessible'],
        tables: [
            { id: 1, status: 'occupied', location: 'indoor', smoking: false, seats: 2, serverName: 'Emma', hasWindow: true, x: -3, z: -3 },
            { id: 2, status: 'empty', location: 'indoor', smoking: false, seats: 2, serverName: 'Emma', hasWindow: false, x: -3, z: 0 },
            { id: 3, status: 'occupied', location: 'indoor', smoking: false, seats: 4, serverName: 'James', hasWindow: true, x: -3, z: 3 },
            { id: 4, status: 'empty', location: 'indoor', smoking: false, seats: 2, serverName: 'Emma', hasWindow: false, x: 0, z: -3 },
            { id: 5, status: 'occupied', location: 'indoor', smoking: false, seats: 4, serverName: 'James', hasWindow: false, x: 0, z: 0 },
            { id: 6, status: 'empty', location: 'indoor', smoking: false, seats: 2, serverName: 'Sarah', hasWindow: false, x: 0, z: 3 },
            { id: 7, status: 'occupied', location: 'outdoor', smoking: true, seats: 4, serverName: 'Mike', hasWindow: false, x: 3, z: -3 },
            { id: 8, status: 'empty', location: 'outdoor', smoking: true, seats: 2, serverName: 'Mike', hasWindow: false, x: 3, z: 0 },
            { id: 9, status: 'occupied', location: 'outdoor', smoking: true, seats: 4, serverName: 'Mike', hasWindow: false, x: 3, z: 3 },
            { id: 10, status: 'occupied', location: 'indoor', smoking: false, seats: 6, serverName: 'Sarah', hasWindow: true, x: -5, z: -3 },
            { id: 11, status: 'empty', location: 'indoor', smoking: false, seats: 6, serverName: 'Sarah', hasWindow: false, x: -5, z: 3 },
            { id: 12, status: 'occupied', location: 'outdoor', smoking: true, seats: 2, serverName: 'Mike', hasWindow: false, x: 5, z: 0 }
        ]
    },
    {
        id: 2,
        name: "The Italian Kitchen",
        type: "restaurant",
        address: "456 Oak Avenue, Midtown",
        lat: 40.7614, lon: -73.9776,
        phone: "(555) 234-5678",
        rating: 4.7, reviewCount: 456,
        priceRange: "$$$",
        cuisine: "Italian",
        openHours: "11:00 AM - 11:00 PM",
        avgWaitTime: 25,
        acceptsReservations: true,
        hasWifi: true, hasParking: true,
        wheelchairAccessible: true, outdoorSeating: true,
        subscriptionTier: 'enterprise',
        features: ['WiFi', 'Parking', 'Outdoor Seating', 'Wheelchair Accessible', 'Private Dining'],
        tables: [
            { id: 1, status: 'occupied', location: 'indoor', smoking: false, seats: 2, serverName: 'Antonio', hasWindow: true, x: -4, z: -4 },
            { id: 2, status: 'empty', location: 'indoor', smoking: false, seats: 4, serverName: 'Antonio', hasWindow: false, x: -4, z: -1 },
            { id: 3, status: 'occupied', location: 'indoor', smoking: false, seats: 2, serverName: 'Maria', hasWindow: true, x: -4, z: 2 },
            { id: 4, status: 'occupied', location: 'indoor', smoking: false, seats: 4, serverName: 'Antonio', hasWindow: false, x: -1, z: -4 },
            { id: 5, status: 'occupied', location: 'indoor', smoking: false, seats: 6, serverName: 'Giuseppe', hasWindow: false, x: -1, z: -1 },
            { id: 6, status: 'empty', location: 'indoor', smoking: false, seats: 4, serverName: 'Maria', hasWindow: false, x: -1, z: 2 },
            { id: 7, status: 'occupied', location: 'indoor', smoking: false, seats: 2, serverName: 'Maria', hasWindow: true, x: 2, z: -4 },
            { id: 8, status: 'occupied', location: 'indoor', smoking: false, seats: 4, serverName: 'Giuseppe', hasWindow: false, x: 2, z: -1 },
            { id: 9, status: 'empty', location: 'indoor', smoking: false, seats: 2, serverName: 'Maria', hasWindow: false, x: 2, z: 2 },
            { id: 10, status: 'occupied', location: 'outdoor', smoking: true, seats: 4, serverName: 'Luca', hasWindow: false, x: 4, z: -3 },
            { id: 11, status: 'occupied', location: 'outdoor', smoking: true, seats: 4, serverName: 'Luca', hasWindow: false, x: 4, z: 0 },
            { id: 12, status: 'empty', location: 'outdoor', smoking: true, seats: 2, serverName: 'Luca', hasWindow: false, x: 4, z: 3 },
            { id: 13, status: 'occupied', location: 'indoor', smoking: false, seats: 8, serverName: 'Giuseppe', hasWindow: false, x: -6, z: 0 },
            { id: 14, status: 'occupied', location: 'outdoor', smoking: true, seats: 6, serverName: 'Luca', hasWindow: false, x: 6, z: -5 },
            { id: 15, status: 'empty', location: 'outdoor', smoking: true, seats: 4, serverName: 'Luca', hasWindow: false, x: 6, z: 5 }
        ]
    },
    {
        id: 3,
        name: "Sunrise Bistro",
        type: "cafe",
        address: "789 Park Lane, Uptown",
        lat: 40.7689, lon: -73.9819,
        phone: "(555) 345-6789",
        rating: 4.3, reviewCount: 189,
        priceRange: "$$",
        cuisine: "Breakfast & Brunch",
        openHours: "6:00 AM - 6:00 PM",
        avgWaitTime: 10,
        acceptsReservations: false,
        hasWifi: true, hasParking: false,
        wheelchairAccessible: true, outdoorSeating: true,
        subscriptionTier: 'basic',
        features: ['WiFi', 'Outdoor Seating', 'Wheelchair Accessible'],
        tables: [
            { id: 1, status: 'empty', location: 'indoor', smoking: false, seats: 2, serverName: 'Rachel', hasWindow: true, x: -3, z: -2 },
            { id: 2, status: 'occupied', location: 'indoor', smoking: false, seats: 4, serverName: 'Rachel', hasWindow: true, x: -3, z: 2 },
            { id: 3, status: 'empty', location: 'indoor', smoking: false, seats: 2, serverName: 'Tom', hasWindow: false, x: 0, z: -2 },
            { id: 4, status: 'empty', location: 'indoor', smoking: false, seats: 2, serverName: 'Tom', hasWindow: false, x: 0, z: 2 },
            { id: 5, status: 'empty', location: 'outdoor', smoking: true, seats: 4, serverName: 'Lisa', hasWindow: false, x: 3, z: -2 },
            { id: 6, status: 'occupied', location: 'outdoor', smoking: true, seats: 4, serverName: 'Lisa', hasWindow: false, x: 3, z: 2 },
            { id: 7, status: 'empty', location: 'indoor', smoking: false, seats: 6, serverName: 'Rachel', hasWindow: false, x: -5, z: 0 },
            { id: 8, status: 'empty', location: 'outdoor', smoking: true, seats: 2, serverName: 'Lisa', hasWindow: false, x: 5, z: 0 },
            { id: 9, status: 'empty', location: 'indoor', smoking: false, seats: 4, serverName: 'Tom', hasWindow: false, x: 0, z: -4 },
            { id: 10, status: 'occupied', location: 'outdoor', smoking: true, seats: 4, serverName: 'Lisa', hasWindow: false, x: 0, z: 4 }
        ]
    }
];

// ---- State Management ----
TF.STORAGE_KEY = 'tablefinder_venues';

TF.loadVenues = function () {
    try {
        const stored = localStorage.getItem(TF.STORAGE_KEY);
        if (stored) return JSON.parse(stored);
    } catch (e) { /* fall through */ }
    return JSON.parse(JSON.stringify(TF.DEFAULT_VENUES));
};

TF.saveVenues = function (venues) {
    localStorage.setItem(TF.STORAGE_KEY, JSON.stringify(venues));
    TF.channel.postMessage({ type: 'venues-updated', venues });
};

TF.resetVenues = function () {
    const defaults = JSON.parse(JSON.stringify(TF.DEFAULT_VENUES));
    TF.saveVenues(defaults);
    return defaults;
};

TF.TABLE_STATUSES = ['empty', 'occupied', 'reserved'];

TF.toggleTable = function (venueId, tableId) {
    const venues = TF.loadVenues();
    const venue = venues.find(v => v.id === venueId);
    if (!venue) return venues;
    const table = venue.tables.find(t => t.id === tableId);
    if (!table) return venues;
    const idx = TF.TABLE_STATUSES.indexOf(table.status);
    table.status = TF.TABLE_STATUSES[(idx + 1) % TF.TABLE_STATUSES.length];
    TF.saveVenues(venues);
    return venues;
};

TF.setAllTables = function (venueId, status) {
    const venues = TF.loadVenues();
    const venue = venues.find(v => v.id === venueId);
    if (!venue) return venues;
    venue.tables.forEach(t => t.status = status);
    TF.saveVenues(venues);
    return venues;
};

TF.setTableNote = function (venueId, tableId, note) {
    const venues = TF.loadVenues();
    const venue = venues.find(v => v.id === venueId);
    if (!venue) return venues;
    const table = venue.tables.find(t => t.id === tableId);
    if (!table) return venues;
    table.notes = note;
    TF.saveVenues(venues);
    return venues;
};

// ---- Utilities ----
TF.getStats = function (venue) {
    const total = venue.tables.length;
    const occupied = venue.tables.filter(t => t.status === 'occupied').length;
    const reserved = venue.tables.filter(t => t.status === 'reserved').length;
    const empty = total - occupied - reserved;
    const rate = Math.round(((occupied + reserved) / total) * 100);
    return { total, occupied, reserved, empty, rate };
};

TF.calculateDistance = function (lat1, lon1, lat2, lon2) {
    const R = 3959;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;
    return (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(1);
};

window.TF = TF;
