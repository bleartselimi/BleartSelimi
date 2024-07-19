import { useEffect, useRef } from "react";
import { ContentPanel } from "../../widgets"
import './Article.css';
import { useGeneralContext } from "../../hooks/useGeneralContext";
import { articleLinks } from "./ArticleLinks";
import { LinkedinButton } from "../../components";

const Articles = () => {

    const { state, transitionIn } = useGeneralContext();

    const projectContainer = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (state.globalLoadingState) {
            projectContainer.current!.style.animation = "fadeIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) 3s forwards"
        }
    }, [state.globalLoadingState]);

    return (
        <>
            <div className='container-one'>
                <ContentPanel
                    hasAreaOneMask={true}
                    className='content-panel-space-one content-panel-article'
                    areaOne={
                        <div className="articles-content-panel-area-one">
                            <h1 className='fs-64px color-white lh-100 text-shadow-white'>Articles and Blogs</h1>
                            <p className='fs-24px color-silver lh-120 m-semibold'>This is a space where I share my insights, experiences, and knowledge on a variety of topics. Feel free to learn, and engage. I hope you find the content both informative and enjoyable. Your thoughts and questions are always welcome, so don't hesitate to reach out.</p>
                        </div>
                    }
                    areaThree={
                        <h1 className='fs-20px color-white m-semibold'>Bleart Selimi</h1>
                    }
                    areaFour={
                        <LinkedinButton />
                    }
                />
                <div className="project-container" ref={projectContainer}>
                    <div className="article-cards-container">
                        <div className="article-card" onClick={() => transitionIn(articleLinks.articleOne, true)}>
                            <img src="https://images.unsplash.com/photo-1555529902-5261145633bf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <h1>Securing JWT Tokens with HTTP-Only Cookies using Next.js and ASP.NET Core: A Defense Against XSS Attacks</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articles