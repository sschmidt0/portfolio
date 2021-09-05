import { useEffect } from 'react';
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

export const PortfolioItem = ({ project }) => {
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

  const handleClick = (target) => {
    linkSite && window.open (target, '_ blank');
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
              <h4>Tecnologías utilizadas</h4>
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
                  Ver código
                </Button>
            }
          </CardActions>
        </div>
      </Card>
    </motion.div>
  );
};
