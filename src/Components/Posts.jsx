import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Freatures/Posts/PostsSlice';

const Posts = () => {
    const {posts, isLoading, isError, error} = useSelector(state =>state.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts());
    }, [])

    //Decide what to render
    let content;
    if(isLoading){
        content = <h1>Loading posts......</h1>
    }
    if(!isLoading && isError){
        content = <h1>{error}</h1>
    }
    if(!isLoading && !isError && posts.length === 0){
        content = <h1>No post found</h1>
    }
    if(!isLoading && !isError && posts.length > 0){
        content = <ul>
            {
                posts.map(post => <li key={post.id}>
                    {post.name}
                </li>)
            }
        </ul>
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default Posts;