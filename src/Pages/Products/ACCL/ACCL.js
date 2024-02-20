import React from "react";
import "../ACCL/ACCL.css";
import { IconRecharging } from "@tabler/icons-react";
import AcclImage from "../../../Assets/Products/ACCL/1.png";
import SinglePhaseImage from "../../../Assets/Products/ACCL/1.png";
import ThreePhaseImage from "../../../Assets/Products/ACCL/2.png";
import ACCLProductRangeImage from '../../../Assets/Products/ACCL/change-limiter.png';
const ACCL = () => {
  const Sec1Container = [
    {
      title: "Automatic Changeover with Current Limiter",
      para: "Trio Automatic Changeover with current Limiter stand by, when mains supply fails and Genset supply starts, ACCL Transfers the Load from mains supply to Genset mode automatically. When Genset Load exceeds the limit, power supply is automatically switched off for 6 sec, during the switched off period (6 sec) the user has to reduce the load to the permitted limit fixed in ACCL to recieve continuous Genset supply.",
    },
  ];
  return (
    <div>
      <div className="automatic-changeover-with-current-limiter-page">
        <div className="automatic-changeover-with-current-limiter-page-banner-container">
          <h2>Automatic Changeover with Current Limiter (ACCL)</h2>
          <h5 className="automatic-changeover-with-current-limiter-page-container-next-title">
            <a href="index.html" class="home">
              {" "}
              home
            </a>{" "}
            ~ automatic changeover with current limiter
          </h5>
        </div>
        <div className="automatic-changeover-with-current-limiter-page-sec1-container">
          {Sec1Container.map((value, index) => {
            return (
              <div className="sec1-accl-contianer" key={index}>
                <h2>{value.title}</h2>
                <p>{value.para}</p>
              </div>
            );
          })}
          <img src={AcclImage} />
        </div>
        <div className="automatic-changeover-with-current-limiter-page-sec2-container">
          <h2>ACCL Function</h2>

          <p>
            {" "}
            <IconRecharging size={24} color="red" /> ACCL allows unrestricted
            power supply from mains
          </p>
          <p>
            {" "}
            <IconRecharging size={24} color="red" /> When main supply fails and
            start by genset supply is on ACCL connects the Genset power to load
            and starts maintaining load current
          </p>
          <p>
            {" "}
            <IconRecharging size={24} color="red" /> Whenever the power load
            exceeds the limit on genset then power automatically switched off 6
            secand restored automatically
          </p>
          <p>
            {" "}
            <IconRecharging size={24} color="red" /> Outload disconnects rests
            till over load exists
          </p>
          <p>
            {" "}
            <IconRecharging size={24} color="red" /> On resumption of mains
            power supply it again automatically changeover instantly
          </p>
        </div>
        <div className="automatic-changeover-with-current-limiter-page-sec3-container">
          <h2> Benifits</h2>

          <p>
            {" "}
            <IconRecharging size={24} color="red" /> Total automation at no
            extra cost
          </p>
          <p>
            {" "}
            <IconRecharging size={24} color="red" /> Norestriction on choice of
            genset power points, no separate wiring required
          </p>
          <p>
            {" "}
            <IconRecharging size={24} color="red" /> Operational status
            indication through LED's
          </p>
          <p>
            {" "}
            <IconRecharging size={24} color="red" /> Easy maintenance,
            Significant space and wiring.
          </p>
          <p>
            {" "}
            <IconRecharging size={24} color="red" /> Assured availability of
            allotted stabilized power supply.
          </p>
          <p>
            {" "}
            <IconRecharging size={24} color="red" /> Safe guard genset by
            gradual loading and precision monitoring.
          </p>
        </div>
        <div className="automatic-changeover-with-current-limiter-page-sec4-container">
          <h2>Automatic Changeover with Current Limiter (ACCL) Types</h2>
          <div className="accl-containers">
            <div className="accl-container-single-phase-effect">
              <img
                className="img1"
                src={SinglePhaseImage}
                alt="SinglePhaseImage"
              />
              <div className="accl-container-single-phase-hover">
                <h2 className="accl-container-single-phase-title">
                  Single Phase
                </h2>
              </div>
            </div>
            <div className="accl-container-three-phase-effect">
              <img
                className="img2"
                src={ThreePhaseImage}
                alt="ThreePhaseImage"
              />
              <div className="accl-container-three-phase-hover">
                <h2 className="accl-container-three-phase-title">
                  Three Phase
                </h2>
              </div>
            </div>
          </div>
          <div className="accl-containers-title">
            <h2 className="title1">Single Phase</h2>
            <h2 className="title2">Three Phase</h2>
          </div>
          <img src={ACCLProductRangeImage}/>
        </div>
      </div>
    </div>
  );
};

export default ACCL;
