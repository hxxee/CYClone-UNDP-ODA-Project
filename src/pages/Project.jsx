import React from "react";
import * as P from "../styles/StyledProject";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();

  const goProject = () => navigate(`/project`);
  const goHome = () => navigate(`/`);
  const goAbout = () => navigate(`/about`);
  const goModel = () => navigate(`/model`);

  return (
    <P.Container>
      <P.Nav>
        <P.Logo>
          <P.CYC>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo_c.png`}
              alt="logo"
            />
            <div>CYClone</div>
          </P.CYC>
          <P.UNDP>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo_u.png`}
              alt="logo"
            />
            <div>UNDP</div>
          </P.UNDP>
        </P.Logo>
        <P.Comp>
          <P.Ele style={{ cursor: "pointer" }} onClick={goHome}>
            <img
              src={`${process.env.PUBLIC_URL}/images/home_w.svg`}
              alt="home"
            />
            <div>Home</div>
          </P.Ele>
          <P.Ele style={{ cursor: "pointer" }} onClick={goProject}>
            <img
              src={`${process.env.PUBLIC_URL}/images/project_c.svg`}
              alt="home"
            />
            <div style={{ color: "#6BB1FF" }}>Project</div>
          </P.Ele>
          <P.Ele style={{ cursor: "pointer" }} onClick={goModel}>
            <img
              src={`${process.env.PUBLIC_URL}/images/model_w.svg`}
              alt="home"
            />
            <div>Model</div>
          </P.Ele>
          <P.Ele style={{ cursor: "pointer" }} onClick={goAbout}>
            <img
              src={`${process.env.PUBLIC_URL}/images/about_w.svg`}
              alt="home"
            />
            <div>About us</div>
          </P.Ele>
        </P.Comp>
      </P.Nav>

      <P.Title>ODA x Life Expectancy Insights</P.Title>
      <P.Sub>
        LifeSim is a data-driven platform simulating how ODA interventions
        <br />
        influence life expectancy and socio-economic development in Ethiopia,
        <br />
        enabling scenario-based policy insights for sustainable development
        planning.
      </P.Sub>

      <P.Tit>Our Methodology</P.Tit>
      <P.Det>
        We integrate historical ODA data, socio-economic indicators,
        <br />
        and governance variables for Ethiopia (2014–2021) to estimate ODA’s
        impact on life expectancy.
      </P.Det>
      <P.Det>
        Using a multi-lag Dynamic Linear Model (DLM) with LASSO variable
        selection
        <br />
        and OLS-HAC estimation, we capture both immediate and delayed effects
        across sectors
        <br />
        such as Health, Education, Infrastructure, Governance, and
        Social/Environmental.
      </P.Det>
      <P.Det>
        Scenario-based simulations and sensitivity analyses allow us to quantify
        short-, medium-,
        <br />
        and long-term impacts, identify optimal ODA combinations, and generate
        actionable policy insights.
      </P.Det>

      <P.List>
        <P.Box>
          <P.Img1 />
          <P.Img3 />
          <P.Img2 />
          <P.Img4 />
          <P.BTit>Why Ethiopia?</P.BTit>
          <P.BDet>
            <div>
              Ethiopia has received significant ODA over the past decades, with
              gradual changes across multiple development sectors.
            </div>
            <div>
              The country presents diverse economic, health, and education
              indicators, making it suitable for policy simulation analysis.
            </div>
            <div>
              It serves as a practical case for policymakers and international
              development organizations to apply insights from simulations.
            </div>
          </P.BDet>
        </P.Box>
        <P.Box>
          <P.Blur1 />
          <P.Blur2 />
          <P.Blur3 />
          <P.Blur4 />
          <P.BTit>Why Life Expectancy?</P.BTit>
          <P.BDet>
            <div>
              Life expectancy is a key development indicator reflecting health,
              living conditions, and socio-economic factors.
            </div>
            <div>
              It intuitively shows the impact of ODA investments and policy
              changes on people’s quality of life.
            </div>
            <div>
              Although a single metric, its correlation with other
              socio-economic indicators captures broader development outcomes.
            </div>
          </P.BDet>
        </P.Box>
        <P.Box>
          <P.G1 />
          <P.G2 />
          <P.G3 />
          <P.G4 />
          <P.BTit>Why Scenario-Based Modeling?</P.BTit>
          <P.BDet style={{ gap: "40px", marginTop: "93px" }}>
            <div>
              Simple time series models are limited to extrapolating past trends
              and cannot simultaneously
              <br />
              account for multiple influencing factors such as sectoral ODA
              investments, external shocks, and governance quality.
            </div>
            <div>
              Our scenario-based DLM framework enables testing “what-if” policy
              interventions, capturing immediate and delayed effects,
              <br />
              and identifying optimal ODA combinations — insights that basic
              time series models cannot provide.
            </div>
          </P.BDet>
        </P.Box>
      </P.List>

      <P.Conclusion>Conclusion</P.Conclusion>
      <P.Con>
        <div>
          LifeSim demonstrates how ODA interventions influence life expectancy
          in Ethiopia across multiple sectors.
        </div>
        <div>
          Key findings show Health ODA has a strong effect after 2 years,
          Social/Environmental ODA acts immediately,
          <br />
          and Governance ODA may have short-term negative impacts mitigated by
          institutional quality.
        </div>
        <div>
          This evidence-based framework supports policymakers in planning and
          optimizing ODA strategies
          <br />
          for sustainable development outcomes.
        </div>
      </P.Con>

      <P.Github
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open("https://github.com/CYClone-22/undp-odaproj/tree/main")
        }
      >
        <img src={`${process.env.PUBLIC_URL}/images/github.png`} alt="github" />
        <P.GDet>
          <div id="text">More information on</div>
          <div id="bold"> GitHub</div>
        </P.GDet>
      </P.Github>
    </P.Container>
  );
};

export default Project;
