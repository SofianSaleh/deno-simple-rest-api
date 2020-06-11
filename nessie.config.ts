import { ClientPostgreSQL } from "https://deno.land/x/nessie/mod.ts";

/** These are the default config options. */
const clientOptions = {
  migrationFolder: "./db/migrations",
  seedFolder: "./db/seeds",
};

/** Select one of the supported clients */
const clientPg = new ClientPostgreSQL(clientOptions, {
  database: "football_test",
  hostname: "localhost",
  port: 5432,
  user: `${Deno.env.get("USERNAME")}`,
  password: `${Deno.env.get("PASSWORD")}`,
});

/** This is the final config object */
const config = {
  client: clientPg,
  // Defaults to false, if you want the query builder exposed in migration files, set this to true.
  exposeQueryBuilder: false,
};

export default config;
