import "./App.css";
import { BearBox } from "./components/BearBox";
import { CatBox } from "./components/CatBox";

function App() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <CatBox />
      </div>
      <div>
        <BearBox />
      </div>
    </div>
  );
}

export default App;
