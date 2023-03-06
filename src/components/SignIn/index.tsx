import { FormEvent, useState } from "react";
import { destroyCookie, setCookie } from "nookies";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Link from "next/link";
import Router from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from "../../firebase/config";
import { Button } from "../Button";
import { Input } from "../Input";

import styles from './styles.module.scss';


export function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn(e: FormEvent): void{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = {
                name: userCredential.user.displayName,
                email: userCredential.user.email,
                metadata: userCredential.user.metadata,
                refreshToken: userCredential.user.refreshToken,
                uid: userCredential.user.uid,
            }
            console.log('user login: ', user);
            destroyCookie(null, "auth");
            setCookie(undefined, "auth", JSON.stringify(user));
            Router.push('/home');
            toast.success('usuario logado com sucesso', {
                position: toast.POSITION.TOP_RIGHT
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
    
    return(
        <div className={styles.wrapper}>
            <h1>Bem Vindo!</h1>
            <form onSubmit={handleSignIn}>
                <Input
                 type="email" 
                 placeholder="E-mail"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                />
                <Input 
                 type="password" 
                 placeholder="Senha"
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                />

                <Button>
                    Entrar
                </Button>
            </form>
            <span>
                Não Possui uma conta? <Link href={'/SignUp'} >Registrar</Link>
            </span>
            <ToastContainer/>
        </div>
    );
}