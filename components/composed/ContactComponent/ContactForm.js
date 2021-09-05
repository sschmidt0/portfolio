import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField } from '@material-ui/core';
import { SiteButton } from '../SiteButton';
import { validateInput } from '../../../assets/utils/validateInput';
import { sendFormData } from '../../../assets/utils/sendFormData';
import styles from '../../../styles/Contacto.module.scss';
import { motion } from 'framer-motion';

require('dotenv').config();
const formURL = process.env.NEXT_PUBLIC_FORM_URL;

export const ContactForm = () => {
  const router = useRouter();
  const placeHolderFullName = router.locale === 'en' ? 'Name' : 'Nombre';
  const placeHolderEmail = router.locale === 'en' ? 'Email' : 'Correo electrónico';
  const placeHolderMessage = router.locale === 'en' ? 'Message' : 'Mensaje';
  const buttonInitialText = router.locale === 'en' ? 'Contact me' : 'Contáctame';
  const buttonSendingText = router.locale === 'en' ? '...sending message' : '...enviando el mensaje';
  const buttonSendText = router.locale === 'en' ? 'Message send correctly  :-)' : 'Mensaje enviado correctamente  :-)';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [textButton, setTextButton] = useState(buttonInitialText);
  const [buttonColor, setButtonColor] = useState('#9B51E0');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      fullName,
      email,
      message
    };

    const errorChecking = validateInput(newMessage);
    if (!errorChecking.isValid) setErrors(errorChecking.errors);
    if (errorChecking.isValid) {
      setErrors({});
      setTextButton(buttonSendingText);
      setButtonColor('#FF8C00');
      sendFormData(newMessage, formURL);

      setTimeout(() => {
        setTextButton(buttonSendText);
        setButtonColor('#008000');
      }, 1000);

      setTimeout(() => {
        setTextButton(buttonInitialText);
        setButtonColor('#9B51E0');
        setFullName('');
        setEmail('');
        setMessage('');
      }, 3000);
    }
  }

  return (
    <form className={ styles.form } autoComplete="off">
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        color="secondary"
        id="name"
        label={ placeHolderFullName }
        name="name"
        autoComplete="text"
        value={ fullName }
        onChange={(e) => setFullName(e.target.value)}
        style={{ marginBottom: 2 }}
        error={ errors.fullName !== undefined }
        helperText={ errors.fullName }
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        color="secondary"
        id="email"
        label={ placeHolderEmail }
        name="email"
        autoComplete="email"
        value={ email }
        onChange={(e) => setEmail(e.target.value)}
        error={ errors.email !== undefined }
        helperText={ errors.email }
      />
      <TextField
        id="filled-multiline-static"
        label={ placeHolderMessage }
        multiline
        fullWidth
        color="secondary"
        rows={ 4 }
        variant="outlined"
        required
        value={ message }
        onChange={(e) => setMessage(e.target.value)}
        style={{ marginTop: 10, marginBottom: 30 }}
        error={ errors.message !== undefined }
        helperText={ errors.message }
      />

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <SiteButton
          text={ textButton }
          type="submit"
          color="secondary"
          onClick={ (e) => handleSubmit(e) }
          style={{ width: '100%', backgroundColor: buttonColor }}
        />
      </motion.div>
    </form>
  );
};
