import { Link } from 'react-router-dom';
import { ArrowTopRightIcon } from '../../assets';
import './LinkedinButton.css';

const LinkedinButton = () => {
    return (
        <Link className='linkedin-button' to="https://www.linkedin.com/in/bleart-selimi-677338224/" target='_blank'>
            <span className='fs-20px m-semibold color-golden-haze'>linkedin</span>
            <ArrowTopRightIcon />
        </Link>
    )
}

export default LinkedinButton