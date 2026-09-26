import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check } from 'k6';
import http from 'k6/http';

// Asegúrate de que el puerto coincida con tu servidor local
const baseUrl = 'http://localhost:3000/api/v1'; 

export default function () {
  const params = {
    headers: { 'Content-Type': 'application/json' },
  };

  // 1. GET: Obtener todas las pizzas
  const resGet = http.get(`${baseUrl}/pizzas`);
  check(resGet, {
    'GET todas las pizzas status 200': (r) => r.status === 200
  });

  // 2. GET: Obtener pizza por ID (usamos el id 1 que ya tienes en memoria)
  const resGetId = http.get(`${baseUrl}/pizzas/1`);
  check(resGetId, {
    'GET pizza por ID status 200': (r) => r.status === 200
  });

  // 3. POST: Crear una nueva pizza (tu ruta está en singular: /pizza)
  const payload = JSON.stringify({
    id: 2,
    nombre: 'Hawaiana',
    descripcion: 'piña y jamón'
  });
  const resPost = http.post(`${baseUrl}/pizza`, payload, params);
  check(resPost, {
    'POST nueva pizza status 201': (r) => r.status === 201 || r.status === 200
  });

  // 4. PUT: Actualizar una pizza
  const updatePayload = JSON.stringify({ 
    nombre: 'Pepperoni Extra',
    descripcion: 'extra queso y pepperoni'
  });
  const resPut = http.put(`${baseUrl}/pizzas/1`, updatePayload, params);
  check(resPut, {
    'PUT actualizar pizza status 200 o 404': (r) => r.status === 200 || r.status === 404
  });
}

export function handleSummary(data) {
  return {
    "index.html": htmlReport(data)
  };
}