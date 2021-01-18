/* eslint-disable no-console */
import express from "express";
import routes from "./routes/index.routes";

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (request, response) =>
  response.json({
    message: "Hello World!",
  })
);

app.listen(3333, () => {
  console.log("🚧 server starts on port 3333!");
});
