import './ProjectCard.css';
import { ArrowTopRightIcon } from '../../assets';
import { Noise, Pill } from '../../components';
import { ProjectCardType } from './ProjectCardType';
import { useGeneralContext } from '../../hooks/useGeneralContext';

const ProjectCard = ({ to, src, projectNo, year, title, showTopRightArrow = true }: ProjectCardType) => {

  const { transitionIn } = useGeneralContext();

  return (
    <div className='project-card-container' onClick={() => transitionIn(to, true)}>
      <img className='project-card-img' src={src} alt="" />
      <Noise />
      <div className='project-card-container-header'>
        {
          projectNo &&
          <Pill className='pill-big'>
            <span className='fs-20px s-black color-white'>{projectNo}</span>
          </Pill>
        }
        {
          year &&
          <Pill className='pill-big'>
            <span className='fs-20px s-black color-white'>{year}</span>
          </Pill>
        }

      </div>
      <div className='project-card-container-footer'>
        <h1 className='project-card-container-title color-white' dangerouslySetInnerHTML={{ __html: title }} />
        {
          showTopRightArrow &&
          <Pill className='pill-small'>
            <ArrowTopRightIcon fill='#ffffff' width={30} height={30} />
          </Pill>
        }
      </div>
    </div >
  )
}

export default ProjectCard