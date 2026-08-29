const express = require('express');
const app = express();
app.set('json spaces', 2);
const PORT = 3000; // Puerto en el que escuchará el servidor

//aquí definiríamos las rutas
//PIZZAS
app.get("/api/v1/pizzas", (req, res)=>{
    const listadePizzas = {
      mensaje: "Lista de pizzas disponibles: ",
      lista: [
        { nombre: "Pepperoni", descripcion: "Pepperoni, queso, salsa de tomate" },
        { nombre: "Carbonara", descripcion: "Crema, queso parmesano, mozzarella y tocino" },
        { nombre: "Hawaiana", descripcion: "Jamon y queso" },
        { nombre: "Cuatro Quesos", descripcion: "Queso mozzarella, gorgonzola, parmesano y fontina" }
      ],
      mensajeOK: "Elección exitosa, ahora elige un tamaño de pizza y una bebida para completar tu pedido"
    };
    return res.status(200).json(listadePizzas);
});

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

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});