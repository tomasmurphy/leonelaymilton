import Nav from "../Nav";
import Head from "../Head";
import Copiar from "../Copiar";
import { useState } from "react";

const Residencias = () => {
  const [comprobante, setComprobante] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    // eslint-disable-next-line no-restricted-globals
    let celu = screen.width < 990 ? "api" : "web";

    event.preventDefault();
    const whatsapp = `Felicitaciones Leonela y Milton ð©ð»ââ¤ï¸âðâð¨ð¼!  Encontraran un regalito ð con el nro ${comprobante} en su banco ð¤. ${mensaje} ð§¡`;
    let linkCompra = `https://${celu}.whatsapp.com/send?phone=5493468599123&text=${whatsapp}`;
    window.open(linkCompra, "_blank");
  };

  const handleChangeComprobante = (event) => {
    setComprobante(event.target.value);
  };
  const handleChangeMensaje = (event) => {
    setMensaje(event.target.value);
  };

  return (
    <>
      <Head title="Regalos" />
      <Nav titulo="Regalos" link="/" />
      <section
        id="about_me"
        className="mb-5  animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <div className="row marMob ">
          <div className="col-12 col-lg-7 fondoImg text-md-start col-xl-9">
            <hr />
            <h3 className="text-center fs-4">QuerÃ©s hacernos un regalo?</h3>

            <hr />
            <p className="text-center fs-6">PodÃ©s colaborar con nuestra luna de miel transfiriendo a mercado pago desde cualquier cuenta! </p>            
            <div className="text-center mb-2"><img src="./img/regalo2.jpg" className="regalo " alt="" /></div>
            <p className="text-center">
              Alias: boda.leonela.milton
              <Copiar copyText="0000003100080103727019" tipo="CVU" />
            </p>
          
          <div className="formu">
            <form
              id="form"
              className="formulario"
              action=""
              onSubmit={handleSubmit}
            >
    
              <input
                type="number"
                required
                placeholder="Nro de comprobante"
                name="comprobante"
                value={comprobante}
                onChange={handleChangeComprobante}
              />
              <textarea
                type="text"
                rows="5"
                placeholder="Dejanos un mensajito"
                name="mensaje"
                value={mensaje}
                onChange={handleChangeMensaje}
              />
              <button className="boton">Enviar</button>
            </form>
          </div>
          </div>        </div>
      </section>
    </>
  );
};

export default Residencias;
