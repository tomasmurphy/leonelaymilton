import Nav from "../Nav";
import Head from "../Head";
import Copiar from "../Copiar";
import { useState } from "react";
import Menu from "../Menu";
const Proyectos = () => {
  const [nombreCompleto, setNombre] = useState("");
  const [comprobante, setComprobante] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [nota, setNota] = useState("");

  const handleSubmit = (event) => {
    // eslint-disable-next-line no-restricted-globals
    let celu = screen.width < 990 ? "api" : "web";

    event.preventDefault();
    const whatsapp = `Confirmamos la asistencia de 🧡 ${nombreCompleto} 🧡. ${notaArr} . Nro de transferencia 💸 ${comprobante}. Las canciones que no pueden faltar 🎶 ${mensaje}`;
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
    
    setNota(event.target.value)

  };
  const notaArr = (nota < .9)?"":`${nota} 🥗`;

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
          <h3 className="text-center fs-6">
            Ubicaciones
          </h3>
          <hr />
          <p><i className="bi bi-circle-fill fiesta"></i> Fiesta: Quincho Club Atlético Corralense - 18 de febrero 20:30 hs</p>
          <p><i className="bi bi-circle-fill hotel"></i> Hotel Ancona tel: 3468 58-0900</p>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1EuD2bEw5Uf3LTiZQkkAGYOiLKilyaIY&ehbc=2E312F"
            width="640"
            height="480"
            title="Mapa"
            className="mb-3"
          ></iframe>
          <hr />
          <h3 className="text-center fs-6">Pagar tarjeta</h3>
          <hr />
          <p className="text-center"> <Menu></Menu></p>
         
          <p className="text-center fs-6">
            Costo por persona: $7000 / Menú infantil: $3500 <br />
            Fecha límite para confirmar: 8 de febrero.
            
            
          </p>
          <p className="text-center">
            Alias: TARJETA.LYM
            <Copiar copyText="0170332840000032356146" tipo="CBU" />
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
                placeholder="Nro vegetarianos. Si no hay poner 0"
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
