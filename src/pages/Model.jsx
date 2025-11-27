import React from "react";
import * as M from "../styles/StyledModel";
import { useNavigate } from "react-router-dom";

const Model = () => {
  const navigate = useNavigate();

  const goProject = () => navigate(`/project`);
  const goHome = () => navigate(`/`);
  const goAbout = () => navigate(`/about`);
  const goModel = () => navigate(`/model`);

  return (
    <M.Container>
      <M.Nav>
        <M.Logo>
          <M.CYC>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo_c.svg`}
              alt="logo"
            />
            <div>CYClone</div>
          </M.CYC>
          <M.UNDP>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo_u.svg`}
              alt="logo"
            />
            <div>UNDP</div>
          </M.UNDP>
        </M.Logo>
        <M.Comp>
          <M.Ele style={{ cursor: "pointer" }} onClick={goHome}>
            <img
              src={`${process.env.PUBLIC_URL}/images/home_w.svg`}
              alt="home"
            />
            <div>Home</div>
          </M.Ele>
          <M.Ele style={{ cursor: "pointer" }} onClick={goProject}>
            <img
              src={`${process.env.PUBLIC_URL}/images/project_w.svg`}
              alt="home"
            />
            <div>Project</div>
          </M.Ele>
          <M.Ele style={{ cursor: "pointer" }} onClick={goModel}>
            <img
              src={`${process.env.PUBLIC_URL}/images/model_c.svg`}
              alt="home"
            />
            <div style={{ color: "#6BB1FF" }}>Model</div>
          </M.Ele>
          <M.Ele style={{ cursor: "pointer" }} onClick={goAbout}>
            <img
              src={`${process.env.PUBLIC_URL}/images/about_w.svg`}
              alt="home"
            />
            <div>About us</div>
          </M.Ele>
        </M.Comp>
      </M.Nav>
    </M.Container>
  );
};

export default Model;
