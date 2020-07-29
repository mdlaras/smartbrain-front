import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import Rank from './components/rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo />
      <Rank/>
      <ImageLinkForm />
      {/* <FaceRecognition />  */}
    </div>
  );
}

export default App;
