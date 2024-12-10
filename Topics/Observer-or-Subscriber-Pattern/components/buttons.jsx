import { emitter } from "../App";

const Buttons = () => {
  const onIncrementCounter = () => {
    emitter.emit("inc");
  };

  const onDecrementCounter = () => {
    emitter.emit("dec");
  };

  return (
    <div>
      <button onClick={onIncrementCounter}>➕</button>
      <button onClick={onDecrementCounter}>➖</button>
    </div>
  );
};

export default Buttons;
