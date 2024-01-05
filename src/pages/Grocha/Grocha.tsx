import { AspNetCoreImage, AxiosImage, CssImage, FigmaImage, GrochaCoverImage, JwtImage, MongodbImage, MysqlImage, ReactImage, RedisImage, SeriologImage, SignalrImage, SocketioImage, SwaggerImage, TypescriptImage, ViteImage } from "../../assets"
import { Modal, TechnicalDetailsButton } from "../../components"
import { ContentPanel, OtherProjects, TechnicalDetails } from "../../widgets"
import { useEffect, useRef, useState } from "react";
import { useGeneralContext } from "../../hooks/useGeneralContext";

const Grocha = () => {

  const { state } = useGeneralContext();

  const projectContainer = useRef<HTMLDivElement | null>(null)

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (state.globalLoadingState) {
      projectContainer.current!.style.animation = "fadeIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 3s forwards"
    }
  }, [state.globalLoadingState]);

  return (
    <>
      <div className='container-one'>
        <ContentPanel
          hasAreaOneMask={true}
          className='content-panel-space-one project-content-panel'
          areaOne={
            <h1 className='fs-64px color-white lh-100 text-shadow-white'>GROCHA,<br />A CHAT APPLICATION</h1>
          }
          areaFour={
            <TechnicalDetailsButton onClick={() => setOpened(true)} />
          }
        />
        <div className="project-container" ref={projectContainer}>
          <div className="project-cover-image-wrapper">
            <img src={GrochaCoverImage} alt="Grocha Project. Cover image." />
          </div>
          <ContentPanel
            hasAreaOneMask={true}
            className='project-about-content-panel'
            areaOne={
              <h1 className='fs-64px color-white lh-100 text-shadow-white'>About the<br />project</h1>
            }
            areaTwo={
              <p className='project-content-panel-area-two fs-18px color-silver lh-150 m-semibold'>Crafted and continue to evolve Grocha, a versatile group chat application. I designed the app's layout and interface using Figma, ensuring a seamless user experience. The application offers a range of features, including real-time individual/group chats, friend management, and effortless media file sharing.</p>
            }
            areaFour={
              <TechnicalDetailsButton onClick={() => setOpened(true)} />
            }
          />
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
                    I designed and currently develop Grocha(Gro-group, cha-chat), a comprehensive group chat application. Utilizing Figma, I
                    planned the app's layout and interface. For a robust front-end, I employed React + Vite + TypeScript.
                    <br />
                    The backend, built on ASP.NET Core, includes various libraries for authentication and logging. The database
                    utilizes Redis for quick caching, MySQL for structured data, and MongoDB for seamless chat message
                    management. Grocha offers features like real-time individual/group chats, friend management, and easy
                    media file sharing.
                  </p>
                </>
              }
              frontendTechnologies={[
                {
                  icon: ReactImage,
                  title: "React"
                },
                {
                  icon: ViteImage,
                  title: "Vite"
                },
                {
                  icon: TypescriptImage,
                  title: "Typescript"
                },
                {
                  icon: AxiosImage,
                  title: "Axios"
                },
                {
                  icon: SocketioImage,
                  title: "Socket.io"
                },
                {
                  icon: CssImage,
                  title: "CSS"
                }
              ]}
              backendTechnologies={[
                {
                  icon: AspNetCoreImage,
                  title: "ASP.NET Core"
                },
                {
                  icon: JwtImage,
                  title: "JWT Bearer Authentication"
                },
                {
                  icon: MongodbImage,
                  title: "Mongodb"
                },
                {
                  icon: MysqlImage,
                  title: "Mysql"
                },
                {
                  icon: SeriologImage,
                  title: "Seriolog"
                },
                {
                  icon: RedisImage,
                  title: "Redis"
                },
                {
                  icon: SignalrImage,
                  title: "SignalR"
                },
                {
                  icon: SwaggerImage,
                  title: "Swagger"
                }
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
                      I designed and implemented a microservice architecture comprising five key components:
                    </p>
                    <br />
                    <br />
                    <ul className="fs-18px color-silver m-semibold lh-160">
                      <li>
                        <span className="color-golden-haze">User Management:</span> This microservice is dedicated to handling authentication, registration, profiles, and permissions.
                      </li>
                      <li>
                        <span className="color-golden-haze">Communication:</span> Focused on real-time chatting and notifications.
                      </li>
                      <li>
                        <span className="color-golden-haze">ConnectionHub:</span> Managing user connections, friendships, and requests.
                      </li>
                      <li>
                        <span className="color-golden-haze">Media Handling:</span> Dedicated to file management, this microservice utilizes efficient handling of media files.
                      </li>
                      <li>
                        <span className="color-golden-haze">Analytics:</span> This microservice is responsible for collecting and analyzing user-related data for seamless expansion and maintenance.
                      </li>
                      <br />
                    </ul>
                    <br />
                    <p className="fs-18px color-silver m-semibold lh-160">
                      This architecture incorporates a repository and interface-based services model, promoting separation of concerns and facilitating modularity. To ensure robust logging, the system utilizes Serilog to log information both in files and database.
                    </p>
                    <br />
                    <p className="fs-18px color-silver m-semibold lh-160">
                      Caching systems, such as Redis, are integrated to enhance performance and responsiveness across communication microservices, optimizing data retrieval and reducing latency.
                    </p>
                    <br />
                    <p className="fs-18px color-silver m-semibold lh-160">
                      Structured data, including user profiles and permissions, is stored in MySQL to maintain data integrity and enable efficient querying. On the other hand, unstructured data, like chat messages, finds its home in MongoDB, providing flexibility and scalability for seamless management.
                    </p>
                    <br />
                    <p className="fs-18px color-silver m-semibold lh-160">
                      This architecture aims for a scalable, modular, and maintainable system, ensuring optimal performance, robust logging, and efficient data storage across microservices.
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

export default Grocha;