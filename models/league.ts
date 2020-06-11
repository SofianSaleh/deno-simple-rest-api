import Dex from "https://deno.land/x/dex/mod.ts";
import Client from "../config/config.ts";
import { League } from "../interfaces/index.ts";

const dex = Dex({ client: "postgres" });


function createLeague