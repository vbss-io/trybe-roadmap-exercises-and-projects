import React, { useContext } from "react";
import CarsContext from "./context/CarsContext";
import carBlue from "./images/carBlue.jpeg";
import carRed from "./images/carRed.jpeg";
import carYellow from "./images/carYellow.jpeg";

function Cars() {
  const { redCar, setRedCar, blueCar, setBlueCar, yellowCar, setYellowCar } =
    useContext(CarsContext);

  return (
    <div>
      <div>
        <img
          className={redCar ? "car-right" : "car-left"}
          src={carRed}
          alt="red car"
        />
        <button onClick={() => setRedCar(!redCar)} type="button">
          Move Car
        </button>
      </div>
      <div>
        <img
          className={blueCar ? "car-right" : "car-left"}
          src={carBlue}
          alt="blue car"
        />
        <button onClick={() => setBlueCar(!blueCar)} type="button">
          Move Car
        </button>
      </div>
      <div>
        <img
          className={yellowCar ? "car-right" : "car-left"}
          src={carYellow}
          alt="yellow car"
        />
        <button onClick={() => setYellowCar(!yellowCar)} type="button">
          Move Car
        </button>
      </div>
    </div>
  );
}

export default Cars;
