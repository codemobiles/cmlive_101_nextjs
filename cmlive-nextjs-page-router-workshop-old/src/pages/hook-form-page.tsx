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
  username: Yup.string()
    .required("Username is required")
    .email("Must be email format")
    .trim(),
  password: Yup.string().required("Password is required").min(8).trim(),
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
      <hr />
      <form onSubmit={handleSubmit((value) => alert(JSON.stringify(value)))}>
        {/* Username */}
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <div>
              <input {...field} type="text" placeholder="Username" />
              {errors.username?.message && (
                <span className="text-red-700">
                  Error! : {errors.username?.message}
                </span>
              )}
            </div>
          )}
        />
        <br />
        {/* Password */}
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <div>
              <input {...field} type="text" placeholder="Password" />
              {errors.password?.message && (
                <span className="text-red-700">
                  Error! : {errors.password?.message}
                </span>
              )}
            </div>
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
