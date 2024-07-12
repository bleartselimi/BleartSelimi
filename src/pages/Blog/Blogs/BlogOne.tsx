import { useEffect, useRef } from "react";
import { useGeneralContext } from "../../../hooks/useGeneralContext";
import { ContentPanel } from "../../../widgets"
import "../Blogs.css";

const BlogOne = () => {

    const { state } = useGeneralContext();

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
                    className='content-panel-space-one content-panel-blog'
                    areaOne={
                        <h1 className='fs-36px color-white lh-100 text-shadow-white'>Securing JWT Tokens with HTTP-Only Cookies using Next.js and ASP.NET Core: A Defense Against XSS Attacks</h1>
                    }
                    areaThree={
                        <img src="https://images.unsplash.com/photo-1555529902-5261145633bf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    }
                />
                <div className="project-container" ref={projectContainer}>
                    <p className="color-silver m-semibold fs-18px mt-15px">Friday, July 12, 2024</p>

                    <h1 className="color-white m-black fs-30px mb-10px mt-50px">What is a JWT Token?</h1>

                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        A <a className="color-golden-haze" href="https://en.wikipedia.org/wiki/JSON_Web_Token" target="_blank">JWT token</a> is a form of authentication that is used in a variety of small, medium, and enterprise applications. This type of authentication is achieved by generating a token from the issuer to the audience (e.g. the user attempting to authenticate). The JWT Token is encrypted using a secret key that must be stored in a place where only authorized parties can access it (e.g.  <a className="color-golden-haze" href="https://azure.microsoft.com/en-us/products/key-vault" target="_blank">Azure key vault</a>).
                    </p>

                    <h1 className="color-white m-black fs-30px mt-50px mb-10px">Storing the JWT Token</h1>
                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        The generated token must be used in subsequent calls to the API since it must be authorized to access the data. In most of the cases where I have had the experience to see how this is handled, the Token is stored in <a className="color-golden-haze" href="https://www.geeksforgeeks.org/javascript-localstorage/" target="_blank">Localstorage</a>,  <a className="color-golden-haze" href="https://en.wikipedia.org/wiki/HTTP_cookie#Session_cookie" target="_blank">Cookies (not http only)</a> and Session storage. All of these are valid places where Token can be stored, but they are vulnerable to <a className="color-golden-haze" href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank">XSS attacks</a>.
                    </p>

                    <p className="color-white m-medium fs-18px color-silver lh-150 mt-50px">
                        So in this blog we will see how we will implement HTTP only cookies using Nextjs and ASP.NET Core to have greater security regarding the JWT Token.
                    </p>
                    <hr style={{opacity: .2}} className="my-50px" />
                    <h1 className="color-white m-black fs-30px mb-10px">Nextjs setup</h1>
                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        asdasd
                    </p>
                </div>
            </div>
        </>
    )
}

export default BlogOne