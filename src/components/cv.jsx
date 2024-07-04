import React from 'react';
import '../styles/cv.css';


const CV = (props) => {
  const {info}  = props;
  return (
    <div className="cv-container">
      {/* Your CV form information goes here */}
      <header className='header'>
        <h1>{info.basic.name}</h1>
        <p><i className="fa-regular fa-envelope"></i>{info.basic.email}</p>
        <p><i className="fa-solid fa-phone"></i>{info.basic.phone}</p>
        <p><i className="fa-solid fa-location-dot"></i>{info.basic.address}</p>
      </header>
      <section className="education">
        <h2>Education</h2>
        {info.graduation.map((edu, index) => (
          <div className="edu-detail" key={index}>
            <p className="edu-year">{edu.graduationYear}</p>
            <p className="edu-college">{edu.university}</p>
            <p className="edu-degree">{edu.degree}</p>
            <p className="edu-location">{edu.graduationLocation}</p>
          </div>
        ))}
      </section>
      <section className="experience">
        <h2>Experience</h2>
        {info.experience.map((exp, index) => (
          <div className="job" key={index}>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.companyName}</p>
            <h3>{exp.jobTitle}</h3>
            <p className="job-description">{exp.jobDescription}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CV;