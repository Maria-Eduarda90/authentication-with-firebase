import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './styles.module.scss';

export default function SignUp(){
    return(
        <div className={styles.cotainer}>
            <Image src="/astronaut.png" alt="astronaut" width={'400'} height={'100'} />
            <div className={styles.wrapper}>
                <h1>Bem Vindo!</h1>
                <form>
                    <Input type="text" placeholder="Nome" />
                    <Input type="email" placeholder="E-mail" />
                    <Input type="password" placeholder="Senha" />
                    <Input type="password" placeholder="Confirmar senha" />

                    <Button>
                        Cadastrar
                    </Button>
                </form>
                <span>
                    Já Possui uma conta? <Link href={'/'} >Entrar</Link>
                </span>
            </div>
        </div>
    );
}