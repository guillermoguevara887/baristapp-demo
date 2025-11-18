import React from "react";
import baristaData from "../data/baristaData";

const TablesScreen = ({ onNavigate }) => {
  const mesas = baristaData.mesas;

  const getEstadoLabel = (estado) => {
    if (estado === "libre") return "Libre";
    if (estado === "ocupada") return "Ocupada";
    if (estado === "sucia") return "Por limpiar";
    return estado;
  };

  const getEstadoClass = (estado) => {
    if (estado === "libre") return "mesa mesa-libre";
    if (estado === "ocupada") return "mesa mesa-ocupada";
    if (estado === "sucia") return "mesa mesa-sucia";
    return "mesa";
  };

  return (
    <div className="page tables-page">
      {/* Header */}
      <header className="tables-header">
        <button
          className="btn btn-back"
          onClick={() => onNavigate("dashboard")}
        >
          ← Volver
        </button>
        <h1 className="tables-title">Mesas</h1>
      </header>

      {/* Contenido */}
      <main className="tables-main">
        <section className="tables-section">
          <h2 className="section-title">Vista de sala</h2>

          <div className="tables-grid">
            {mesas.map((mesa) => (
              <div key={mesa.numero} className="table-card">
                <div className={getEstadoClass(mesa.estado)}>
                  <span className="mesa-numero">{mesa.numero}</span>
                </div>
                <p className="mesa-estado">{getEstadoLabel(mesa.estado)}</p>
                <p className="mesa-detalle">
                  Capacidad: {mesa.capacidad} personas
                </p>
              </div>
            ))}
          </div>

          <p className="tables-legend-title">Leyenda</p>
          <div className="tables-legend">
            <span className="legend-item">
              <span className="legend-dot legend-dot-libre" /> Libre
            </span>
            <span className="legend-item">
              <span className="legend-dot legend-dot-ocupada" /> Ocupada
            </span>
            <span className="legend-item">
              <span className="legend-dot legend-dot-sucia" /> Por limpiar
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TablesScreen;
