import styles from './styles.module.scss';
import { InputTypeProps } from '../../@types/Input';

export function Input(props: InputTypeProps){
    return(
        <input className={styles.input}  {...props}/>
    )
}