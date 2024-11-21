import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoDetail from "./pages/VideoDetail";
import Vcart from "./components/VDcart";
import Shorts from "./pages/Shorts";

const App = () => {
  return (
    // Enable future flags to suppress React Router v7 warnings
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Video detail route with dynamic parameter */}
        <Route path="/video-detail/:id" element={<VideoDetail />} />

        {/* Cart component */}
        <Route path="/vdcart" element={<Vcart />} />

        {/* Shorts route with fallback for missing :id */}
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/shorts/:id" element={<Shorts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
