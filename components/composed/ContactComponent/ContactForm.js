import React from 'react';
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import { SiteButton } from '../SiteButton';
import { validateInput } from '../../../assets/utils/validateInput';
import { sendFormData } from '../../../assets/utils/sendFormData';
import styles from '../../../styles/Contacto.module.scss';
import { motion } from 'framer-motion';
import { fadeInUp, zoomIn } from '../../../assets/animations/animations';

require('dotenv').config();
const formURL = process.env.NEXT_PUBLIC_FORM_URL;

export const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [textButton, setTextButton] = useState('contáctame');

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
      setTextButton('...enviando el mensaje');
      sendFormData(newMessage, formURL);

      setTimeout(() => {
        setTextButton('Mensaje enviado correctamente');
      }, 1000);

      setTimeout(() => {
        setTextButton('contáctame');
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
        label="Nombre"
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
        label="Correo electrónico"
        name="email"
        autoComplete="email"
        value={ email }
        onChange={(e) => setEmail(e.target.value)}
        error={ errors.email !== undefined }
        helperText={ errors.email }
      />
      <TextField
        id="filled-multiline-static"
        label="Mensaje"
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
          style={{ width: '100%' }}
        />
      </motion.div>
    </form>
  );
};
