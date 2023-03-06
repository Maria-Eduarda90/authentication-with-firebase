import { createUserWithEmailAndPassword } from 'firebase/auth';
import { destroyCookie, setCookie } from 'nookies';
import { useState, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { auth } from '../../firebase/config';

import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';

import styles from './styles.module.scss';

export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSignUp(e: FormEvent): void {
        e.preventDefault();

        if(password != confirmPassword){
            return alert('Senhas não coincidem');
        }
        
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = {
                name: userCredential.user.displayName,
                email: userCredential.user.email,
                metadata: userCredential.user.metadata,
                refreshToken: userCredential.user.refreshToken,
                uid: userCredential.user.uid,
            }
            destroyCookie(null, "auth");
            setCookie(undefined, "auth", JSON.stringify(user));
            toast.success('usuario cadastrado com sucesso', {
                position: toast.POSITION.TOP_RIGHT
            });
            Router.push('/');
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    return(
        <div className={styles.cotainer}>
            <Image src="/astronaut.png" alt="astronaut" width={'400'} height={'100'} />
            <div className={styles.wrapper}>
                <h1>Bem Vindo!</h1>
                <form onSubmit={handleSignUp}>
                    <Input
                     type="text"
                     placeholder="Nome"
                     value={name}
                     onChange={e => setName(e.target.value)}
                    />
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
                    <Input
                     type="password" 
                     placeholder="Confirmar senha"
                     value={confirmPassword}
                     onChange={e => setConfirmPassword(e.target.value)}
                    />

                    <Button>
                        Cadastrar
                    </Button>
                </form>
                <span>
                    Já Possui uma conta? <Link href={'/'} >Entrar</Link>
                </span>
                <ToastContainer />
            </div>
        </div>
    );
}