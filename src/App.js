import React, { useEffect } from 'react'
import './App.css';
import Landing from './components/pages/Landing';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
