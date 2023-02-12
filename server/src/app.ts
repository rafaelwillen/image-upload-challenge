import cors from "@fastify/cors";
import fastify, { FastifyBaseLogger, FastifyServerOptions } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import cloudinary from "./config/cloudinary";
import route from "./route";

function build(
  options?: FastifyServerOptions<
    Server<typeof IncomingMessage, typeof ServerResponse>,
    FastifyBaseLogger
  >
) {
  const app = fastify(options);

  console.log(cloudinary.config());

  app.register(cors);

  app.register(route);

  return app;
}

export default build;
