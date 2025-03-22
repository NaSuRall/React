import React from 'react';

function Card({ post }) {
    return (
        <div>
            {post.text}
        </div>
    );
}

const Post = () => {
    const [post, setPost] = React.useState([]);
    const [newPost, setNewPost] = React.useState('');

    
    const addPost = () => {
        setPost([
            ...post,
            { id: Date.now(), text: newPost }
        ]);
        setNewPost('');
    };



    return (
        <div>
            <h1>Liste des postes :</h1>
            <input
                type="text"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
            />
            <button onClick={addPost}>Ajouter</button>

            {post.map(post => (
                <Card
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    );
};

export default Post;
