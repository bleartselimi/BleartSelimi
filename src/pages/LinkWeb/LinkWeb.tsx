import { LinkWebCoverImage, LinkWebImageEight, LinkWebImageEleven, LinkWebImageFive, LinkWebImageFour, LinkWebImageFourteen, LinkWebImageNine, LinkWebImageOne, LinkWebImageSeven, LinkWebImageSix, LinkWebImageTen, LinkWebImageThirteen, LinkWebImageThree, LinkWebImageTwelve, LinkWebImageTwo } from "../../assets"
import { TechnicalDetailsButton } from "../../components"
import { ContentPanel, OtherProjects } from "../../widgets"
import { useEffect, useRef } from "react";
import { useGeneralContext } from "../../hooks/useGeneralContext";

const LinkWeb = () => {

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
            <h1 className='fs-64px color-white lh-100 text-shadow-white'>LINK, A SOCIAL NETWORK<br />FOR WEB</h1>
          }
          areaFour={
            <TechnicalDetailsButton onClick={() => {}} />
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
              <p className='project-content-panel-area-two fs-18px color-silver lh-150 m-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            }
            areaFour={
              <TechnicalDetailsButton onClick={() => {}} />
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
    </>
  )
}

export default LinkWeb