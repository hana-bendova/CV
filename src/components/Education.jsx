import { education } from '../data/cvData';

const Education = () => (
  <section id="education">
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

export default Education;
