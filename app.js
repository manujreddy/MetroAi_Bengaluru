let STATIONS = [
  {
    id: "BL-HEB",
    name: "Hebbal",
    lines: ["Blue"],
    lat: 13.0358,
    lon: 77.597,
  },
  {
    id: "BL-NAG",
    name: "Nagawara",
    lines: ["Blue", "Pink"],
    lat: 13.047,
    lon: 77.624,
  },
  {
    id: "BL-JKC",
    name: "Jakkur Cross",
    lines: ["Blue"],
    lat: 13.07038,
    lon: 77.59347,
  },
  {
    id: "BL-BGC",
    name: "Bagalur Cross",
    lines: ["Blue"],
    lat: 13.12061,
    lon: 77.61056,
  },
  {
    id: "BL-KIA",
    name: "KIAL Terminals",
    lines: ["Blue"],
    lat: 13.19809,
    lon: 77.71245,
  },
  {
    id: "BL-KRP",
    name: "KR Puram",
    lines: ["Blue"],
    lat: 13.0002,
    lon: 77.6947,
  },
  {
    id: "BL-MDV",
    name: "Mahadevapura",
    lines: ["Blue"],
    lat: 12.991,
    lon: 77.697,
  },
  {
    id: "BL-IND",
    name: "Indiranagar",
    lines: ["Blue"],
    lat: 12.9784,
    lon: 77.6408,
  },
  {
    id: "BL-MGR",
    name: "MG Road",
    lines: ["Blue"],
    lat: 12.9756,
    lon: 77.6068,
  },
  {
    id: "BL-HAL",
    name: "HAL Junction",
    lines: ["Blue"],
    lat: 12.9619,
    lon: 77.6521,
  },
  {
    id: "BL-BEL",
    name: "Bellandur",
    lines: ["Blue"],
    lat: 12.9304,
    lon: 77.674,
  },
  {
    id: "BL-ORR",
    name: "ORR Junction",
    lines: ["Blue"],
    lat: 12.919,
    lon: 77.687,
  },
  {
    id: "BL-SLK",
    name: "Silk Board",
    lines: ["Blue"],
    lat: 12.917,
    lon: 77.623,
  },
  {
    id: "BL-ELC",
    name: "Electronic City",
    lines: ["Blue"],
    lat: 12.844,
    lon: 77.666,
  },
  {
    id: "CENTRAL",
    name: "KSR Central Hub",
    lines: ["Blue", "Pink"],
    lat: 12.9768,
    lon: 77.5713,
  },
  {
    id: "PK-YES",
    name: "Yeshwanthpur",
    lines: ["Pink"],
    lat: 13.0289,
    lon: 77.5549,
  },
  {
    id: "PK-MAL",
    name: "Malleshwaram",
    lines: ["Pink"],
    lat: 13.0067,
    lon: 77.569,
  },
  {
    id: "PK-SES",
    name: "Seshadripuram",
    lines: ["Pink"],
    lat: 12.989,
    lon: 77.573,
  },
  {
    id: "PK-VIJ",
    name: "Vijayanagar",
    lines: ["Pink"],
    lat: 12.97,
    lon: 77.533,
  },
  {
    id: "PK-SHJ",
    name: "Shivajinagar",
    lines: ["Pink"],
    lat: 12.9866,
    lon: 77.6039,
  },
  {
    id: "PK-ULS",
    name: "Ulsoor",
    lines: ["Pink"],
    lat: 12.9786,
    lon: 77.64,
  },
  {
    id: "PK-DOM",
    name: "Domlur",
    lines: ["Pink"],
    lat: 12.955,
    lon: 77.64,
  },
  {
    id: "PK-KOR",
    name: "Koramangala",
    lines: ["Pink"],
    lat: 12.9352,
    lon: 77.6245,
  },
  {
    id: "PK-JPN",
    name: "JP Nagar 4th Phase",
    lines: ["Pink"],
    lat: 12.9077,
    lon: 77.5856,
  },
  {
    id: "PK-JAY",
    name: "Jayanagar",
    lines: ["Pink"],
    lat: 12.925,
    lon: 77.5938,
  },
  {
    id: "PK-BAN",
    name: "Banashankari",
    lines: ["Pink"],
    lat: 12.9255,
    lon: 77.5468,
  },
  {
    id: "PK-KAN",
    name: "Kanakapura Road",
    lines: ["Pink"],
    lat: 12.8957,
    lon: 77.546,
  },
];

const LINE_STATIONS = {
  Purple: [
    "Whitefield (Kadugodi)",
    "Hopefarm Channasandra",
    "Kadugodi Tree Park",
    "Pattandur Agrahara",
    "Sri Sathya Sai Hospital",
    "Nallurhalli",
    "Kundalahalli",
    "Seetharampalya",
    "Hoodi",
    "Garudacharpalya",
    "Singayyanapalya",
    "Krishnarajapura",
    "Benniganahalli (Tin Factory)",
    "Baiyappanahalli",
    "Swami Vivekananda Road",
    "Indiranagar",
    "Halasuru",
    "Trinity",
    "Mahatma Gandhi Road",
    "Cubbon Park",
    "Dr. B. R. Ambedkar Station, Vidhana Soudha",
    "Sir M. Visveshwaraya Station, Central College",
    "Nadaprabhu Kempegowda Station (Majestic)",
    "Krantivira Sangolli Rayanna Railway Station",
    "Magadi Road",
    "Hosahalli",
    "Vijayanagar",
    "Attiguppe",
    "Deepanjali Nagar",
    "Mysuru Road",
    "Pantharapalya - Nayandahalli",
    "Rajarajeshwari Nagar",
    "Jnanabharathi",
    "Pattanagere",
    "Kengeri Bus Terminal",
    "Kengeri",
    "Challaghatta",
  ],
  Green: [
    "Nadaprabhu Kempegowda Station (Majestic)",
    "Madavara (BIEC)",
    "Chikkabidarakallu",
    "Manjunatha Nagara",
    "Nagasandra",
    "Dasarahalli",
    "Jalahalli",
    "Peenya Industry",
    "Peenya",
    "Goraguntepalya",
    "Yeshwanthpur",
    "Sandal Soap Factory",
    "Mahalakshmi",
    "Rajajinagar",
    "Kuvempu Road",
    "Srirampura",
    "Sampige Road",
    "Chickpete",
    "Krishna Rajendra Market",
    "National College",
    "Lalbagh Botanical Garden",
    "South End Circle",
    "Jayanagara",
    "Rashtreeya Vidyalaya Road",
    "Banashankari",
    "Jaya Prakash Nagara",
    "Yelachenahalli",
    "Konanakunte Cross",
    "Doddakallasandra",
    "Vajarahalli",
    "Thalaghattapura",
    "Silk Institute",
  ],
  Yellow: [
    "Rashtreeya Vidyalaya Road",
    "Ragigudda",
    "Jayadeva Hospital",
    "BTM Layout",
    "Central Silk Board",
    "Bommanahalli",
    "Hongasandra",
    "Kudlu Gate",
    "Singasandra",
    "Hosa Road",
    "Beratena Agrahara",
    "Electronic City",
    "Infosys Foundation Konappana Agrahara",
    "Huskur Road",
    "Biocon Hebbagodi",
    "Delta Electronics Bommasandra",
  ],
  Blue: [
    "Central Silk Board",
    "HSR Layout",
    "Agara",
    "Ibbaluru",
    "Prestige Bellandur",
    "Embassy TechVillage Kadubeesanahalli",
    "Kodibeesanahalli",
    "Marathahalli",
    "ISRO",
    "Doddanekundi",
    "Bagmane Developers - DRDO Sports Complex",
    "Sarasvathi Nagara",
    "Krishnarajapura",
    "Kasturi Nagar",
    "Horamavu",
    "HRBR Layout",
    "Kalyan Nagar",
    "HBR Layout",
    "Nagawara",
    "Veerannapalya",
    "Kempapura",
    "Hebbala",
    "Kodigehalli",
    "Jakkur Cross",
    "Yelahanka",
    "Bagalur Cross",
    "Chikkajala",
    "Doddajala",
    "Airport City",
    "KIAL Terminals",
  ],
  Pink: [
    "Kalena Agrahara",
    "Hulimavu",
    "IIMB",
    "JP Nagar 4th Phase",
    "Jayadeva Hospital",
    "Swagath Road",
    "Dairy Circle",
    "Langford Town",
    "Mahatma Gandhi Road",
    "Shivajinagar",
    "Cantonment",
    "Pottery Town",
    "Tannery Road",
    "Venkateshpura",
    "Kadugondanahalli",
    "Nagawara",
  ],
};

