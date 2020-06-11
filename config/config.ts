import { Client } from "https://deno.land/x/postgres/mod.ts";

async function main() {
  const client = new Client({
    user: "postgres",
    password: "123456789",
    database: "football_test",
    hostname: "localhost",
    port: 5432,
  });
  await client.connect();
}

main();
