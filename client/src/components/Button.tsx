import { PropsWithChildren } from "react";

type Props = {
  onClick?: () => void;
  asLabel?: boolean;
};

const Button = ({
  onClick,
  children,
  asLabel = false,
}: PropsWithChildren<Props>) => {
  const className =
    "select-none bg-blue-600 text-white px-4 py-2 rounded-md shadow font-medium text-xs hover:bg-opacity-70 transition duration-300";
  return asLabel ? (
    <label htmlFor="image" className={className}>
      {children}
    </label>
  ) : (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
