import React from "react";
import baristaData from "../data/baristaData";

const KitchenScreen = ({ onNavigate }) => {
  const ordenes = baristaData.ordenes;

  const getEstadoLabel = (estado) => {
    if (estado === "listo") return "Listo";
    if (estado === "preparando") return "En preparación";
    if (estado === "urgente") return "Urgente";
    return estado;
  };

  const getEstadoClass = (estado) => {
    if (estado === "listo") return "badge badge-green";
    if (estado === "preparando") return "badge badge-yellow";
    if (estado === "urgente") return "badge badge-red";
    return "badge";
  };

  return (
    <div className="page kitchen-page">
      {/* Header */}
      <header className="kitchen-header">
        <button
          className="btn btn-back"
          onClick={() => onNavigate("dashboard")}
        >
          ← Volver
        </button>
        <h1 className="kitchen-title">Órdenes / Cocina</h1>
      </header>

      {/* Contenido */}
      <main className="kitchen-main">
        <section className="kitchen-section">
          <h2 className="section-title">Órdenes activas</h2>

          <div className="kitchen-grid">
            {ordenes.map((orden) => (
              <div key={orden.id} className="kitchen-card">
                <div className="kitchen-card-header">
                  <span className="kitchen-order-id">{orden.id}</span>
                  <span className={getEstadoClass(orden.estado)}>
                    {getEstadoLabel(orden.estado)}
                  </span>
                </div>

                <p className="kitchen-meta">
                  Mesa:{" "}
                  <strong>{orden.mesa != null ? orden.mesa : "Para llevar"}</strong>
                </p>
                <p className="kitchen-meta">
                  Hora: <strong>{orden.hora}</strong>
                </p>

                <div className="kitchen-items">
                  {orden.items.map((item, index) => {
                    const producto = baristaData.productos.find(
                      (p) => p.id === item.productoId
                    );

                    return (
                      <div key={index} className="kitchen-item-row">
                        <span className="kitchen-item-qty">
                          x{item.cantidad}
                        </span>
                        <span className="kitchen-item-name">
                          {producto ? producto.nombre : item.productoId}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p className="kitchen-note">
                  Nota: versión demo, estados fijos para el video.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default KitchenScreen;
