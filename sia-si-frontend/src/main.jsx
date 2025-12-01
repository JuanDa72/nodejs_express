// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

// 1. ¡AQUÍ ESTÁ LA CORRECCIÓN 1 y 2!
//    ./ (un punto) y CarreraDetalle (con C mayúscula)
import CarreraDetalle from './pages/carreraDetalle.jsx';

// 2. Aquí definimos nuestras "rutas" o "páginas"
const router = createBrowserRouter([
  {
    path: '/', // La ruta raíz (ej. localhost:5173/)
    element: <App />, // ¡Usa el componente App!
  },
  // 3. ¡AQUÍ ESTÁ LA CORRECCIÓN 3!
  //    El componente <CarreraDetalle /> debe ir con C mayúscula
  {
    path: '/carrera/:carreraId', // ej. /carrera/1
    element: <CarreraDetalle />,
  },
]);

// 4. Le decimos a React que use nuestro router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);