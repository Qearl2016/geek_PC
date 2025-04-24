import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const ContentCard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { imageUrl, title, description, likes, comments, author, gradient } = data;
  
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="content-card" style={{ background: gradient }}>
      <div className="card-image">
        <img src={imageUrl} alt={title} />
        <div className="card-overlay">
          <div className="overlay-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
          </div>
        </div>
      </div>
      <div className="card-content">
        <div className="author">
          <img src={author.avatar} alt={author.name} className="author-avatar" />
          <span className="author-name">{author.name}</span>
        </div>
        <div className="interactions">
          <button 
            className={`like-button ${isLiked ? 'liked' : ''}`}
            onClick={handleLike}
          >
            <FontAwesomeIcon icon={faHeart} />
            <span>{isLiked ? likes + 1 : likes}</span>
          </button>
          <span className="interaction-item">
            <FontAwesomeIcon icon={faComment} />
            <span>{comments}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
