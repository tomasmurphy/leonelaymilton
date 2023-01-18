import Nav from "../Nav";
import Head from "../Head";

const Gracias = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Head title="Gracias por contactarnos!" />
      <Nav titulo="Mensaje enviado" link="/" />
      <section
        id="contact"
        className="overflow-hidden animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <div className="transparencia">
          <div className="row col-12 col-md-6 flex">
            <div className="col-12">
              <h4 className="text-center">Gracias por enviarnos tu mensaje!</h4>
              <p className="violeta text-center">
                Te responderemos a la brevedad
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gracias;
