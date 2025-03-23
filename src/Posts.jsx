import React, { useEffect, useState } from 'react'
import {postsData} from './utils/posts'



function Posts() {
    const [posts,setPosts]=useState([]);

    useEffect(()=> {
        // fetch('http://localhost:3000/posts')
        // .then((data) => data.json())
        // .then((data) => setPosts(data))
        // .catch(err => console.log(err))
        setPosts(postsData)
    },[]);
    console.log('')

  return (
    <div className='d-flex justify-content-center mt-4'>
        {posts.length > 0 ? (
            <div>
                {posts.map((post) => (
                    <div className='my-3' key={post.id}>
                        <div className='d-flex'>
                            <img className='dp rounded-circle' src={post.profilePic} alt="Profilepic" />
                            <h5>{post.username}</h5>
                        </div>
                        <div>
                            <img className='image' src={post.imageUrl} alt="post" />
                            <div>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-chat"></i>
                                <i className="bi bi-send"></i>
                            </div>
                            <div>
                                <b>{post.likes}</b>
                            </div>
                            <p>{post.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        ):(
            <div>
                Loading Posts
            </div>
        )}
    </div>
  )
}

export default Posts