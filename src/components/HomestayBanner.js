import React from 'react';
import 'aos/dist/aos.css';
import '../App.css';
import { Button } from './Button';
import './HomestayBanner.css';
import axios from 'axios';

class Homestay extends React.Component{
    state = {
        title: "Homestay Khas Bawean",
        img: "/images/img-5.jpg",
        text: "In ad Lorem in ut. Elit reprehenderit culpa excepteur pariatur eu et excepteur ex pariatur dolor sit laboris. Magna ipsum cillum adipisicing velit qui adipisicing tempor eiusmod cillum dolore. Fugiat et Lorem amet veniam ut non ipsum amet irure id id ullamco. Duis aliqua sint sint commodo consectetur officia ad. Occaecat occaecat proident commodo aliqua deserunt ipsum. Deserunt nulla adipisicing culpa laboris aute ipsum pariatur veniam."
    }

    componentDidMount() {
        axios.get('/homestay').then(res => {
            this.setState(
                {
                    title: res.data.title,
                    img: res.data.img,
                    text: res.data.text
                }
            );
        })
    }
    
    render(){
        return(
            <div className='homestay'>
                <div data-aos='fade-up' className='homestay-title'>
                    <h1>{this.state.title}</h1>
                </div>
                <div className='homestay-container'>
                    <div data-aos='fade-right' className='homestayimg-container'>
                        <img src={this.state.img} />
                    </div>
                    <div data-aos='fade-left' className='text-container'>
                        <div className='text-content'>
                            <h3>{this.state.text}</h3>
                        </div>
                        <div className='homestay-btn'>
                            <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            onClick={console.log('hey')}>
                                Pesan Sekarang
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homestay