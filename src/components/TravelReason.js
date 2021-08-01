import React from 'react';
import 'aos/dist/aos.css';
import '../App.css';
import './TravelReason.css';
import axios from 'axios';

class TravelReason extends React.Component{
    state = {
        title: "Alasan Pergi Ke Bawean",
        img: "/images/img-9.jpg",
        reasons: [
            {
                number: "1",
                text: "Aliquip ut incididunt Lorem officia labore elit nostrud dolor non adipisicing occaecat excepteur."
            },
            {
                number: "2",
                text: "Duis pariatur id elit et."
            }
        ]
    }

    componentDidMount(){
        axios.get('/reason').then(res => {
            this.setState(
                {
                    reasons: res.data.reasons,
                    title: res.data.title,
                    img: res.data.img
                }
            );
        })
    }

    render(){
        return(
            <div className='content'>
                <div data-aos='fade-up' className='content-title'>
                    <h1 class='title'>{this.state.title}</h1>
                </div>
                <div className='content-container'>
                    <div className='text-container'>
                        {this.state.reasons.map(reason => (
                            <div data-aos='fade-up' className='text-content'>
                                <div className='icon-container'>
                                    <div className='icon-circle'>
                                        <div className='icon-number'>
                                            {reason.number}
                                        </div>
                                    </div>
                                </div>
                            <h2>{reason.text}</h2>
                            </div>
                        ))}
                    </div>
                    <div data-aos='fade-up' className='img-container'>
                        <img src={this.state.img} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TravelReason
