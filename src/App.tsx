import React from 'react';
import './App.css';
import Users from './components/Users';
import Header from './components/layout/Header';
import { navigationLinks } from './components/navigation';
import Routing from './routes/Routing';

function App() {
 
  return (
  
      <div className="App">
        <Header navigationLinks={navigationLinks} />
        <Routing/>
      </div>
    
  
  );
}

export default App;
