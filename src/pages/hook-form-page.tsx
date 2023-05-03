import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {};
interface User {
  username: string;
  password: string;
}
const defaultUser: User = { username: "kan", password: "555" };
const formValidateSchema = Yup.object().shape({
  username: Yup.string().required("Username is required").trim(),
  password: Yup.string().required("Password is required").trim(),
});

export default function HookFormPage({}: Props) {
  // prepare hook form variables
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: defaultUser,
    resolver: yupResolver(formValidateSchema),
  });

  return (
    <div className="border-2 w-[200px]">
      <h1>HookForm Demo</h1>
      <form onSubmit={handleSubmit((value) => alert(JSON.stringify(value)))}>
        {/* Username */}
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <input {...field} type="text" placeholder="Username" />
          )}
        />
        <br />
        {/* Password */}
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <input {...field} type="text" placeholder="Password" />
          )}
        />
        <br />
        <br />
        <button type="submit">Submit</button> |{" "}
        <button
          type="button"
          onClick={() => reset({ username: "", password: "" })}
        >
          Clear
        </button>
      </form>
    </div>
  );
}
