import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import ProgressBar from "./components/ProgressBar";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import FaceBook from "./components/FaceBook";
import NumbersTable from "./components/NumbersTable";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
     
      <NumbersTable limit={12} />
      
    </div>
  );
}

export default App;
