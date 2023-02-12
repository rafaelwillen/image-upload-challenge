import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="font-main font-medium flex flex-col items-center h-screen pb-8 bg-neutral-200">
      {children}
    </div>
  );
};

export default Container;
