import React from 'react';
// import * as React from 'react';  <--- What's the difference??
import './App.css';
import Header from './Header';
import Splash from './Splash';
import EventCard from './EventCard';

function App() {
    return (
      <>
        <Header />
        <Splash />
        <EventCard />  
      </>
    );
}

export default App;