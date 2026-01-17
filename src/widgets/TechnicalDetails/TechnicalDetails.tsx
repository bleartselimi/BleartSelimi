import "./TechnicalDetails.css";
import { TechnicalDetailsType } from "./TechnicalDetailsType";

const TechnicalDetails = ({
  overview,
  frontendTechnologies,
  backendTechnologies,
  otherTechnologies,
  architecture,
  infrastructure,
}: TechnicalDetailsType) => {
  return (
    <div>
      <h1 className="technical-details-title fs-64px color-white mb-20px">
        Overview
      </h1>
      {overview}
      <h1 className="technical-details-title fs-64px color-white mt-100px">
        Technologies
      </h1>
      {frontendTechnologies && (
        <>
          <h2 className="fs-24px color-golden-haze s-black mb-15px mt-20px">
            Front-end
          </h2>
          <div className="technologies-wrapper">
            {frontendTechnologies?.map((technology, i) => {
              return (
                <div key={i} className="technology-box">
                  <img src={technology.icon} alt="" className="mr-10px" />
                  <h2 className="fs-18px color-white s-black">
                    {technology.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </>
      )}
      {backendTechnologies && (
        <>
          <h2 className="fs-24px color-golden-haze s-black mb-15px mt-20px">
            Back-end
          </h2>
          <div className="technologies-wrapper">
            {backendTechnologies?.map((technology, i) => {
              return (
                <div key={i} className="technology-box">
                  <img src={technology.icon} alt="" className="mr-10px" />
                  <h2 className="fs-18px color-white s-black">
                    {technology.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </>
      )}
      {otherTechnologies && (
        <>
          <h2 className="fs-24px color-golden-haze s-black mb-15px mt-20px">
            Other
          </h2>
          <div className="technologies-wrapper">
            {otherTechnologies?.map((technology, i) => {
              return (
                <div key={i} className="technology-box">
                  <img src={technology.icon} alt="" className="mr-10px" />
                  <h2 className="fs-18px color-white s-black">
                    {technology.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </>
      )}
      {architecture && (
        <>
          <h1 className="technical-details-title fs-64px color-white mt-100px mb-20px">
            Architecture
          </h1>
          {architecture.description}
          {architecture.images?.map((img, i) => {
            return (
              <img
                className="technical-details-image mt-20px"
                key={i}
                src={img}
                alt=""
              />
            );
          })}
        </>
      )}
      {infrastructure && (
        <>
          <h1 className="technical-details-title fs-64px color-white mt-100px mb-20px">
            Deployment & Infrastructure
          </h1>
          {infrastructure.description}
          {infrastructure.images?.map((img, i) => {
            return (
              <img
                className="technical-details-image mt-20px"
                key={i}
                src={img}
                alt=""
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default TechnicalDetails;
