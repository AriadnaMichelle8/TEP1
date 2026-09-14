import { ObjectId } from "mongodb";
import { obtenerColeccionPizzas } from "../configuracion/mongodb.js";

function convertirId(id) {
    return ObjectId.isValid(id) ? new ObjectId(id) : undefined;
}

/**
 * Regresa una lista de las pizzas
 * @returns []
 * Retorna un arreglo de pizzas
 */
export async function obtenerTodasLasPizzasAsync() {
    const coleccion = await obtenerColeccionPizzas();
    return coleccion.find({}).toArray();

}

/**
 * Regresa la pizza del id buscado o underfined si no lo encuentra
 * @param {*} id
 * @returns {object}
 * Retorna un objeto pizza o undefined si no lo encuentra
 */
export async function obtenerPizzasPorIdAsync(id) {
    const idMongo = convertirId(id);
    if (!idMongo) {
        return undefined;
    }

    const coleccion = await obtenerColeccionPizzas();
    return coleccion.findOne({ _id: idMongo });
}

/**
 * Agregar una pizza a la lista
 * @param {*} pizza
 * @returns {int}
 * Retorna el id de la pizza agregada
 */

export async function agregarPizzaAsync(pizza) {
    const coleccion = await obtenerColeccionPizzas();
    const resultado = await coleccion.insertOne(pizza);
    return resultado.insertedId.toString();
} 
/**
 * Busca la pizza por id y si la encuentra la actualiza, si no la encuentra regresa undefined
 * @param {*} id 
 * @param {*} pizza 
 * @returns 
 * Retorna undefined si no encuentra la pizza, si la encuentra regresa el objeto actualizado
 */

export async function actualizarPizzaAsync(id, pizza){
    const idMongo = convertirId(id);
    if (!idMongo) {
        return undefined;
    }

    const coleccion = await obtenerColeccionPizzas();
    const resultado = await coleccion.replaceOne({ _id: idMongo }, { ...pizza, _id: idMongo });
    return resultado.matchedCount ? { ...pizza, _id: idMongo } : undefined;
}

/**
 * Busca la pizza por id y si la encuentra la elimina, si no la encuentra regresa undefined
 * @param {*} id 
 * No devuelve nada, solo elimina la pizza si la encuentra
 */

export async function borrarPizzasAsync(id){
    const idMongo = convertirId(id);
    if (!idMongo) {
        return undefined;
    }

    const coleccion = await obtenerColeccionPizzas();
    const resultado = await coleccion.deleteOne({ _id: idMongo });
    return resultado.deletedCount ? true : undefined;
}