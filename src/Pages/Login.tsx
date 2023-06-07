import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };

  const navigate = useNavigate();

  return (
    <div>
      <p> Sign In With Google </p>
      <button onClick={signInWithGoogle}> Sign In </button>
    </div>
  );
};
