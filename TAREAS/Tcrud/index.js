import express from "express";
import cors from 'cors';
import {
  obtenerTodasLasPizzasAsync,
  obtenerPizzasPorIdAsync,
  agregarPizzaAsync,
  actualizarPizzaAsync,
  borrarPizzasAsync,
} from './repositorios/pizza.repositorio.js';
import { conectarMongoDB } from './configuracion/mongodb.js';
const app = express();
app.use(cors()); // Habilitar CORS para todas las rutas
app.use(express.json()); // Middleware para parsear JSON
const PORT = 3000; // Puerto en el que escuchará el servidor

//Configuracion para usar el body en un post
app.use(express.json()); // Middleware para parsear JSON
app.use(express.urlencoded({ extended: true })); // Middleware para parsear datos de formularios

app.get("/api/v1/pizzas", async (req, res) => {
  const pizzas = await obtenerTodasLasPizzasAsync();
  return res.status(200).json(pizzas);
});

app.get("/api/v1/pizzas/:id", async (req, res) => {
  const id = req.params.id
  const pizza = await obtenerPizzasPorIdAsync(id);
  return res.status(200).json(pizza);
});

app.post("/api/v1/pizza", async (req, res) => {
  const pizza = req.body;
  const id = await agregarPizzaAsync(pizza);
  const idDto = { id: id, fecha: new Date() }
  return res.status(201).json(idDto);
});
 

app.put("/api/v1/pizzas/:id", async (req, res) => {
  const id = req.params.id;
  const pizza = await obtenerPizzasPorIdAsync(id);
  if(pizza == undefined){
    const mensaje = {mensaje: "No existe esa pizza"}
  return res.status(404).json(mensaje);
}
  const pizzaActualizar = req.body
  await actualizarPizzaAsync(id, pizzaActualizar)
  const mensaje = {mensaje: "Pizza actualizada"}
  return res.status(202).json(mensaje);
});

app.delete("/api/v1/pizzas/:id", async (req, res) => {
  const id = req.params.id
  const pizza = await borrarPizzasAsync(id)
  if (pizza == undefined) {
    return res.status(404).json({ mensaje: "No existe esa pizza" });
  }
  const mensaje = { mensaje: "Pizza eliminada" };
  return res.status(202).json(mensaje);
});

conectarMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor Express escuchando en el puerto http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("No fue posible conectar con MongoDB:", error.message);
    process.exitCode = 1;
  });
