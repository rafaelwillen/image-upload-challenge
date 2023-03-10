import { AxiosProgressEvent } from "axios";
import axios from "./config";

type FileSubmissionResponse = {
  message: string;
  url: string;
};

export async function submitFile(
  file: File,
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
) {
  try {
    const formData = new FormData();
    formData.append("image", file);
    const response = await axios.post<FileSubmissionResponse>(
      "/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
