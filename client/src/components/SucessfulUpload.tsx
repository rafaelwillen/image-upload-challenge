import { CheckCircle } from "phosphor-react";
import Button from "./Button";
import Card from "./Card";

type Props = {
  imgUrl: string;
};

const SuccessfulUpload = ({ imgUrl }: Props) => {
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
        className="aspect-square object-cover w-[340px] rounded-xl my-7 shadow-lg"
        src="https://res.cloudinary.com/dkddz4wpr/image/upload/v1676165380/images/e730ba1b-8b1a-41a9-bc59-e11c2471e891.webp"
      />
      <div className="self-stretch bg-[#F6F8FB] border border-[#E0E0E0] rounded-lg p-2  flex gap-3 items-center">
        <p className="truncate max-w-[240px] text-xs text-[#4F4F4F]">
          https://res.cloudinary.com/dkddz4wpr/image/upload/v1676165380/images/e730ba1b-8b1a-41a9-bc59-e11c2471e891.webp
        </p>
        <Button>Copy Link</Button>
      </div>
    </Card>
  );
};

export default SuccessfulUpload;
