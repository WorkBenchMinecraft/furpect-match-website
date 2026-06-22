import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Index from './Index.tsx';
import AboutUs from './AboutUs.tsx';
import PetGuardian from './PetGuardian';
import PetProvider from './PetProvider';
import HowItWorks from './HowItWorks';
import Resources from './Resources';
import SignUp from './SignUp';
import LogIn from './LogIn';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pet-guardian" element={<PetGuardian />} />
          <Route path="/pet-provider" element={<PetProvider />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </App>
  </StrictMode>,
)
