import "./styles/App.css";

import Header from "./components/Header";
import CatBreedInfoPage from "./components/CatBreedInfoPage";

function App() {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Header />
      <CatBreedInfoPage />
    </>
  );
}

export default App;
