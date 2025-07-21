const Projects = () => (
  <section id="projects">
    <h1>Projects</h1>
    <div className="projects">
      <a href="https://daweb-projekt.netlify.app/" className="project-tile">
        <div className="project-text"></div>
        <img src="../img/mental_health_app.png" alt="Mental Health App" />
        <p>
          <span>&lt;</span>Mental health tracker<span>/&gt;</span>
        </p>
      </a>

      <a
        href="https://hana-bendova.github.io/projekt-piskvorky/"
        className="project-tile"
      >
        <div className="project-text"></div>
        <img src="../img/piskvorky.png" alt="Piskvorky" />
        <p>
          <span>&lt;</span>Piškvorky<span>/&gt;</span>
        </p>
      </a>

      <a
        href="https://project-chata-arnica.netlify.app/"
        className="project-tile"
      >
        <div className="project-text"></div>
        <img src="../img/Arnica.png" alt="Chata Arnica" />
        <p>
          <span>&lt;</span>Chata Arnica<span>/&gt;</span>
        </p>
      </a>
    </div>
  </section>
);

export default Projects;
