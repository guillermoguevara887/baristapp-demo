import React from "react";
import baristaData from "../data/baristaData";

const PlansScreen = ({ onBack }) => {
  const { planes, demoConfig, nombreNegocio } = baristaData;
  const moneda = demoConfig?.moneda ?? "$";

  return (
    <div className="plans-page">
      {/* Header */}
      <header className="plans-header">
        <div className="plans-logo-box">
          <div className="plans-logo-icon">BA</div>
          <div>
            <p className="section-title">Planes</p>
            <h1 className="module-title">{nombreNegocio}</h1>
          </div>
        </div>

        {onBack && (
          <button className="plans-back-btn" onClick={onBack}>
            ← Volver
          </button>
        )}
      </header>

      {/* Hero */}
      <div className="plans-hero">
        <h2 className="plans-hero-title">
          Elige el plan ideal para tu negocio
        </h2>
        <p className="plans-hero-text">
          Todos los planes incluyen prueba gratis de 14 días.
        </p>
      </div>

      {/* Grid de planes */}
      <div className="plans-grid">
        {planes.map((plan) => {
          const esPopular = plan.destacado;

          return (
            <div
              key={plan.id}
              className={`plan-card ${esPopular ? "popular" : ""}`}
              style={{ position: "relative" }}
            >
              {esPopular && (
                <div className="plan-tag">Más popular</div>
              )}

              <h3 className="plan-title">{plan.nombre}</h3>
              <p className="plan-publico">{plan.publico}</p>

              <div>
                <span className="plan-precio">
                  {moneda}
                  {plan.precioMensual}
                </span>
                <span className="plan-precio-mes"> / mes</span>
              </div>

              <ul className="plan-list">
                {plan.incluye.map((item, index) => (
                  <li key={index}>
                    <span className="plan-list-bullet"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                className={`plan-btn ${esPopular ? "popular" : ""}`}
              >
                Empezar prueba gratis
              </button>
            </div>
          );
        })}
      </div>

      <p className="plans-footer-text">
        Próximamente podrás activar módulos individuales como empleados,
        inventario o IA avanzada.
      </p>
    </div>
  );
};

export default PlansScreen;
