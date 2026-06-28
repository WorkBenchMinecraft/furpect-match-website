import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./component/Main-Pages/homepage.jsx";
import SignUp from "./component/Main-Pages/SignUp.jsx";
import GuardianLogIn from "./component/Pet-Guardian/GuardianLogIn.jsx";
import App from "./App";

import GuardianSignUp from "./component/Pet-Guardian/GuardianSignUp.jsx";

import GuardianDashboard from "./component/Pet-Guardian/GuardianDashboard.jsx";
import GuardianBrowsePets from "./component/Pet-Guardian/GuardianBrowsePets.jsx";
import GuardianMyApplications from "./component/Pet-Guardian/GuardianMyApplications.jsx";
import GuardianProfilePersonal from "./component/Pet-Guardian/GuardianProfilePersonal.jsx";
import GuardianProfileSettings from "./component/Pet-Guardian/GuardianProfileSettings.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/guardian-log-in" element={<GuardianLogIn />} />

          <Route path="/guardian-sign-up" element={<GuardianSignUp />} />

          <Route path="/guardian-dashboard" element={<GuardianDashboard/>} />
          <Route path="/guardian-browse-pets" element={<GuardianBrowsePets />} />
          <Route path="/guardian-my-applications" element={<GuardianMyApplications />} />
          <Route path="/guardian-profile-personal" element={<GuardianProfilePersonal />} />
          <Route path="/guardian-profile-settings" element={<GuardianProfileSettings />} />

        </Routes>
      </BrowserRouter>
    </App>
  </StrictMode>,
);
