import React from "react";
import "../APC/APC.css";
import ApcImage from "../../../Assets/Products/APC/1.png";
import { IconRecharging } from "@tabler/icons-react";
import RegularImage from "../../../Assets/Products/APC/1.png";
import DDBVerticalImage from "../../../Assets/Products/APC/2.png";
import DDBHarizontalImage from "../../../Assets/Products/APC/3.png";
import EB1GEN1Image from "../../../Assets/Products/APC/4.png";
import DDBVerticalImg from "../../../Assets/Products/APC/vertical-table.png";
import DDBHarizontalImg from "../../../Assets/Products/APC/harizontal-table.png";
import apcTable1Image from "../../../Assets/Products/APC/changeover-table2.png";
import apcTable2Image from "../../../Assets/Products/APC/changeover-table.png";
const APC = () => {
  const Sec1Container = [
    {
      title: "Automatic Phase Changeover",
      para: " Electricity is an essential one in our daily life.Now a days phase failures are common. By knowing your needs, We came to light up your life with an un-interruption electricity service by our Automatic Phase Changeover named trio.",
    },
  ];
  const apcFeature = [
    {
      title: "Features",
      para: `Trio Automatic Phase Changeover is coming out with APC-SL and EB-GEN tofulfil the exact requirements.`,
    },
  ];
  const apcFeatureTrioEb1Gen1 = [
    {
      title: "TRIO EB1 GEN1 :",
      para: `When EB supply fails this system changes to the Genset mode automatically. When EB supply resumes it goes back to the EB mode and switches off the Genset (Single Phase) Automatically. Three phase Genset changeovers can also be supplied against order`,
    },
  ];
  const apcFeatureEb3Gens = [
    {
      title: "EB3 GENS :",
      para: `This is the combination of automatic phase changeover and Genset changeover.`,
    },
  ];
  const apcFeatureTrioApcSlHd = [
    {
      title: "TRIO APC SL HD :",
      para: `This is specially designed for three phase users. Who have single phase wiring & UPS users, For UPS users Of they have a three phase supply) UPS A connected to any one of the phases. If that particular phase fails then the UPS changes to the battery mode If the UPS is connected through TRIO Auto phase Changeover When one or two phases falls TRIO gives continuous supply from the alive phase automatically, thus increases the life of the battery.`,
    },
  ];
  return (
    <div>
      <div className="automatic-phase-changeover-page">
        <div className="automatic-phase-changeover-page-banner-container">
          <h2>Automatic Phase Changeover</h2>
          <h5 className="automatic-phase-changeover-page-container-next-title">
            <a href="index.html" class="home">
              {" "}
              home
            </a>{" "}
            ~ automatic phase changeover
          </h5>
        </div>
        <div className="automatic-phase-changeover-page-sec1-container">
          {Sec1Container.map((value, index) => {
            return (
              <div className="sec1-apc-contianer" key={index}>
                <h2>{value.title}</h2>
                <p>{value.para}</p>
              </div>
            );
          })}
          <img className="sec1-apc-img" src={ApcImage} />
        </div>
        <div className="automatic-phase-changeover-page-sec2-container">
          <h2>Performence</h2>

          <p>
            {" "}
            <IconRecharging className="para" size={24} color="red" /> Automatically changes the
            available phase lines to the non-available phaselines
          </p>
          <p>
            {" "}
            <IconRecharging className="para" size={24} color="red" /> R.Y.B. Phase Indication.
          </p>
          <p>
            {" "}
            <IconRecharging className="para" size={24} color="red" /> Fully Automatic solid state
            transfer circuit.
          </p>
          <p>
            {" "}
            <IconRecharging className="para" size={24} color="red" /> Phase changer with
            distribution board models also available
          </p>
          <p>
            {" "}
            <IconRecharging className="para" size={24} color="red" /> Easy installation and user
            friendly.
          </p>
        </div>
        <div className="automatic-phase-changeover-page-sec3-container">
          <h1>Our Products</h1>
          <div className="apc-containers">
            <div className="apc-container-regular-effect">
              <img src={RegularImage} alt="RegularImage" />
              <div className="apc-container-regular-hover">
                <h2 className="apc-container-regular-title">Regular</h2>
              </div>
            </div>
            <div className="apc-container-vertical-effect">
              <img src={DDBVerticalImage} alt="DDBVerticalImage" />
              <div className="apc-container-vertical-hover">
                <h2 className="apc-container-vertical-title">DDB Vertical</h2>
              </div>
            </div>
            <div className="apc-container-harizontal-effect">
              <img src={DDBHarizontalImage} alt="DDBHarizontalImage" />
              <div className="apc-container-harizontal-hover">
                <h2 className="apc-container-harizontal-title">
                  DDB Harizontal
                </h2>
              </div>
            </div>
            <div className="apc-container-eb1gen1-effect">
              <img src={EB1GEN1Image} alt="EB1GEN1Image" />
              <div className="apc-container-eb1gen1-hover">
                <h2 className="apc-container-eb1gen1-title">EB1 GEN1</h2>
              </div>
            </div>
          </div>
          <div className="apc-containers-title">
            <h2>Regular</h2>
            <h2>DDB Vertical</h2>
            <h2>DDB Harizontal</h2>
            <h2>EB1 GEN1</h2>
          </div>
        </div>
        <div className="automatic-phase-changeover-page-sec4-container">
          {apcFeature.map((value, index) => {
            return (
              <div className="apc-top" key={index}>
                <h2>{value.title}</h2>
                <p>{value.para}</p>
              </div>
            );
          })}
          {apcFeatureTrioEb1Gen1.map((value, index) => {
            return (
              <div className="apc-top" key={index}>
                <h2>{value.title}</h2>
                <p>{value.para}</p>
              </div>
            );
          })}
          {apcFeatureEb3Gens.map((value, index) => {
            return (
              <div className="apc-top" key={index}>
                <h2>{value.title}</h2>
                <p>{value.para}</p>
              </div>
            );
          })}
          {apcFeatureTrioApcSlHd.map((value, index) => {
            return (
              <div className="apc-top" key={index}>
                <h2>{value.title}</h2>
                <p>{value.para}</p>
              </div>
            );
          })}
        </div>
        <div className="automatic-phase-changeover-page-sec5-container">
          <div className="sec5-vertical table-left-container">
            <h2>DDB Vertical</h2>
            <img src={DDBVerticalImg} />
          </div>
          <div className="sec5-vertical table-right-container">
            <h2>DDB Harizontal</h2>
            <img src={DDBHarizontalImg} />
          </div>
        </div>
        <img className="table1-img" src={apcTable1Image} />
        <img className="table2-img" src={apcTable2Image} />
      </div>
    </div>
  );
};

export default APC;
