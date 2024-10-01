import { FC } from "react";

interface ButtonProps {
    title: string;
}

const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
    >
      {title}
    </button>
  );
};

export default Button;
