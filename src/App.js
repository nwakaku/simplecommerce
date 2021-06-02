import React, { useEffect } from 'react'
import './App.css';
import Landing from './components/pages/Landing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { UserProvider } from './UserContext';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <UserProvider>
      <div className="App">
      <Landing />
    </div>
    </UserProvider>
    
  );
}

export default App;
