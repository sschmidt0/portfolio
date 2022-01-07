import { useRouter } from 'next/router';
import { curriculumInfo, curriculumInfoEnglish } from '../../../assets/utils/data';
import styles from '../../../styles/Home.module.scss';


export const ProfessionalExperience = () => {
  const router = useRouter();
  const title = router.locale === 'en' ? 'Professional experience' : 'Experiencia profesional';
  const work = router.locale === 'en' ? curriculumInfoEnglish[0].work : curriculumInfo[0].work;

  return (
    <section className={ styles.studiesExperienceContainer }>
      <h3>{ title }</h3>
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
                    workItem.description.length > 0 && workItem.description.map((descriptionItem, index) => {
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
