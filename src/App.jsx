import { useState } from "react";

import HeroPage from "./pages/heropage";
import SignupPage from "./pages/signup_driver";
import AvailDriver from "./pages/availdriver";

function App() {
  return (
    <>
      <HeroPage />
      <SignupPage />
      <AvailDriver />
    </>
  );
}

export default App;
