import React from "react";
import "../Water/Water.css";
import { IconRecharging } from "@tabler/icons-react";
import AutomaticBSeriesImage from "../../../Assets/Products/Water/b-series.png";
import AutomaticSSeriesImage from "../../../Assets/Products/Water/s-series.png";
import AutomaticFSeriesImage from "../../../Assets/Products/Water/f-series.png";
const Water = () => {
  const Sec1Container = [
    {
      title: "Automatic Water Level Controller",
      para: "Trio Products is Registered Trade Mark and recognized for its quality products. we are the Manufacturers and Dealers of power and resource saving devices like Automatic Water Level Controller, Water level Indicator, Wireless Water level controller, Digital water level Indicators, remote controlled devices for home automation. We use state of the art digital technology to manufacture high quality systems. Digital systems and solutions are manufacturing Automatic water level controler Systems since 1994. Our water level controllers are built to last and perform for a long time.",
    },
  ];

  return (
    <div>
      <div className="automatic-water-level-controller-page">
        <div className="automatic-water-level-controller-page-banner-container">
          <h2>Automatic Water Level Controller</h2>
          <h5 className="automatic-water-level-controller-page-container-next-title">
            <a href="index.html" class="home">
              {" "}
              home
            </a>{" "}
            ~ automatic water level controller
          </h5>
        </div>
        <div className="automatic-water-level-controller-page-sec1-container">
          {Sec1Container.map((value, index) => {
            return (
              <div className="" key={index}>
                <h2>{value.title}</h2>
                <p>{value.para}</p>
              </div>
            );
          })}
        </div>
        <div className="automatic-water-level-controller-page-sec2-container">
          <h2>Types of Water Level Controller</h2>
          <div className="wlc-types-image">
            <img className="b-series" src={AutomaticBSeriesImage} />
            <img className="s-series" src={AutomaticSSeriesImage} />
            <img className="f-series" src={AutomaticFSeriesImage} />
          </div>
          <div className="wlc-types-title">
            <h3>Fully Automatic B-Series</h3>
            <h3>Fully Automatic S-Series</h3>
            <h3>Fully Automatic F-Series</h3>
          </div>
        </div>
        <div className="automatic-water-level-controller-page-sec3-container">
          <img src={AutomaticBSeriesImage} />
          <div className="rightside-container">
            <h3>Fully Automatic B-Series</h3>
            <h4>Special Features:</h4>
            <p>
              <IconRecharging size={24} color="red" /> Micro Based Automatic
              Water Pump controller
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Attractive 7 segment LED
              and 4 step display
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Advanced Programmable
              24hrs cyclic timer setting
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Switches ON the pump when
              overheadtank is empty
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Switches OFF the pump
              when overhead tank is full, Low Voltage(LV) and High Voltage(HV)
              protection
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Ampere Sensor based Dry
              run and Overload Protection
            </p>
            <p>
              <IconRecharging size={24} color="red" /> During emergency use your
              motor manually at anytime
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Easy Installation by
              Electricians and Plumbers
            </p>
          </div>
        </div>
        <div className="automatic-water-level-controller-page-sec4-container">
          <div className="leftside-container">
            <h3>Fully Automatic S-Series</h3>
            <h4>Special Features:</h4>
            <p>
              <IconRecharging size={24} color="red" /> Micro Based Automatic
              Water Pump controller
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Switches ON the pump when
              overheadtank is empty
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Water Flowing Sensor
              based Dryrun Protection
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Optional : (Manual ON and
              Auto OFF) Semi-Automatic
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Optional : Over Head Tank
              with 2 or4 level indication
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Optional : Sump and Over
              head tank with 2 level indication for each can be done
            </p>
          </div>
          <img src={AutomaticSSeriesImage}/>
        </div>
        <div className="automatic-water-level-controller-page-sec5-container">
          <img src={AutomaticFSeriesImage} />
          <div className="rightside-container">
            <h3>Fully Automatic F-Series</h3>
            <h4>Special Features:</h4>
            <p>
              <IconRecharging size={24} color="red" /> Micro Based Automatic
              Water Pump controller
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Attractive 7 segment LED
              and 4 step display
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Advanced Programmable
              24hrs cyclic timer setting
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Switches ON the pump when
              overheadtank is empty
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Switches OFF the pump
              when overhead tank is full, Low Voltage(LV) and High Voltage(HV)
              protection
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Ampere Sensor based Dry
              run and Overload Protection
            </p>
            <p>
              <IconRecharging size={24} color="red" /> During emergency use your
              motor manually at anytime
            </p>
            <p>
              <IconRecharging size={24} color="red" /> Easy Installation by
              Electricians and Plumbers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Water;
