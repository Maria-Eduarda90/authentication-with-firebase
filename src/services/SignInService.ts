import Router from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/config";
import { destroyCookie, setCookie } from "nookies";

export function signInService( email: string, password: string ): void{
  signInWithEmailAndPassword(auth, email, password)
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
      Router.push("/home");
      toast.success("usuario logado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
    })
    .catch((error) => {
      if (error.code === "auth/invalid-email") {
        return alert("E-mail inválida.");
      }

      if (error.code === "auth/wrong-password") {
        return alert("E-mail ou senha inválida.");
      }

      if (error.code === "auth/user-not-found") {
        return alert("Usuario não encontrado");
      }

      return alert("Não foi possivel acessar");
    });
}
