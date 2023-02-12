import { CheckCircle } from "phosphor-react";
import Button from "./Button";
import Card from "./Card";

type Props = {
  imgUrl: string;
  onClear?: () => void;
};

const SuccessfulUpload = ({ imgUrl, onClear }: Props) => {
  async function handleWriteTextToClipboard() {
    await navigator.clipboard.writeText(imgUrl);
    alert("Image link copied");
  }

  return (
    <Card>
      <div className="flex justify-center mb-3">
        <CheckCircle
          size={36}
          color="#219653"
          weight="fill"
          className="text-center"
        />
      </div>
      <h1 className="text-lg text-[#4F4F4F]">Uploaded Successfully!</h1>
      <img
        className="w-[340px] h-[224px] rounded-xl object-cover my-7 shadow-lg "
        src={imgUrl}
      />
      <p className="text-xs text-[#4F4F4F] mb-4">
        Click on the image to copy it
      </p>
      <div className="self-stretch bg-[#F6F8FB] border border-[#E0E0E0] rounded-lg p-2  flex gap-3 items-center">
        <p className="truncate max-w-[240px] text-xs text-[#4F4F4F]">
          {imgUrl}
        </p>
        <Button onClick={handleWriteTextToClipboard}>Copy Link</Button>
      </div>
      <div className="mt-10">
        <Button onClick={onClear}>Clear</Button>
      </div>
    </Card>
  );
};

export default SuccessfulUpload;
