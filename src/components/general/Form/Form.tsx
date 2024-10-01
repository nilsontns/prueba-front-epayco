import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "../../../types/FormData";
import { Input, Textarea, Button } from "../../base";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submit: SubmitHandler<FormData> = async (data) => {
    try {
      await onSubmit(data);
      console.log("submit", data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="mt-6 space-y-4">
      <Input register={register} errors={errors} />{" "}
      <Textarea register={register} errors={errors} />{" "}
      <Button title=" Add Item" />
    </form>
  );
};

export default Form;
