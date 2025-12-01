// src/pages/CarreraDetalle.jsx

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importamos 'Link' y 'useParams'

function CarreraDetalle() {
  // Hook 'useParams' nos deja leer los parámetros de la URL (ej. el :carreraId)
  const { carreraId } = useParams();

  // (El resto es casi igual a App.jsx, pero con 2 'fetch')
  const [carrera, setCarrera] = useState(null);
  const [materias, setMaterias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para traer la info de la carrera (ej. el nombre)
    async function fetchCarreraInfo() {
      try {
        const res = await fetch(`http://localhost:4000/api/carreras/${carreraId}`);
        if (!res.ok) throw new Error('Error al traer info de la carrera');
        const data = await res.json();
        setCarrera(data);
      } catch (error) {
        console.error(error);
      }
    }

    // Función para traer las materias de ESA carrera
    async function fetchMaterias() {
      try {
        // ¡Usamos el nuevo endpoint que creamos en el backend!
        const res = await fetch(`http://localhost:4000/api/materias/carrera/${carreraId}`);
        if (!res.ok) throw new Error('Error al traer las materias');
        const data = await res.json();
        setMaterias(data);
      } catch (error) {
        console.error(error);
      }
    }

    // Función principal que se ejecuta al cargar
    async function loadData() {
      setLoading(true);
      // Ejecutamos ambas peticiones
      await Promise.all([
        fetchCarreraInfo(),
        fetchMaterias()
      ]);
      setLoading(false);
    }

    loadData();
  }, [carreraId]); // Se re-ejecuta si el 'carreraId' de la URL cambia

  // --- Parte Visual (JSX) ---

  if (loading) {
    return <p>Cargando materias...</p>;
  }

  if (!carrera) {
    return <p>Carrera no encontrada.</p>;
  }

  return (
    <div>
      {/* Link para volver al inicio */}
      <Link to="/">&larr; Volver a todas las carreras</Link>
      
      <h1>{carrera.nombre}</h1>
      <p>Malla curricular completa. {materias.length} materias encontradas.</p>

      <ul className="materias-lista"> {/* Podemos reusar los estilos de App.css */}
        {materias.map((materia) => (
          <li key={materia.id} className="carrera-item"> {/* Reusamos el estilo */}
            <strong>{materia.nombre}</strong> (Semestre: {materia.semestre})
            <p>Código: {materia.codigo} | Créditos: {materia.creditos}</p>
            <p>Tipo: {materia.tipo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarreraDetalle;