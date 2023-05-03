import React, { useState } from "react";

type Props = {};
interface User {
  username: string;
  password: string;
}

export default function HookFormPage({}: Props) {
  const defaultUser: User = { username: "lek", password: "1234" };
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <div className="border-2 w-[200px]">
      <h1>HookForm Demo</h1>
      <form onSubmit={() => alert(JSON.stringify(user))}>
        <input
          type="text"
          value={user.username}
          placeholder="Username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <br />
        <input
          type="text"
          value={user.password}
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
