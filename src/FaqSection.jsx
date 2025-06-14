import React, { useState } from 'react';
import './FaqSection.css';

const faqs = [
  {
    question: 'What is your design process?',
    answer:
      'My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.',
  },
  {
    question: 'What tools and software do you use for UX design?',
    answer:
      'I commonly use Figma, Adobe XD, Sketch, and Webflow depending on project requirements.',
  },
  {
    question: 'How do you measure the success of your UX designs?',
    answer:
      'Success is measured through usability testing, user feedback, engagement metrics, and business KPIs.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <h2 className="faq-title">✴ Frequently asked questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => setOpenIndex(index)}
          >
            <h3 className="faq-question">{faq.question}</h3>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
