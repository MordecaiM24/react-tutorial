import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required!"),
    email: yup.string().email().required("Email is required!"),
    age: yup.number().positive().integer().required().min(18),
    password: yup.string().min(4).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Must match").required()
  });
  
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  
  const onSubmit = (data) => {
    console.log(data);
  }

  console.log(errors);

  return (
    <div>
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name..." {...register("fullName")} />
        <input type="text" placeholder="Email..." {...register("email")} />
        <input type="number" placeholder="Age..." {...register("age")} />
        <input type="password" placeholder="Password..." {...register("password")} />
        <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
        <input type="submit"/>

      </form>
      <p>{errors.fullName?.message}</p>
      <p>{errors.email?.message}</p>
      <p>{errors.age?.message}</p>
      <p>{errors.password?.message}</p>
      <p>{errors.confirmPassword?.message}</p>

    </div>
  )
}