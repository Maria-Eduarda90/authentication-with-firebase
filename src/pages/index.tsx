import type { NextPage } from 'next';
import Image from 'next/image';
import { SignIn } from '../components/SignIn';

import styles from './styles.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.cotainer}>
      <Image src="/astronaut.png" alt="astronaut" width={'400'} height={'100'}/>
      <SignIn/>
    </div>
  )
}

export default Home
