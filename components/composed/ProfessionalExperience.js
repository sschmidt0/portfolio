import { curriculumInfo } from '../../assets/utils/data';
import styles from '../../styles/Home.module.scss';

export const ProfessionalExperience = () => {
  const work = curriculumInfo[0].work;

  return (
    <section className={ styles.studiesExperienceContainer }>
      <h3>Experiencia Profesional</h3>
      <ul>
        {
          work.map(workItem => {
            return (
              <li key={ workItem.id }>
                <h4>{ workItem.title }</h4>
                <ul className={ styles.centerCompaniesList }>
                  {
                    workItem.companies.map((company, index) => {
                      return (
                        <li key={ index }>
                          <span>{ company.name }</span> · <span>{ company.years }</span>
                        </li>
                      )
                    })
                  }
                </ul>
                <ul className={ styles.descriptionList }>
                  {
                    workItem.description.map((descriptionItem, index) => {
                      return (
                        <li key={ index }>{ descriptionItem }</li>
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