const STATION_NAME_ALIASES = {
  "mg road": "mahatma gandhi road",
  "ulsoor": "halasuru",
  "ksr central hub": "nadaprabhu kempegowda station majestic",
  "kr puram": "krishnarajapura",
  "hebbal": "hebbala",
  "silk board": "central silk board",
  "jayanagar": "jayanagara",
  "kempegowda international airport": "kial terminals",
  "kempegowda airport": "kial terminals",
  "kia terminal": "kial terminals",
  "kia terminals": "kial terminals",
};

const normalizeStationName = (name) => {
  const lowered = name.toLowerCase().trim();
  const aliased = STATION_NAME_ALIASES[lowered] || lowered;
  return aliased.replace(/[^a-z0-9]/g, "");
};

const NORMALIZED_LINE_STATIONS = Object.fromEntries(
  Object.entries(LINE_STATIONS).map(([line, stations]) => [
    line,
    stations.map((name) => normalizeStationName(name)),
  ])
);

const findCanonicalStationName = (name) => {
  const normalized = normalizeStationName(name);
  for (const stations of Object.values(LINE_STATIONS)) {
    const match = stations.find(
      (stationName) => normalizeStationName(stationName) === normalized
    );
    if (match) return match;
  }
  return name;
};

const inferStationLines = (name, fallbackLines = []) => {
  const normalized = normalizeStationName(name);
  const lines = Object.entries(NORMALIZED_LINE_STATIONS)
    .filter(([, stations]) => stations.includes(normalized))
    .map(([line]) => line);
  return lines.length ? lines : fallbackLines;
};

const applyStationCorrections = () => {
  STATIONS = STATIONS.map((station) => {
    const canonicalName = findCanonicalStationName(station.name);
    const inferredLines = inferStationLines(canonicalName, []);
    return {
      ...station,
      name: canonicalName,
      lines: inferredLines,
    };
  }).filter((station) => station.lines.length > 0);
};

applyStationCorrections();

const LINE_META = {
  Blue: { color: "#0ea5e9" },
  Pink: { color: "#f97316" },
  Purple: { color: "#7c3aed" },
  Green: { color: "#16a34a" },
  Yellow: { color: "#facc15" },
};

const getInterchangeStations = () => {
  const map = new Map();
  Object.entries(LINE_STATIONS).forEach(([line, stations]) => {
    stations.forEach((station) => {
      const key = normalizeStationName(station);
      const existing = map.get(key) || { name: station, lines: new Set() };
      existing.lines.add(line);
      existing.name = existing.name || station;
      map.set(key, existing);
    });
  });
  return Array.from(map.values())
    .filter((entry) => entry.lines.size > 1)
    .map((entry) => ({
      name: entry.name,
      lines: Array.from(entry.lines),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

const INTERCHANGE_STATIONS = getInterchangeStations();

const BMTC_ROUTES = [
  {
    stationId: "BL-IND",
    route: "201G",
    frequency: "10-15 min",
    areas: ["Indiranagar", "Domlur", "HAL"],
  },
  {
    stationId: "BL-KRP",
    route: "500K",
    frequency: "12-18 min",
    areas: ["KR Puram TTMC", "Kengeri"],
  },
  {
    stationId: "BL-SLK",
    route: "356",
    frequency: "10-14 min",
    areas: ["Silk Board", "Madiwala", "Chandapura"],
  },
  {
    stationId: "BL-HEB",
    route: "290E",
    frequency: "12-18 min",
    areas: ["Hebbal", "RT Nagar"],
  },
  {
    stationId: "PK-KOR",
    route: "356",
    frequency: "12-16 min",
    areas: ["Koramangala", "Madiwala", "Silk Board"],
  },
  {
    stationId: "PK-JPN",
    route: "201K",
    frequency: "8-12 min",
    areas: ["JP Nagar", "Domlur", "Jayanagar"],
  },
  {
    stationId: "PK-YES",
    route: "90E",
    frequency: "10-15 min",
    areas: ["Yeshwanthpur", "Rajajinagar"],
  },
];

const OVERPASS_URL = "https://overpass.kumi.systems/api/interpreter";
const BUS_ROUTE_CACHE = new Map();
const GEO_CACHE = new Map();
const OVERPASS_CACHE = new Map();
const GEO_STORAGE_KEY = "metroai-geo-cache-v1";
const OVERPASS_STORAGE_KEY = "metroai-overpass-cache-v1";
const GEO_TTL_MS = 1000 * 60 * 60 * 24 * 7;
const OVERPASS_TTL_MS = 1000 * 60 * 60 * 24;
const FAST_LOCAL_RADIUS_KM = 0.8;

const PREFERRED_STATIONS = [
  {
    terms: ["reva university", "reva"],
    stationId: "BL-BGC",
  },
  {
    terms: ["kempegowda international airport", "kempegowda airport", "kia"],
    stationId: "BL-KIA",
  },
  {
    terms: ["mall of asia", "phoenix mall of asia"],
    stationId: "BL-JKC",
  },
];

const LOCAL_PLACES = {
  "mg road": { lat: 12.9756, lon: 77.6068 },
  "majestic": { lat: 12.9768, lon: 77.5713 },
  "indiranagar": { lat: 12.9784, lon: 77.6408 },
  "whitefield": { lat: 12.9698, lon: 77.75 },
  "koramangala": { lat: 12.9352, lon: 77.6245 },
  "jayanagar": { lat: 12.925, lon: 77.5938 },
  "jp nagar": { lat: 12.9077, lon: 77.5856 },
  "hebbal": { lat: 13.0358, lon: 77.597 },
  "electronic city": { lat: 12.844, lon: 77.666 },
  "manyata tech park": { lat: 13.0458, lon: 77.6269 },
  "airport": { lat: 13.1989, lon: 77.7068 },
};

const BENGALURU_BOUNDS = {
  north: 13.22,
  south: 12.73,
  east: 77.82,
  west: 77.37,
};

const INTERCHANGE_ID = "CENTRAL";
const LINE_INTERCHANGES = {
  "Blue|Pink": "BL-NAG",
};

const state = {
  trip: null,
  ticketTrip: null,
  wallet: null,
  lastTicket: null,
  auth: null,
};

let stationSelectorsReady = false;

const WALLET_STORAGE_KEY = "metroai-wallet-v1";
const WALLET_DEVICE_KEY = "metroai-device-id-v1";
const WALLET_ACTIVITY_LIMIT = 6;
const AUTH_STORAGE_KEY = "metroai-auth-v1";
const CO2_SAVINGS_PER_KM = 192;
const REWARD_RUPEE_PER_KG = 1;

const qs = (id) => document.getElementById(id);
const getEffectiveTicketTrip = () => state.trip || state.ticketTrip;

function readCache(storageKey) {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function writeCache(storageKey, payload) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(payload));
  } catch (error) {
    // Ignore storage errors (private mode, quota).
  }
}

function readJson(storageKey, fallback) {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return fallback;
    return { ...fallback, ...parsed };
  } catch (error) {
    return fallback;
  }
}

function writeJson(storageKey, payload) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(payload));
  } catch (error) {
    // Ignore storage errors (private mode, quota).
  }
}

