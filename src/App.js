import React from 'react';
import './App.css';
import Particles from 'react-particles-js'
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import Rank from './components/rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'

function App() {
  return (
    <div className="App">
       <Particles 
              className='particles'
              params={{
            		particles: {
                  number:{
                    value:120,
                    density:{
                      enable:true,
                      value_area:1000
                    }
                  },
                  line_linked:{
                    shadow:{
                      enable:true,
                      color:'#003f5c'
                    }
                  },
                color:{
                  value: '#003f5c'
                },
                links:{
                  color: '#003f5c'
                }}
              }}
              options={{
                background: {
                  color: {
                    value: "003f5c",
                  }
                }
              }}
            />
      <Navigation/>
      <Logo />
      <Rank/>
      <ImageLinkForm />
      {/* <FaceRecognition />  */}
    </div>
  );
}

export default App;
