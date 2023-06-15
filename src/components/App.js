import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Home';
import InboxPage from './InboxPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Tabless from './Tabless'
import Contact from './Contact'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/inbox" element={<InboxPage/>} />
        <Route path="/Navigation" element={<Navigation/>} />
        <Route path="/contact" element={<Contact/>} />

        
      </Routes>    
    </Router>
    
    
  
  );
};

export default App;
