import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/index";
import PublicLayout from "./layouts/Public";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<PublicLayout />}>
                    <Route index element={<LandingPage />} />
                </Route>
                {/* Public routes */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
