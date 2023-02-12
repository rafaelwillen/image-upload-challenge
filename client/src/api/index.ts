import { AxiosProgressEvent } from "axios";
import axios from "./config";

export async function submitFile(
  file: File,
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
) {
  try {
    const formData = new FormData();
    formData.append("image", file);
    const response = await axios.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
    return response.data.message;
  } catch (error) {
    console.error(error);
  }
}
