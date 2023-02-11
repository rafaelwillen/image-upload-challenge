import { PropsWithChildren } from "react";

const Card = ({ children }: PropsWithChildren) => (
  <div className="bg-white shadow-md rounded-xl py-9 px-8 text-center">
    {children}
  </div>
);

export default Card;
