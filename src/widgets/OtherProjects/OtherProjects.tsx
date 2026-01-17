import "./OtherProjects.css";
import projectsList from "../../assets/json/Projects.json";
import {
  TempoZoneCardImage,
  ChatlyCardImage,
  LinkMobileCardImage,
  LinkWebCardImage,
  MobileShopCardImage,
  MuseumInformationSystemCardImage,
} from "../../assets";
import { ProjectCard } from "..";
import { useLocation } from "react-router";

const OtherProjects = () => {
  const { pathname } = useLocation();

  const images: string[] = [
    TempoZoneCardImage,
    ChatlyCardImage,
    LinkMobileCardImage,
    LinkWebCardImage,
    MuseumInformationSystemCardImage,
    MobileShopCardImage,
  ];

  return (
    <>
      <h1 className="fs-36px mb-30px color-white pt-100px">Other Projects</h1>
      <div className="other-projects-wrapper">
        {projectsList.projects.map((project, i) => {
          if (project.link !== pathname)
            return (
              <ProjectCard
                key={i}
                to={project.link}
                src={images[i]}
                title={project.title}
                showTopRightArrow={false}
              />
            );
        })}
      </div>
    </>
  );
};

export default OtherProjects;
