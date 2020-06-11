import { Router } from "https://deno.land/x/oak/mod.ts";
import { getTeam } from "../controllers/team.ts";

const router = new Router();

router.get("/", getTeam);

export default router;
