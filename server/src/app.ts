import cors from "@fastify/cors";
import fastify, { FastifyBaseLogger, FastifyServerOptions } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import route from "./route";

function build(
  options?: FastifyServerOptions<
    Server<typeof IncomingMessage, typeof ServerResponse>,
    FastifyBaseLogger
  >
) {
  const app = fastify(options);

  app.register(cors);

  app.register(route);

  return app;
}

export default build;
