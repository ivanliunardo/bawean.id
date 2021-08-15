import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { axios } from './axios';

function BlogPost({match}){
    const[blogPost, setBlogPost] = useState([]);

    useEffect(() =>{
        axios
        .get(`/blog/?id=${match.params.id}`)
        .then(response => {
            console.log('Response:', response)
            setBlogPost(response.data)
        })
        .catch((err) =>{
            console.log('Error:', err)
        })
    }, []);

    return(
        <div>
            <div className='back'>
                <Link to='/blog'>Lihat Tulisan Lainnya</Link>
            </div>
            {blogPost.map((post) =>(
                <div className='blog-post-container' key={post.id}>
                    <img className='blog-post-image' src={post.img}/>
                    <h1 className='blog-post-title'>{post.title}</h1>
                    <h2 className='blog-post-author'>{post.author}</h2>
                    <h2 className='blog-post-published'>{post.published_at}</h2>
                    <p className='blog-post-paragraph'>{post.text}</p>
                </div>
            ))}
        </div>
    )

}

export default BlogPost