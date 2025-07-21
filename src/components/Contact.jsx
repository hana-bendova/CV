import githubIcon from '../img/github_icon.png';
import emailIcon from '../img/email_icon.png';
import phoneIcon from '../img/phone_icon.png';

const Contact = () => (
  <section id="contact">
    <h1>Contact</h1>
    <div className="social-medias">
      <a
        href="https://github.com/hana-bendova"
        target="_blank"
        className="social-media"
        id="profile-link"
      >
        <i className="ri-github-fill ri-2x"></i>
        <img src={githubIcon} className="icon" alt="GitHub Icon" />
        <p>GitHub</p>
      </a>

      <a href="#" className="social-media">
        <i className="ri-at-line ri-2x"></i>
        <img src={emailIcon} className="icon" alt="Email Icon" />
        <p>hana.bendova01@gmail.com</p>
      </a>
      <a href="#" className="social-media">
        <i className="ri-cellphone-fill ri-2x"></i>
        <img src={phoneIcon} className="icon" alt="Phone Icon" />
        <p>+420 607 206 415</p>
      </a>
    </div>
  </section>
);

export default Contact;
