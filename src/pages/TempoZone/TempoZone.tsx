import { useEffect, useRef, useState } from "react";
import {
  AspNetCoreImage,
  AxiosImage,
  FigmaImage,
  HetznerImage,
  JwtImage,
  MysqlImage,
  NextjsImage,
  SwaggerImage,
  TailwindImage,
  TempoZoneCoverImage,
  TempoZoneImageEight,
  TempoZoneImageEighteen,
  TempoZoneImageEleven,
  TempoZoneImageFifteen,
  TempoZoneImageFive,
  TempoZoneImageFour,
  TempoZoneImageFourteen,
  TempoZoneImageNine,
  TempoZoneImageOne,
  TempoZoneImageSeven,
  TempoZoneImageSeventeen,
  TempoZoneImageSix,
  TempoZoneImageSixteen,
  TempoZoneImageTen,
  TempoZoneImageThirteen,
  TempoZoneImageThree,
  TempoZoneImageTwelve,
  TempoZoneImageTwo,
  TypescriptImage,
} from "../../assets";
import { Modal, TechnicalDetailsButton } from "../../components";
import { useGeneralContext } from "../../hooks/useGeneralContext";
import { ContentPanel, OtherProjects, TechnicalDetails } from "../../widgets";

const TempoZone = () => {
  const { state } = useGeneralContext();

  const projectContainer = useRef<HTMLDivElement | null>(null);

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (state.globalLoadingState) {
      projectContainer.current!.style.animation =
        "fadeIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 3s forwards";
    }
  }, [state.globalLoadingState]);

  return (
    <>
      <div className="container-one">
        <ContentPanel
          hasAreaOneMask={true}
          className="content-panel-space-one project-content-panel"
          areaOne={
            <h1 className="fs-64px color-white lh-100 text-shadow-white">
              TEMPOZONE,
              <br />
              TIME & ATTENDANCE TRACKING
            </h1>
          }
          areaFour={<TechnicalDetailsButton onClick={() => setOpened(true)} />}
        />
        <div className="project-container" ref={projectContainer}>
          <div className="project-cover-image-wrapper">
            <img
              src={TempoZoneCoverImage}
              alt="TempoZone Project. Cover image."
            />
          </div>
          <ContentPanel
            hasAreaOneMask={true}
            className="project-about-content-panel"
            areaOne={
              <>
                <h1 className="fs-64px color-white lh-100 text-shadow-white mb-15px">
                  About the
                  <br />
                  project
                </h1>
              </>
            }
            areaTwo={
              <p className="project-content-panel-area-two fs-18px color-silver lh-150 m-semibold">
                A time-tracking application that automatically logs activities
                based on user location, using customizable geofenced activity
                zones for accurate and effortless tracking. It supports
                check-ins and check-outs, along with start and end break
                actions, allowing users to maintain precise control over their
                work sessions.
              </p>
            }
            areaFour={
              <TechnicalDetailsButton onClick={() => setOpened(true)} />
            }
          />
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageOne}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageTwo}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageThree}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageFour}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageFive}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageSix}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageSeven}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageEight}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageNine}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageTen}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageEleven}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageTwelve}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageThirteen}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageFourteen}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageFifteen}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageSixteen}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageSeventeen}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <div className="project-image-wrapper">
            <img
              src={TempoZoneImageEighteen}
              alt="Museum Information System Project Image 1."
            />
          </div>
          <OtherProjects />
        </div>
      </div>
      {opened && (
        <Modal opened={opened} setOpened={setOpened}>
          <div className="modal-boundries">
            <TechnicalDetails
              overview={
                <>
                  <p className="fs-18px color-silver m-semibold lh-160">
                    Tempozone is a modern productivity platform designed to help
                    individuals and teams understand how their time is spent and
                    make better decisions based on real usage data. The project
                    was created to address common issues found in traditional
                    time tracking tools, such as low adoption, inaccurate
                    reporting, and overly complex interfaces that interrupt
                    daily workflows instead of supporting them.
                    <br />
                    <br />
                    The core idea behind the platform is to make time tracking
                    feel effortless. Users can start tracking their work
                    instantly, without navigating through unnecessary steps or
                    filling out manual reports at the end of the day. By
                    focusing on real-time tracking and clear feedback, the
                    product encourages consistency while reducing the mental
                    overhead typically associated with time management tools.
                    <br />
                    <br />
                    From a design perspective, the platform was built with a
                    dark-mode-first approach, prioritizing comfort during long
                    work sessions and a modern, focused aesthetic. Typography,
                    spacing, and color are used intentionally to create a strong
                    visual hierarchy, guiding users toward primary actions while
                    keeping secondary information easily accessible. The
                    interface avoids clutter and emphasizes clarity, ensuring
                    that users can quickly understand where their time is going
                    without being overwhelmed by raw data.
                    <br />
                    <br />
                    The technical architecture was designed to be modular and
                    scalable, supporting real-time updates and future expansion.
                    A clear separation between the frontend, backend, and data
                    layers allows the product to evolve as new features are
                    introduced, such as deeper analytics, automation, or
                    integrations with external tools. Performance and
                    responsiveness were key considerations, ensuring that the
                    experience remains smooth even as data volume grows.
                    <br />
                    <br />
                    Overall, this project demonstrates a balance between product
                    thinking, design execution, and technical decision-making.
                    It showcases the ability to identify a real-world problem,
                    design a user-centered solution, and build a scalable system
                    that delivers both immediate value and long-term
                    flexibility. Time Tracking is not just a utility for logging
                    hours, but a tool that helps users build awareness, improve
                    focus, and work more intentionally.
                  </p>
                </>
              }
              frontendTechnologies={[
                {
                  icon: NextjsImage,
                  title: "Next.js",
                },
                {
                  icon: TypescriptImage,
                  title: "Typescript",
                },
                {
                  icon: AxiosImage,
                  title: "Axios",
                },
                {
                  icon: TailwindImage,
                  title: "Tailwind",
                },
              ]}
              backendTechnologies={[
                {
                  icon: AspNetCoreImage,
                  title: "ASP.NET Core",
                },
                {
                  icon: JwtImage,
                  title: "JWT Bearer Authentication",
                },
                {
                  icon: MysqlImage,
                  title: "Mysql",
                },
                {
                  icon: SwaggerImage,
                  title: "Swagger",
                },
              ]}
              otherTechnologies={[
                {
                  icon: FigmaImage,
                  title: "Figma",
                },
                {
                  icon: HetznerImage,
                  title: "Hetzner",
                },
              ]}
              infrastructure={{
                description: (
                  <>
                    <p className="fs-18px color-silver m-semibold lh-160">
                      The .NET backend application was deployed on a Linux-based
                      Hetzner cloud server, where it runs as a self-hosted
                      service listening on an internal port. This setup keeps
                      the application isolated from direct public access while
                      allowing full control over its runtime environment.
                    </p>
                    <br />
                    <br />
                    <p className="fs-18px color-silver m-semibold lh-160">
                      Nginx was configured as a reverse proxy to handle incoming
                      HTTP and HTTPS traffic. The server listens on a valid
                      domain/subdomain and forwards requests to the internal
                      .NET service, making the application accessible through a
                      clean, public URL instead of a raw IP address. SSL
                      termination is handled at the Nginx level, ensuring secure
                      communication without adding complexity to the application
                      itself.
                    </p>
                    <br />
                    <p className="fs-18px color-silver m-semibold lh-160">
                      This deployment approach provides a secure,
                      production-ready setup that cleanly separates
                      infrastructure concerns from application logic and
                      demonstrates practical experience with cloud hosting,
                      Linux servers, and reverse proxy configuration.
                    </p>
                    <br />
                    <p className="fs-18px color-silver m-semibold lh-160">
                      The database is hosted on the same Hetzner instance as the
                      .NET application, running as a separate service within the
                      server environment. This setup simplifies deployment and
                      networking by allowing the backend to communicate with the
                      database over the local interface, reducing latency and
                      avoiding external exposure. Access to the database is
                      restricted to the application itself, keeping it isolated
                      from the public internet while providing a straightforward
                      and reliable configuration suitable for early-stage and
                      single-instance deployments.
                    </p>
                    <br />
                    <p className="fs-18px color-silver m-semibold lh-160">
                      CI/CD is handled through GitHub Actions, where each change
                      pushed to the repository triggers an automated deployment
                      workflow. Using SSH key-based authentication, the pipeline
                      securely connects to the Hetzner server, pulls the latest
                      code, builds the .NET application on the instance, and
                      restarts the running service. This setup enables fast,
                      repeatable deployments with minimal manual intervention
                      while ensuring the production environment stays in sync
                      with the main codebase.
                    </p>
                  </>
                ),
              }}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default TempoZone;
