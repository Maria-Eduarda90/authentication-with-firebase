import { FormEvent, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Link from "next/link";

import { Button } from "../Button";
import { Input } from "../Input";

import styles from './styles.module.scss';
import { signInService } from "../../services/SignInService";


export function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn(e: FormEvent): void{
        e.preventDefault();

        signInService(email, password);
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
