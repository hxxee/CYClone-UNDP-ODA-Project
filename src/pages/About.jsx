import React from "react";
import * as A from "../styles/StyledAbout";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goProject = () => navigate(`/project`);
  const goHome = () => navigate(`/`);
  const goAbout = () => navigate(`/about`);
  const goModel = () => navigate(`/model`);

  return (
    <A.Container>
      <A.Nav>
        <A.Logo>
          <A.CYC>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo_c.svg`}
              alt="logo"
            />
            <div>CYClone</div>
          </A.CYC>
          <A.UNDP>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo_u.svg`}
              alt="logo"
            />
            <div>UNDP</div>
          </A.UNDP>
        </A.Logo>
        <A.Comp>
          <A.Ele style={{ cursor: "pointer" }} onClick={goHome}>
            <img
              src={`${process.env.PUBLIC_URL}/images/home_w.svg`}
              alt="home"
            />
            <div>Home</div>
          </A.Ele>
          <A.Ele style={{ cursor: "pointer" }} onClick={goProject}>
            <img
              src={`${process.env.PUBLIC_URL}/images/project_w.svg`}
              alt="home"
            />
            <div>Project</div>
          </A.Ele>
          <A.Ele style={{ cursor: "pointer" }} onClick={goModel}>
            <img
              src={`${process.env.PUBLIC_URL}/images/model_w.svg`}
              alt="home"
            />
            <div>Model</div>
          </A.Ele>
          <A.Ele style={{ cursor: "pointer" }} onClick={goAbout}>
            <img
              src={`${process.env.PUBLIC_URL}/images/about_c.svg`}
              alt="home"
            />
            <div style={{ color: "#6BB1FF" }}>About us</div>
          </A.Ele>
        </A.Comp>
      </A.Nav>
    </A.Container>
  );
};

export default About;
