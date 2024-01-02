import { TechnicalDetailsButton } from "../../components"
import { ContentPanel, OtherProjects } from "../../widgets"
import { useEffect, useRef } from "react";
import { useGeneralContext } from "../../hooks/useGeneralContext";
import { ProblementNprishtineCoverImage, ProblementNprishtineImageFive, ProblementNprishtineImageFour, ProblementNprishtineImageOne, ProblementNprishtineImageSix, ProblementNprishtineImageThree, ProblementNprishtineImageTwo } from "../../assets";

const ProblemetNprishtine = () => {

  const { state } = useGeneralContext();

  const projectContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (state.activeSplashScreen && projectContainer.current) {
      projectContainer.current.style.animation = "fadeIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 3s forwards"
    }
  }, [state.activeSplashScreen]);

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
            <TechnicalDetailsButton />
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
              <p className='project-content-panel-area-two fs-18px color-silver lh-150 m-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            }
            areaFour={
              <TechnicalDetailsButton />
            }
          />
          <div className="project-image-wrapper">
            <img src={ProblementNprishtineImageOne} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={ProblementNprishtineImageTwo} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={ProblementNprishtineImageThree} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={ProblementNprishtineImageFour} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={ProblementNprishtineImageFive} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={ProblementNprishtineImageSix} alt="Link Mobile Project Image 1." />
          </div>
          <OtherProjects />
        </div>
      </div>
    </>
  )
}

export default ProblemetNprishtine