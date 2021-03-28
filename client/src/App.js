import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Pages from './components/pages/MainPage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
