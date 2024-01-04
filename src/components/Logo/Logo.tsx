import './Logo.css';
import { LogoIcon } from '../../assets';
import { useGeneralContext } from '../../hooks/useGeneralContext';

const Logo = () => {

  const { transitionIn } = useGeneralContext();

  return (
    <LogoIcon className='logo' onClick={() => {
      if (window.location.hash !== "" && window.location.hash !== "#/") {
        transitionIn("/", true)
      }
    }} />
  )
}

export default Logo