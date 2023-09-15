import React, { useState } from 'react';
import Form from '../Components/Form';

const Contact = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isEmailValid = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validateNombre = (nombre) => {
    if (nombre.trim().length < 6) {
      return 'El nombre debe tener al menos 6 caracteres';
    }

    if (nombre.startsWith(' ') || nombre.endsWith(' ')) {
      return 'El nombre no puede tener espacios al principio o al final';
    }

    return '';
  };

  const validateEmail = (email) => {
    if (!isEmailValid(email)) {
      return 'El correo electrónico no es válido. Debe tener el formato "nombre@dominio.com"';
    }

    if (email.startsWith(' ') || email.endsWith(' ')) {
      return 'El correo electrónico no puede tener espacios al principio o al final';
    }

    return '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, email } = datos;

    const nombreError = validateNombre(nombre);
    const emailError = validateEmail(email);

    if (nombreError || emailError) {
      setErrors({ nombreError, emailError });
      setShowMessage(false);
      setErrorMessage('Por favor, verifique su información nuevamente');
    } else {
      setErrors({});
      setShowMessage(true);
      setErrorMessage('');
    }
  };

  return (
    <div>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus preguntas y te contactaremos</p>

      <Form datos={datos} setDatos={setDatos} handleSubmit={handleSubmit} />

      {showMessage && (
        <p>
          Gracias {datos.nombre}, te contactaremos pronto por correo electrónico.
        </p>
      )}

      {errorMessage && <p>{errorMessage}</p>}
      {errors.nombreError && <p>{errors.nombreError}</p>}
      {errors.emailError && <p>{errors.emailError}</p>}
    </div>
  );
};

export default Contact;
