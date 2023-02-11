import ImageSVG from "../assets/images/image.svg";

const DragAndDrop = () => {
  return (
    <div className="py-9 px-28 bg-[#F6F8FB] border border-dashed border-[#97BEF4] rounded-xl mt-8 flex flex-col items-center">
      <img width={114} height={88} className="w-28 h-20" src={ImageSVG} />
      <p className="text-xs text-[#BDBDBD] mt-9 select-none">
        Drag & Drop your image here
      </p>
    </div>
  );
};

export default DragAndDrop;
