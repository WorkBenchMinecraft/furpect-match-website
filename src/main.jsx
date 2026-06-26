import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./component/Main-Pages/homepage.jsx";
import "./component/Main-Pages/homepage.css";
import App from "./App";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </App>
  </StrictMode>,
);
