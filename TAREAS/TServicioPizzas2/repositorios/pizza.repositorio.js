//Esta es la capa donde se persisten los datos

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let pizzas = [{ id: 1, nombre: "Pepperoni", descripcion: "pepperoni y queso"}];


/**
 * Regresa una lista de las pizzas
 * @returns []
 */
export async function obtenerTodasLasPizzasAsync() {
    await sleep(2000)
    return pizzas;

}

/**
 * Regresa la pizza del id buscado o underfined si no lo encuentra
 * @param {*} id
 */
export async function obtenerPizzasPorIdAsync(id) {
    await sleep(1000)
    const pizza = pizzas.find(x => x.id == id)
    return pizza
}

/**
 * Agregar una pizza a la lista
 * @param {*} pizza
 * @returns {int}
 */

export async function agregarPizzaAsync(pizza) {
    await sleep (1000)
    pizza.push(pizza)
    return pizzas.length
}
// export async function agregarPizzaAsync(nuevaPizza){
//     await sleep(1000)
//     pizzas.push(nuevaPizza)
//     return nuevaPizza;
// }

export async function actualizarPizzaAsync(id, pizza){
    const index = pizzas.findIndex(x => x.id == id);
  if (index !== -1) 
    return undefined;
    pizzas[index].nombre = pizza.nombre
    pizzas[index].descripcion = pizza.descripcion
    return pizzas[index]
  }


export async function borrarPizzasAsync(id){
    const index = pizzas.findIndex(x => x.id == id);
    pizzas.splice(index, 1)

}
