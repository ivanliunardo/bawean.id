import axios from 'axios';
import React from 'react';
import '../App.css';
import './ImageBanner.css';

class ImageBanner extends React.Component {
  state = {
    image: "/images/img-2.jpg"
  }

  componentDidMount(){
    axios.get('/imgbanner').then(res =>{
      this.setState(
        {
        image: res.data.image,
        }
      );
    })
  }

  render(){
    return (
        <div className='banner-container'>
            <img src={this.state.image}/>
        </div>
    );
  }
}

export default ImageBanner;
