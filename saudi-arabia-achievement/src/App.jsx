import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import DetialsProject from './component/DetialsProject';
import PageProject from './component/PageProject';
import Projects from './component/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/DetialsProject/:id" element={<DetialsProject />} />
        <Route path="/PageProject" element={<PageProject />} />
      </Routes>

      <footer className="footer footer-center p-4 bg-white border border-gray-500 text-base-content mt-10">
  <aside>
    <p>Copyright © 2023 - All right reserved by Sarah Alqahtani</p>
  </aside>
</footer>
    </>
    
  );
}

export default App;
