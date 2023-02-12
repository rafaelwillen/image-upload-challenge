import { FastifyInstance } from "fastify";
import multer from "fastify-multer";
import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";
import cloudinary from "./config/cloudinary";

const storage = multer.diskStorage({
  destination: (_, file, callback) => {
    const fileDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(fileDir)) fs.mkdirSync(fileDir);
    callback(null, fileDir);
  },
  filename: (_, file, callback) => {
    if (!file.mimetype.includes("image/"))
      return callback(new Error("Invalid File Type"));
    const extension = file.originalname.split(".").at(-1);
    callback(null, `${uuid()}.${extension}`);
  },
});

const upload = multer({ dest: "uploads/", storage });

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
