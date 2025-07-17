import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AnimatedText from "./components/AnimatedText";

const App: React.FC = () => {
  const [showAnimatedText, setShowAnimatedText] = useState(true);

  const handleAnimationComplete = () => {
    setShowAnimatedText(false);
  };

  return (
    <>
      {showAnimatedText && (
        <AnimatedText onAnimationComplete={handleAnimationComplete} />
      )}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
