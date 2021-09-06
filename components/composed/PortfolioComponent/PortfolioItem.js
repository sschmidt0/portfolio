import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/Portfolio.module.scss';
import { BsCodeSlash } from 'react-icons/bs';
import Image from 'next/image';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { List } from './List';
import { motion, useAnimation } from 'framer-motion';
import { fadeInUp } from '../../../assets/animations/animations';
import { useInView } from 'react-intersection-observer';
import * as gtag from '../../../lib/gtag';

export const PortfolioItem = ({ project }) => {
  const router = useRouter();
  const {
    title,
    extraInfo,
    subtitle,
    image,
    imageTitle,
    linkSite,
    information,
    tecnologies,
    linkGithub,
    index
  } = project;
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const tecTitle = router.locale === 'en' ? 'Tecnology used' : 'Tecnologías utilizadas';
  const buttonTitle = router.locale === 'en' ? 'See code' : 'Ver código';

  const handleClick = (target) => {
    gtag.event({
      action: target,
      category: 'portfolio',
      label: target,
    });
    target !== undefined && window.open (target, '_ blank');
  };

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
    if (!inView) {
      controls.start('initial');
    }
  }, [controls, inView]);


  return (
    <motion.div
      className={ styles.project }
      whileHover={{ scale: 1.03 }}
      initial="initial"
      animate={ controls }
      variants={ fadeInUp }
      ref={ ref }
    >
      <Card>
        <div>
          <CardActionArea onClick={ () => handleClick(linkSite) }>
          <div style={{ textAlign: 'center' }}>
            <Image
              src={ `/${image}` }
              height="180"
              width="300"
              alt={ imageTitle }

            />
          </div>
            <CardContent>
              { extraInfo ? <h2>{ title }<span>{ extraInfo }</span></h2> : <h2>{ title }</h2> }
              <h4>{ subtitle }</h4>
              <List listArray={ information } />
              <h4>{ tecTitle }</h4>
              <List listArray={ tecnologies } />
            </CardContent>
          </CardActionArea>
        </div>
        <div>
          <CardActions>
            { linkGithub.length > 1
              ? <>
                  <Button
                    size="small"
                    variant="text"
                    color="secondary"
                    startIcon={<BsCodeSlash />}
                    onClick={ () => handleClick(linkGithub[0]) }
                  >
                    Frontend
                  </Button>
                  <Button
                    size="small"
                    variant="text"
                    color="secondary"
                    startIcon={<BsCodeSlash />}
                    onClick={ () => handleClick(linkGithub[1]) }
                  >
                    Backend
                  </Button>
                </>
              : <Button
                  size="small"
                  variant="text"
                  color="secondary"
                  startIcon={<BsCodeSlash />}
                  onClick={ () => handleClick(linkGithub[0]) }
                >
                  { buttonTitle }
                </Button>
            }
          </CardActions>
        </div>
      </Card>
    </motion.div>
  );
};
