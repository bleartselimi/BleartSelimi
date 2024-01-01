import { ArrowRightIcon } from '../../assets'
import './TechnicalDetailsButton.css'

const TechnicalDetailsButton = () => {
  return (
    <div className='technical-details-button'>
      <span className='technical-details-title'>technical details</span>
      <ArrowRightIcon className='technical-details-icon' />
    </div>
  )
}

export default TechnicalDetailsButton