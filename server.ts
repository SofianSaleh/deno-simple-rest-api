import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port: number = 5000;

const app = new Application();

const router = new Router();
router.use(router.allowedMethods());

console.log(`server is running on port 8080`);

await app.listen({ port });
