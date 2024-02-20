import React from "react";
import "./Voltage.css";
import LedTvImage from "../../../Assets/Products/Voltage/1.png";
import LedTvPriceTableImage from "../../../Assets/Products/Voltage/LEDTV-table.png";
import RefrigratorTableImage from "../../../Assets/Products/Voltage/fridge-table.png";
import RefrigratorImage from "../../../Assets/Products/Voltage/2.png";
import WashingMachineImage from "../../../Assets/Products/Voltage/3.png";
import WashingMachineTableImage from "../../../Assets/Products/Voltage/washing-machine-table.png";
import AcTableImage from "../../../Assets/Products/Voltage/AC-table.png";
import AcImage from "../../../Assets/Products/Voltage/4.png";
import AcImageDoubleBooster from "../../../Assets/Products/Voltage/ac2-table.png";
import AcImageTripleBooster from "../../../Assets/Products/Voltage/ac3-table.png";
const Voltage = () => {
  const Sec1Container = [
    {
      title: "Automatic Voltage Stabilizer",
      para: `Automatic Voltage Stabilizers are based on SAVE POWER Technology, and have many Unique Features which enable them to give High Performance, Better Reliability and SAVE Electricity. Trioproducts has complete Range of Energy Efficient Digital Voltage Stabilizers for Air-conditioners with various working Input Range, suitable for all kinds of Power and Voltage Conditions. All Stabilizers for AC's also have Smart Time Delay feature, which gives breathing space & Stabilizes the Power supplying to the Load, hence increases the Life of Appliances.`,
    },
  ];
  return (
    <div>
      <div className="automatic-voltage-stabilizer-page">
        <div className="automatic-voltage-stabilizer-page-banner-container">
          <h2>Automatic Voltage Stabilizer</h2>
          <h5 className="automatic-voltage-stabilizer-page-container-next-title">
            <a href="index.html" class="home">
              {" "}
              home
            </a>{" "}
            ~ automatic voltage stabilizer
          </h5>
        </div>
        <div className="automatic-voltage-stabilizer-page-sec1-container">
          {Sec1Container.map((value, index) => {
            return (
              <div key={index}>
                <h2>{value.title}</h2>
                <p>{value.para}</p>
              </div>
            );
          })}
        </div>
        <div className="automatic-voltage-stabilizer-page-sec2-container">
          <h2>Our products of Automatic Voltage Stabilizer</h2>
          <div className="voltage-stabilizer-products">
            <div className="leftside-image">
              <img src={LedTvImage} />
            </div>
            <div className="rightside-image">
              <h3>LED TV</h3>
              <h4>Specialization</h4>
              <img className="img1" src={LedTvPriceTableImage} />
            </div>
          </div>
        </div>
        <div className="automatic-voltage-stabilizer-page-sec3-container">
          <div className="refrigrator-container">
            <div className="leftside-image">
              <h3>Refrigrator/ Deep Freezer</h3>
              <h4>Specialization</h4>
              <img src={RefrigratorTableImage} />
            </div>
            <div className="rightside-image">
              <img className="img2" src={RefrigratorImage} />
            </div>
          </div>
        </div>
        <div className="automatic-voltage-stabilizer-page-sec4-container">
          <div className="washing-machine-container">
            <div className="leftside-image">
              <img src={WashingMachineImage} />
            </div>
            <div className="rightside-image">
              <h3>Washing Machine & Treadmill</h3>
              <h4>Specialization</h4>
              <img className="img3" src={WashingMachineTableImage} />
            </div>
          </div>
        </div>
        <div className="automatic-voltage-stabilizer-page-sec5-container">
          <div className="ac-container">
            <div className="leftside-image">
              <h3>Air conditioner</h3>
              <h4>Specialization</h4>
              <img src={AcTableImage} />
            </div>
            <div className="rightside-image">
              <img className="img4" src={AcImage} />
            </div>
          </div>
        </div>
        <div className="automatic-voltage-stabilizer-page-sec6-container">
          <div className="ac-container">
            <div className="leftside-table-image">
              <h4>Specification - Double Booster</h4>
              <img className="img1" src={AcImageDoubleBooster} />
            </div>
            <div className="rightside-table-image">
              <h4>Specification - Triple Booster</h4>
              <img className="img2" src={AcImageTripleBooster} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voltage;
