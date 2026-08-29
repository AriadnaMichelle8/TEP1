const express = require('express');
const app = express();
app.set('json spaces', 2);
const PORT = 3000; // Puerto en el que escuchará el servidor

//aquí definiríamos las rutas
//PIZZAS
app.get("/api/v1/pizzas", (req, res)=>{
    const listadePizzas = { 
      mensaje: "Lista de pizzas disponibles: ",
      lista: ["Pepperoni", "Napolitana", "Hawaiana", "Cuatro Quesos"]
    };
    return res.json(listadePizzas)
})

//TAMAÑOS
app.get("/api/v1/tamanos", (req, res)=>{
    const listadeTamanos = { 
      mensaje: "Lista de tamaños disponibles: ",
      lista: ["Pequeña", "Mediana", "Grande"]
    };
    return res.json(listadeTamanos)
})

//BEBIDAS
app.get("/api/v1/bebidas", (req, res)=>{
    const listadeBebidas = { 
      mensaje: "Lista de bebidas disponibles: ",
      lista: ["Coca Cola", "Boing", "FuzeTea", "Agua"]
    };
    return res.json(listadeBebidas)
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});