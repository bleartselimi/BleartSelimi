import './ProjectCard.css';
import { useEffect, useRef } from 'react';
import { ArrowTopRightIcon } from '../../assets';
import { Pill } from '../../components';
import { ProjectCardType } from './ProjectCardType';

const ProjectCard = ({ src, projectNo, year, title }: ProjectCardType) => {

  const noiseRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    let counter: number = 0;
    const id = setInterval(() => {
      if (noiseRef.current) {
        noiseRef.current.style.transform = `translate(${((Math.random() * 10) * (Math.round(Math.random()) ? 1 : -1)).toFixed(2)}%, ${((Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1)).toFixed(2)}%)`;
      }
      if (counter === 50) {
        counter = 0;
      }
      else counter++;
    }, 75)

    return () => clearInterval(id)
  }, [])

  return (
    <div className='project-card-container'>
      <img className='project-card-img' src={src} alt="" />
      <div className='project-card-noise' ref={noiseRef}></div>
      <div className='project-card-container-header'>
        <Pill className='pill-big'>
          <span className='fs-20px s-extrabold color-white'>{projectNo}</span>
        </Pill>
        <Pill className='pill-big'>
          <span className='fs-20px s-extrabold color-white'>{year}</span>
        </Pill>
      </div>
      <div className='project-card-container-footer'>
        <h1 className='project-card-container-title color-white' dangerouslySetInnerHTML={{ __html: title }} />
        <Pill className='pill-small'>
          <ArrowTopRightIcon fill='#ffffff' width={30} height={30} />
        </Pill>
      </div>
    </div>
  )
}

export default ProjectCard