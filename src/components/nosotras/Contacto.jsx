import Nav from "../Nav";
import { FormContacto } from "./FormContacto";
import Head from "../Head";

const Contacto = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Head title="Nosotras -  Contacto" />
      <Nav titulo="Contacto" link="/nosotras" />
      <section id="contact" className="overflow-hidden ">
        <div className="transparencia">
          <div className="row col-12 col-md-6 flex animate__fadeInDown wow animate__animated animate__delay-0s animate__slower">
            <div className="col-12">
              <FormContacto />
            </div>
            <div className="mb-5">
              <a
                title="instagram"
                href="https://www.instagram.com/reveladosorganicos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i> @reveladosorganicos{" "}
              </a>
              <br />
              <a
                title="email"
                href="mailto:reveladosorganicos@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope"></i> reveladosorganicos@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
