import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const ApiContent = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);

    // GET with fetch API
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts?_limit=10'
            );
            const data = await response.json();

            setPosts(data);
        };
        fetchPost();
    }, []);

    // Delete with fetchAPI
    const deletePost = async (id) => {
        let response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: 'DELETE',
            }
        );
        if (response.status === 200) {
            setPosts(
                posts.filter((post) => {
                    return post.id !== id;
                })
            );
        } else {
            return;
        }
    };

    // Post with fetchAPI
    const addPosts = async (title, body) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: Math.random().toString(36).slice(2),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        let data = await response.json();
        setPosts((posts) => [data, ...posts]);
        setTitle('');
        setBody('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(title, body);
    };
    return (
        <>

            <div className="posts-container">
                {posts.map((post) => {
                    return (
                        <div className="post-card" key={post.id}>
                            <h2 className="post-title">{post.title}</h2>
                            <p className="post-body">{post.body}</p>
                            <div className="button">
                                <Button variant="light" onClick={() => addPosts(post.id)}>Add</Button>
                            </div>
                            <div className="button">
                                <Button variant="light" onClick={() => deletePost(post.id)}>Delete</Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ApiContent;
