import './ProjectCard.css';
import { ArrowTopRightIcon } from '../../assets';
import { Noise, Pill } from '../../components';
import { ProjectCardType } from './ProjectCardType';

const ProjectCard = ({ src, projectNo, year, title }: ProjectCardType) => {

  return (
    <div className='project-card-container'>
      <img className='project-card-img' src={src} alt="" />
      <Noise />
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