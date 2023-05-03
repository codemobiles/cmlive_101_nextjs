import React from "react";
import { Controller, useForm } from "react-hook-form";

type Props = {};
interface User {
  username: string;
  password: string;
}
const defaultUser: User = { username: "kan", password: "555" };

export default function HookFormPage({}: Props) {
  // prepare hook form variables
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: defaultUser,
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
