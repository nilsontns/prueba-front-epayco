import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../../../types/FormData";

interface InputProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Input: FC<InputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        {...register("title", { required: true })}
        placeholder="Title"
        className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors?.title && (
        <span className="text-red-600 text-sm">Title is required</span>
      )}
    </div>
  );
};

export default Input;
