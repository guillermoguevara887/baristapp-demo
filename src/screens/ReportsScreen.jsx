import React, { useState } from "react";
import baristaData from "../data/baristaData";

const ReportsScreen = ({ onNavigate }) => {
  const { reportes, recomendacionReporte } = baristaData;
  const [mostrarRecomendacion, setMostrarRecomendacion] = useState(false);

  const moneda = baristaData.demoConfig?.moneda ?? "$";

  const ejemploBarras = [
    { label: "Lun", valor: 60 },
    { label: "Mar", valor: 80 },
    { label: "Mié", valor: 50 },
    { label: "Jue", valor: 90 },
    { label: "Vie", valor: 120 },
    { label: "Sáb", valor: 150 },
    { label: "Dom", valor: 110 }
  ];

  const maxValor = Math.max(...ejemploBarras.map((d) => d.valor));

  return (
    <div className="page reports-page">
      {/* Header */}
      <header className="reports-header">
        <button
          className="btn btn-back"
          onClick={() => onNavigate("dashboard")}
        >
          ← Volver
        </button>
        <h1 className="reports-title">Reportes</h1>
      </header>

      {/* Contenido */}
      <main className="reports-main">
        {/* Resumen principal */}
        <section className="reports-section">
          <h2 className="section-title">Resumen del día</h2>

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
                Mantén stock alto y promociónalo.
              </p>
            </div>
          </div>
        </section>

        {/* Gráfico simple */}
        <section className="reports-section">
          <h2 className="section-title">Ventas por día (ejemplo demo)</h2>

          <div className="reports-chart">
            {ejemploBarras.map((d) => {
              const altura = (d.valor / maxValor) * 100;
              return (
                <div key={d.label} className="chart-bar-wrapper">
                  <div
                    className="chart-bar"
                    style={{ height: `${altura}%` }}
                  />
                  <span className="chart-label">{d.label}</span>
                </div>
              );
            })}
          </div>

          <p className="chart-note">
            * Datos ficticios para la demostración del flujo.
          </p>
        </section>

        {/* Recomendación */}
        <section className="reports-section">
          <h2 className="section-title">Recomendación de BaristaApp</h2>

          <button
            className="btn btn-amber"
            onClick={() => setMostrarRecomendacion(true)}
          >
            Ver recomendación
          </button>

          {mostrarRecomendacion && (
            <div className="recomendacion-card">
              <p className="recomendacion-text">{recomendacionReporte}</p>
              <p className="recomendacion-note">
                Esta recomendación se basa en las ventas recientes de tu
                negocio.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ReportsScreen;
