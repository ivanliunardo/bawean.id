import React, { useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../App.css';
import ImageBanner from '../ImageBanner.js';
import WisataAlam from '../WisataAlam';
import Footer from '../Footer';
import SearchBar from '../SearchBar';



function Wisata() {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <>
    <ImageBanner/>
    <WisataAlam />
    <Footer/>
    </>
  );
}

export default Wisata;
