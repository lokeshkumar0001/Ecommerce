import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import {Instagram,LinkedIn} from "@mui/icons-material";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/lokeshkumarsingh001/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media.licdn.com/dms/image/D5603AQHseCTv3eApRw/profile-displayphoto-shrink_400_400/0/1666170446831?e=1678320000&v=beta&t=m2t9xaMxLaD0o9C2gyWusf1z0QUOsE8Pd-mVfEV60K0"
              alt="Founder"
            />
            <Typography>Lokesh Kumar Singh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is sample Ecommerce project on MERN stack by @lokeshkumarsingh001
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Social profile</Typography>
            <a
              href="https://www.linkedin.com/in/lokeshkumar0001"
              target="blank"
            >
              <LinkedIn className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/lokeshkumarsingh001" target="blank">
              <Instagram className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;