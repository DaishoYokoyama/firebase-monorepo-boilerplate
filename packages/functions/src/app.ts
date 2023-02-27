import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import * as express from "express";
import helmet from "helmet";

import { AppModule } from "./app.module";

export const appServer = express();

export const withNestServer = async (expressInstance: express.Express) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance)
  );

  app.enableCors();
  app.use(helmet());

  app.init();
  return app;
};

withNestServer(appServer)
  .then(() => console.info("Nest Ready"))
  .catch((err) => console.error(err));
