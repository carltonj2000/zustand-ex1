import { useBearStore } from "../stores/bearStore";

export const BearBox = () => {
  const { bears, increasePopulation, removeAllBears } = useBearStore();

  return (
    <div className="box">
      <h1>Bear Box</h1>
      <h2>Bears: {bears}</h2>
      <div>
        <button onClick={() => increasePopulation()}>add bear</button>
        <button onClick={() => removeAllBears()}>remove bears</button>
      </div>
    </div>
  );
};
