// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import PlanPage from "./pages/PlanPage";

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/city" element={<HomePage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/categories" element={<CategoriesPage />} />
                        <Route path="/plan" element={<PlanPage />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
