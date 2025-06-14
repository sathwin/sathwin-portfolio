import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatarImage from '../assets/images/avatar.png'; // Add this import

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatarImage} alt="Avatar" /> {/* Changed this line */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sathwin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sathwin/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sathwin Reddy Julakanti</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/sathwin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sathwin/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;