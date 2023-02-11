import Button from "./components/Button";
import Card from "./components/Card";
import DragAndDrop from "./components/DragAndDrop";

function App() {
  return (
    <div className="font-main font-medium flex flex-col items-center h-screen pb-8 bg-neutral-200">
      <div className="flex-1 flex items-center">
        <Card>
          <h1 className="text-lg  tracking-tight text-[#4F4F4F] mb-4">
            Upload your image
          </h1>
          <small className="text-xs  text-[#828282j]">
            File should be JPG, PNG,...
          </small>
          <DragAndDrop />
          <p className="text-xs  text-[#828282] mt-4 mb-5">Or</p>
          <Button asLabel>Choose a file</Button>
          <input type="file" name="image" id="image" className="hidden" />
        </Card>
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
    </div>
  );
}

export default App;
