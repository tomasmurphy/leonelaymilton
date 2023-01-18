import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const FormContacto = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7wx0hvj', 'template_0x3dw0a', form.current, 'ImGGQgEG_q46xJHvb')
      .then((result) => {
          console.log(result.text);
          window.open(`${window.location.href}/mensaje_enviado`, '_self')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <form id="form" ref={form} onSubmit={sendEmail}>
        <div className="formulario">
      <label>Nombre</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Mensaje</label>
      <textarea name="message" rows={5}/>
      
    <div className="col-12 text-center">
    <input className='boton' type="submit" value="Enviar" />
    </div>
      </div>
    </form>
    </>
  );
};