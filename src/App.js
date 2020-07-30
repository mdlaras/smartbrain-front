import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js'
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import Rank from './components/rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Clarifai from 'clarifai'
import FaceRecognition from './components/facerecognition/FaceRecognition'

const app = new Clarifai.App({
  apiKey: 'f1d28c6c50554a0aa7c391d9ebebb296'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageURl: ''
    }
  }
  onInputChange=(event)=>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = ()=>{
    this.setState({imageURl: this.state.input});
    app.models.predict('a403429f2ddf4b49b307e318f00e528b', this.state.input).then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    },
    function(err) {
      // there was an error
    }
  );
  }

  render(){
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
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>
        <FaceRecognition imageURl={this.state.imageURl} /> 
      </div>
    );
  } 
}

export default App;
