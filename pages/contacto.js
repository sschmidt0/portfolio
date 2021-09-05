import { useRouter } from 'next/router';
import { ContactForm } from '../components/composed/ContactComponent/ContactForm';
import { ContactInfo } from '../components/composed/ContactComponent/ContactInfo';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { fadeInUp, zoomIn, stagger } from '../assets/animations/animations';

const Contacto = () => {
  const router = useRouter();
  const title = router.locale === 'en' ? 'Contact' : 'Contacto';

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={ stagger }
    >
      <h1>{ title }</h1>
      <motion.div variants={ zoomIn }>
        <ContactForm />
      </motion.div>
      <motion.div variants={ fadeInUp }>
        <ContactInfo />
      </motion.div>
      <Footer />
    </motion.section>
  );
};

export default Contacto;
