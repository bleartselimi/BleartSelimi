import { Modal, TechnicalDetailsButton } from "../../components"
import { ContentPanel, OtherProjects, TechnicalDetails } from "../../widgets"
import { useEffect, useRef, useState } from "react";
import { useGeneralContext } from "../../hooks/useGeneralContext";
import { AdonetImage, AspNetImage, FigmaImage, MssqlImage, MuseumInformationSystemCoverImage, MuseumInformationSystemImageEight, MuseumInformationSystemImageEleven, MuseumInformationSystemImageFive, MuseumInformationSystemImageFour, MuseumInformationSystemImageFourteen, MuseumInformationSystemImageNine, MuseumInformationSystemImageOne, MuseumInformationSystemImageSeven, MuseumInformationSystemImageSix, MuseumInformationSystemImageTen, MuseumInformationSystemImageThirteen, MuseumInformationSystemImageThree, MuseumInformationSystemImageTwelve, MuseumInformationSystemImageTwo, WindowsFormsImage } from "../../assets";

const MuseumInformationSystem = () => {

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
            <h1 className='fs-64px color-white lh-100 text-shadow-white'>MUSEUM INFORMATION<br />SYSTEM</h1>
          }
          areaFour={
            <TechnicalDetailsButton onClick={() => setOpened(true)} />
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
              <p className='project-content-panel-area-two fs-18px color-silver lh-150 m-semibold'>I designed and created a comprehensive museum information system, incorporating both Administrator and Client modules. Developed using winforms, the application does efficient management of crucial museum components such as objects, floors, employees, and exhibitions.</p>
            }
            areaFour={
              <TechnicalDetailsButton onClick={() => setOpened(true)} />
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
      {
        opened &&
        <Modal opened={opened} setOpened={setOpened}>
          <div className="modal-boundries">
            <TechnicalDetails
              overview={
                <>
                  <p className="fs-18px color-silver m-semibold lh-160">
                    I developed the Museum Information System a desktop app for windows, employing Windows Forms for the views and ASP.NET for the robust backend infrastructure. The custom design, crafted using Figma, boasts a responsive layout to diverse screen sizes, ensuring an optimal user experience.
                    <br />
                    <br />
                    Utilizing stored procedures in MSSQL, the system seamlessly manipulates the database using ADO.NET, with the project structured into distinct layers: Business Logic Layer (BLL), Business Object (BO), and Data Access Layer (DAL).
                    <br />
                    <br />
                    This comprehensive system comprises two modules. The Client Module provides users with access to the museum map, an informative museum about page, an exhibition list detailing upcoming events, and a powerful search functionality for museum objects. Each object features a detailed description and is conveniently located on the map for user reference.
                  </p>
                </>
              }
              frontendTechnologies={[
                {
                  icon: WindowsFormsImage,
                  title: "Windows forms"
                },
              ]}
              backendTechnologies={[
                {
                  icon: AspNetImage,
                  title: "ASP.NET"
                },
                {
                  icon: AdonetImage,
                  title: "ADO.NET"
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
              architecture={{
                description:
                  <>
                    <p className="fs-18px color-silver m-semibold lh-160">
                      I developed the Museum Information System with a well-defined architecture that includes:
                    </p>
                    <br />
                    <br />
                    <ul className="fs-18px color-silver m-semibold lh-160">
                      <li>
                        <span className="color-golden-haze">Business Logic Layer (BLL):</span> Serves as the core of the application, housing the business logic that orchestrates the flow of data and operations. This layer ensures the integrity of the application's functionality, handling tasks such as processing user inputs, coordinating data retrieval and manipulation, and managing the overall application behavior.
                      </li>
                      <li>
                        <span className="color-golden-haze">Business Object (BO):</span> Encapsulates the application's models, defining the structure and attributes of the entities within the system. These models represent the core data entities, such as museum objects, exhibitions, user profiles etc. The BO layer acts as a bridge between the BLL and the Data Access Layer (DAL), providing a clear and standardized representation of the data entities used throughout the application.
                      </li>
                      <li>
                        <span className="color-golden-haze">Data Access Layer (DAL):</span> Is responsible for managing the communication with the database. It holds the configuration details needed to connect to the database, execute queries, and retrieve or update data. By centralizing database interactions in the DAL, the application benefits from modularity and maintainability. Any changes to the database structure or access methods can be localized to this layer, minimizing the impact on the rest of the application.
                      </li>
                      <br />
                    </ul>
                    <br />
                    <p className="fs-18px color-silver m-semibold lh-160">
                      In summary, the BLL governs the business logic, the BO encapsulates the application's models, and the DAL handles database access configuration. This layered architecture enhances code organization, readability, and maintainability, contributing to the overall efficiency and scalability of the Museum Information System.
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

export default MuseumInformationSystem