import router from "./index.ts";

router.get("/", ({ response }: { response: any }) => {
  response.body = "hello";
});
