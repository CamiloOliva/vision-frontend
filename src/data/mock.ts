export const kpis = [
  { label: "Órdenes activas", value: 12, delta: "+3", tone: "primary" },
  { label: "SKUs en stock bajo", value: 5, delta: "-2", tone: "warning" },
  { label: "Producción hoy (uds)", value: 1480, delta: "+12%", tone: "success" },
  { label: "Margen promedio", value: "32.4%", delta: "+1.2pp", tone: "primary" },
];

export const stockTrend = [
  { d: "Lun", in: 320, out: 280 },
  { d: "Mar", in: 410, out: 360 },
  { d: "Mié", in: 280, out: 340 },
  { d: "Jue", in: 520, out: 410 },
  { d: "Vie", in: 460, out: 480 },
  { d: "Sáb", in: 300, out: 220 },
  { d: "Dom", in: 180, out: 90 },
];

export const productionTrend = [
  { d: "S1", plan: 1200, real: 1100 },
  { d: "S2", plan: 1300, real: 1280 },
  { d: "S3", plan: 1250, real: 1310 },
  { d: "S4", plan: 1400, real: 1370 },
  { d: "S5", plan: 1500, real: 1480 },
];

export const materials = [
  { id: "MP-001", name: "Acero laminado 2mm", unit: "kg", stock: 1240, reorder: 800, cpp: 4.85, status: "ok" },
  { id: "MP-002", name: "Pintura epóxica azul", unit: "L",  stock: 38,   reorder: 60,  cpp: 12.40, status: "low" },
  { id: "MP-003", name: "Tornillo M6 inox",     unit: "ud", stock: 9800, reorder: 5000, cpp: 0.08, status: "ok" },
  { id: "MP-004", name: "Empaque cartón XL",    unit: "ud", stock: 120,  reorder: 200, cpp: 0.75, status: "low" },
  { id: "MP-005", name: "Lubricante industrial",unit: "L",  stock: 0,    reorder: 50,  cpp: 6.20, status: "out" },
  { id: "MP-006", name: "Cable AWG 14",         unit: "m",  stock: 2400, reorder: 1000, cpp: 0.34, status: "ok" },
];

export const products = [
  { id: "PT-101", name: "Estructura metálica STD", bomItems: 6, estCost: 84.20, price: 139.0, stock: 42 },
  { id: "PT-102", name: "Mesa de trabajo Pro",     bomItems: 9, estCost: 162.5, price: 259.0, stock: 18 },
  { id: "PT-103", name: "Estante modular S",        bomItems: 4, estCost: 38.7,  price: 69.9,  stock: 96 },
  { id: "PT-104", name: "Carro logístico XL",       bomItems: 12, estCost: 245.0, price: 399.0, stock: 7 },
];

export const productionOrders = [
  { id: "OP-2026-0142", product: "Mesa de trabajo Pro", qty: 50,  status: "En proceso", progress: 64, due: "08 May" },
  { id: "OP-2026-0143", product: "Estructura metálica STD", qty: 120, status: "Planificada", progress: 0, due: "11 May" },
  { id: "OP-2026-0141", product: "Estante modular S", qty: 80,  status: "Liberada", progress: 22, due: "07 May" },
  { id: "OP-2026-0140", product: "Carro logístico XL", qty: 20,  status: "Completada", progress: 100, due: "05 May" },
  { id: "OP-2026-0139", product: "Mesa de trabajo Pro", qty: 30,  status: "Detenida", progress: 48, due: "06 May" },
];

export const sales = [
  { id: "FV-9821", client: "Industrias Norte SAS", date: "2026-05-05", total: 4870.00, status: "Pagada" },
  { id: "FV-9822", client: "Metalúrgica Andina",   date: "2026-05-05", total: 12450.00, status: "Pendiente" },
  { id: "FV-9823", client: "Tornillos del Sur",    date: "2026-05-04", total: 980.50,  status: "Pagada" },
  { id: "FV-9824", client: "Construcciones JL",    date: "2026-05-04", total: 7320.00, status: "Vencida" },
  { id: "FV-9825", client: "Logística Pacífico",   date: "2026-05-03", total: 2150.00, status: "Pagada" },
];

export const finance = [
  { d: "Ene", income: 42000, expense: 31000 },
  { d: "Feb", income: 48500, expense: 33500 },
  { d: "Mar", income: 51200, expense: 36800 },
  { d: "Abr", income: 56400, expense: 38900 },
  { d: "May", income: 61000, expense: 41200 },
];
