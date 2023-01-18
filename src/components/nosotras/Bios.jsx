import Nav from "../Nav";
import Head from "../Head";

const Bios = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Head title="Nosotras -  Biografías" />
      <Nav titulo="Biografías" link="/nosotras" />
      <section
        id="about_me"
        className="animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <div className="container-fluid overflow-hidden">
          <div className="row marMob">
            <div className="col-12 col-lg-7 text-md-start col-xl-9">
              <h3>Lau Basilico</h3>
              <hr />
            </div>
            <div className="mb-3 col-12 col-lg-5 col-xl-3 text-center">
              <a
                target="_blank"
                href="https://www.instagram.com/lau.basilico/"
                rel="noopener noreferrer"
              >
                <img
                  src="../img/lau_reveadoconrosamosqueta.jpg"
                  className="img-fluid imgBio"
                  alt="Foto de Lau Basilico"
                />
              </a>
            </div>
            <p>
              Nació en la provincia de Buenos Aires y desde 2004 vive en
              Rosario, Santa Fe. <br /> <br />
              Es fotógrafa, museóloga y artista visual. Su formación de grado es
              en Antropología (UNR) algo que se manifiesta en sus intereses
              artísticos. Actualmente se dedica a la fotografía orgánica, con la
              que ha participado de circuitos de ferias regionales y dictando
              talleres en espacios públicos de la región. <br />
              <br />
              Trabaja como docente de fotografía en distintas instituciones
              culturales de la ciudad de Rosario. Desde 2015 coordina el
              proyecto “Espacio Analógico” laboratorio de prácticas analógicas y
              experimentales en las ciudades de Rosario, Santa Fe y Paraná.{" "}
              <br />
              <br />
              Actualmente investiga sobre reveladores y fijadores orgánicos para
              fotografía.
            </p>
            <p className="violeta">
              <a
                href="https://www.instagram.com/lau.basilico/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="violeta bi bi-instagram"> </i>
                <span className="violeta">@lau.basilico</span>
              </a>
            </p>
          </div>
          <hr className="d-lg-none" />
          <div className="row marMob mb-5 mt-3">
            <div className="mb-3 col-12 col-lg-5 col-xl-3 text-center">
              <a
                target="_blank"
                href="https://www.pazsecundini.com.ar/"
                rel="noopener noreferrer"
              >
                <img
                  src="../img/paz_reveladoconrosamosqueta.jpg"
                  className="img-fluid imgBio"
                  alt="Foto de Paz secundini"
                />
              </a>
            </div>
            <div className="col-12 col-lg-7 text-md-end col-xl-9">
              <h3>Paz Secundini</h3>
              <hr />
            </div>
            <p className="text-md-end">
              Nació en Entre Ríos y desde 2007 reside en Rosario. <br />
              <br />
              Es Licenciada en Bellas Artes (UNR) con Mención en Pintura y se
              especializó en Estudios Irlandeses (USAL).
              <br />
              <br />
              Participa en exposiciones colectivas desde 2007. Es artista de la
              galería Almacén de Arte con la que participó de ferias como Otra
              Feria episodio Jóvenes Artistas Americanos (2020) y ArteCo (2021 y
              2022) en la que fue invitada a formar parte del conversatorio "La
              obra de arte y la artesanía, tradición y contemporaneidad".
              <br />
              <br />
              Explora la relación entre el arte y la naturaleza. Se interesa por
              el cuidado del ambiente y esto es algo que se refleja en su obra.
              Actualmente da clases de cerámica en su taller, investiga sobre
              reveladores y fijadores orgánicos para fotografía y es adscripta a
              la cátedra de Pintura III en la UNR.
              <br />
              <br />
              <a
                href="https://www.pazsecundini.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span className="violeta">www.pazsecundini.com.ar</span>
              </a>
            </p>
            <p className="text-md-end">
              <a
                href="https://www.instagram.com/jardin.de.invierno/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="violeta bi bi-instagram"> </i>
                <span className="violeta">@jardin.de.invierno</span>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bios;
