import React from "react";
import "../PowerFactor/PowerFactor.css";
import SinglePhaseImage from "../../../Assets/Products/PowerFactor/single-phase.png";
import ThreePhaseImage from "../../../Assets/Products/PowerFactor/three-phase.png";
const PowerFactor = () => {
  const Sec1Container = [
    {
      title: "Automatic Power Factor Control Panel",
      para: "PowerFactor(PF) is the ratio of Power utilized (KW) and Power Drawn (KVA). To reduce the KVAdrawn, theinductive KVARis to benullified byintroducing an equal and opposite Capacitive KVAR accoding to the load Pattern, thus OPTIMUM PF is maintained. By Maintaining an optimum PF the power drawn (KVA) can be reduced, thus reducing the current passing through the electrcal circuits to the maximum extent possible(even up to 50%) thereby reducing the machine down time in turn increases the life of the electrical circuits",
    },
  ];
  const apfcImage1 = [
    {
      image: SinglePhaseImage,
      title: "Single Phase",
    },
  ];
  const apfcImage2 = [
    {
      image: ThreePhaseImage,
      title: "Three Phase",
    },
  ];
  const Sec3Container = [
    {
      title: "Single Phase Connection",
      para1: `TRIO's Single Phase APFChasController with 5 Stagesperphaseie. 15 stagesintotal is suitable for switching ONthestar connectedsingle phase Capacitors, whenever there is Load imbalance. The number of stages can be increased or decreased according to customers request, The Fine Correction maybe as low as 0.25 KVARat thefirst stage ensures optimumPF andimproves the efficiency of the powersystems.`,
      para2: `For given power system Trio's APFC Panel alwaystendsto maintain the PowerFactorat 0.99Lag by measuring the exact RKVA demand and switching ON a suitable capacitor bank automatically`,
    },
  ];
  return (
    <div>
      <div className="automatic-power-factor-control-panel-page">
        <div className="automatic-power-factor-control-panel-page-banner-container">
          <h2>Automatic Power Factor Control Panel</h2>
          <h5 className="automatic-power-factor-control-panel-page-banner-container-next-title">
            <a href="index.html" class="home">
              {" "}
              home
            </a>{" "}
            ~ automatic power factor control panel
          </h5>
        </div>
        <div className="automatic-power-factor-control-panel-page-sec1-container">
          {Sec1Container.map((value, index) => {
            return (
              <div key={index}>
                <h2>{value.title}</h2>
                <p>{value.para}</p>
              </div>
            );
          })}
        </div>
        <div className="automatic-power-factor-control-panel-page-sec2-container">
          <h2>Types of Automatic Power Factor Control Panel</h2>
          <div className="apfc-image">
            {apfcImage1.map((value, index) => {
              return (
                <div className="single-phase-image" key={index}>
                  <img src={value.image} />
                  <h3>{value.title}</h3>
                </div>
              );
            })}

            {apfcImage2.map((value, index) => {
              return (
                <div className="single-phase-image" key={index}>
                  <img src={value.image} />
                  <h3>{value.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="automatic-power-factor-control-panel-page-sec3-container">
          {Sec3Container.map((value,index)=>{
            return(
              <div key={index}>
                <h2>{value.title}</h2>
                <p>{value.para1}</p>
                <p>{value.para2}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default PowerFactor;
