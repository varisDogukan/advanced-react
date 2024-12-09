import React from "react";

export const ControlledFlow = ({ children, currentIndex, onNext }) => {
  const goNext = (dataFromStep) => {
    onNext(dataFromStep);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};

//#region Controlled-flow App.js içerisinde örnek kullanımı
import { useState } from "react";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1: Enter your name:</h1>
      <button onClick={() => goNext({ name: "MyName" })}>Next</button>
    </>
  );
};

const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: Enter your age: </h1>
      <button onClick={() => goNext({ age: 26 })}>Next</button>
    </>
  );
};

const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Congredulations! You qualify for the gift!</h1>
      <button onClick={() => goNext({ country: "Mars" })}>Next</button>
    </>
  );
};

const StepFourth = ({ goNext }) => {
  return (
    <>
      <h1>Step #4: Enter your country:</h1>
      <button onClick={() => goNext({ country: "Mars" })}>Next</button>
    </>
  );
};

function App() {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
      <ControlledFlow onNext={goNext} currentIndex={currentStepIndex}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFourth />
      </ControlledFlow>
    </>
  );
}

export default App;
//#endregion
