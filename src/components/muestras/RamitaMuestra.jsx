import Nav from "../Nav";
import Carousel from "../Carousel";
import Head from "../Head";

export const RamitaMuestra = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Head title="Civil" />
      <Nav titulo="Civil" link="/fotos" />
      <section
        id="about_me"
        className="mb-5  animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <Carousel settings={settings}>
          <img
            src="../img/lym (1).jpg"
            className="img-fluid"
            alt=""
          />
          <div>
          <img
            src="../img/lym (2).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (3).jpg"
            className="mt-5 img-fluid"
            alt=""
          />
          </div>
          <div>
          <img
            src="../img/lym (4).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (5).jpg"
            className="mt-5 img-fluid"
            alt=""
          />
          </div>
          <div>
          <img
            src="../img/lym (6).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (7).jpg"
            className="mt-5 img-fluid"
            alt=""
          />
          </div>
          <div>
          <img
            src="../img/lym (8).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (9).jpg"
            className="mt-5 img-fluid"
            alt=""
          />
          </div>
          <div>
          <img
            src="../img/lym (10).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (11).jpg"
            className="mt-5 img-fluid"
            alt=""
          />
          </div>
          <img
            src="../img/lym (12).jpg"
            className="img-fluid"
            alt=""
          />
          <div>
          <img
            src="../img/lym (13).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (14).jpg"
            className="mt-5 img-fluid"
            alt=""
          />
          </div>
          <div>
          <img
            src="../img/lym (15).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (16).jpg"
            className="mt-5 img-fluid"
            alt=""
          />
          </div>
          <div>
          <img
            src="../img/lym (17).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (19).jpg"
            className="mt-5 img-fluid"
            alt=""
          />
          </div>
          <img
            src="../img/lym (20).jpg"
            className="img-fluid"
            alt=""
          />
          <img
            src="../img/lym (21).jpg"
            className="img-fluid"
            alt=""
          />
          <img
            src="../img/lym (22).jpg"
            className="img-fluid"
            alt=""
          />
          <img
            src="../img/lym (23).jpg"
            className="img-fluid"
            alt=""
          />
          <div>
          <img
            src="../img/lym (24).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (25).jpg"
            className="mt-5 img-fluid"
            alt=""
          />
          </div>
          <img
            src="../img/lym (26).jpg"
            className="img-fluid"
            alt=""
          />
          <div>
          <img
            src="../img/lym (27).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (9).jpg"
            className="mt-5 img-fluid"
            alt=""
          />
          </div>
          
        </Carousel>
        <div className="row marMob ">
          <div className="col-12 mt-5 col-lg-7 fondoImg text-md-start col-xl-9">
            <hr />
              <h3 className="text-center fs-6">
                Rosario, 2023 - Centro municipal distrito centro
              </h3>
              <hr />
            
          </div>
        </div>
      </section>
    </>
  );
};
