import React from 'react';
import 'aos/dist/aos.css'
import '../App.css';
import './Demografi.css';
import axios from 'axios';

class Demografi extends React.Component{
    state = {
        video: "/videos/map.mp4",   
        title: "Demografi Pulau Bawean",
        text: "Veniam magna ipsum proident labore. Lorem ad sint anim minim. Ipsum excepteur labore labore ex occaecat minim. Labore exercitation deserunt elit quis commodo esse laborum amet non. Cillum fugiat aliqua officia occaecat minim officia eu ipsum culpa. Ea incididunt labore culpa tempor eu ea occaecat minim qui do non duis eiusmod pariatur."
    }

    componentDidMount(){
        axios.get('/map').then(res =>{
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
        return(
            <div className='mapdesc-container'>
                <div data-aos='fade-right'  className='map'>
                    <video src={this.state.video} autoPlay loop muted />
                </div>
                <div  data-aos='fade-left'  className='desc'>
                    <h1 class='title'>{this.state.title}</h1>
                    <h3>{this.state.text}</h3>
                </div>
            </div>
        )
    }
}

export default Demografi