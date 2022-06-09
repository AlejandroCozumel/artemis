import React from "react";
// import { Link } from "react-router-dom";
import "./cta.scss";
import Lottie from "react-lottie";
import rocket from "../../animation/rocket.json";
import woman from "../../animation/woman-kowring.json";
import { HiBadgeCheck } from "react-icons/hi";
import { SiGooglemessages } from "react-icons/si";
import { RiComputerFill } from "react-icons/ri";
import Marquee from "react-fast-marquee";

const CTA = () => {
  const rocketOptions = {
    loop: true,
    autoplay: true,
    animationData: rocket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const womanOptions = {
    loop: true,
    autoplay: true,
    animationData: woman,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const cardData = [
    {
      image: <HiBadgeCheck className="icon" />,
      title: "Networking",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis doloribus laborum voluptates consequatur veniam eaque, molestias reiciendis et ipsa nostrum magnam. Deserunt commodi perspiciatis facilis expedita totam cupiditate dignissimos!",
    },
    {
      image: <SiGooglemessages className="icon" />,
      title: "Experiencia",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis doloribus laborum voluptates consequatur veniam eaque, molestias reiciendis et ipsa nostrum magnam. Deserunt commodi perspiciatis facilis expedita totam cupiditate dignissimos!",
    },
    {
      image: <RiComputerFill className="icon" />,
      title: "Tecnología",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis doloribus laborum voluptates consequatur veniam eaque, molestias reiciendis et ipsa nostrum magnam. Deserunt commodi perspiciatis facilis expedita totam cupiditate dignissimos!",
    },
  ];
  return (
    <>
      <section className="container" id="container">
        <div className="first-block">
          <h2>
            <span className="gradient-text">Artemis</span> es la primera
            <span className="gradient-text"> plataforma integral</span> diseñada
            para
            <span className="gradient-text"> revolucionar </span> la forma como
            <span className="gradient-text"> conectamos </span> con las empresas
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut animi
            ab sint soluta iure consectetur, excepturi deserunt explicabo sunt
            incidunt illum, vitae eius itaque reiciendis? Pariatur harum totam
            exercitationem numquam?
          </p>
        </div>
        <div className="flex">
          <Lottie options={rocketOptions} height={300} width={300} />
        </div>
        <div className="button">
          <a href="#container">Conoce más</a>
        </div>
        <div className="second-block">
          <h2>
            <span className="gradient-text">Artemis</span> es un{" "}
            <span className="gradient-text">directorio vivo</span> hecho a la
            medida para <span className="gradient-text">potenciar</span> tu
            carrera
          </h2>
        </div>
        <div className="flex">
          <Lottie options={womanOptions} height={300} width={300} />
        </div>
        <div className="third-block">
          <div className="grid">
            {cardData.map((card, index) => (
              <div key={index} className="card">
                {card.image}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
        <Marquee speed={50} gradient={false}>
          <div className="slide">
            <img
              src="https://diarq.com/wp-content/uploads/2017/08/grupo-diarq-logo.png"
              alt="Diarq logo"
              height={60}
              width={200}
            />
          </div>
          <div className="slide">
            <img
              src="https://daliaempower.com/static/daliaLogo-7773d259fd9a0644b34df1c848b29e0c.png"
              alt="Dalia logo"
              height={60}
              width={300}
            />
          </div>
          <div className="slide">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
              alt="Linkedin logo"
              height={60}
              width={300}
            />
          </div>
          <div className="slide">
            <img
              src="http://assets.stickpng.com/images/58480fd7cef1014c0b5e4943.png"
              alt="Microsoft logo"
              height={60}
              width={300}
            />
          </div>
          <div className="slide">
            <img
              src="http://assets.stickpng.com/images/58481021cef1014c0b5e494b.png"
              alt="Mongo logo"
              height={60}
              width={300}
            />
          </div>
        </Marquee>
      </section>

      {/* <div className="container">
        <form id="form">
          <input type="text" placeholder="Nombre" />
        </form>
      </div> */}
    </>
  );
};

export default CTA;
