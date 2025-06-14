import React from 'react';
import './BlogCard.css';

const BlogCard = ({ image, date, title, tags }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />

      <div className="blog-content">
        <p className="blog-date">{date}</p>
        <h2 className="blog-title">{title}</h2>
        <div className="blog-tags">
          {tags.map((tag, i) => (
            <span className="blog-tag" key={i}>{tag}</span>
          ))}
        </div>
      </div>

      <button className="read-button">Read</button>
    </div>
  );
};

export default BlogCard;
