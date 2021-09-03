import styles from '../../styles/Home.module.scss';
import { DynamicText } from './DynamicText';
import { MdExpandMore } from 'react-icons/md';
import Image from 'next/image';

export const IntroSection = () => (
  <article className={ styles.articleIntro }>
    <div className={ styles.introContainer }>
      <div>
        <Image
          src="/sarah-perfil.png"
          layout="fill"
          alt="Foto de perfil de Sarah Schmidt"
        />
      </div>
      <div>
        <h2>Sarah Schmidt</h2>
        <h1>Desarrolladora Frontend con React</h1>
        <p>Conocimientos de <DynamicText /></p>
        <p><MdExpandMore /></p>
      </div>
    </div>
  </article>
);
