import { Routes, Route } from "react-router-dom";

import HeroPage from "./pages/HeroPage";
import SignupPage from "./pages/SignUpPage";
import AvailDriver from "./pages/AvailDriver";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="available-drivers" element={<AvailDriver />} />
      </Routes>
    </div>
  );
}

export default App;
