import styles from '../../../styles/Home.module.scss';
import { languages } from '../../../assets/utils/data';

export const Languages = () => (
  <div className={ styles.languageContainer }>
    <h3>Lenguas</h3>
    <ul>
      {
        languages.map(language => {
          return (
            <li key={ language.id }>
              <span>{ language.language }</span>
              <div>
                <span></span>
                <span style={{ width: `${language.percentage}` }}>{ language.knowledge }</span>
              </div>
            </li>
          );
        })
      }

    </ul>
  </div>
);


// Languages.getInitialProps = async () => {
//   const data = languages;
//   return { languages: data }
// };
