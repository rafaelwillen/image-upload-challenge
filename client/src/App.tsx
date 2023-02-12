import { ChangeEvent, useState } from "react";
import { submitFile } from "./api";
import Button from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";
import DragAndDrop from "./components/DragAndDrop";
import LoadingCard from "./components/LoadingCard";
import SuccessfulUpload from "./components/SucessfulUpload";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("okok");

  async function handleFileSubmission(file: File) {
    setLoading(true);
    const response = await submitFile(file, (progress) => {
      setLoadingProgress(progress.progress || 0);
    });
    if (response) {
      setImageUrl(response.url);
    }
    setLoading(false);
  }

  function handleFileSubmissionInput(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.item(0);
    if (file) handleFileSubmission(file);
  }

  if (imageUrl) {
    return (
      <Container>
        <div className="flex-1 flex items-center">
          <SuccessfulUpload imgUrl={imageUrl} />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex-1 flex items-center">
        {isLoading ? (
          <LoadingCard loadingProgress={loadingProgress} />
        ) : (
          <Card>
            <h1 className="text-lg  tracking-tight text-[#4F4F4F] mb-4">
              Upload your image
            </h1>
            <small className="text-xs  text-[#828282j]">
              File should be JPG, PNG,...
            </small>
            <DragAndDrop onFileDrop={handleFileSubmission} />
            <p className="text-xs  text-[#828282] mt-4 mb-5">Or</p>
            <Button asLabel>Choose a file</Button>
            <input
              accept="image/*"
              onChange={handleFileSubmissionInput}
              type="file"
              name="image"
              id="image"
              className="hidden"
            />
          </Card>
        )}
      </div>
      <p className="text-sm text-gray-400">
        Created by{" "}
        <a
          className="font-bold underline"
          href="https://github.com/rafaelwillen"
        >
          Rafael Willen
        </a>
      </p>
    </Container>
  );
}

export default App;
