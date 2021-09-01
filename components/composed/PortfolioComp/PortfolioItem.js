import styles from '../../../styles/Portfolio.module.scss';
import { BsCodeSlash } from 'react-icons/bs';
import Image from 'next/image';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { List } from './List';


export const PortfolioItem = ({ project }) => {
  const { title, subtitle, image, imageTitle, linkSite, information, tecnologies, linkGithub, index } = project;

  const handleClick = (target) => {
    window.open (target, '_ blank');
  };

  return (
    <Card className={ styles.project }>
      <div>
        <CardActionArea onClick={ () => handleClick(linkSite) }>
          {
            image &&
            <Image
              src={ `/${image}` }
              height="180"
              width="300"
              alt={ imageTitle }
            />
          }
          <CardContent>
            <h2>{ title }</h2>
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
  );
};
