import { useCatStore } from "../stores/catStore";

export const CatBox = () => {
  const { cats, increaseBigCats, increaseSmallCats, summary } = useCatStore();

  return (
    <div className="box">
      <h1>Cat Box</h1>
      <h2>Small Cats: {cats.smallCats}</h2>
      <h2>Big Cats: {cats.bigCats}</h2>
      <h2>Total Cats: {summary()}</h2>
      <div>
        <button onClick={increaseSmallCats}>increase small cats</button>
        <button onClick={increaseBigCats}>increase small cats</button>
      </div>
    </div>
  );
};
