import React from 'react';

export const getPosts = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
   return response.json();
};
