import React, { useState } from "react";
import baristaData from "../data/baristaData";

const OrderScreen = ({ onNavigate }) => {
  const productos = baristaData.productos;

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);

      if (existente) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const quitarDelCarrito = (id) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const enviarOrden = () => {
    if (carrito.length === 0) {
      alert("Carrito vacío");
      return;
    }

    alert("Orden enviada (versión demo).");
    setCarrito([]);

    if (onNavigate) onNavigate("dashboard");
  };

  return (
    <div className="page orders-page">
      {/* Header */}
      <header className="orders-header">
        <button className="btn btn-back" onClick={() => onNavigate("dashboard")}>
          ← Volver
        </button>
        <h1 className="orders-title">Tomar Pedido</h1>
      </header>

      <main className="orders-main">
        {/* Lista de productos */}
        <section className="products-section">
          <h2 className="section-title">Menú</h2>

          <div className="products-grid">
            {productos.map((p) => (
              <div key={p.id} className="product-card">
                <h3 className="product-name">{p.nombre}</h3>
                <p className="product-category">{p.categoria}</p>
                <p className="product-price">
                  ${p.precio.toFixed(2)}
                </p>
                <button
                  className="btn btn-product"
                  onClick={() => agregarAlCarrito(p)}
                >
                  Agregar
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Carrito */}
        <section className="cart-section">
          <h2 className="section-title">Carrito</h2>

          <div className="cart-items">
            {carrito.length === 0 && (
              <p className="empty-cart">El carrito está vacío</p>
            )}

            {carrito.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-info">
                  <p className="cart-name">{item.nombre}</p>
                  <p className="cart-qty">x{item.cantidad}</p>
                </div>

                <div className="cart-actions">
                  <button
                    className="btn btn-small btn-minus"
                    onClick={() => quitarDelCarrito(item.id)}
                  >
                    −
                  </button>
                  <button
                    className="btn btn-small btn-plus"
                    onClick={() => agregarAlCarrito(item)}
                  >
                    +
                  </button>
                </div>

                <p className="cart-price">
                  ${(item.precio * item.cantidad).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="cart-total-section">
            <p className="cart-total-label">Total:</p>
            <p className="cart-total-value">${total.toFixed(2)}</p>
          </div>

          <button className="btn btn-send" onClick={enviarOrden}>
            Enviar Orden
          </button>
        </section>
      </main>
    </div>
  );
};

export default OrderScreen;
