import "./css/main.scss";
import { Heder } from "./Banner";
import { AboutUs } from "./AboutUs";
import { Places } from "./Places";
import { Footer } from "./Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Heder></Heder>
      <AboutUs></AboutUs>
      <div className="places">
        <Places id={0}></Places>
        <Places id={1}></Places>
        <Places id={2}></Places>
        <Places id={3}></Places>
        <Places id={4}></Places>
        <Places id={5}></Places>
      </div>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default App;
