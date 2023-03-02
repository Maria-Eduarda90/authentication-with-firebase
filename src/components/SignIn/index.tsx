import Link from "next/link";
import { Button } from "../Button";
import { Input } from "../Input";

import styles from './styles.module.scss';

export function SignIn(){
    return(
        <div className={styles.wrapper}>
            <h1>Bem Vindo!</h1>
            <form>
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" />

                <Button>
                    Entrar
                </Button>
            </form>
            <span>
                Não Possui uma conta? <Link href={'/SignUp'} >Registrar</Link>
            </span>
            
        </div>
    );
}