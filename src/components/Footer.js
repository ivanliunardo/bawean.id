import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Footer extends React.Component {
  state= {
      title: "Bagikan pengalamanmu berkunjung ke Pulau Bawean!"
  }

  componentDidMount(){
    axios.get('/footer').then(res => {
      this.setState(
        {

        }
      )
    })
  }

  render(){
    return (
      <div>
      <section className='wave'></section>
      <div className='footer-container'>
        <div className='footer-main'>
          <section data-aos='fade-up' className='footer-form'>
            <p className='footer-form-heading'>
              {this.state.title}
            </p>
            <div className='input-areas'>
              <form>
                <input
                  className='footer-input-name'
                  name='name'
                  type='name'
                  placeholder='Nama'
                />
                <br/>
                <textarea className='footer-input-text' placeholder='Ceritakan Pengalamanmu!' cols="30" rows="5">

                </textarea>
                <br/>
                <Button buttonStyle='btn--primary'>Kirim</Button>
              </form>
            </div>
          </section>
          <div data-aos='fade-up' class='footer-links'>
            <div className='footer-link-wrapper'>
              <div class='footer-link-items'>
                <Link to='/wisata'><h2>Wisata</h2></Link>
                <Link to='/produk'><h2>Produk</h2></Link>
                <Link to='/budaya'><h2>Budaya</h2></Link>
              </div>
              <div className='footer-link-wrapper'>
              <div class='footer-link-items'>
              <Link to='/blog'><h2>Blog</h2></Link>
                <Link to='/sign-up'><h2>Masuk</h2></Link>
              </div>
            </div>
            </div>
        </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='navbar-logo'>
              Baweanesia
              </Link>
            </div>
            <small class='website-rights'>KKN PPM UGM © 2021</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
      </div>
    );
  }
}

export default Footer;
