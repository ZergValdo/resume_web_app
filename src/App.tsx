import "./App.css";
import BodyPart from "./Components/BodyPart";
import FooterPage from "./Components/Footer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <div className="bg-cyan-950 h-screen w-screen">
        <NavBar />
        <BodyPart />
        <FooterPage />
      </div>
    </>
  );
}

export default App;
