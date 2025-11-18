import React, { useState } from "react";

import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import OrderScreen from "./screens/OrderScreen";
import KitchenScreen from "./screens/KitchenScreen";
import TablesScreen from "./screens/TablesScreen";
import ReportsScreen from "./screens/ReportsScreen";
import AiScreen from "./screens/AiScreen";
import PlansScreen from "./screens/PlansScreen";

function App() {
  const [pantalla, setPantalla] = useState("login");
  const [usuarioActual, setUsuarioActual] = useState(null);

  const handleLoginSuccess = (usuarioDemo) => {
    setUsuarioActual(usuarioDemo);
    setPantalla("dashboard");
  };

  const handleNavigate = (screen) => {
    setPantalla(screen);
  };

  return (
    <>
      {/* LOGIN */}
      {pantalla === "login" && (
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      )}

      {/* DASHBOARD */}
      {pantalla === "dashboard" && (
        <DashboardScreen usuario={usuarioActual} onNavigate={handleNavigate} />
      )}

      {/* TOMAR PEDIDO */}
      {pantalla === "orders" && (
        <OrderScreen onNavigate={handleNavigate} />
      )}

      {/* COCINA */}
      {pantalla === "kitchen" && (
        <KitchenScreen onNavigate={handleNavigate} />
      )}

      {/* MESAS */}
      {pantalla === "tables" && (
        <TablesScreen onNavigate={handleNavigate} />
      )}

      {/* REPORTES */}
      {pantalla === "reports" && (
        <ReportsScreen onNavigate={handleNavigate} />
      )}

      {/* AI */}
      {pantalla === "ai" && <AiScreen onNavigate={handleNavigate} />}

      {/* PLANES */}
      {pantalla === "plans" && (
        <PlansScreen onBack={() => setPantalla("dashboard")} />
      )}
    </>
  );
}

export default App;
