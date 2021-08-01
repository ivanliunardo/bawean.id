import React from 'react';
import 'aos/dist/aos.css';
import './TravelWays.css';
import CardItem from './CardItem';
import axios from 'axios';

class TravelWays extends React.Component {
  state = {
    title: "Cara Pergi Ke Pulau Bawean",
    cards: [
      {
        img: "/images/img-9.jpg",
        text: "Exercitation duis nostrud non amet aliqua occaecat nulla duis consequat et."
      },
      {
        img: "/images/img-2.jpg",
        text: "Occaecat ea et esse est cupidatat esse non minim sint."
      },
      {
        img: "/images/img-4.jpg",
        text: "Irure laborum nulla Lorem pariatur enim elit aute Lorem laborum dolor nulla ea commodo."
      }
    ]
  }

  componentDidMount(){
    axios.get('/ways').then(res => {
      this.setState(
        {
          title: res.data.title,
          cards: res.data.cards
        }
      );
    })
  }
  render(){
    return (
      <div className='cards'>
        <h1 data-aos='fade-up'>{this.state.title}</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul data-aos='fade-up' className='cards__items'>
              {this.state.cards.map(ways => (
                <CardItem
                src= {ways.img}
                text={ways.text}
              />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelWays;
