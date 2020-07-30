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
      imageURL: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottownRow: height - (clarifaiFace.bottom_row *height)
    }
  }

  displayFaceBox = (box) =>{
    console.log(box)
    this.setState({box: box})
  }

  onInputChange=(event)=>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = ()=>{
    this.setState({imageURL: this.state.input});
    app.models.predict('a403429f2ddf4b49b307e318f00e528b', this.state.input).then(response=> {
      this.displayFaceBox(this.calculateFaceLocation(response))}).catch(err=>console.log(err))
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
        <FaceRecognition box = {this.state.box} imageUrl={this.state.imageURL} /> 
      </div>
    );
  } 
}

export default App;
