import { Database } from "https://deno.land/x/denodb/mod.ts";

const db = new Database("postgres", {
  database: "football_test",
  host: "localhost",
  username: Deno.env.get("USERNAME"),
  password: Deno.env.get("PASSWORD"),
  port: 5432,
});