function getDeviceId() {
  try {
    const existing = localStorage.getItem(WALLET_DEVICE_KEY);
    if (existing) return existing;
    const random = Math.random().toString(36).slice(2, 10).toUpperCase();
    const id = `DV-${random}`;
    localStorage.setItem(WALLET_DEVICE_KEY, id);
    return id;
  } catch (error) {
    return `DV-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
  }
}

function ensureWallet() {
  if (state.wallet) return state.wallet;
  const base = {
    balance: 0,
    totalRewards: 0,
    lastSyncAt: null,
    deviceId: getDeviceId(),
    pendingTickets: [],
    activity: [],
  };
  const stored = readJson(WALLET_STORAGE_KEY, base);
  const wallet = {
    ...base,
    ...stored,
    deviceId: base.deviceId,
  };
  if (!Array.isArray(wallet.pendingTickets)) wallet.pendingTickets = [];
  if (!Array.isArray(wallet.activity)) wallet.activity = [];
  if (!Number.isFinite(wallet.totalRewards)) wallet.totalRewards = 0;
  if ("offlineCredits" in wallet) delete wallet.offlineCredits;
  state.wallet = wallet;
  return wallet;
}

function saveWallet(wallet) {
  writeJson(WALLET_STORAGE_KEY, wallet);
  state.wallet = wallet;
}

function ensureAuth() {
  if (state.auth) return state.auth;
  const base = {
    loggedIn: false,
    name: "",
    phone: "",
    joinedAt: null,
  };
  const stored = readJson(AUTH_STORAGE_KEY, base);
  const auth = {
    ...base,
    ...stored,
    loggedIn: Boolean(stored.loggedIn && stored.name),
  };
  state.auth = auth;
  return auth;
}

function saveAuth(auth) {
  writeJson(AUTH_STORAGE_KEY, auth);
  state.auth = auth;
}

function isLoggedIn() {
  return ensureAuth().loggedIn;
}

function formatCo2(grams) {
  if (!Number.isFinite(grams)) return "0 g";
  if (grams >= 1000) return `${(grams / 1000).toFixed(1)} kg`;
  return `${Math.max(0, Math.round(grams))} g`;
}

function calculateEcoReward(distanceKm) {
  const km = Number.isFinite(distanceKm) ? Math.max(0, distanceKm) : 0;
  const grams = Math.round(km * CO2_SAVINGS_PER_KM);
  const kg = grams / 1000;
  const reward = km > 0 ? Math.max(1, Math.round(kg * REWARD_RUPEE_PER_KG)) : 0;
  return { grams, reward };
}

function formatRupees(amount) {
  const safe = Number.isFinite(amount) ? Math.max(0, Math.round(amount)) : 0;
  return `Rs ${safe}`;
}

function logWalletEvent(wallet, message, amount = null) {
  const entry = {
    ts: Date.now(),
    message,
    amount,
  };
  wallet.activity = [entry, ...(wallet.activity || [])].slice(
    0,
    WALLET_ACTIVITY_LIMIT
  );
}

function getCachedValue(memoryCache, storageKey, key, ttlMs) {
  const now = Date.now();
  const inMemory = memoryCache.get(key);
  if (inMemory && now - inMemory.ts < ttlMs) return inMemory.value;

  const stored = readCache(storageKey);
  const entry = stored[key];
  if (entry && now - entry.ts < ttlMs) {
    memoryCache.set(key, entry);
    return entry.value;
  }
  return null;
}

function setCachedValue(memoryCache, storageKey, key, value) {
  const entry = { ts: Date.now(), value };
  memoryCache.set(key, entry);
  const stored = readCache(storageKey);
  stored[key] = entry;
  writeCache(storageKey, stored);
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

function formatDistance(km) {
  if (km < 1) {
    return `${Math.round(km * 1000)} m`;
  }
  return `${km.toFixed(1)} km`;
}

function formatTimestamp(ts) {
  if (!ts) return "Not synced yet";
  return new Date(ts).toLocaleString();
}

function generateId(prefix, length = 8) {
  if (window.crypto?.getRandomValues) {
    const bytes = new Uint8Array(length);
    window.crypto.getRandomValues(bytes);
    const token = Array.from(bytes, (byte) =>
      (byte % 36).toString(36).toUpperCase()
    ).join("");
    return `${prefix}-${token}`;
  }
  return `${prefix}-${Math.random().toString(36).slice(2, 2 + length).toUpperCase()}`;
}

function generateServerReceiptId() {
  return generateId("SRV", 10);
}

function generateTicketToken(deviceId) {
  const stamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `METRO-${deviceId}-${stamp}-${random}`;
}

function hashString(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let result = Math.imul(t ^ (t >>> 15), 1 | t);
    result ^= result + Math.imul(result ^ (result >>> 7), 61 | result);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function buildQrMatrix(payload) {
  const size = 21;
  const matrix = Array.from({ length: size }, () => Array(size).fill(null));
  const reserved = new Set();

  const setCell = (row, col, value) => {
    matrix[row][col] = value;
    reserved.add(`${row},${col}`);
  };

  const setFinder = (rowStart, colStart) => {
    for (let r = 0; r < 7; r += 1) {
      for (let c = 0; c < 7; c += 1) {
        const isBorder = r === 0 || r === 6 || c === 0 || c === 6;
        const isCenter = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        setCell(rowStart + r, colStart + c, isBorder || isCenter);
      }
    }
  };

  setFinder(0, 0);
  setFinder(0, size - 7);
  setFinder(size - 7, 0);

  const rand = mulberry32(hashString(payload));
  for (let r = 0; r < size; r += 1) {
    for (let c = 0; c < size; c += 1) {
      const key = `${r},${c}`;
      if (reserved.has(key)) continue;
      setCell(r, c, rand() > 0.5);
    }
  }

  return matrix;
}

function renderQrCode(payload, placeholder = false) {
  const grid = qs("qrGrid");
  if (!grid) return;
  grid.innerHTML = "";
  grid.classList.toggle("is-placeholder", placeholder);
  const matrix = buildQrMatrix(payload);
  matrix.forEach((row) => {
    row.forEach((cell) => {
      const div = document.createElement("div");
      div.className = `qr-cell${cell ? " is-on" : ""}`;
      grid.appendChild(div);
    });
  });
}

function showTicketStatus(message, tone = "info") {
  const el = qs("ticketStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.remove("error", "success");
  if (tone === "error") el.classList.add("error");
  if (tone === "success") el.classList.add("success");
}

function requireLoginForWallet() {
  if (isLoggedIn()) return true;
  showTicketStatus("Please log in to use Metro Wallet and earn rewards.", "error");
  return false;
}

function renderTicketMeta(ticket) {
  if (!ticket) {
    qs("ticketToken").textContent = "METRO-AI-READY";
    qs("serverReceipt").textContent = "-";
    qs("syncStatus").textContent = "Awaiting purchase";
    renderQrCode("METRO-AI-READY", true);
    return;
  }

  qs("ticketToken").textContent = ticket.token;
  qs("serverReceipt").textContent = ticket.serverReceiptId || "SYNC-PENDING";
  qs("syncStatus").textContent = ticket.syncStatus;
  renderQrCode(ticket.qrPayload, ticket.syncStatus.includes("Pending"));
}

function renderWallet() {
  const wallet = ensureWallet();
  const loggedIn = isLoggedIn();
  const balanceEl = qs("walletBalance");
  const rewardsEl = qs("walletRewardsTotal");
  const networkEl = qs("walletNetwork");
  const syncEl = qs("walletSync");
  const logEl = qs("walletLog");
  const topupButton = qs("topupButton");
  const topupAmount = qs("topupAmount");

  if (balanceEl) {
    balanceEl.textContent = loggedIn ? formatRupees(wallet.balance) : "Login required";
  }
  if (rewardsEl) {
    rewardsEl.textContent = loggedIn ? formatRupees(wallet.totalRewards) : "Login required";
  }
  if (networkEl) {
    const online = navigator.onLine;
    if (!loggedIn) {
      networkEl.textContent = "Login required";
      networkEl.classList.remove("online", "offline");
    } else {
      networkEl.textContent = online ? "Online" : "Offline";
      networkEl.classList.toggle("online", online);
      networkEl.classList.toggle("offline", !online);
    }
    if (topupButton) topupButton.disabled = !loggedIn || !online;
    if (topupAmount) topupAmount.disabled = !loggedIn;
  }
  if (syncEl) {
    syncEl.textContent = loggedIn
      ? wallet.lastSyncAt
        ? `Last sync ${formatTimestamp(wallet.lastSyncAt)}`
        : "Not synced yet"
      : "Login required";
  }
  if (logEl) {
    if (!loggedIn) {
      logEl.innerHTML = `<div class="option muted">Login to view wallet activity.</div>`;
    } else if (!wallet.activity.length) {
      logEl.innerHTML = `<div class="option muted">No wallet activity yet.</div>`;
    } else {
      logEl.innerHTML = wallet.activity
        .map((entry) => {
          const time = new Date(entry.ts).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          const amount = entry.amount != null ? ` - ${formatRupees(entry.amount)}` : "";
          return `<div class="option"><strong>${entry.message}</strong><br /><span class="muted">${time}${amount}</span></div>`;
        })
        .join("");
    }
  }
}

function renderAuth() {
  const auth = ensureAuth();
  const loginForm = qs("loginForm");
  const loginStatus = qs("loginStatus");
  const logoutButton = qs("logoutButton");
  const loginName = qs("loginName");
  const loginPhone = qs("loginPhone");
  const walletLock = qs("walletLock");
  const walletCard = qs("walletCard");
  const paymentMethod = qs("paymentMethod");

  if (loginForm) loginForm.classList.toggle("is-hidden", auth.loggedIn);
  if (logoutButton) logoutButton.classList.toggle("is-hidden", !auth.loggedIn);

  if (loginStatus) {
    loginStatus.textContent = auth.loggedIn
      ? `Logged in as ${auth.name}`
      : "Not logged in. Login required to use Metro Wallet.";
    loginStatus.classList.toggle("is-on", auth.loggedIn);
  }

  if (loginName && auth.loggedIn) loginName.value = auth.name;
  if (loginPhone && auth.loggedIn) loginPhone.value = auth.phone;
  if (loginName && !auth.loggedIn) loginName.value = "";
  if (loginPhone && !auth.loggedIn) loginPhone.value = "";

  if (walletLock) walletLock.classList.toggle("is-hidden", auth.loggedIn);
  if (walletCard) walletCard.classList.toggle("is-locked", !auth.loggedIn);

  if (paymentMethod) {
    const walletOption = paymentMethod.querySelector('option[value="wallet"]');
    if (walletOption) {
      walletOption.disabled = !auth.loggedIn;
      walletOption.textContent = auth.loggedIn
        ? "Metro Wallet (Offline Ready)"
        : "Metro Wallet (Login required)";
    }
    if (!auth.loggedIn && paymentMethod.value === "wallet") {
      paymentMethod.value = "upi";
    }
  }
}

function syncPendingTickets() {
  if (!isLoggedIn()) return;
  const wallet = ensureWallet();
  if (!navigator.onLine || wallet.pendingTickets.length === 0) return;

  const receiptMap = new Map();
  wallet.pendingTickets.forEach((ticket) => {
    receiptMap.set(ticket.id, generateServerReceiptId());
  });
  wallet.pendingTickets = [];
  wallet.lastSyncAt = Date.now();
  logWalletEvent(wallet, `Synced ${receiptMap.size} offline ticket(s)`);
  saveWallet(wallet);
  renderWallet();

  if (state.lastTicket && receiptMap.has(state.lastTicket.id)) {
    state.lastTicket.serverReceiptId = receiptMap.get(state.lastTicket.id);
    state.lastTicket.syncStatus = "Verified (synced)";
    renderTicketMeta(state.lastTicket);
    showTicketStatus("Offline ticket synced with metro server.", "success");
  }
}

function haversineDistance(a, b) {
  const toRad = (v) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const sinLat = Math.sin(dLat / 2);
  const sinLon = Math.sin(dLon / 2);
  const h =
    sinLat * sinLat +
    Math.cos(lat1) * Math.cos(lat2) * sinLon * sinLon;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function isWithinBengaluru(lat, lon) {
  return (
    lat >= BENGALURU_BOUNDS.south &&
    lat <= BENGALURU_BOUNDS.north &&
    lon >= BENGALURU_BOUNDS.west &&
    lon <= BENGALURU_BOUNDS.east
  );
}

async function geocodePlace(query) {
  const cleaned = query.trim();
  if (!cleaned) return null;
  const lower = cleaned.toLowerCase();
  const localMatch = Object.keys(LOCAL_PLACES).find((key) =>
    lower.includes(key)
  );
  if (localMatch) {
    return {
      ...LOCAL_PLACES[localMatch],
      label: `${cleaned}, Bengaluru`,
      source: "local",
    };
  }
  const mapQuery =
    lower.includes("bengaluru") || lower.includes("bangalore")
      ? cleaned
      : `${cleaned}, Bengaluru`;
  const viewbox = `${BENGALURU_BOUNDS.west},${BENGALURU_BOUNDS.north},${BENGALURU_BOUNDS.east},${BENGALURU_BOUNDS.south}`;
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&bounded=1&viewbox=${encodeURIComponent(
    viewbox
  )}&q=${encodeURIComponent(mapQuery)}&email=metroai-hackathon@example.com`;
  const cacheKey = `geo:${mapQuery.toLowerCase()}`;
  const cached = getCachedValue(GEO_CACHE, GEO_STORAGE_KEY, cacheKey, GEO_TTL_MS);
  if (cached) return cached;

  try {
    const response = await fetchWithTimeout(url, {
      headers: { "Accept-Language": "en" },
    }, 7000);
    if (!response.ok) {
      throw new Error("geocode-failed");
    }
    const data = await response.json();
    if (!data || !data.length) {
      return null;
    }
    const payload = {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon),
      label: data[0].display_name,
      source: "nominatim",
    };
    setCachedValue(GEO_CACHE, GEO_STORAGE_KEY, cacheKey, payload);
    return payload;
  } catch (error) {
    return null;
  }
}

