import Plans from "../src/pages/PlansPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountPage from "../src/pages/AccountPage.tsx";
import HomePage from "../src/components/Home/HomePage.tsx";

const App = () => {
  const userdata = [
    {
      id: 0,
      username: "raycharly",
      email: "taeballen03@icloud.com",
      firstname: "Avantae",
      lastname: "jackson",
      password: "alkmql",
    },
    {
      id: 1,
      username: "jimmytron",
      email: "taeballen@icloud.com",
      firstname: "Jacksom",
      lastname: "jackson",
      password: "alkmql",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/loggedin"
          element={
            <AccountPage
              data={userdata}
              firstletter={userdata[0].firstname.charAt(0)}
              letter={userdata[(0, 1)].firstname.charAt(0)}
              name={userdata[0].firstname}
            />
          }
        />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </Router>
  );
};

export default App;
