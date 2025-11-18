import React, { useState } from "react";
import baristaData from "../data/baristaData";

const AiScreen = ({ onNavigate }) => {
  const { ai } = baristaData;

  const [tab, setTab] = useState("analisis"); // "analisis" | "predicciones" | "alertas"

  const getTabData = () => {
    if (tab === "analisis") return ai.analisis ?? [];
    if (tab === "predicciones") return ai.predicciones ?? [];
    if (tab === "alertas") return ai.alertas ?? [];
    return [];
  };

  const getTabTitle = () => {
    if (tab === "analisis") return "Análisis";
    if (tab === "predicciones") return "Predicciones";
    if (tab === "alertas") return "Alertas";
    return "";
  };

  const isActive = (name) => (tab === name ? "ai-tab active" : "ai-tab");

  const items = getTabData();
  const title = getTabTitle();

  return (
    <div className="page ai-page">
      {/* Header */}
      <header className="ai-header">
        <button
          className="btn btn-back"
          onClick={() => onNavigate("dashboard")}
        >
          ← Volver
        </button>
        <h1 className="ai-title">BaristaApp AI</h1>
      </header>

      {/* Contenido */}
      <main className="ai-main">
        {/* Tabs */}
        <section className="ai-section">
          <h2 className="section-title">
            Inteligencia para tu restaurante
          </h2>

          <div className="ai-tabs">
            <button
              className={isActive("analisis")}
              onClick={() => setTab("analisis")}
            >
              Análisis
            </button>
            <button
              className={isActive("predicciones")}
              onClick={() => setTab("predicciones")}
            >
              Predicciones
            </button>
            <button
              className={isActive("alertas")}
              onClick={() => setTab("alertas")}
            >
              Alertas
            </button>
          </div>
        </section>

        {/* Lista de tarjetas */}
        <section className="ai-section">
          <h3 className="ai-subtitle">{title}</h3>

          <div className="ai-cards">
            {items.map((item, index) => (
              <div
                key={index}
                className={
                  tab === "alertas"
                    ? "ai-card ai-card-alerta"
                    : "ai-card"
                }
              >
                <h4 className="ai-card-title">{item.titulo}</h4>
                <p className="ai-card-text">{item.descripcion}</p>

                {tab === "alertas" && item.nivel && (
                  <span className={`ai-badge ai-badge-${item.nivel}`}>
                    {item.nivel === "critical"
                      ? "Crítica"
                      : item.nivel === "warning"
                        ? "Advertencia"
                        : "Info"}
                  </span>
                )}
              </div>
            ))}

            {items.length === 0 && (
              <p className="ai-empty">
                No hay datos para esta sección en la demo.
              </p>
            )}
          </div>
        </section>

        {/* Nota final */}
        <section className="ai-section">
          <p className="ai-footnote">
            Esta vista muestra cómo BaristaApp podría analizar tus datos,
            anticipar lo que viene y alertarte antes de que haya problemas.
            En la versión real, estos insights se generan a partir de las
            ventas, horarios, inventario y comportamiento de tus clientes.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AiScreen;
