import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../../../types/FormData";

interface InputProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Textarea: FC<InputProps> = ({ register, errors }) => {
  return (
    <div>
      <textarea
        {...register("body", { required: true })}
        placeholder="Body"
        className="resize-none h-[221px] w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.body && (
        <span className="text-red-600 text-sm">Body is required</span>
      )}
    </div>
  );
};

export default Textarea;
