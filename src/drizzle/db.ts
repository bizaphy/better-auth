//Instancia de drizzle, le dice a drizzle
//Crea una sola conex. a la bdd pgSQL y la exporta para que el resto de la app la use
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

export const db = drizzle(process.env.DATABASE_URL!, { schema });
