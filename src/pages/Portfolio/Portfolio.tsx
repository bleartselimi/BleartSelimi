import "./Portfolio.css";
import { ArticlesButton, LinkedinButton } from "../../components";
import { ContentPanel, ProjectCard } from "../../widgets";
import projectsList from "../../assets/json/Projects.json";
import {
  ChatlyCardImage,
  LinkMobileCardImage,
  LinkWebCardImage,
  MuseumInformationSystemCardImage,
  MobileShopCardImage,
  TempoZoneCardImage,
} from "../../assets";
import { useEffect, useRef } from "react";
import { useGeneralContext } from "../../hooks/useGeneralContext";

const Portfolio = () => {
  const images: string[] = [
    TempoZoneCardImage,
    ChatlyCardImage,
    LinkMobileCardImage,
    LinkWebCardImage,
    MuseumInformationSystemCardImage,
    MobileShopCardImage,
  ];

  const { state } = useGeneralContext();

  const portfolioProjectsWrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (state.globalLoadingState && portfolioProjectsWrapper.current) {
      portfolioProjectsWrapper.current.style.animation =
        "fadeIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 3s forwards";
    }
  }, [state.globalLoadingState]);

  return (
    <>
      <div className="container-one">
        <ContentPanel
          hasAreaOneMask={true}
          className="content-panel-space-one portfolio-content-panel"
          areaOne={
            <h1 className="fs-64px color-white lh-100 text-shadow-white">
              SOFTWARE
              <br />
              ENGINEER
            </h1>
          }
          areaTwo={
            <p className="portfolio-content-panel-area-two fs-24px color-silver lh-120 m-semibold">
              Step into a preview of my portfolio a collection of digital
              initiatives and solutions showcasing my commitment to software
              engineering.
            </p>
          }
          areaThree={
            <h1 className="fs-20px color-white m-semibold">Bleart Selimi</h1>
          }
          areaFour={
            <div className="portfolio-content-panel-area-three">
              <ArticlesButton />
              <span className="color-golden-haze fs-18px">|</span>
              <LinkedinButton />
            </div>
          }
        />
      </div>
      <div
        ref={portfolioProjectsWrapper}
        className="portfolio-projects-wrapper"
      >
        {projectsList.projects.map((project, i) => {
          return (
            <ProjectCard
              to={project.link}
              key={i}
              src={images[i]}
              projectNo={`${projectsList.projects.length} / ${i + 1}`}
              year={project.year}
              title={project.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
