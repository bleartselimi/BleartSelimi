import { Modal, TechnicalDetailsButton } from "../../components"
import { ContentPanel, OtherProjects, TechnicalDetails } from "../../widgets"
import { useEffect, useRef, useState } from "react";
import { useGeneralContext } from "../../hooks/useGeneralContext";
import { AspNetCoreImage, FigmaImage, KotlinImage, MssqlImage, ProblementNprishtineCoverImage, ProblementNprishtineImageFive, ProblementNprishtineImageFour, ProblementNprishtineImageOne, ProblementNprishtineImageSix, ProblementNprishtineImageThree, ProblementNprishtineImageTwo } from "../../assets";

const ProblemetNprishtine = () => {

  const { state } = useGeneralContext();

  const projectContainer = useRef<HTMLDivElement | null>(null)

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
            <h1 className='fs-64px color-white lh-100 text-shadow-white'>PROBLEMET<br />N’PRISHTINË</h1>
          }
          areaFour={
            <TechnicalDetailsButton onClick={() => setOpened(true)} />
          }
        />
        <div className="project-container" ref={projectContainer}>
          <div className="project-cover-image-wrapper">
            <img src={ProblementNprishtineCoverImage} alt="Link Mobile Project. Cover image." />
          </div>
          <ContentPanel
            hasAreaOneMask={true}
            className='project-about-content-panel'
            areaOne={
              <h1 className='fs-64px color-white lh-100 text-shadow-white'>About the<br />project</h1>
            }
            areaTwo={
              <p className='project-content-panel-area-two fs-18px color-silver lh-150 m-semibold'>
                Designed and built a simple Android application named "Problemet n'Prishtine" which translates to "Problems in Prishtina" using Kotlin, empowering citizens to report issues within the city of Prishtina seamlessly.
              </p>
            }
            areaFour={
              <TechnicalDetailsButton onClick={() => setOpened(true)} />
            }
          />
          <div className="project-image-wrapper">
            <img src={ProblementNprishtineImageOne} alt="Problemet n'Prishtine Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={ProblementNprishtineImageTwo} alt="Problemet n'Prishtine Project Image 2." />
          </div>
          <div className="project-image-wrapper">
            <img src={ProblementNprishtineImageThree} alt="Problemet n'Prishtine Project Image 3." />
          </div>
          <div className="project-image-wrapper">
            <img src={ProblementNprishtineImageFour} alt="Problemet n'Prishtine Project Image 4." />
          </div>
          <div className="project-image-wrapper">
            <img src={ProblementNprishtineImageFive} alt="Problemet n'Prishtine Project Image 5." />
          </div>
          <div className="project-image-wrapper">
            <img src={ProblementNprishtineImageSix} alt="Problemet n'Prishtine Project Image 6." />
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
                    Through the app's user-friendly interface, individuals can submit problem reports by comments, photos, and precise location.
                    <br />
                    <br />
                    To enhance the app's functionality, I integrated Retrofit for making API calls, enabling the retrieval of precise location information. This technology streamlined the communication between the app and external APIs, ensuring accurate and efficient data exchange. The use of Kotlin, coupled with Retrofit, resulted in a robust and responsive solution.
                    <br />
                    <br />
                    Additionally, I utilized Figma for the logo design, creating a cohesive and recognizable visual identity for the application.
                  </p>
                </>
              }
              frontendTechnologies={[
                {
                  icon: KotlinImage,
                  title: "Kotlin"
                }
              ]}
              backendTechnologies={[
                {
                  icon: AspNetCoreImage,
                  title: "ASP.NET Core"
                },
                {
                  icon: MssqlImage,
                  title: "Microsoft SQL server"
                },
              ]}
              otherTechnologies={[
                {
                  icon: FigmaImage,
                  title: "Figma"
                }
              ]}
            />
          </div>
        </Modal>
      }
    </>
  )
}

export default ProblemetNprishtine
