import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/index.ts";

const port: number = 5000;

const app = new Application();

app.use(router.routes());
router.use(router.allowedMethods());

console.log(`server is running on port ${port}`);

await app.listen({ port });
