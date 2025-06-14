import React from 'react';
import './assets/BlogSection.css';

const experienceData = [
  {
    title: 'Lead Product Designer',
    company: 'Fortknox',
    period: 'Mar 2022 – Oct 2023',
  },
  {
    title: 'Intern Designer',
    company: 'OmniSafe',
    period: 'Mar 2022 – Oct 2023',
  },
  {
    title: 'UI Designer',
    company: 'Doradesign',
    period: 'Mar 2022 – Oct 2023',
  },
  {
    title: 'Frontend Developer',
    company: 'OpacityAuthor',
    period: 'Mar 2022 – Oct 2023',
  },
];

export default function BlogSection() {
  return (
    <div className="blog-section">
      {experienceData.map((item, index) => (
        <div key={index} className="blog-row">
          <div className="blog-title">{item.title}</div>
          <div className="blog-meta">
            <div className="company">{item.company}</div>
            <div className="period">{item.period}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
