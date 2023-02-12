import { FastifyInstance } from "fastify";
import multer from "fastify-multer";
import fs from "fs";
import cloudinary from "./config/cloudinary";
import { upload } from "./config/multer";

async function routes(fastify: FastifyInstance, options: Object) {
  fastify.register(multer.contentParser);
  fastify.post(
    "/upload",
    { preHandler: upload.single("image") },
    async (request, reply) => {
      const filePath = request.file.path;
      if (!filePath) {
        return reply.status(500).send({
          message: "Error on submitting the file",
        });
      }
      try {
        const result = await cloudinary.uploader.upload(filePath, {
          use_filename: true,
          unique_filename: false,
          overwrite: false,
          folder: "images",
        });
        fs.rmSync(filePath);
        reply.status(200).send({
          message: "File uploaded successfully",
          url: result.secure_url,
        });
      } catch (error) {
        console.error(error);
        return reply.status(500).send({
          message: "Unable to send file to cloud",
        });
      }
    }
  );
}

export default routes;
