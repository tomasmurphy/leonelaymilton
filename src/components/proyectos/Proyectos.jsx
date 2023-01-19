import Nav from "../Nav";
import Head from "../Head";
import Copiar from "../Copiar";
import { useState } from "react";
import Menu from '../Menu'
const Proyectos = () => {

  const [nombreCompleto, setNombre] = useState("");
  const [comprobante, setComprobante] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [nota, setNota] = useState("");

  const handleSubmit = (event) => {
    // eslint-disable-next-line no-restricted-globals
    let celu = screen.width < 990 ? "api" : "web";

    event.preventDefault();
    const whatsapp = `Confirmamos la asistencia de 🧡 ${nombreCompleto} 🧡. ${nota} 🥗. Nro de transferencia 💸 ${comprobante}. Las canciones que no pueden faltar 🎶 ${mensaje}`;
    let linkCompra = `https://${celu}.whatsapp.com/send?phone=5493468599123&text=${whatsapp}`;
    window.open(linkCompra, "_blank");
  };

  const handleChangeName = (event) => {
    setNombre(event.target.value);
  };
  const handleChangeComprobante = (event) => {
    setComprobante(event.target.value);
  };
  const handleChangeMensaje = (event) => {
    setMensaje(event.target.value);
  };
  const handleChangeNota = (event) => {
    setNota(event.target.value);
  };

  return (
    <>
      <Head title="Información" />
      <Nav titulo="Información" link="/" />
      <section
        id="about_me"
        className="mb-5  animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <div className="row marMob ">
            <hr />
            <h3 className="text-center fs-6">Quincho Club Atlético Corralense - 18 de febrero 21 hs</h3>
            <hr />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13341.501672675728!2d-62.186675737573246!3d-33.2828401773443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff807a2de9af5f65!2sClub%20Atl%C3%A9tico%20Social%20Corralense!5e0!3m2!1ses-419!2sar!4v1674073705105!5m2!1ses-419!2sar"
              width="400"
              height="200"
              allowfullscreen=""
              title="mapa"
              loading="lazy"
              className="mb-4"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <hr />
            <h3 className="text-center fs-6">Pagar tarjeta</h3>
            <hr />
            <p className="text-center fs-6">Costo por persona: $1 millon</p>
            <Menu></Menu>
            <p className="text-center">
              <Copiar copyText="44484848" />
            </p>
          
          <hr />
            <h3 className="text-center fs-6">Confirmar asistencia</h3>
            <hr />
          <div className="formu">
            <form
              id="form"
              className="formulario"
              action=""
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                required
                placeholder="Nombres de los asistentes"
                name="nombreCompleto"
                value={nombreCompleto}
                onChange={handleChangeName}
              />
              <input
                type="number"
                placeholder="Indicar si hay algun vegetariano. Si no hay poner 0"
                name="nota"
                value={nota}
                onChange={handleChangeNota}
              />
              <input
                type="number"
                required
                placeholder="Nro de comprobante de transferencia"
                name="comprobante"
                value={comprobante}
                onChange={handleChangeComprobante}
              />
              <textarea
                type="text"
                rows="5"
                placeholder="Que canciones no pueden faltar en la fiesta?"
                name="mensaje"
                value={mensaje}
                onChange={handleChangeMensaje}
              />
              <button className="boton">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyectos;
