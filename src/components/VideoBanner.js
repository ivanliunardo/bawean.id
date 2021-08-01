import axios from 'axios';
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoBanner.css';

class VideoBanner extends React.Component {
  state = {
    video: "/videos/hero.mp4",
    title: "Visit Pulau Bawean",
    text: "Reprehenderit aliquip adipisicing non Lorem."
  }

  componentDidMount(){
    axios.get('/vidbanner').then(res =>{
      this.setState(
        {
        video: res.data.video,
        title: res.data.title,
        text: res.data.text
        }
      );
    })
  }

  render(){
    return (
      <div className='hero-container'>
        <video src={this.state.video} autoPlay loop muted />
        <h1>{this.state.title}</h1>
        <p>{this.state.text}</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            KUNJUNGI BAWEAN
          </Button>
        </div>
      </div>
    );
  }
}

export default VideoBanner;
