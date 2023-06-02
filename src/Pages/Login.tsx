import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [newUsername, setNewUsername] = useState<string>("");

  const dispatch = useDispatch();

  const username = useSelector((state: any) => state.user.value.username);

  return (
    <div>
      <h1>
        This is the login page for {username}
        <div style={{ display: "block" }}>
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNewUsername(event.target.value);
            }}
          />
          <button onClick={() => dispatch(login({ username: newUsername }))}>
            Submit Login
          </button>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      </h1>
    </div>
  );
};
