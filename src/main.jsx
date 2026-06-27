import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./component/Main-Pages/homepage.jsx";
import SignUp from "./component/Main-Pages/SignUp.jsx";
import GuardianLogIn from "./component/Pet-Guardian/GuardianLogIn.jsx";
import App from "./App";

import GuardianSignUp1 from "./component/Pet-Guardian/GuardianSignUp1.jsx";
import GuardianSignUp2 from "./component/Pet-Guardian/GuardianSignUp2.jsx";
import GuardianSignUp3 from "./component/Pet-Guardian/GuardianSignUp3.jsx";

import GuardianBrowsePets from "./component/Pet-Guardian/GuardianBrowsePets.jsx";
import GuardianMyApplications from "./component/Pet-Guardian/GuardianMyApplications.jsx";
import GuardianProfile from "./component/Pet-Guardian/GuardianProfile.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/guardian-log-in" element={<GuardianLogIn />} />

          <Route path="/guardian-sign-up-1" element={<GuardianSignUp1 />} />
          <Route path="/guardian-sign-up-2" element={<GuardianSignUp2 />} />
          <Route path="/guardian-sign-up-3" element={<GuardianSignUp3 />} />

          <Route path="/guardian-browse-pets" element={<GuardianBrowsePets />} />
          <Route path="/guardian-my-applications" element={<GuardianMyApplications />} />
          <Route path="/guardian-profile" element={<GuardianProfile />} />

        </Routes>
      </BrowserRouter>
    </App>
  </StrictMode>,
);
