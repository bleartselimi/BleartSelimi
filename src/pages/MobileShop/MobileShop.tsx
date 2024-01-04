import { Modal, TechnicalDetailsButton } from "../../components"
import { ContentPanel, OtherProjects, TechnicalDetails } from "../../widgets"
import { useEffect, useRef, useState } from "react";
import { useGeneralContext } from "../../hooks/useGeneralContext";
import { AspNetCoreImage, BootstrapImage, CssImage, EntityFrameworkImage, MobileShopCoverImage, MobileShopImageEight, MobileShopImageFive, MobileShopImageFour, MobileShopImageNine, MobileShopImageOne, MobileShopImageSeven, MobileShopImageSix, MobileShopImageTen, MobileShopImageThree, MobileShopImageTwo, MssqlImage } from "../../assets";

const MobileShop = () => {

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
            <h1 className='fs-64px color-white lh-100 text-shadow-white'>MOBILE<br />SHOP</h1>
          }
          areaFour={
            <TechnicalDetailsButton onClick={() => setOpened(true)} />
          }
        />
        <div className="project-container" ref={projectContainer}>
          <div className="project-cover-image-wrapper">
            <img src={MobileShopCoverImage} alt="Link Mobile Project. Cover image." />
          </div>
          <ContentPanel
            hasAreaOneMask={true}
            className='project-about-content-panel'
            areaOne={
              <h1 className='fs-64px color-white lh-100 text-shadow-white'>About the<br />project</h1>
            }
            areaTwo={
              <p className='project-content-panel-area-two fs-18px color-silver lh-150 m-semibold'>
                I developed a Mobile Shop application that simplifies stock and order management for mobile phones, making the whole process smooth and easy to handle.
              </p>
            }
            areaFour={
              <TechnicalDetailsButton onClick={() => setOpened(true)} />
            }
          />
          <div className="project-image-wrapper">
            <img src={MobileShopImageOne} alt="Mobile Shop Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageTwo} alt="Mobile Shop Project Image 2." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageThree} alt="Mobile Shop Project Image 3." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageFour} alt="Mobile Shop Project Image 4." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageFive} alt="Mobile Shop Project Image 5." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageSix} alt="Mobile Shop Project Image 6." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageSeven} alt="Mobile Shop Project Image 7." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageEight} alt="Mobile Shop Project Image 8." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageNine} alt="Mobile Shop Project Image 9." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageTen} alt="Mobile Shop Project Image 10." />
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
                    I developed Mobile Shop application using the MVC pattern, focusing on efficient stock and order management for mobile phones. Bootstrap was incorporated for a responsive front-end structure. The application features cookie-based authentication for secure logins and includes user management for adding administrators with specific permissions. This project marks my introduction to MVC development, prioritizing functionality over design. Additionally, local storage was employed to efficiently manage orders, enhancing the overall user experience.
                  </p>
                </>
              }
              frontendTechnologies={[
                {
                  icon: BootstrapImage,
                  title: "Bootstrap"
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
                  icon: MssqlImage,
                  title: "Microsoft SQL server"
                },
              ]}
              architecture={{
                description:
                  <>
                    <p className="fs-18px color-silver m-semibold lh-160">

                      In the development of the Mobile Shop application, I embraced the MVC (Model-View-Controller) pattern to enhance code organization and maintainability. MVC provided a structured approach, separating the application into distinct components: Models for data, Views for user interfaces, and Controllers to manage user input and system behavior. 
                      <br />
                      <br />
                      This architectural choice promoted a modular and scalable codebase, facilitating easier updates and modifications in the future. The adoption of MVC, despite design not being the primary focus, significantly improved the overall organization and efficiency of the development process.
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

export default MobileShop