async function fetchNearestMetroStation(point) {
  const cacheKey = `station:${point.lat.toFixed(4)},${point.lon.toFixed(4)}`;
  const cached = getCachedValue(
    OVERPASS_CACHE,
    OVERPASS_STORAGE_KEY,
    cacheKey,
    OVERPASS_TTL_MS
  );
  if (cached) return cached;
  const query = `
[out:json][timeout:10];
(
  node["railway"="station"]["station"="metro"](around:5000,${point.lat},${point.lon});
  node["railway"="station"]["subway"="yes"](around:5000,${point.lat},${point.lon});
  way["railway"="station"]["station"="metro"](around:5000,${point.lat},${point.lon});
  relation["railway"="station"]["station"="metro"](around:5000,${point.lat},${point.lon});
);
out center 60;
`;
  try {
    const response = await fetchWithTimeout(
      OVERPASS_URL,
      {
      method: "POST",
      body: query,
      },
      8000
    );
    if (!response.ok) return null;
    const data = await response.json();
    if (!data?.elements?.length) return null;

    let best = null;
    let bestDistance = Number.POSITIVE_INFINITY;
    data.elements.forEach((element) => {
      const lat = element.lat ?? element.center?.lat;
      const lon = element.lon ?? element.center?.lon;
      if (!lat || !lon) return;
      const name = element.tags?.name;
      if (!name) return;
      const distanceKm = haversineDistance(point, { lat, lon });
      if (distanceKm < bestDistance) {
        bestDistance = distanceKm;
        best = { name, lat, lon };
      }
    });

    if (!best) return null;
    const canonicalName = findCanonicalStationName(best.name);
    const inferredLines = inferStationLines(canonicalName, []);
    const payload = {
      station: {
        id: `LIVE-${normalizeStationName(canonicalName)}`,
        name: canonicalName,
        lines: inferredLines.length ? inferredLines : ["Unknown"],
        lat: best.lat,
        lon: best.lon,
      },
      distanceKm: bestDistance,
      source: "overpass",
    };
    setCachedValue(OVERPASS_CACHE, OVERPASS_STORAGE_KEY, cacheKey, payload);
    return payload;
  } catch (error) {
    return null;
  }
}

function findNearestStationFromList(point) {
  let nearest = null;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (const station of STATIONS) {
    const distance = haversineDistance(point, station);
    if (distance < bestDistance) {
      bestDistance = distance;
      nearest = station;
    }
  }
  if (!nearest) {
    return { station: null, distanceKm: null, source: "local" };
  }
  return { station: nearest, distanceKm: bestDistance, source: "local" };
}

async function findNearestStation(point, queryText = "") {
  const normalized = queryText.toLowerCase();
  const preferredMatch = PREFERRED_STATIONS.find((entry) =>
    entry.terms.some((term) => normalized.includes(term))
  );
  if (preferredMatch) {
    const preferredStation = STATIONS.find(
      (station) => station.id === preferredMatch.stationId
    );
    if (preferredStation) {
      return {
        station: preferredStation,
        distanceKm: haversineDistance(point, preferredStation),
        source: "preferred",
      };
    }
  }

  const localStation = findNearestStationFromList(point);
  if (localStation.station && localStation.distanceKm <= FAST_LOCAL_RADIUS_KM) {
    return localStation;
  }

  const liveStation = await fetchNearestMetroStation(point);
  if (liveStation) return liveStation;

  return localStation;
}

function estimateFare(distanceKm) {
  const base = 15;
  const perKm = 2;
  const raw = Math.round(base + distanceKm * perKm);
  return Math.max(base, Math.min(60, raw));
}

function estimateBmtcFare(distanceKm) {
  if (distanceKm <= 2) return 6;
  if (distanceKm <= 4) return 12;
  if (distanceKm <= 6) return 18;
  if (distanceKm <= 10) return 23;
  if (distanceKm <= 14) return 24;
  if (distanceKm <= 18) return 28;
  if (distanceKm <= 40) return 30;
  if (distanceKm <= 50) return 32;
  return 32;
}

