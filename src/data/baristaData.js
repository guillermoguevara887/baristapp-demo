// baristaData.js

const baristaData = {
  // ---------------------------------------------------
  // 1. Información del negocio
  // ---------------------------------------------------
  nombreNegocio: "Café Barista Demo",
  logoUrl: "/logo-barista.png",
  slogan: "Tu restaurante, con superpoderes de IA",

  // ---------------------------------------------------
  // 2. Usuario demo (login simulado)
  // ---------------------------------------------------
  usuariosDemo: [
    {
      usuario: "admin",
      contrasena: "demo123",
      nombre: "Guillermo",
      rol: "admin"
    }
  ],

  // ---------------------------------------------------
  // 3. Productos del menú
  // ---------------------------------------------------
  productos: [
    {
      id: "latte-grande",
      nombre: "Latte grande",
      categoria: "bebida",
      precio: 3.75,
      descripcion: "Café espresso con leche vaporizada.",
      imagenUrl: ""
    },
    {
      id: "americano",
      nombre: "Café americano",
      categoria: "bebida",
      precio: 2.25,
      descripcion: "Café filtrado suave.",
      imagenUrl: ""
    },
    {
      id: "pupusa-queso",
      nombre: "Pupusa de queso",
      categoria: "pupusa",
      precio: 1.25,
      descripcion: "Clásica pupusa de queso.",
      imagenUrl: ""
    },
    {
      id: "pupusa-revueltas",
      nombre: "Pupusa revuelta",
      categoria: "pupusa",
      precio: 1.35,
      descripcion: "Queso, frijol y chicharrón.",
      imagenUrl: ""
    },
    {
      id: "cheeseburger",
      nombre: "Hamburguesa de queso",
      categoria: "comida",
      precio: 4.99,
      descripcion: "Carne, queso cheddar, vegetales frescos.",
      imagenUrl: ""
    },
    {
      id: "milkshake-banano",
      nombre: "Milkshake de banano",
      categoria: "bebida",
      precio: 3.5,
      descripcion: "Batido cremoso de banano.",
      imagenUrl: ""
    }
  ],

  // ---------------------------------------------------
  // 4. Órdenes (KDS / Cocina)
  // ---------------------------------------------------
  ordenes: [
    {
      id: "ORD-101",
      mesa: 3,
      items: [
        { productoId: "pupusa-queso", cantidad: 2 },
        { productoId: "americano", cantidad: 2 }
      ],
      estado: "preparando", // amarillo
      hora: "10:32 AM"
    },
    {
      id: "ORD-102",
      mesa: 1,
      items: [
        { productoId: "cheeseburger", cantidad: 1 },
        { productoId: "milkshake-banano", cantidad: 1 }
      ],
      estado: "urgente", // rojo
      hora: "10:35 AM"
    },
    {
      id: "ORD-103",
      mesa: 5,
      items: [
        { productoId: "latte-grande", cantidad: 2 }
      ],
      estado: "listo", // verde
      hora: "10:37 AM"
    }
  ],

  // ---------------------------------------------------
  // 5. Mesas
  // ---------------------------------------------------
  mesas: [
    { numero: 1, estado: "ocupada", capacidad: 4 },
    { numero: 2, estado: "libre", capacidad: 2 },
    { numero: 3, estado: "ocupada", capacidad: 4 },
    { numero: 4, estado: "sucia", capacidad: 2 },
    { numero: 5, estado: "ocupada", capacidad: 4 },
    { numero: 6, estado: "libre", capacidad: 4 }
  ],

  // ---------------------------------------------------
  // 6. Reportes
  // ---------------------------------------------------
  reportes: {
    ventasHoy: 235.75,
    totalOrdenes: 42,
    productoMasVendido: "Pupusa de queso",
    incrementoSemanal: 15,      // 15%
    ticketPromedio: 5.60
  },

  recomendacionReporte:
    "Tus ventas de Latte han aumentado 15%. Considera promocionar tamaños grandes los fines de semana.",

  // ---------------------------------------------------
  // 7. IA (Análisis / Predicciones / Alertas)
  // ---------------------------------------------------
  ai: {
    analisis: [
      {
        titulo: "Ventas de hamburguesa de queso",
        descripcion: "Has vendido un 15% más de hamburguesas de queso esta semana."
      },
      {
        titulo: "Preferencia de queso cheddar",
        descripcion: "El 25% de tus clientes ha elegido queso cheddar en sus órdenes."
      },
      {
        titulo: "Pico de ventas",
        descripcion: "Tus mayores ventas se concentran entre las 6:00 PM y las 8:00 PM."
      }
    ],

    predicciones: [
      {
        titulo: "Empleados para el lunes",
        descripcion: "El próximo lunes solo necesitarás 3 empleados en turno de la mañana."
      },
      {
        titulo: "Demanda de milkshake",
        descripcion: "Se espera menos demanda de milkshake de banano la próxima semana."
      },
      {
        titulo: "Fin de semana",
        descripcion: "Este sábado podrías tener un 30% más clientes que un sábado promedio."
      }
    ],

    alertas: [
      {
        titulo: "Stock de carnes vegetales",
        descripcion: "Casi te quedas sin stock de carnes vegetales en los últimos 3 días.",
        nivel: "warning"
      },
      {
        titulo: "Llegadas tarde",
        descripcion: "Tres empleados han llegado tarde al menos 2 veces esta semana.",
        nivel: "warning"
      },
      {
        titulo: "Tiempo de espera alto",
        descripcion: "El tiempo promedio de espera superó los 20 minutos durante la hora pico.",
        nivel: "critical"
      }
    ]
  },

  // ---------------------------------------------------
  // 8. Configuración del demo
  // ---------------------------------------------------
  demoConfig: {
    mostrarUsuarioActivo: true,
    moneda: "$",
    lenguaje: "es",
    mostrarTooltips: true
  },

  planes: [
    {
      id: "basico",
      nombre: "Básico",
      precioMensual: 19,
      publico: "Pequeños negocios que empiezan",
      incluye: [
        "Lista de espera",
        "Gestión de mesas",
        "Toma de pedidos básica"
      ]
    },
    {
      id: "pro",
      nombre: "Pro",
      precioMensual: 39,
      publico: "Restaurantes con más flujo",
      destacado: true, // para resaltar esta tarjeta
      incluye: [
        "Todo lo del plan Básico",
        "Pantalla de cocina (KDS)",
        "Reportes de ventas",
        "Soporte prioritario"
      ]
    },
    {
      id: "ia",
      nombre: "IA",
      precioMensual: 59,
      publico: "Negocios que quieren inteligencia avanzada",
      incluye: [
        "Todo lo del plan Pro",
        "Análisis con IA",
        "Predicciones de demanda",
        "Alertas inteligentes (stock, puntualidad, tiempos)"
      ]
    }
  ],
};

export default baristaData;
