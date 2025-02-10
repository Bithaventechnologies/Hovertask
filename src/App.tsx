import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/index";
import PublicLayout from "./layouts/Public";
import Aboutus from "./pages/index/components/Aboutus";
import Contactus from "./pages/index/components/Contactus";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="contact" element={<Contactus />} />
        </Route>
        {/* Public routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
