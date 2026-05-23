import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/RamakrishnaReddyPalle" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/p-rama-krishna-reddy-038b30246/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>First made on 19 Jul 2025, hoping to build some insanely crazy stuff💜</p>
    </footer>
  );
}

export default Footer;