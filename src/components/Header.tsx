import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <h1>Bruno S.</h1>
      <div className="social-links">
        <a href="https://github.com/BrunoSNT" target="_blank" rel="noopener noreferrer">
          <FaGithub /> BrunoSNT
        </a>
        <a href="https://github.com/Jaxiii" target="_blank" rel="noopener noreferrer">
          <FaGithub /> Jaxiii
        </a>
        <a href="https://linkedin.com/in/bruno-srb" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:brunosrb@protonmail.com">
          <FaEnvelope /> Email
        </a>
      </div>
    </header>
  );
};

export default Header; 