import { AspNetCoreImage, AwsImage, AxiosImage, AzureImage, CssImage, EntityFrameworkImage, FigmaImage, I18nextImage, JwtImage, LinkWebCoverImage, LinkWebImageEight, LinkWebImageEleven, LinkWebImageFive, LinkWebImageFour, LinkWebImageFourteen, LinkWebImageNine, LinkWebImageOne, LinkWebImageSeven, LinkWebImageSix, LinkWebImageTen, LinkWebImageThirteen, LinkWebImageThree, LinkWebImageTwelve, LinkWebImageTwo, MediatrImage, MssqlImage, ReactImage, ReduxImage, SwaggerImage, SwiperImage } from "../../assets"
import { Modal, TechnicalDetailsButton } from "../../components"
import { ContentPanel, OtherProjects, TechnicalDetails } from "../../widgets"
import { useEffect, useRef, useState } from "react";
import { useGeneralContext } from "../../hooks/useGeneralContext";

const LinkWeb = () => {

  const { state } = useGeneralContext();

  const projectContainer = useRef<HTMLDivElement | null>(null);

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (state.globalLoadingState && projectContainer.current) {
      projectContainer.current.style.animation = "fadeIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 3s forwards"
    }
  }, [state.globalLoadingState]);

  return (
    <>
      <div className='container-one'>
        <ContentPanel
          hasAreaOneMask={true}
          className='content-panel-space-one project-content-panel'
          areaOne={
            <h1 className='fs-64px color-white lh-100 text-shadow-white'>LINK, A SOCIAL NETWORK<br />FOR WEB</h1>
          }
          areaFour={
            <TechnicalDetailsButton onClick={() => setOpened(true)} />
          }
        />
        <div className="project-container" ref={projectContainer}>
          <div className="project-cover-image-wrapper">
            <img src={LinkWebCoverImage} alt="Link Mobile Project. Cover image." />
          </div>
          <ContentPanel
            hasAreaOneMask={true}
            className='project-about-content-panel'
            areaOne={
              <h1 className='fs-64px color-white lh-100 text-shadow-white'>About the<br />project</h1>
            }
            areaTwo={
              <p className='project-content-panel-area-two fs-18px color-silver lh-150 m-semibold'>I developed Link, a mobile web app designed to seamlessly foster and strengthen connections. Link empowers users to effortlessly add or remove connections, share memorable moments through posts, like them, engage in meaningful conversations through comments, and privately connect via a secure chat feature.</p>
            }
            areaFour={
              <TechnicalDetailsButton onClick={() => setOpened(true)} />
            }
          />
          <div className="project-image-wrapper">
            <img src={LinkWebImageOne} alt="Link Web Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageTwo} alt="Link Web Project Image 2." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageThree} alt="Link Web Project Image 3." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageFour} alt="Link Web Project Image 4." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageFive} alt="Link Web Project Image 5." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageSix} alt="Link Web Project Image 6." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageSeven} alt="Link Web Project Image 7." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageEight} alt="Link Web Project Image 8." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageNine} alt="Link Web Project Image 9." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageTen} alt="Link Web Project Image 10." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageEleven} alt="Link Web Project Image 11." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageTwelve} alt="Link Web Project Image 12." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageThirteen} alt="Link Web Project Image 13." />
          </div>
          <div className="project-image-wrapper">
            <img src={LinkWebImageFourteen} alt="Link Web Project Image 14." />
          </div>
          <OtherProjects />
        </div>
      </div>
      {
        opened &&
        <Modal opened={opened} setOpened={setOpened}>
          <div className="modal-boundries">
            <TechnicalDetails
              overview={
                <>
                  <p className="fs-18px color-silver m-semibold lh-160">
                    I created Link, a dynamic social media web app built with React, Redux, and React Context. Leveraging i18next for seamless translations and Swiper JS to deliver an appealing media swiper for posts, the app ensures a visually engaging experience.
                    <br />
                    <br />
                    Link communicates seamlessly with an ASP.NET backend powered by MSSQL, Entity Framework, and MediatR, using Axios for efficient data exchange. API documentation is made accessible through Swagger. Authentication is strengthened by JWT, prioritizing secure connections. Figma played a pivotal role in crafting the design, while user interactions such as liking, commenting, sharing, saving posts, searching for friends, and managing profiles redefine the social experience.
                    <br />
                    <br />
                    I also integrated Amazon Web Services (AWS) and Microsoft Azure. AWS S3 and
                    Azure Blob Storage streamlined image management, while their hosting and database services efficiently
                    handled Link's data and API management. This project honed my development skills and exposed me to
                    various technologies essential for modern app creation.
                  </p>
                </>
              }
              frontendTechnologies={[
                {
                  icon: ReactImage,
                  title: "React"
                },
                {
                  icon: ReduxImage,
                  title: "Redux"
                },
                {
                  icon: AxiosImage,
                  title: "Axios"
                },
                {
                  icon: SwiperImage,
                  title: "Swiper Js"
                },
                {
                  icon: I18nextImage,
                  title: "i18next"
                },
                {
                  icon: CssImage,
                  title: "CSS"
                },
              ]}
              backendTechnologies={[
                {
                  icon: AspNetCoreImage,
                  title: "ASP.NET Core"
                },
                {
                  icon: EntityFrameworkImage,
                  title: "Entity Framework Core"
                },
                {
                  icon: MediatrImage,
                  title: "MediatR"
                },
                {
                  icon: JwtImage,
                  title: "JWT Bearer Authentication"
                },
                {
                  icon: MssqlImage,
                  title: "Microsoft SQL server"
                },
                {
                  icon: SwaggerImage,
                  title: "Swagger"
                },
              ]}
              otherTechnologies={[
                {
                  icon: AzureImage,
                  title: "Azure"
                },
                {
                  icon: AwsImage,
                  title: "Amazon Web Services"
                },
                {
                  icon: FigmaImage,
                  title: "Figma"
                }
              ]}
              architecture={{
                description:
                  <>
                    <p className="fs-18px color-silver m-semibold lh-160">
                      Within the framework of Link, I embraced Onion Architecture with MediatR, orchestrating a seamless blend of efficiency and scalability. The project's architecture unfolds across four distinct layers:
                    </p>
                    <br />
                    <br />
                    <ul className="fs-18px color-silver m-semibold lh-160">
                      <li>
                        <span className="color-golden-haze">Application:</span> A project of DTOs, models, and JWT configurations, ensures seamless user interactions
                      </li>
                      <li>
                        <span className="color-golden-haze">Core:</span> Holds entities and enums at its core, establishing the project's foundational elements.
                      </li>
                      <li>
                        <span className="color-golden-haze">Infrastructure:</span> Home to DbContext and migrations intricately tied to Entity Framework, lays the groundwork for robust data management.
                      </li>
                      <li>
                        <span className="color-golden-haze">Services:</span> A testament to the CQRS(Command and Query Responsibility Segregation) pattern, hosts a symphony of handlers, orchestrating a harmonious integration of functionalities.
                      </li>
                      <br />
                    </ul>
                    <br />
                    <p className="fs-18px color-silver m-semibold lh-160">
                      By adopting this architecture, Link becomes more manageable, adaptable, and reaches a higher level of technological sophistication.
                    </p>
                  </>,
                images: [""]
              }}
            />
          </div>
        </Modal>
      }
    </>
  )
}

export default LinkWeb