import Plans from "../src/pages/PlansPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountPage from "../src/pages/AccountPage.tsx";
import HomePage from "../src/components/Home/HomePage.tsx";
import GroupPage from "./pages/GroupsPage.tsx";

const App = () => {
  const userdata = [
    {
      id: 0,
      username: "raycharly",
      email: "taeballen03@icloud.com",
      firstname: "Avantae",
      lastname: "jackson",
      password: "alkmql",
      ingroup: true,
      inclasses: true,
      status: true,
      host: true,
    },
    {
      id: 1,
      username: "jimmytron",
      email: "tae@ballen.com",
      firstname: "Jacksom",
      lastname: "jackson",
      password: "alkmql",
      ingroup: true,
      inclasses: true,
      status: true,
      host: false,
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
              id={userdata[0].id}
              fName={userdata[0].firstname.charAt(0)}
              userName={userdata[0].username}
              inGroup={userdata[0].ingroup}
              inClasses={userdata[0].inclasses}
              status={userdata[0].status}
              fsName={userdata[1].firstname.charAt(0)}
              hoster={userdata[0].host}
            />
          }
        />
        <Route path="/groups" element={<GroupPage />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </Router>
  );
};

export default App;
