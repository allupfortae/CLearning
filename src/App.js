import Plans from "../src/pages/PlansPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoggedinPage from "../src/pages/LoggedinPage.tsx";

import HomePage from "../src/components/Home/HomePage.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signedin" element={<LoggedinPage />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </Router>
  );
};

export default App;
