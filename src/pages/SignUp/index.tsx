import { useState, FormEvent } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';
import { SignUpService } from '../../services/SignUpService';

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
        
        SignUpService(email, password);
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