function estimateWalkTime(distanceKm) {
  return Math.max(4, Math.round((distanceKm / 4.8) * 60));
}

function estimateAutoFare(distanceKm) {
  return Math.round(25 + distanceKm * 12);
}

function estimateCabFare(distanceKm) {
  return Math.round(40 + distanceKm * 14);
}

function findStationIndex(line, stationName) {
  const list = NORMALIZED_LINE_STATIONS[line];
  if (!list) return -1;
  return list.indexOf(normalizeStationName(stationName));
}

function buildLineSegment(line, startName, endName) {
  const stations = LINE_STATIONS[line];
  if (!stations) return null;
  const startIdx = findStationIndex(line, startName);
  const endIdx = findStationIndex(line, endName);
  if (startIdx === -1 || endIdx === -1) return null;
  const step = startIdx <= endIdx ? 1 : -1;
  const segment = [];
  for (let i = startIdx; step === 1 ? i <= endIdx : i >= endIdx; i += step) {
    segment.push(stations[i]);
  }
  return segment;
}

function findBestInterchange(startLine, endLine, startName, endName) {
  const startStations = LINE_STATIONS[startLine];
  const endStations = LINE_STATIONS[endLine];
  if (!startStations || !endStations) return null;
  const endSet = new Set(NORMALIZED_LINE_STATIONS[endLine]);
  const intersections = startStations.filter((name) =>
    endSet.has(normalizeStationName(name))
  );
  if (!intersections.length) return null;

  const startIdx = findStationIndex(startLine, startName);
  const endIdx = findStationIndex(endLine, endName);
  let best = intersections[0];
  let bestScore = Number.POSITIVE_INFINITY;

  intersections.forEach((name) => {
    const interStart = findStationIndex(startLine, name);
    const interEnd = findStationIndex(endLine, name);
    const score =
      (startIdx === -1 ? 0 : Math.abs(interStart - startIdx)) +
      (endIdx === -1 ? 0 : Math.abs(interEnd - endIdx));
    if (score < bestScore) {
      bestScore = score;
      best = name;
    }
  });

  return best;
}

async function fetchBmtcRoutesNearStation(station) {
  const cacheKey = station.id || station.name;
  if (BUS_ROUTE_CACHE.has(cacheKey)) {
    return BUS_ROUTE_CACHE.get(cacheKey);
  }

  const query = `
[out:json][timeout:12];
relation["route"="bus"](around:1500,${station.lat},${station.lon});
out tags;
`;
  try {
    const response = await fetchWithTimeout(
      OVERPASS_URL,
      {
        method: "POST",
        body: query,
      },
      8000
    );
    if (!response.ok) throw new Error("routes-unavailable");
    const data = await response.json();
    const routes = (data?.elements || [])
      .map((element) => element.tags || {})
      .filter((tags) => {
        if (!tags.ref) return false;
        if (!tags.operator) return true;
        return /BMTC|Bangalore Metropolitan Transport/i.test(tags.operator);
      })
      .map((tags) => tags.ref.trim())
      .filter(Boolean);

    const uniqueRoutes = Array.from(new Set(routes)).sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true })
    );
    const payload = { routes: uniqueRoutes, source: "overpass" };
    BUS_ROUTE_CACHE.set(cacheKey, payload);
    return payload;
  } catch (error) {
    const fallbackRoutes = BMTC_ROUTES.filter(
      (route) => route.stationId === station.id
    ).map((route) => route.route);
    const payload = {
      routes: Array.from(new Set(fallbackRoutes)),
      source: "fallback",
    };
    BUS_ROUTE_CACHE.set(cacheKey, payload);
    return payload;
  }
}

function formatRouteList(routes) {
  if (!routes.length) return "No routes found";
  if (routes.length <= 12) return routes.join(", ");
  return `${routes.slice(0, 12).join(", ")} + ${routes.length - 12} more`;
}

async function getLastMileOptions(station, destination, destinationText, direction = "from-station") {
  const distanceKm = haversineDistance(station, destination);
  const options = [];

  const { routes: onlineRoutes, source: routeSource } =
    await fetchBmtcRoutesNearStation(station);
  const bmtcFare = estimateBmtcFare(distanceKm);

  if (onlineRoutes.length) {
    const busSpeed = 16;
    const busWait = 8;
    const busTime = Math.max(10, Math.round((distanceKm / busSpeed) * 60 + busWait));
    const busTarget =
      direction === "to-station"
        ? `to ${station.name}`
        : `to ${destinationText || "destination"}`;
    options.push({
      type: "BMTC Bus",
      detail: `Routes: ${formatRouteList(onlineRoutes)} ${busTarget} (${routeSource})`,
      cost: `Rs ${bmtcFare} (stage-based)`,
      eta: `${busTime} min (est.)`,
      etaMinutes: busTime,
    });
  }

  if (distanceKm <= 0.8) {
    const walkTime = estimateWalkTime(distanceKm);
    options.push({
      type: "Walk",
      detail: direction === "to-station" ? "Walk to the station" : "Walk to destination",
      cost: "Free",
      eta: `${walkTime} min`,
      etaMinutes: walkTime,
    });
  } else {
    const autoTime = Math.max(6, Math.round(distanceKm * 6));
    options.push({
      type: "Auto",
      detail: direction === "to-station" ? "Auto to station gate" : "Auto to destination",
      cost: `Rs ${estimateAutoFare(distanceKm)}`,
      eta: `${autoTime} min`,
      etaMinutes: autoTime,
    });
  }

  const cabTime = Math.max(6, Math.round(distanceKm * 5));
  options.push({
    type: "Cab",
    detail: direction === "to-station" ? "Cab to station gate" : "Cab to destination",
    cost: `Rs ${estimateCabFare(distanceKm)}`,
    eta: `${cabTime} min`,
    etaMinutes: cabTime,
  });

  if (options.length === 0) {
    options.push({
      type: "Metro Feeder",
      detail: "Check nearby feeder services",
      cost: "Varies",
      eta: "12-18 min",
    });
  }

  return options;
}

function buildRouteSummary(startStation, endStation) {
  if (!startStation || !endStation) return "Plan a trip to see the route.";
  if (startStation.id === endStation.id) {
    return `You are already near ${startStation.name}. Walk to the station and begin your journey.`;
  }

  const sharedLine = startStation.lines.find((line) =>
    endStation.lines.includes(line)
  );
  if (sharedLine) {
    const segment = buildLineSegment(sharedLine, startStation.name, endStation.name);
    if (segment) {
      return `Route (${sharedLine} Line): ${segment.join(" → ")}`;
    }
    return `Take the ${sharedLine} Line directly from ${startStation.name} to ${endStation.name}.`;
  }

  const startLine = startStation.lines[0];
  const endLine = endStation.lines[0];
  const interchangeKey = [startLine, endLine].sort().join("|");
  const mappedInterchangeId = LINE_INTERCHANGES[interchangeKey];
  const mappedInterchange =
    mappedInterchangeId &&
    STATIONS.find((station) => station.id === mappedInterchangeId);
  const inferredInterchangeName = findBestInterchange(
    startLine,
    endLine,
    startStation.name,
    endStation.name
  );
  const interchangeName =
    mappedInterchange?.name || inferredInterchangeName || "central interchange";

  const firstLeg = buildLineSegment(startLine, startStation.name, interchangeName);
  const secondLeg = buildLineSegment(endLine, interchangeName, endStation.name);

  if (firstLeg && secondLeg) {
    return `Route (${startLine} Line): ${firstLeg.join(
      " → "
    )} | Interchange at ${interchangeName} | (${endLine} Line): ${secondLeg.join(
      " → "
    )}`;
  }

  return `Take the ${startLine} Line from ${startStation.name} to ${interchangeName}, then interchange to the ${endLine} Line and travel to ${endStation.name}.`;
}

function pickFastestOption(options = []) {
  return options.reduce((best, option) => {
    if (!best) return option;
    if (option.etaMinutes == null) return best;
    if (best.etaMinutes == null) return option;
    return option.etaMinutes < best.etaMinutes ? option : best;
  }, null);
}

