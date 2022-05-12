import React from "react";
import ProjectItemWrapper from "./projectSection.style";

import projectImage3 from "../../assets/images/meshery-logo-light.png";


const Projects = () => {
  return (
    <ProjectItemWrapper id="projects">
      <div className="callout">
        <a className="card" href="https://bit.ly/2SbrRhe" target="_blank" rel="noreferrer">
          <h3>Community Calendar</h3>
          <p className="small">Join the weekly meetings by subscribing to our community calendar</p>
          <img className="go-corner" src={projectImage3} alt="projectImage" href="https://bit.ly/2SbrRhe" />
        </a>
        <a className="card" href="https://www.youtube.com/c/Layer5io?sub_confirmation=1" target="_blank" rel="noreferrer">
          <h3>Community Meetings</h3>
          <p className="small">Watch community meeting recordings on our YouTube channel</p>
          <img className="go-corner" src={projectImage3} alt="projectImage" href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA" />
        </a>
        <a className="card" href="https://discuss.layer5.io" target="_blank" rel="noreferrer">
          <h3>Join the Conversation</h3>
          <p className="small">Ask questions, find answers and share knowledge on our Discussion Forum</p>
          <img className="go-corner" src={projectImage3} alt="projectImage" href="https://discuss.layer5.io" />
        </a>
        <a className="card" href="https://docs.google.com/document/d/17OPtDE_rdnPQxmk2Kauhm3GwXF1R5dZ3Cj8qZLKdo5E/edit" target="_blank" rel="noreferrer">
          <h3>Community Guide</h3>
          <p className="small">Read the Welcome Guide to familiarize yourself with the community</p>
          <img className="go-corner" src={projectImage3} alt="projectImage" href="https://docs.google.com/document/d/17OPtDE_rdnPQxmk2Kauhm3GwXF1R5dZ3Cj8qZLKdo5E/edit" />
        </a>
      </div>

    </ProjectItemWrapper>
  );
};

export default Projects;
