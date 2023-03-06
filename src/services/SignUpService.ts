import { createUserWithEmailAndPassword } from "firebase/auth";
import Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { toast } from "react-toastify";
import { auth } from "../firebase/config";

export function SignUpService(email: string, password: string): void {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = {
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        metadata: userCredential.user.metadata,
        refreshToken: userCredential.user.refreshToken,
        uid: userCredential.user.uid,
      };
      destroyCookie(null, "auth");
      setCookie(undefined, "auth", JSON.stringify(user));
      toast.success("usuario cadastrado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
      Router.push("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}