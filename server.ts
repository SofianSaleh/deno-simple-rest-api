import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/index.ts";

const port: number = 5000;

const app = new Application();

router.use(router.allowedMethods());

console.log(`server is running on port 8080`);

await app.listen({ port });
