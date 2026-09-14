import { MongoClient } from "mongodb";

const URI_MONGODB = "mongodb://root:123456@localhost:27017/";
const NOMBRE_BASE_DATOS = "pizzas";

const clienteMongoDB = new MongoClient(URI_MONGODB, {
  authSource: "admin",
});

let baseDatos;

export async function conectarMongoDB() {
  if (!baseDatos) {
    await clienteMongoDB.connect();
    baseDatos = clienteMongoDB.db(NOMBRE_BASE_DATOS);
    console.log(`Conectado a MongoDB: ${NOMBRE_BASE_DATOS}`);
  }

  return baseDatos;
}

export async function obtenerColeccionPizzas() {
  const db = await conectarMongoDB();
  return db.collection("pizzas");
}

export async function cerrarMongoDB() {
  await clienteMongoDB.close();
  baseDatos = undefined;
}
