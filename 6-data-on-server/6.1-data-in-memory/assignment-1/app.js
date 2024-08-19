import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

let count = 3;

app.get("/", (c) => {
  let message = count;

  if (count < 1) {
    message = "Kaboom!";
  }
  count--;
  return c.text(message);
});

export default app;
