import React from "react";
import "../Home/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import one from "../../Assets/Home/one.jpg";
import two from "../../Assets/Home/two.jpg";
import stabilizer1 from "../../Assets/Home/stabilizer1.png";
import water from "../../Assets/Home/water.png";
import starter from "../../Assets/Home/starter.png";
import { useState } from "react";

const Home = () => {
  const [stop,setStop]=useState();

  const homepageContainer = [
    {
      title: "Our Mashtech Engineers",
      para1:
        "At our team to excellence is reflected in the wide assortment of high-quality products we offer, including APFC Panels, AMF Controller Logic Panels, and a range of other reliable solutions. We take pride in our extensive experience in the industry and are dedicated to providing you with the best-in-class products.",
      para2:
        "Whether you are looking for Automatic Phase Changers, EB-GEN Changers, Water Level Controllers, Stabilizers, Servo Stabilizers, or Power Capacitors, we've got you covered. Our team is here to ensure that you receive top-notch products that meet your specific requirements.",
    },
  ];

  const toggle = ()=>setStop(!stop);
  const homepageInfrastructureContainer = [
    {
      title: "Our Infrastructure",
      para: "As per our market reputation, we have built a sound infrastructure unit with an objective to have extreme quality production. We ensure that the products are manufactured by using hi-tech production machines. In our company, we have skilled professional members for manufacturing the products. Our experts timely upgrade and maintain these machines for their smooth functional life.",
    },
  ];

  return (
    <div>
      <div className="home-page">
        <div className="home-page-welcome-container">
          <>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 6500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper-page" onMouseOver={toggle}>
                <strong className="bold">
                  We offer a business serves the requirements of both
                  residential (domestic) and industrial customers in the field
                  of electrical products or services. You likely provide
                  solutions for homes as well as larger-scale industrial
                  facilities, catering to the diverse electrical needs of a wide
                  range of consumers. This might involve anything from household
                  wiring and lighting to industrial-scale electrical
                  installations and solutions.
                </strong>
              </SwiperSlide>
              <SwiperSlide className="swiper-page">
                <div className="title">
                  <strong className="bolder1">
                    Automatic Phase Change over
                  </strong>{" "}
                  <br />
                  <strong className="bolder2">
                    Automatic Changeover with Current <br /> Limiter (ACCL)
                  </strong>
                </div>
                <div className="image">
                  <img src={one} alt="image" />
                  <a target="_blank" href="img_one.jpg"/>
                  <img src={two} alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-page">
                <div className="title">
                  <strong className="bolder1">
                    Automatic Water Level Controller
                  </strong>{" "}
                  <br />
                  <strong className="bolder2">
                    Automatic Servo Stabilizers
                  </strong>
                </div>
                <div className="image">
                  <img src={stabilizer1} alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-page">
                <div className="title">
                  <strong className="bolder1">
                    Automatic Water Level Controller
                  </strong>{" "}
                  <br />
                  <strong className="bolder2">
                    Submersible Pump Starter Panel with
                  </strong>
                  <br />
                  <strong className="bolder2"> Water Level Controller</strong>
                </div>
                <div className="image">
                  <img src={water} alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-page">
                <div className="title">
                  <strong className="bolder1">
                    Automatic Power Factor Controller
                  </strong>
                </div>
                <div className="image">
                  <img src={starter} alt="image" />
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>

        <div className="home-page-container">
          {homepageContainer.map((value, index) => {
            return (
              <div className="home-page-container" key={index}>
                <h2>{value.title}</h2>
                <p className="para1">{value.para1}</p>
                <p className="para2">{value.para2}</p>
              </div>
            );
          })}
        </div>
        <div className="home-page-infrastructure-container">
          {homepageInfrastructureContainer.map((value, index) => {
            return (
              <div className="infrastructure-container" key={index}>
                <h2>{value.title}</h2>
                <p>{value.para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
