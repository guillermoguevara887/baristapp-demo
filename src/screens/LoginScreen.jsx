import React, { useState } from "react";
import baristaData from "../data/baristaData";

const LoginScreen = ({ onLoginSuccess }) => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const demoUser = baristaData.usuariosDemo[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login SIMULADO para el demo
    if (usuario === demoUser.usuario && contrasena === demoUser.contrasena) {
      onLoginSuccess(demoUser);
    } else {
      alert("Usuario o contraseña incorrectos (usa admin / demo123)");
    }
  };

  return (
    <div className="page login-page">
      <div className="login-card">
        <div className="login-header">
          {baristaData.logoUrl && (
            <img
              src={baristaData.logoUrl}
              alt={baristaData.nombreNegocio}
              className="login-logo"
            />
          )}
          <h1 className="login-title">{baristaData.nombreNegocio}</h1>
          <p className="login-subtitle">
            {baristaData.slogan ?? "Tu restaurante, con superpoderes de IA"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="usuario" className="form-label">
              Usuario
            </label>
            <input
              id="usuario"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder={demoUser.usuario ?? "admin"}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contrasena" className="form-label">
              Contraseña
            </label>
            <input
              id="contrasena"
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder={demoUser.contrasena ?? "demo123"}
              className="form-input"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Entrar
          </button>

          <p className="login-hint">
            Demo: usuario <strong>{demoUser.usuario}</strong> · contraseña{" "}
            <strong>{demoUser.contrasena}</strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
