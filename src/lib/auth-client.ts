//Crea instancia del cliente en el navegador.
// Es la contraparte de auth.ts:
// auth.ts corre en el servidor y habla con la base de datos, mientras que authClient
//corre en tus componentes de React y le envía peticiones HTTP a ese servidor.

import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient();
