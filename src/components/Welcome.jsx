import { about } from '../data/cvData';

const Welcome = () => (
  <section id="welcome-section">
    <h1>{about.name}</h1>
    <p>{about.role}</p>
    <div className="summary-box">
      {about.summary.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  </section>
);

export default Welcome;
