import React from "react";
import baristaData from "../data/baristaData";

const DashboardScreen = ({ onNavigate, usuario }) => {
  const { nombreNegocio, reportes, ai, planes } = baristaData;

  const handleNavigate = (screen) => {
    if (onNavigate) {
      onNavigate(screen);
    }
  };

  const moneda = baristaData.demoConfig?.moneda ?? "$";
  const planDestacado =
    planes?.find((p) => p.destacado) || (planes && planes[0]);

  return (
    <div className="page dashboard-page">
      {/* Header */}
      <header className="dash-header">
        <div>
          <h1 className="dash-title">{nombreNegocio}</h1>
          <p className="dash-subtitle">Panel principal · Versión demo</p>
        </div>
        <div className="dash-user">
          <p className="dash-user-name">
            Bienvenido
            {usuario?.nombre ? `, ${usuario.nombre}` : ""}.
          </p>
          <p className="dash-user-role">
            Rol: {usuario?.rol ?? "admin demo"}
          </p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="dash-main">
        {/* Resumen rápido */}
        <section className="dash-section">
          <h2 className="section-title">Resumen de hoy</h2>
          <div className="dash-grid dash-grid-3">
            <div className="stat-card">
              <p className="stat-label">Ventas de hoy</p>
              <p className="stat-value">
                {moneda}
                {reportes.ventasHoy.toFixed(2)}
              </p>
              <p className="stat-note stat-note-positive">
                +{reportes.incrementoSemanal}% vs semana anterior
              </p>
            </div>

            <div className="stat-card">
              <p className="stat-label">Órdenes</p>
              <p className="stat-value">{reportes.totalOrdenes}</p>
              <p className="stat-note">
                Ticket promedio: {moneda}
                {reportes.ticketPromedio.toFixed(2)}
              </p>
            </div>

            <div className="stat-card">
              <p className="stat-label">Producto más vendido</p>
              <p className="stat-value-small">
                {reportes.productoMasVendido}
              </p>
              <p className="stat-note stat-note-warning">
                Mantén stock alto de este producto
              </p>
            </div>
          </div>
        </section>

        {/* Módulos */}
        <section className="dash-section">
          <h2 className="section-title">Módulos de BaristaApp</h2>
          <div className="dash-grid dash-grid-3">
            {/* Tomar pedido */}
            <div className="module-card">
              <div>
                <h3 className="module-title">Tomar pedido</h3>
                <p className="module-text">
                  Agrega cafés, pupusas y comidas al carrito de forma rápida.
                </p>
              </div>
              <button
                onClick={() => handleNavigate("orders")}
                className="btn btn-green"
              >
                Ir a Tomar pedido
              </button>
            </div>

            {/* Órdenes / Cocina */}
            <div className="module-card">
              <div>
                <h3 className="module-title">Órdenes / Cocina</h3>
                <p className="module-text">
                  Visualiza órdenes en verde, amarillo y rojo según su estado.
                </p>
              </div>
              <button
                onClick={() => handleNavigate("kitchen")}
                className="btn btn-blue"
              >
                Ir a Órdenes
              </button>
            </div>

            {/* Mesas */}
            <div className="module-card">
              <div>
                <h3 className="module-title">Mesas</h3>
                <p className="module-text">
                  Ve mesas libres, ocupadas o sucias en un solo vistazo.
                </p>
              </div>
              <button
                onClick={() => handleNavigate("tables")}
                className="btn btn-indigo"
              >
                Ir a Mesas
              </button>
            </div>

            {/* Reportes */}
            <div className="module-card">
              <div>
                <h3 className="module-title">Reportes</h3>
                <p className="module-text">
                  Resumen visual de ventas, órdenes y productos clave.
                </p>
              </div>
              <button
                onClick={() => handleNavigate("reports")}
                className="btn btn-amber"
              >
                Ver reportes
              </button>
            </div>

            {/* BaristaApp AI */}
            <div className="module-card">
              <div>
                <h3 className="module-title">BaristaApp AI</h3>
                <p className="module-text">
                  Análisis, predicciones y alertas inteligentes para tu negocio.
                </p>
                {ai?.analisis && ai.analisis[0] && (
                  <p className="module-highlight">
                    Ejemplo: {ai.analisis[0].descripcion}
                  </p>
                )}
              </div>
              <button
                onClick={() => handleNavigate("ai")}
                className="btn btn-purple"
              >
                Abrir BaristaApp AI
              </button>
            </div>

            {/* Planes y precios */}
            <div className="module-card">
              <div>
                <h3 className="module-title">Planes y precios</h3>
                <p className="module-text">
                  Descubre los planes de suscripción de BaristaApp, desde lo
                  básico hasta IA avanzada.
                </p>
                {planDestacado && (
                  <p className="module-highlight">
                    Desde{" "}
                    <strong>
                      {moneda}
                      {planDestacado.precioMensual}
                      /mes
                    </strong>{" "}
                    — plan {planDestacado.nombre}.
                  </p>
                )}
              </div>
              <button
                onClick={() => handleNavigate("plans")}
                className="btn btn-teal"
              >
                Ver planes
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardScreen;
