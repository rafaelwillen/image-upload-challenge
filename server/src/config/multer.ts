import multer from "fastify-multer";
import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

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

export const upload = multer({ dest: "uploads/", storage });
