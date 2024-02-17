import express from "express";
import modules from "./app.module";
import { environment } from "./environment";
const app = express();
const port = environment.APP_PORT;

const bootstrap = async () => {
  app.use(express.json());
  app.use("/", modules);

  app.listen(port, () => {
    console.log(`🚀  Server Shift running on: ${port}`);
  });
};

bootstrap();
