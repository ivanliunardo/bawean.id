import React from 'react';
import 'aos/dist/aos.css'
import '../App.css';
import './FAQ.css'
import axios from 'axios';

class FreqAskQue extends React.Component {
    state = {
        faqs: [
            {
                question: "Non aliquip ullamco fugiat voluptate dolore nisi ad.",
                answer: "Cillum qui quis amet commodo irure Lorem voluptate. Sit ipsum elit ipsum ullamco sunt quis ullamco. Deserunt occaecat enim non nisi voluptate pariatur fugiat est cupidatat aute quis cupidatat sunt incididunt. Ea excepteur ut laborum nisi do exercitation pariatur labore quis. Labore ullamco deserunt ut deserunt. Tempor nulla nisi reprehenderit minim consequat nisi dolor reprehenderit quis eiusmod cillum enim. Dolore ullamco fugiat enim laborum exercitation.",
            },
            {
                question: "Veniam aute sunt adipisicing proident Lorem consequat esse.",
                answer: "Occaecat cupidatat ut amet dolor velit duis Lorem. Sunt cupidatat eu veniam pariatur veniam amet quis et elit in enim incididunt. Ut eiusmod deserunt labore veniam qui est sit adipisicing voluptate eu ad labore. Adipisicing ullamco id et ad in culpa voluptate exercitation. Sint tempor ea pariatur occaecat laboris exercitation et elit do aliquip cillum Lorem cupidatat reprehenderit. Tempor sunt in aute non sint non culpa sit labore reprehenderit commodo. Aute ex anim quis laborum tempor ex eiusmod ad nulla in excepteur."
            }
        ],
        title: "Frequently Asked Question"
    }
        

    componentDidMount() {
        axios.get('/faq').then(res => {
            this.setState(
                {
                    faqs: res.data.faqs,
                    title: res.data.title
                }
            );
        })
    }

    render() {
    
        return(
            <div className='faq-container'>
                <div data-aos='fade-up' className='faq-title'>
                    <h1> {this.state.title}</h1>
                </div>
                <div className='faq-content'>
                    {this.state.faqs.map(faq => (
                        <div>
                            <h2 data-aos='fade-up'>{faq.question}</h2>
                            <h3 data-aos='fade-up'>{faq.answer}</h3>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default FreqAskQue