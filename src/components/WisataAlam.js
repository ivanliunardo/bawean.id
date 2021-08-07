import axios from "axios";
import React, {useState} from "react";
import '../App.css';
import './WisataAlam.css';
import Popup from './Popup';
import {Button} from './Button';
import SearchBar from "./SearchBar";

function WisataAlam(){

    const [isOpen, setIsOpen] = useState(false);
    const [popupIndex, setPopupIndex] = useState(0);

    const togglePopup = (index) => {
    setIsOpen(!isOpen);
    setPopupIndex(index);
    }

    const [wisatacards] = useState([
            {
            img: "/images/img-1.jpg",
            name: "Air Panas",
            label: "",
            location:"Tambak",
            price: "Rp 100.000 HTM",
            desc: "Do dolore aliquip ut laboris Lorem magna fugiat duis in consectetur in quis elit. Dolor do mollit aliquip quis ipsum fugiat do culpa deserunt excepteur irure ex quis occaecat. Nostrud Lorem exercitation et laboris labore ea cillum reprehenderit proident elit qui laborum velit. Reprehenderit eiusmod aliqua culpa exercitation cillum aliqua id mollit consequat anim ut enim."
            , link:"https://goo.gl/maps/SFaMZBGyzHjKMMNy8"},
            {
                img: "/images/img-4.jpg",
                name: "Air AAAVA",
                label: "",
                location:"Tambak",
                price: "Rp 100.000 HTM",
                desc: "" 
            },
            {
                img: "/images/img-2.jpg",
                name: "Air AXAAA",
                label: "",
                location:"Tambak",
                price: "Rp 100.000 HTM",
                desc: "" 
            },
            {
                img: "/images/img-3.jpg",
                name: "Air AAZAA",
                label: "",
                location:"Tambak",
                price: "Rp 100.000 HTM",
                desc: "" 
            }
        ],);
 

React.useEffect(() => {
    axios.get('/datawisata').then(res=>{
        this.setState(
            {
                img: res.data.img,
                name: res.data.name,
                location: res.data.location,
                label: res.data.label,
                price: res.data.price,
                desc: res.data.desc,
            }
            
        )
    });
}, []);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filterPosts = (wisatacards, query) => {
        if (!query) {
            return wisatacards;
        }
    
        return wisatacards.filter((post) => {
            const postName = post.name.toLowerCase();
            return postName.includes(query);
        });
    };
    
    const filteredPosts = filterPosts(wisatacards, searchQuery.toLocaleLowerCase());

    return(
        <div className='wisata-container'>
            <h1 data-aos='fade-up'>Wisata Pulau Bawean!</h1>
            <div className='wisata-card-container'>
                <div className='wisata-card-wrapper'>
                    <div className='searchbox' data-aos='fade-up'>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="Cari Wisata..."/>
                    </div>
                    <ul data-aos="fade-up" className='wisata-card'>
                        {filteredPosts.map((props, index) =>(
                            <>
                            <li onClick={() => togglePopup(index)} data-aos='fade-up' className='wisata-cards-item'>
                            <div className='wisata-card-link'>
                              <figure className='wisata-card-pic-wrap' data-category={props.label}>
                                <img
                                  className='wisata-card-img'
                                  alt='Travel Image'
                                  src={props.img}
                                />
                              </figure>
                              <div  className='wisata-card-info'>
                                <h5 className='wisata-card-name'>{props.name}</h5>
                                <h6 className='wisata-card-location'>{props.location}</h6>
                                <h5 className='wisata-card-price'>{props.price}</h5>
                              </div>
                            </div>
                            
                          </li>
                          </>
                        ))}
                    </ul>
                    {isOpen &&
                    <Popup
                        content={<>
                            <div className='wisata-popup-name'>{wisatacards[popupIndex].name}</div>
                            <img className='wisata-popup-image' src={wisatacards[popupIndex].img} />
                            <div className='wisata-popup-desc'>{wisatacards[popupIndex].desc}</div>
                            <div className='wisata-popup-price'>{wisatacards[popupIndex].price}</div>
                            <div className='wisata-popup-location'>{wisatacards[popupIndex].location}</div>
                            <div className='gmaps-link'>
                            <Button className='btns' buttonStyle='btn--primary' buttonSizae='btn--medium'>
                            <a  href={wisatacards[popupIndex].link} target='_blank' className='btns'>Buka Google Maps</a></Button>
                            </div>
                        </>}
                        handleClose={togglePopup}
                        />}
                </div>

            </div>
        </div>
      );
    }



export default WisataAlam;