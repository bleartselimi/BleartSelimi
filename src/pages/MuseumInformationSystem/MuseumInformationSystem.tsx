import { TechnicalDetailsButton } from "../../components"
import { ContentPanel, OtherProjects } from "../../widgets"
import { useEffect, useRef } from "react";
import { useGeneralContext } from "../../hooks/useGeneralContext";
import { MuseumInformationSystemCoverImage, MuseumInformationSystemImageEight, MuseumInformationSystemImageEleven, MuseumInformationSystemImageFive, MuseumInformationSystemImageFour, MuseumInformationSystemImageFourteen, MuseumInformationSystemImageNine, MuseumInformationSystemImageOne, MuseumInformationSystemImageSeven, MuseumInformationSystemImageSix, MuseumInformationSystemImageTen, MuseumInformationSystemImageThirteen, MuseumInformationSystemImageThree, MuseumInformationSystemImageTwelve, MuseumInformationSystemImageTwo } from "../../assets";

const MuseumInformationSystem = () => {

  const { state } = useGeneralContext();

  const projectContainer = useRef<HTMLDivElement | null>(null)

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
            <h1 className='fs-64px color-white lh-100 text-shadow-white'>MUSEUM INFORMATION<br />SYSTEM</h1>
          }
          areaFour={
            <TechnicalDetailsButton onClick={() => {}} />
          }
        />
        <div className="project-container" ref={projectContainer}>
          <div className="project-cover-image-wrapper">
            <img src={MuseumInformationSystemCoverImage} alt="Link Mobile Project. Cover image." />
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
              <TechnicalDetailsButton onClick={() => {}} />
            }
          />
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageOne} alt="Museum Information System Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageTwo} alt="Museum Information System Project Image 2." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageThree} alt="Museum Information System Project Image 3." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageFour} alt="Museum Information System Project Image 4." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageFive} alt="Museum Information System Project Image 5." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageSix} alt="Museum Information System Project Image 6." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageSeven} alt="Museum Information System Project Image 7." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageEight} alt="Museum Information System Project Image 8." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageNine} alt="Museum Information System Project Image 9." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageTen} alt="Museum Information System Project Image 10." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageEleven} alt="Museum Information System Project Image 11." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageTwelve} alt="Museum Information System Project Image 12." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageThirteen} alt="Museum Information System Project Image 13." />
          </div>
          <div className="project-image-wrapper">
            <img src={MuseumInformationSystemImageFourteen} alt="Museum Information System Project Image 14." />
          </div>
          <OtherProjects />
        </div>
      </div>
    </>
  )
}

export default MuseumInformationSystem