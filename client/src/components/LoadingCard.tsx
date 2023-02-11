import Card from "./Card";

type Props = {
  loadingProgress?: number;
};

const LoadingCard = ({ loadingProgress = 0 }: Props) => {
  const innerDivWidth = `${loadingProgress * 100}%`;
  return (
    <Card>
      <h1 className="text-left">Uploading...</h1>
      <div className="w-96 h-[6px] rounded-lg bg-[#F2F2F2] mt-8">
        <div
          style={{ width: innerDivWidth }}
          className={`h-full transition rounded-lg bg-blue-600`}
        ></div>
      </div>
    </Card>
  );
};

export default LoadingCard;
