import React from "react";
import "./App.css";
import "./Componentes/Caract";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <h1>Phonex</h1>
          <ul>
            <li>
              <a href="#Features">Caracteristicas</a>
            </li>
            <li>
              <a href="#Servicios">Servicios</a>
            </li>
            <li>
              <a href="#Contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="Inicio">
        <h2>Bienvenidos a Phonex</h2>
        <p>
          Ofrecemos unos de los mejores servicios medicos dandote la seguridad y
          bienestar que tanto necesitas{" "}
        </p>
        <button>Comienza ahora</button>
      </section>

      <section className="Beneficios "></section>
      <h2>Conoce mas de nuestros beneficios</h2>
      <p>
        Te ofrecemos una atencion primordial en nuestras instalaciones, poniendo
        primero al usuario y sus necesidades{" "}
      </p>
    </div>
  );
}

export default App;
