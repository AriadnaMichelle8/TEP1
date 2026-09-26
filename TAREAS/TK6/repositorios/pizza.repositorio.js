// Esta es la capa donde se persisten los datos
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let pizzas = [{ id: 1, nombre: "Pepperoni", descripcion: "pepperoni y queso"}];

/**
 * Regresa una lista de las pizzas
 * @returns [] Retorna un arreglo de pizzas
 */
export async function obtenerTodasLasPizzasAsync() {
    await sleep(2000);
    return pizzas;
}

/**
 * Regresa la pizza del id buscado o undefined si no lo encuentra
 * @param {*} id
 * @returns {object} Retorna un objeto pizza o undefined si no lo encuentra
 */
export async function obtenerPizzasPorIdAsync(id) {
    await sleep(1000);
    const pizza = pizzas.find(x => x.id == id);
    return pizza;
}

/**
 * Agregar una pizza a la lista
 * @param {*} pizza
 * @returns {int} Retorna el id de la pizza agregada
 */
export async function agregarPizzaAsync(pizza) {
    await sleep(1000);
    pizzas.push(pizza);
    return pizza.id; // Corregido: variable id no existía
} 

/**
 * Busca la pizza por id y si la encuentra la actualiza, si no la encuentra regresa undefined
 * @param {*} id 
 * @param {*} pizza 
 * @returns Retorna undefined si no encuentra la pizza, si la encuentra regresa el objeto actualizado
 */
export async function actualizarPizzaAsync(id, pizza){
    const index = pizzas.findIndex(x => x.id == id);
    
    // Corregido: La condición estaba invertida
    if (index === -1) {
        return undefined;
    }
    
    pizzas[index].nombre = pizza.nombre;
    pizzas[index].descripcion = pizza.descripcion;
    return pizzas[index]; // Es buena práctica retornar el objeto ya actualizado
}

/**
 * Busca la pizza por id y si la encuentra la elimina, si no la encuentra regresa undefined
 * @param {*} id 
 * No devuelve nada, solo elimina la pizza si la encuentra
 */
export async function borrarPizzasAsync(id){
    const index = pizzas.findIndex(x => x.id == id);
    
    // Corregido: Evita borrar el último elemento por accidente si el ID no existe
    if (index !== -1) {
        pizzas.splice(index, 1);
    }
}