import React, { useMemo, useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(180);
  const onWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const onHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [height, weight]);
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center flex-col bg-gray-300 ">
        <h1 className="h-12 w-80 flex items-center justify-center font-semibold text-lg bg-blue-400 rounded-md mx-8 ">
          BMI calculator
        </h1>

        <div className="input-section mt-3 w-40 h-20 ">
          <p className="slider-output">Weight: {weight} kg</p>
          <input
            className="slider-input"
            onChange={onWeightChange}
            type="range"
            step="1"
            min="40"
            max="200"
          />
          <p>Height: {height}cm</p>
          <input
            onChange={onHeightChange}
            type="range"
            step="1"
            min="140"
            max="220"
          />
          <p>Your BMI is</p>
          <p className="output bg-blue-400 rounded-md flex justify-center items-center font-semibold py-2">
            {output}
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
