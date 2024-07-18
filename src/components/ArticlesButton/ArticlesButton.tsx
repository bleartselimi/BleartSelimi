import './ArticlesButton.css';
import { ArrowTopRightIcon } from '../../assets';
import { useGeneralContext } from '../../hooks/useGeneralContext';

const ArticlesButton = () => {

    const { transitionIn } = useGeneralContext();

    return (
        <div className='articles-button' onClick={() => transitionIn("/articles", true)}>
            <span className='fs-20px m-semibold color-golden-haze'>articles</span>
            <ArrowTopRightIcon className='articles-button-icon' />
        </div>
    )
}

export default ArticlesButton