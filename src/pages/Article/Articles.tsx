import { ContentPanel } from "../../widgets"
import './Article.css';

const Articles = () => {
    return (
        <>
            <div className='container-one'>
                <ContentPanel
                    className='content-panel-space-one content-panel-article'
                    areaTwo={
                        <div className="articlescContent-panel-area-one">
                            <h1 className='fs-64px color-white lh-100 text-shadow-white'>Articles<br />and Blogs</h1>
                            <p className='fs-24px color-silver lh-120 m-semibold'>This is a space where I share my insights, experiences, and knowledge on a variety of topics. Feel free to explore, learn, and engage. I hope you find the content both informative and enjoyable. Your thoughts and questions are always welcome, so don't hesitate to reach out.</p>
                        </div>
                    }
                />
            </div>
        </>
    )
}

export default Articles