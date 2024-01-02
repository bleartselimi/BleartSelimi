import './TechnicalDetailsButton.css';
import { ArrowRightIcon } from '../../assets'
import { TechnicalDetailsButtonType } from './TechnicalDetailsButtonType';

const TechnicalDetailsButton = ({ onClick }: TechnicalDetailsButtonType) => {

  return (
    <button onClick={onClick} className='technical-details-button'>
      <span className='technical-details-button-title m-semibold'>technical details</span>
      <ArrowRightIcon className='technical-details-icon' />
    </button>
  )
}

export default TechnicalDetailsButton