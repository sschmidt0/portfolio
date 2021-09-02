import { ContactForm } from '../components/composed/ContactForm';
import { ContactInfo } from '../components/composed/ContactInfo';
import { Footer } from '../components/Footer';

const Contacto = () => (
  <section>
    <h1>Contacto</h1>
    <ContactForm />
    <ContactInfo />
    <Footer />
  </section>
);

export default Contacto;
