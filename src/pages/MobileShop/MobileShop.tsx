import { TechnicalDetailsButton } from "../../components"
import { ContentPanel, OtherProjects } from "../../widgets"
import { useEffect, useRef } from "react";
import { useGeneralContext } from "../../hooks/useGeneralContext";
import { MobileShopCoverImage, MobileShopImageEight, MobileShopImageFive, MobileShopImageFour, MobileShopImageNine, MobileShopImageOne, MobileShopImageSeven, MobileShopImageSix, MobileShopImageTen, MobileShopImageThree, MobileShopImageTwo } from "../../assets";

const MobileShop = () => {

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
            <h1 className='fs-64px color-white lh-100 text-shadow-white'>MOBILE<br />SHOP</h1>
          }
          areaFour={
            <TechnicalDetailsButton onClick={() => {}}/>
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
              <p className='project-content-panel-area-two fs-18px color-silver lh-150 m-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            }
            areaFour={
              <TechnicalDetailsButton onClick={() => {}} />
            }
          />
          <div className="project-image-wrapper">
            <img src={MobileShopImageOne} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageTwo} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageThree} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageFour} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageFive} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageSix} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageSeven} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageEight} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageNine} alt="Link Mobile Project Image 1." />
          </div>
          <div className="project-image-wrapper">
            <img src={MobileShopImageTen} alt="Link Mobile Project Image 1." />
          </div>
          <OtherProjects />
        </div>
      </div>
    </>
  )
}

export default MobileShop