function buildMetroPlan(startStation, endStation) {
  const startLines = startStation.lines.filter((line) => LINE_STATIONS[line]);
  const endLines = endStation.lines.filter((line) => LINE_STATIONS[line]);
  const timePerStop = 2.5;
  const interchangePenalty = 6;
  let bestPlan = null;

  startLines.forEach((startLine) => {
    endLines.forEach((endLine) => {
      if (startLine === endLine) {
        const segment = buildLineSegment(startLine, startStation.name, endStation.name);
        if (!segment) return;
        const stopCount = Math.max(0, segment.length - 1);
        const etaMinutes = Math.round(stopCount * timePerStop);
        const plan = {
          lines: [startLine],
          segments: [segment],
          interchange: null,
          stopCount,
          etaMinutes,
        };
        if (!bestPlan || plan.etaMinutes < bestPlan.etaMinutes) {
          bestPlan = plan;
        }
        return;
      }

      const interchangeName = findBestInterchange(
        startLine,
        endLine,
        startStation.name,
        endStation.name
      );
      if (!interchangeName) return;
      const firstLeg = buildLineSegment(startLine, startStation.name, interchangeName);
      const secondLeg = buildLineSegment(endLine, interchangeName, endStation.name);
      if (!firstLeg || !secondLeg) return;
      const stopCount = Math.max(0, firstLeg.length + secondLeg.length - 2);
      const etaMinutes = Math.round(stopCount * timePerStop + interchangePenalty);
      const plan = {
        lines: [startLine, endLine],
        segments: [firstLeg, secondLeg],
        interchange: interchangeName,
        stopCount,
        etaMinutes,
      };
      if (!bestPlan || plan.etaMinutes < bestPlan.etaMinutes) {
        bestPlan = plan;
      }
    });
  });

  return bestPlan;
}

function buildRoutePlan(trip) {
  const fastestStart = pickFastestOption(trip.startAccessOptions);
  const fastestEnd = pickFastestOption(trip.endAccessOptions);
  const metroPlan = buildMetroPlan(trip.startStation, trip.endStation);

  const steps = [];
  steps.push({
    title: "Reach your start metro",
    detail: fastestStart
      ? `${fastestStart.type}: ${fastestStart.detail}. ETA ${fastestStart.eta}.`
      : `Head to ${trip.startStation.name}.`,
  });

  if (metroPlan) {
    if (metroPlan.lines.length === 1) {
      steps.push({
        title: "Metro ride (fastest)",
        detail: `${metroPlan.lines[0]} Line · ${metroPlan.stopCount} stops · ~${metroPlan.etaMinutes} min. Stops: ${metroPlan.segments[0].join(
          " → "
        )}.`,
      });
    } else {
      steps.push({
        title: "Metro ride (fastest)",
        detail: `${metroPlan.lines[0]} Line → interchange at ${metroPlan.interchange} → ${metroPlan.lines[1]} Line · ${metroPlan.stopCount} stops · ~${metroPlan.etaMinutes} min. Segment 1: ${metroPlan.segments[0].join(
          " → "
        )}. Segment 2: ${metroPlan.segments[1].join(" → ")}.`,
      });
    }
  } else {
    steps.push({
      title: "Metro ride",
      detail: trip.routeSummary,
    });
  }

  steps.push({
    title: "Last mile to destination",
    detail: fastestEnd
      ? `${fastestEnd.type}: ${fastestEnd.detail}. ETA ${fastestEnd.eta}.`
      : `From ${trip.endStation.name}, choose a last mile option to reach your destination.`,
  });

  return { steps, metroPlan, fastestStart, fastestEnd };
}

function renderRouteSummary(trip) {
  const summaryEl = qs("routeSummary");
  if (!summaryEl) return;
  if (!trip) {
    summaryEl.textContent = "Plan a trip to see the recommended route.";
    return;
  }
  const plan = buildRoutePlan(trip);
  summaryEl.innerHTML = plan.steps
    .map(
      (step) =>
        `<div class="step"><strong>${step.title}</strong><br />${step.detail}</div>`
    )
    .join("");
}

function crowdLevel() {
  const hour = new Date().getHours();
  const peak = (hour >= 8 && hour <= 11) || (hour >= 17 && hour <= 20);
  return peak ? "High" : "Moderate";
}

function greenImpact(distanceKm) {
  const savings = Math.round(distanceKm * CO2_SAVINGS_PER_KM);
  return `Saved about ${formatCo2(savings)} CO2 vs private vehicle.`;
}

function updateAiInsight(trip) {
  const insightEl = qs("aiInsight");
  if (!trip) {
    insightEl.textContent = "Enter your trip to generate live AI guidance.";
    return;
  }
  const crowd = crowdLevel();
  const lastMile = trip.endAccessOptions[0];
  const plan = buildRoutePlan(trip);
  const metroSummary = plan.metroPlan
    ? `${plan.metroPlan.lines.join(" → ")} Line(s), ~${plan.metroPlan.etaMinutes} min`
    : trip.routeSummary;
  const summary = [
    `Crowd level: ${crowd}.`,
    `Recommended route: ${metroSummary}.`,
    `Best last mile: ${lastMile.type} (${lastMile.cost}).`,
    greenImpact(trip.stationDistanceKm),
  ];
  insightEl.textContent = summary.join(" ");
}

function updateResults(trip) {
  qs("startStation").textContent = `${trip.startStation.name} (${trip.startStation.lines.join(
    ", "
  )} Line)`;
  qs("endStation").textContent = `${trip.endStation.name} (${trip.endStation.lines.join(
    ", "
  )} Line)`;
  qs("stationDistance").textContent = formatDistance(trip.stationDistanceKm);
  qs("fareEstimate").textContent = `Rs ${trip.fare}`;
  qs("startAccessDistance").textContent = formatDistance(trip.startAccessDistanceKm);
  qs("endAccessDistance").textContent = formatDistance(trip.endAccessDistanceKm);
  renderRouteSummary(trip);

  const lastMileEl = qs("lastMileOptions");
  lastMileEl.innerHTML = "";
  trip.endAccessOptions.forEach((option) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerHTML = `<strong>${option.type}</strong> - ${option.detail}<br />Cost: ${option.cost} | ETA: ${option.eta}`;
    lastMileEl.appendChild(div);
  });

  syncTicketStationSelectors(trip);
}

function calculateTicketTotal(trip, ticketType, passengers) {
  const baseFare = trip ? trip.fare : 25;
  const multiplier = ticketType === "return" ? 1.8 : ticketType === "day" ? 3 : 1;
  const total = Math.round(baseFare * multiplier * passengers);
  return { baseFare, total };
}

function updateTicketPreview(trip, ticketType, passengers, tripCount) {
  const { baseFare, total } = calculateTicketTotal(trip, ticketType, passengers);

  qs("ticketTitle").textContent =
    ticketType === "day" ? "Day Pass" : ticketType === "return" ? "Return Journey" : "Single Journey";
  qs("ticketFare").textContent = formatRupees(total);

  const suggestion = getTicketSuggestion(tripCount, ticketType, baseFare);
  qs("ticketSuggestion").textContent = suggestion;
  qs("greenScore").textContent = trip
    ? greenImpact(trip.stationDistanceKm)
    : "Plan a trip to see savings.";
  const rewardEl = qs("ecoReward");
  if (rewardEl) {
    if (trip) {
      const { grams, reward } = calculateEcoReward(trip.stationDistanceKm);
      const rewardText = isLoggedIn()
        ? `Earn ${formatRupees(reward)} reward for saving ${formatCo2(grams)} CO2.`
        : `Log in to earn ${formatRupees(reward)} reward (saves ${formatCo2(grams)} CO2).`;
      rewardEl.textContent = rewardText;
    } else {
      rewardEl.textContent = "Plan a trip to see eco rewards.";
    }
  }

  renderTicketMeta(state.lastTicket);
}

function topUpWallet(amount) {
  if (!requireLoginForWallet()) return;
  const wallet = ensureWallet();
  if (!navigator.onLine) {
    showTicketStatus("Top up requires internet access. Please go online.", "error");
    return;
  }
  const safeAmount = Math.round(Number(amount));
  if (!Number.isFinite(safeAmount) || safeAmount < 50) {
    showTicketStatus("Enter a top up amount of at least Rs 50.", "error");
    return;
  }

  wallet.balance += safeAmount;
  wallet.lastSyncAt = Date.now();
  logWalletEvent(wallet, "Wallet top up", safeAmount);
  saveWallet(wallet);
  renderWallet();
  showTicketStatus(`Wallet topped up with ${formatRupees(safeAmount)}.`, "success");
}

