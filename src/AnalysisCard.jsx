import React from 'react';
import './AnalysisCard.css';


export default function AnalysisCard({ imageSrc, title, description, tags, onViewCaseStudy = () => { }, }) {
    return (
        <div className="analysis-card">
            {/* Image Section */}
            <div className="image-section">
                <img src={imageSrc} alt={title} className="card-image" />
            </div>

            {/* Content Section */}
            <div className='content-body'>
                <div className="content-section">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>

                    <div className="card-tags">
                        {tags.map((tag) => (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <button onClick={onViewCaseStudy} className="view-button">
                    View Case Study
                </button>
            </div>
        </div>
    );
}
