import { experience, courses, education } from '../data/cvData';

const Experience = () => (
  <section id="experience">
    <h1>Courses</h1>
    <div className="grid-section">
      {courses.map((course, i) => (
        <div key={i} className="tile">
          <p>
            <strong>{course.title}</strong> ({course.year})
          </p>
          <ul>
            {course.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <h1>Work experience</h1>
    <div className="grid-section">
      {experience.map((job, i) => (
        <div key={i} className="tile">
          <p className="company-name">
            <strong>{job.company}</strong>
          </p>
          <p className="company-role">
            {job.role} ({job.years})
          </p>
          <ul>
            {job.description.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <h1>Education</h1>
    <div className="grid-section">
      {education.map((edu, i) => (
        <div key={i} className="tile">
          <p>
            <strong>{edu.school}</strong> ({edu.year})
          </p>
          <p className="degree">
            <li>{edu.degree}</li>
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
