import { ButtonTypeProps } from '../../@types/Button';
import styles from './styles.module.scss';

export function Button(props: ButtonTypeProps){
    return(
        <button className={styles.button} {...props} />
    );
}