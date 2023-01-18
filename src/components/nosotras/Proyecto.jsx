import Nav from "../Nav";
import Head from "../Head";

const Proyecto = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Head title="Nosotras - Proyecto" />
      <Nav titulo="Proyecto" link="/nosotras" />
      <section
        id="about_me"
        className="animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <div className="container-fluid overflow-hidden">
          <div className="row marMob">
            <div className="col-12 col-lg-7 fondoImg text-md-start col-xl-9">
              <h3>
                <i className="bi bi-camera-fill"></i>
                <i className="bi bi-tree-fill"></i>
              </h3>
              <hr />
              <p>
                Revelados orgánicos es un proyecto de investigación y
                experimentación de revelados con plantas y elementos de la
                naturaleza, reemplazando los tradicionales reveladores y
                fijadores industriales para fotografía blanco y negro.
              </p>
              <p>
                Este método puede ser utilizado tanto para negativos, generando
                una escala equilibrada de grises, como para papel donde las
                infusiones dejan su rastro de color.
              </p>
              <p>
                Utilizamos los materiales que nos brinda el entorno por lo que
                estamos abiertas a lo que cada lugar nos ofrece para dejarnos
                sorprender.
              </p>
            </div>
            <div className="mb-3 col-12 col-lg-5 col-xl-3 text-center">
              <img
                src="../../img/1.png"
                className="img-fluid "
                alt="Plantas sobre fondo blanco y dos manos ordenandolas"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyecto;
