const express = require('express');
const app = express();
app.set('json spaces', 2);
const PORT = 3000; // Puerto en el que escuchará el servidor
app.use(express.json()); // Middleware para parsear JSON
app.use(express.urlencoded({ extended: true })); // Middleware para parsear datos de formularios

//aquí definiríamos las rutas
//PIZZAS
// app.get("/api/v1/pizzas", (req, res)=>{
//     const listadePizzas = {
//       mensaje: "Lista de pizzas disponibles: ",
//       lista: [
//         { nombre: "Pepperoni", descripcion: "Pepperoni, queso, salsa de tomate" },
//         { nombre: "Carbonara", descripcion: "Crema, queso parmesano, mozzarella y tocino" },
//         { nombre: "Hawaiana", descripcion: "Jamon y queso" },
//         { nombre: "Cuatro Quesos", descripcion: "Queso mozzarella, gorgonzola, parmesano y fontina" }
//       ],
//       mensajeOK: "Elección exitosa, ahora elige un tamaño de pizza y una bebida para completar tu pedido"
//     };
//     return res.status(200).json(listadePizzas);
// });

//TAMAÑOS
app.get("/api/v1/tamanos", (req, res)=>{
    const listadeTamanos = { 
      mensaje: "Lista de tamaños disponibles: ",
      lista: ["Pequeña", "Mediana", "Grande"]
    };
    return res.status(200).json(listadeTamanos)
})

//BEBIDAS
app.get("/api/v1/bebidas", (req, res)=>{
    const listadeBebidas = { 
      mensaje: "Lista de bebidas disponibles: ",
      listaBebidas: ["Coca Cola", "Boing", "FuzeTea", "Agua"],
      mensajeOpcion: "Se necesita otra opción para completar el pedido",
      opcionHielo: ["Con Hielo", "Sin Hielo"]
    };
    return res.status(200).json(listadeBebidas)
})

/**
 * Regresa una pizza por el id
 * esta es una función que recibe un id y regresa la pizza correspondiente
 * @param {*} id 
 */
function getPizzaById(id) {
  //se conecta a la db, busca en la tabla o coleccion
  //regresa el elemento que coincida con el id
  return { nombre: "Pepperoni", descripcion: "Pepperoni, queso, salsa de tomate" };
}

//CLASE 03/09/26---------------------------------------------------------------------//

app.post("/api/v1/pizzas", (req, res)=>{
  const pizza = req.body
  console.log(pizza)
  //Guardar pizza(pizza)
  const respuestaDto = {
    mensaje: "Pizza agregada correctamente",
    id: 1,
    fecha: new Date()
  }
  return res.status(201).json(respuestaDto)
})


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});