import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Add a title"),
    description: yup.string().required("Add a description").min(10),
  });

  const { register, handleSubmit } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const onCreatePost = (data: CreateFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder="Title..." {...register("title")} />
      <textarea placeholder="Description..." {...register("description")} />
      <input type="submit" />
    </form>
  );
};
