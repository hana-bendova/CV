import { skills } from '../data/cvData';

const Skills = () => (
  <section id="skills">
    <h1>Skills</h1>
    <div className="grid-section">
      {skills.map((skill, i) => (
        <div key={i} className="tile">
          <p>
            <strong>{skill.title}</strong>
          </p>
          <ul>
            {skill.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
