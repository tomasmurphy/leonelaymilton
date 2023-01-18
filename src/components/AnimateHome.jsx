import gsap from "gsap";
import { useEffect, useRef } from "react";

export const AnimateHome = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  const ref10 = useRef();
  const ref11 = useRef();
  const ref12 = useRef();
  const ref13 = useRef();
  const ref14 = useRef();
  const ref15 = useRef();
  const ref16 = useRef();
  const ref17 = useRef();
  const ref18 = useRef();
  const ref19 = useRef();
  const ref20 = useRef();
  const ref21 = useRef();
  const ref22 = useRef();
  const ref23 = useRef();
  const ref24 = useRef();
  const ref25 = useRef();
  const ref26 = useRef();
  const ref27 = useRef();
  const data = [
    {
      id: 19,
      name: "./img/lym (1).jpg",
      ref: ref19,
    },
    {
      id: 6,
      name: "./img/lym (2).jpg",
      ref: ref6,
    },
    {
      id: 3,
      name: "./img/lym (3).jpg",
      ref: ref3,
    },
    {
      id: 20,
      name: "./img/lym (4).jpg",
      ref: ref20,
    },
    {
      id: 2,
      name: "./img/lym (5).jpg",
      ref: ref2,
    },
    {
      id: 7,
      name: "./img/lym (6).jpg",
      ref: ref7,
    },
    {
      id: 16,
      name: "./img/lym (7).jpg",
      ref: ref16,
    },
    {
      id: 22,
      name: "./img/lym (8).jpg",
      ref: ref22,
    },
    {
      id: 14,
      name: "./img/lym (9).jpg",
      ref: ref14,
    },
    {
      id: 12,
      name: "./img/lym (10).jpg",
      ref: ref12,
    },
    {
      id: 17,
      name: "./img/lym (11).jpg",
      ref: ref17,
    },
    {
      id: 25,
      name: "./img/lym (12).jpg",
      ref: ref25,
    },
    {
      id: 9,
      name: "./img/lym (13).jpg",
      ref: ref9,
    },
    {
      id: 26,
      name: "./img/lym (14).jpg",
      ref: ref26,
    },
    {
      id: 27,
      name: "./img/lym (15).jpg",
      ref: ref27,
    },
    {
      id: 1,
      name: "./img/lym (16).jpg",
      ref: ref1,
    },
    {
      id: 8,
      name: "./img/lym (17).jpg",
      ref: ref8,
    },
    {
      id: 10,
      name: "./img/lym (18).jpg",
      ref: ref10,
    },
    {
      id: 11,
      name: "./img/lym (19).jpg",
      ref: ref11,
    },
    {
      id: 18,
      name: "./img/lym (20).jpg",
      ref: ref18,
    },
    {
      id: 21,
      name: "./img/lym (21).jpg",
      ref: ref21,
    },
    {
      id: 5,
      name: "./img/lym (22).jpg",
      ref: ref5,
    },
    {
      id: 23,
      name: "./img/lym (23).jpg",
      ref: ref23,
    },
    {
      id: 15,
      name: "./img/lym (24).jpg",
      ref: ref15,
    },
    {
      id: 24,
      name: "./img/lym (25).jpg",
      ref: ref24,
    },
    {
      id: 13,
      name: "./img/lym (26).jpg",
      ref: ref13,
    },
    {
      id: 4,
      name: "./img/lym (27).jpg",
      ref: ref4,
    },
  ];

  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: false,
      defaults: { duration: 1, ease: "easyInOut" },
    });
    timeline
      .from(ref1.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref1.current, { opacity: 2, zIndex: 12, duration: 0.5, scale: 1.1 })
      .to(ref1.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref2.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref2.current, { opacity: 2, zIndex: 12, duration: 0.5, scale: 1.1 })
      .to(ref2.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref3.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref3.current, { opacity: 2, zIndex: 12, duration: 0.5, scale: 1.1 })
      .to(ref3.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref4.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref4.current, { opacity: 2, zIndex: 12, duration: 0.5, scale: 1.1 })
      .to(ref4.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref5.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref5.current, { opacity: 2, zIndex: 12, duration: 0.5, scale: 1.1 })
      .to(ref5.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref6.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref6.current, { opacity: 2, zIndex: 12, duration: 0.5, scale: 1.1 })
      .to(ref6.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref7.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref7.current, { opacity: 2, zIndex: 12, duration: 0.5, scale: 1.1 })
      .to(ref7.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref8.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref8.current, { opacity: 2, zIndex: 12, duration: 0.5, scale: 1.1 })
      .to(ref8.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref9.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref9.current, { opacity: 2, zIndex: 12, duration: 0.5, scale: 1.1 })
      .to(ref9.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref10.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref10.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref10.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref11.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref11.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref11.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref12.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref12.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref12.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref13.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref13.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref13.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref14.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref14.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref14.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref15.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref15.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref15.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref16.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref16.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref16.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref17.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref17.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref17.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref18.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref18.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref18.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref19.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref19.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref19.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref20.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref20.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref20.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref21.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref21.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref21.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref22.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref22.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref22.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref23.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref23.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref23.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref24.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref24.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref24.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref25.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref25.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref25.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref26.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref26.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref26.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 })
      .from(ref27.current, { zIndex: 1, opacity: 0.3, duration: 0.5 })
      .to(ref27.current, {
        opacity: 2,
        zIndex: 12,
        duration: 0.5,
        scale: 1.1,
      })
      .to(ref27.current, { opacity: 0.3, zIndex: 1, duration: 0.5, scale: 1 });
  }, []);

  return (
    <>
      {data.map((el) => {
        return (
          <div
            className="cajaImagen"
            style={{ opacity: 0.3 }}
            key={el.id}
            ref={el.ref}
          >
            <img
              src={el.name}
              className="img-fluid"
              alt={el.name}
            />
          </div>
        );
      })}
    </>
  );
};
