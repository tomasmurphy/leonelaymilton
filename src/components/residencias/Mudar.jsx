import Nav from "../Nav";
import Carousel from "../Carousel";
import Head from "../Head";

export const Mudar = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Head title="Residencias - Mudar" />
      <Nav titulo="Mudar 2022" link="/residencias" />

      <section
        id="about_me"
        className="mb-5  animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <Carousel settings={settings}>
          <img
            src="../img/mudar/mudar (4).jpg"
            className="img-fluid"
            alt="Mudar"
          />
          <img
            src="../img/mudar/mudar (2).jpg"
            className="img-fluid"
            alt="Mudar"
          />
          <img
            src="../img/mudar/mudar (3).jpg"
            className="img-fluid"
            alt="Mudar"
          />
          <img
            src="../img/mudar/mudar (7).jpg"
            className="img-fluid"
            alt="Mudar"
          />
          <img
            src="../img/mudar/mudar (9).jpg"
            className="img-fluid"
            alt="Mudar"
          />
          <img
            src="../img/mudar/mudar (8).jpg"
            className="img-fluid"
            alt="Mudar"
          />
          <img
            src="../img/mudar/mudar (6).jpg"
            className="img-fluid"
            alt="Mudar"
          />
          <img
            src="../img/mudar/mudar (5).jpg"
            className="img-fluid"
            alt="Mudar"
          />
          <img
            src="../img/mudar/mudar (1).jpg"
            className=" img-fluid"
            alt="Mudar"
          />
        </Carousel>
        <div className="marMob row">
          <div className="col-12 mt-5 col-lg-7  col-xl-9">
            <hr />
            <h3 className="text-center fs-6">
              Los cruces entre territorio y paisaje plantean el eje por el cual
              se desarrolla este proyecto y que tiene como particularidad la
              convivencia con los lugares en los cuales vivimos y trabajamos
              pero también aquellos que visitamos. Como contraposición al río,
              nos surgió la inquietud de la otra orilla, del agua salada y todo
              lo que crece a su alrededor. Llevamos a cabo esta residencia con
              la metodología con la que venimos trabajando para lograr ese cruce
              entre el paisaje del río y el paisaje marino. Sin duda las algas y
              la sal de mar fueron la incorporación principal para desarrollar
              nuestras fórmulas en la costa uruguaya.
            </h3>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};
