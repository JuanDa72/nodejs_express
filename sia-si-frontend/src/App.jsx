// src/App.jsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <-- 1. IMPORTA EL LINK
import './App.css'; 

function App() {
  
  const [carreras, setCarreras] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // ... (toda la lógica de useEffect y fetch se queda igual) ...
  useEffect(() => {
    async function fetchCarreras() {
      try {
        const response = await fetch('http://localhost:4000/api/carreras');
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue OK');
        }
        const data = await response.json();
        setCarreras(data);
      } catch (error) {
        console.error("¡Error al traer las carreras!", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCarreras();
  }, []); 
  
  return (
    <div>
      <h1>Visor de Mallas Curriculares</h1>
      
      {loading && <p>Cargando carreras...</p>}
      
      {!loading && (
        <ul className="carreras-lista">
          {carreras.map((carrera) => (
            <li key={carrera.id} className="carrera-item">
              
              {/* 2. AQUÍ ESTÁ EL CAMBIO:
                  En lugar de <strong>, usamos <Link>
                  que nos lleva a la ruta "/carrera/ID_DE_LA_CARRERA" */}
              <Link to={`/carrera/${carrera.id}`}>
                <strong>{carrera.nombre}</strong>
              </Link>
              
              <p>Código: {carrera.codigo_plan} | Créditos: {carrera.creditos_totales}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;