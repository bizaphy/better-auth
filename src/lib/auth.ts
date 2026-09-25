//Instancia de better auth
//auth.ts es el servidor de autenticación. Decide cómo se registran y se identifican los usuarios,
//dónde se guardan y cómo se recuerda que alguien ya inició sesión.

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/drizzle/db"; // your drizzle instance
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, //la seccion estara en Cache por 5 minutos
    },
  },
  plugins: [nextCookies()], //se asegura de que la app sepa como setear cookies en next
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
});
