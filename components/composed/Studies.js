import { curriculumInfo } from '../../assets/utils/data';
import styles from '../../styles/Home.module.scss';

export const Studies = () => {
  const studies = curriculumInfo[1].studies;

  return (
    <section className={ `${styles.studiesExperienceContainer} ${styles.cvInnerContainer}` }>
      <h3>Formación y cursos</h3>
      <ul>
        {
          studies.map(study => {
            return (
              <li key={ study.id }>
                <h4>{ study.title }</h4>
                <ul className={ styles.centerCompaniesList }>
                  <li>
                    <span>{ study.center }</span> · <span>{ study.years }</span>
                  </li>
                </ul>
                <ul className={ styles.descriptionList }>
                  {
                    study.description.map((studyItem, index) => {
                      return (
                        <li key={ index }>{ studyItem }</li>
                      )
                    })
                  }
                </ul>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};
