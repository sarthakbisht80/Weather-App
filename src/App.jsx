import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DashboardPage from "./pages/DashboardPage";
import CityPage from "./pages/CityPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/city/:cityName" element={<CityPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;