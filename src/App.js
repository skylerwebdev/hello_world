 

import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import AppRouter from './configs/AppRouter';

function App() {
  return (
    <div className='App'>
      <Header />
      <AppRouter />
      <Footer />

    </div>
  );
}

export default App;