function applyEcoReward(trip) {
  if (!trip) return { reward: 0, grams: 0, applied: false };
  const { grams, reward } = calculateEcoReward(trip.stationDistanceKm);
  if (!isLoggedIn() || reward <= 0) {
    return { reward: 0, grams, applied: false };
  }
  const wallet = ensureWallet();
  wallet.balance += reward;
  wallet.totalRewards =
    (Number.isFinite(wallet.totalRewards) ? wallet.totalRewards : 0) + reward;
  logWalletEvent(wallet, "Eco reward for low-carbon trip", reward);
  saveWallet(wallet);
  renderWallet();
  return { reward, grams, applied: true };
}

function issueTicket({ trip, ticketType, passengers, tripCount, paymentMethod }) {
  const { baseFare, total } = calculateTicketTotal(trip, ticketType, passengers);
  const wallet = ensureWallet();
  const online = navigator.onLine;

  if (!online && paymentMethod !== "wallet") {
    showTicketStatus(
      "You are offline. Switch to Metro Wallet to pay without internet.",
      "error"
    );
    return false;
  }

  if (paymentMethod === "wallet") {
    if (!requireLoginForWallet()) return false;
    if (wallet.balance < total) {
      showTicketStatus("Insufficient wallet balance. Top up when online.", "error");
      return false;
    }

    wallet.balance -= total;
    wallet.lastSyncAt = online ? Date.now() : wallet.lastSyncAt;
    logWalletEvent(wallet, `Ticket purchased (${ticketType})`, total);
  }

  const token = generateTicketToken(wallet.deviceId);
  const serverReceiptId = online ? generateServerReceiptId() : "SYNC-PENDING";
  const issuedAt = Date.now();
  const syncStatus = online ? "Verified (server connected)" : "Pending sync (offline)";

  const ticket = {
    id: generateId("TKT", 10),
    token,
    ticketType,
    passengers,
    baseFare,
    fare: total,
    issuedAt,
    paymentMethod,
    mode: online ? "online" : "offline",
    serverReceiptId,
    syncStatus,
    qrPayload: `${token}|${serverReceiptId}|${total}|${issuedAt}|${wallet.deviceId}`,
  };

  if (!online && paymentMethod === "wallet") {
    wallet.pendingTickets.push({
      id: ticket.id,
      issuedAt: ticket.issuedAt,
      fare: ticket.fare,
    });
  }

  if (paymentMethod === "wallet") {
    saveWallet(wallet);
    renderWallet();
  }

  state.lastTicket = ticket;
  renderTicketMeta(ticket);
  const rewardResult = applyEcoReward(trip);
  const rewardMessage =
    rewardResult.reward > 0
      ? ` Eco reward ${formatRupees(rewardResult.reward)} added to wallet.`
      : trip && !isLoggedIn() && rewardResult.grams > 0
      ? " Log in to claim eco rewards."
      : "";
  showTicketStatus(
    online
      ? `Ticket issued and verified with metro server.${rewardMessage}`
      : `Offline ticket issued. It will sync when internet returns.${rewardMessage}`,
    online ? "success" : "info"
  );
  return true;
}

function getTicketSuggestion(tripCount, ticketType, baseFare) {
  if (tripCount >= 4 && ticketType !== "day") {
    return "AI suggests a Day Pass for frequent travel today.";
  }
  if (tripCount >= 2 && ticketType === "single") {
    return "Return ticket may reduce overall fare.";
  }
  if (baseFare > 40) {
    return "Long trip detected. Consider off-peak travel for comfort.";
  }
  return "Fare looks optimal for your current plan.";
}

function renderLineLists() {
  const blueList = qs("blueLineList");
  const pinkList = qs("pinkLineList");
  const purpleList = qs("purpleLineList");
  const greenList = qs("greenLineList");
  const yellowList = qs("yellowLineList");
  const purpleStations = LINE_STATIONS.Purple;
  const greenStations = LINE_STATIONS.Green;
  const yellowStations = LINE_STATIONS.Yellow;
  const blueStations = LINE_STATIONS.Blue;
  const pinkStations = LINE_STATIONS.Pink;

  blueList.innerHTML = "";
  pinkList.innerHTML = "";
  purpleList.innerHTML = "";
  greenList.innerHTML = "";
  yellowList.innerHTML = "";

  purpleStations.forEach((station) => {
    const li = document.createElement("li");
    li.textContent = station;
    purpleList.appendChild(li);
  });

  greenStations.forEach((station) => {
    const li = document.createElement("li");
    li.textContent = station;
    greenList.appendChild(li);
  });

  yellowStations.forEach((station) => {
    const li = document.createElement("li");
    li.textContent = station;
    yellowList.appendChild(li);
  });

  blueStations.forEach((station) => {
    const li = document.createElement("li");
    li.textContent = station;
    blueList.appendChild(li);
  });

  pinkStations.forEach((station) => {
    const li = document.createElement("li");
    li.textContent = station;
    pinkList.appendChild(li);
  });

  const countEl = qs("stationCount");
  if (countEl) {
    const uniqueStations = new Set([
      ...purpleStations,
      ...greenStations,
      ...yellowStations,
      ...blueStations,
      ...pinkStations,
    ]);
    countEl.textContent = uniqueStations.size.toString();
  }
}

function renderInterchanges() {
  const listEl = qs("interchangeList");
  if (!listEl) return;
  listEl.innerHTML = "";
  INTERCHANGE_STATIONS.forEach((interchange) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerHTML = `<strong>${interchange.name}</strong><br />Lines: ${interchange.lines.join(
      ", "
    )}`;
    listEl.appendChild(div);
  });
}

const buildStationLabel = (station) => {
  const lineLabel = station.lines.join(", ");
  return `${station.name} (${lineLabel} Line)`;
};

const buildManualTicketTrip = (startStation, endStation) => {
  const stationDistanceKm = haversineDistance(startStation, endStation);
  return {
    startText: startStation.name,
    endText: endStation.name,
    startLocation: startStation,
    endLocation: endStation,
    startStation,
    endStation,
    startAccessDistanceKm: 0,
    endAccessDistanceKm: 0,
    stationDistanceKm,
    fare: estimateFare(stationDistanceKm),
    startAccessOptions: [],
    endAccessOptions: [],
    routeSummary: buildRouteSummary(startStation, endStation),
    source: "manual",
  };
};

function initTicketStationSelectors() {
  if (stationSelectorsReady) return;
  const startSelect = qs("ticketStartStation");
  const endSelect = qs("ticketEndStation");
  if (!startSelect || !endSelect) return;

  startSelect.innerHTML = "";
  endSelect.innerHTML = "";

  const startPlaceholder = new Option("Select start station", "");
  startPlaceholder.disabled = true;
  startPlaceholder.selected = true;
  startSelect.add(startPlaceholder);

  const endPlaceholder = new Option("Select destination station", "");
  endPlaceholder.disabled = true;
  endPlaceholder.selected = true;
  endSelect.add(endPlaceholder);

  const stations = [...STATIONS].sort((a, b) => a.name.localeCompare(b.name));
  stations.forEach((station) => {
    const label = buildStationLabel(station);
    startSelect.add(new Option(label, station.id));
    endSelect.add(new Option(label, station.id));
  });

  stationSelectorsReady = true;
}

function syncTicketStationSelectors(trip) {
  initTicketStationSelectors();
  const startSelect = qs("ticketStartStation");
  const endSelect = qs("ticketEndStation");
  if (!startSelect || !endSelect) return;

  const activeTrip = trip || state.ticketTrip;
  startSelect.disabled = false;
  endSelect.disabled = false;

  if (activeTrip) {
    startSelect.value = activeTrip.startStation?.id || "";
    endSelect.value = activeTrip.endStation?.id || "";
  } else {
    startSelect.value = "";
    endSelect.value = "";
  }

  const swapButton = qs("swapStations");
  if (swapButton) {
    const canSwap = Boolean(startSelect.value && endSelect.value);
    swapButton.disabled = !canSwap;
  }
}

