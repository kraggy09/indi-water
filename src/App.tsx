import "./App.css";
import logo from "./assets/indiwater_logo.png";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <div className="min-h-[90vh] flex-col min-w-[70vw] relative flex items-center justify-center">
      <UnderConstruction />

      <div className="absolute flex items-center justify-center flex-col bottom-4 right-0">
        <img
          src={logo}
          className=" rounded-xl bg-green-400  max-w-[120px] lg:min-w-[150px] lg:min-h-[100px] max-h-[60px]"
        />
        <p className="lg:text-xl bg-blue-300 px-4 text-white py-1 rounded-xl">
          The name with trust
        </p>
      </div>
    </div>
  );
}

export default App;
