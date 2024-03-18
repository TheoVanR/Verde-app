import React, { useState, useEffect } from 'react';

const ApiContent = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://api.openbrewerydb.org/v1/breweries?by_name=san_diego&per_page=2');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <>
            <div className="posts-container">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <h2>{post.name}</h2>
                        <p>{post.brewery_type}</p>
                        <p>{post.address_1}</p>
                        <p>{post.city}</p>
                        <p>{post.state}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ApiContent;