async function applyTicketStationOverride() {
  const startSelect = qs("ticketStartStation");
  const endSelect = qs("ticketEndStation");
  if (!startSelect || !endSelect) return;

  const startStation = STATIONS.find((station) => station.id === startSelect.value);
  const endStation = STATIONS.find((station) => station.id === endSelect.value);
  if (!startStation || !endStation) {
    const swapButton = qs("swapStations");
    if (swapButton) swapButton.disabled = true;
    return;
  }

  if (!state.trip) {
    const manualTrip = buildManualTicketTrip(startStation, endStation);
    state.ticketTrip = manualTrip;
    updateTicketPreview(
      manualTrip,
      qs("ticketType").value,
      Number(qs("passengers").value),
      Number(qs("tripCount").value)
    );
    syncTicketStationSelectors(state.trip);
    return;
  }

  const sameStations =
    startStation.id === state.trip.startStation.id &&
    endStation.id === state.trip.endStation.id;
  if (sameStations) return;

  const updatedTrip = {
    ...state.trip,
    startStation,
    endStation,
  };

  updatedTrip.startAccessDistanceKm = haversineDistance(
    updatedTrip.startLocation,
    startStation
  );
  updatedTrip.endAccessDistanceKm = haversineDistance(
    updatedTrip.endLocation,
    endStation
  );
  updatedTrip.stationDistanceKm = haversineDistance(startStation, endStation);
  updatedTrip.fare = estimateFare(updatedTrip.stationDistanceKm);
  updatedTrip.routeSummary = buildRouteSummary(startStation, endStation);

  const [startAccessOptions, endAccessOptions] = await Promise.all([
    getLastMileOptions(
      startStation,
      updatedTrip.startLocation,
      updatedTrip.startText,
      "to-station"
    ),
    getLastMileOptions(
      endStation,
      updatedTrip.endLocation,
      updatedTrip.endText,
      "from-station"
    ),
  ]);

  updatedTrip.startAccessOptions = startAccessOptions;
  updatedTrip.endAccessOptions = endAccessOptions;

  state.trip = updatedTrip;
  state.ticketTrip = null;
  updateResults(updatedTrip);

  const aiToggle = qs("aiToggle");
  if (aiToggle && aiToggle.checked) {
    updateAiInsight(updatedTrip);
  } else if (aiToggle) {
    qs("aiInsight").textContent = "AI guidance disabled. Turn it on to view insights.";
  }

  updateTicketPreview(
    updatedTrip,
    qs("ticketType").value,
    Number(qs("passengers").value),
    Number(qs("tripCount").value)
  );
  syncTicketStationSelectors(updatedTrip);
}

function setupObservers() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
}

function setupEvents() {
  const tripForm = qs("tripForm");
  const ticketForm = qs("ticketForm");
  const tripCount = qs("tripCount");
  const tripCountValue = qs("tripCountValue");
  const topupButton = qs("topupButton");
  const ticketStartStation = qs("ticketStartStation");
  const ticketEndStation = qs("ticketEndStation");
  const swapStations = qs("swapStations");
  const loginForm = qs("loginForm");
  const logoutButton = qs("logoutButton");

  qs("demoFill").addEventListener("click", () => {
    qs("startInput").value = "Koramangala";
    qs("endInput").value = "Manyata Tech Park";
    qs("startInput").focus();
  });

  tripCount.addEventListener("input", () => {
    tripCountValue.textContent = tripCount.value;
    updateTicketPreview(
      getEffectiveTicketTrip(),
      qs("ticketType").value,
      Number(qs("passengers").value),
      Number(qs("tripCount").value)
    );
  });

  if (topupButton) {
    topupButton.addEventListener("click", () => {
      topUpWallet(qs("topupAmount").value);
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = qs("loginName").value.trim();
      const phone = qs("loginPhone").value.trim();
      if (!name || !phone) {
        showTicketStatus("Enter name and mobile number to log in.", "error");
        return;
      }
      saveAuth({
        loggedIn: true,
        name,
        phone,
        joinedAt: Date.now(),
      });
      renderAuth();
      renderWallet();
      if (navigator.onLine) {
        syncPendingTickets();
      }
      updateTicketPreview(
        getEffectiveTicketTrip(),
        qs("ticketType").value,
        Number(qs("passengers").value),
        Number(qs("tripCount").value)
      );
      showTicketStatus(`Welcome ${name}! Wallet unlocked.`, "success");
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      saveAuth({
        loggedIn: false,
        name: "",
        phone: "",
        joinedAt: null,
      });
      renderAuth();
      renderWallet();
      updateTicketPreview(
        getEffectiveTicketTrip(),
        qs("ticketType").value,
        Number(qs("passengers").value),
        Number(qs("tripCount").value)
      );
      showTicketStatus("Logged out. Wallet locked.", "info");
    });
  }

  if (ticketStartStation) {
    ticketStartStation.addEventListener("change", () => {
      void applyTicketStationOverride();
    });
  }

  if (ticketEndStation) {
    ticketEndStation.addEventListener("change", () => {
      void applyTicketStationOverride();
    });
  }

  if (swapStations) {
    swapStations.addEventListener("click", () => {
      if (!ticketStartStation || !ticketEndStation) return;
      const temp = ticketStartStation.value;
      ticketStartStation.value = ticketEndStation.value;
      ticketEndStation.value = temp;
      void applyTicketStationOverride();
    });
  }

  tripForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const startText = qs("startInput").value;
    const endText = qs("endInput").value;
    if (!startText || !endText) return;

    qs("routeSummary").textContent = "Locating nearest stations...";
    const [startLocation, endLocation] = await Promise.all([
      geocodePlace(startText),
      geocodePlace(endText),
    ]);

    if (!startLocation || !endLocation) {
      qs("routeSummary").textContent =
        "Unable to geocode one of the locations. Try adding a Bengaluru landmark.";
      return;
    }

    if (
      !isWithinBengaluru(startLocation.lat, startLocation.lon) ||
      !isWithinBengaluru(endLocation.lat, endLocation.lon)
    ) {
      qs("routeSummary").textContent =
        "Locations must be within Bengaluru city limits for this demo.";
      return;
    }

    const [nearestStart, nearestEnd] = await Promise.all([
      findNearestStation(startLocation, startText),
      findNearestStation(endLocation, endText),
    ]);
    if (!nearestStart.station || !nearestEnd.station) {
      qs("routeSummary").textContent =
        "Unable to identify nearby metro stations. Please refine the location.";
      return;
    }
    const startAccessDistanceKm = haversineDistance(
      startLocation,
      nearestStart.station
    );
    const endAccessDistanceKm = haversineDistance(endLocation, nearestEnd.station);
    const stationDistanceKm = haversineDistance(
      nearestStart.station,
      nearestEnd.station
    );
    const fare = estimateFare(stationDistanceKm);
    const [startAccessOptions, endAccessOptions] = await Promise.all([
      getLastMileOptions(nearestStart.station, startLocation, startText, "to-station"),
      getLastMileOptions(nearestEnd.station, endLocation, endText, "from-station"),
    ]);

    const trip = {
      startText,
      endText,
      startLocation,
      endLocation,
      startStation: nearestStart.station,
      endStation: nearestEnd.station,
      startAccessDistanceKm,
      endAccessDistanceKm,
      stationDistanceKm,
      fare,
      startAccessOptions,
      endAccessOptions,
      routeSummary: buildRouteSummary(nearestStart.station, nearestEnd.station),
    };

    state.trip = trip;
    state.ticketTrip = null;
    updateResults(trip);
    if (qs("aiToggle").checked) {
      updateAiInsight(trip);
    } else {
      qs("aiInsight").textContent = "AI guidance disabled. Turn it on to view insights.";
    }

    updateTicketPreview(
      trip,
      qs("ticketType").value,
      Number(qs("passengers").value),
      Number(qs("tripCount").value)
    );
  });

  ticketForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const ticketType = qs("ticketType").value;
    const passengers = Number(qs("passengers").value);
    const tripCountNumber = Number(qs("tripCount").value);
    const paymentMethod = qs("paymentMethod").value;
    const activeTrip = getEffectiveTicketTrip();
    updateTicketPreview(activeTrip, ticketType, passengers, tripCountNumber);
    issueTicket({
      trip: activeTrip,
      ticketType,
      passengers,
      tripCount: tripCountNumber,
      paymentMethod,
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLineLists();
  renderInterchanges();
  setupObservers();
  setupEvents();
  syncTicketStationSelectors(state.trip);
  ensureAuth();
  renderAuth();
  ensureWallet();
  renderWallet();
  renderTicketMeta(state.lastTicket);
  updateTicketPreview(getEffectiveTicketTrip(), "single", 1, 2);
  syncPendingTickets();

  window.addEventListener("online", () => {
    renderWallet();
    if (isLoggedIn()) {
      syncPendingTickets();
      showTicketStatus("Back online. Wallet synced with metro server.", "success");
    }
  });

  window.addEventListener("offline", () => {
    renderWallet();
    if (isLoggedIn()) {
      showTicketStatus("You are offline. Wallet payments are still available.", "info");
    }
  });
});
