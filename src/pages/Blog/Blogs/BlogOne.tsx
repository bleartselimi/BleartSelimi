import { useEffect, useRef } from "react";
import { useGeneralContext } from "../../../hooks/useGeneralContext";
import { ContentPanel } from "../../../widgets"
import "../Blogs.css";
import { colorizedCodeSnippet } from "../../../utils/colorizedCodeSnippet";

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
                        <img src="HTTPs://images.unsplash.com/photo-1555529902-5261145633bf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    }
                />
                <div className="project-container" ref={projectContainer}>
                    <div className="blog-info-wrapper">
                        <span className="color-silver m-semibold fs-18px mt-15px">July 12, 2024</span>
                        <span className="color-silver m-semibold fs-18px mt-15px">15 min read</span>
                    </div>

                    <h1 className="color-white m-black fs-30px mb-10px mt-50px">What is a JWT Token?</h1>

                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        A <a className="color-golden-haze" href="HTTPs://en.wikipedia.org/wiki/JSON_Web_Token" target="_blank">JWT token</a> is a form of authentication that is used in a variety of small, medium, and enterprise applications. This type of authentication is achieved by generating a token from the issuer to the audience (e.g. the user attempting to authenticate). The JWT Token is encrypted using a secret key that must be stored in a place where only authorized parties can access it (e.g.  <a className="color-golden-haze" href="HTTPs://azure.microsoft.com/en-us/products/key-vault" target="_blank">Azure key vault</a>).
                    </p>

                    <h1 className="color-white m-black fs-30px mt-50px mb-10px">Storing the JWT Token</h1>
                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        The generated token must be used in subsequent calls to the API since it must be authorized to access the data. In most of the cases where I have had the experience to see how this is handled, the Token is stored in <a className="color-golden-haze" href="HTTPs://www.geeksforgeeks.org/javascript-localstorage/" target="_blank">Localstorage</a>,  <a className="color-golden-haze" href="HTTPs://en.wikipedia.org/wiki/HTTP_cookie#Session_cookie" target="_blank">Cookies (not HTTP only)</a> and Session storage. All of these are valid places where Token can be stored, but they are vulnerable to <a className="color-golden-haze" href="HTTPs://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank">XSS attacks</a>.
                    </p>

                    <p className="color-white m-medium fs-18px color-silver lh-150 mt-50px">
                        So in this blog, we will see how to implement HTTP-only cookies using Next.js and ASP.NET Core to enhance the security of JWT tokens.
                    </p>
                    <hr style={{ opacity: .3 }} className="my-50px" />
                    <h1 className="color-white m-black fs-30px mb-10px">Next.js setup</h1>
                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        We will be using <a className="color-golden-haze" href="HTTPs://axios-HTTP.com/docs/intro" target="_blank">Axios</a> for the HTTP client. For Axios, we need to configure a few things. First, we need to create a generic Axios instance that contains the configurations for the base URL, headers, and withCredentials.
                        <br />
                        <br />
                        The withCredentials property indicates whether cookies, authorization headers, and the TLS certificate should be sent in the request or not.
                    </p>
                    <div className="code-snippet">
                        <pre>
                            <code
                                dangerouslySetInnerHTML={{
                                    __html:
                                        colorizedCodeSnippet(`<p>export const</p> <o>Axios</o> <b>=</b> <gr>axios.</gr><b>create</b><y>(</y><p>{</p>
    <r>baseURL:</r> <gr>process.</gr><r>env</r><gr>.</gr><o>NEXT_PUBLIC_API_BASE_URL</o><gr>,</gr>
    <r>headers:</r> <b>{</b>
        <g>"Content-Type"</g><b>:</b> <g>"application/json"</g>
    <b>}</b><gr>,</gr>
    <r>withCredentials:</r> <o>true</o>
<p>}</p><y>)</y><gr>;</gr>`)
                                }}>
                            </code>
                        </pre>
                    </div>
                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        After setting up some properties in the Axios client, we now need to configure the interceptors as well. So why configure interceptors?
                        <br />
                        <br />
                        Through interceptors we can modify the request we send or the response we receive. We will focus mainly on the response interceptor. Here we will refresh the Token with a new Token after the old one expires. We know about the expiration of the old Token because the API returns the response code <a className="color-golden-haze" href="HTTPs://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401" target="_blank">401 (unauthorized).</a>
                        <br />
                        <br />
                        After the 401 is returned, we need to save the previous request, refresh the Token, and then retry the previously saved request.
                    </p>
                    <div className="code-snippet">
                        <pre>
                            <code
                                dangerouslySetInnerHTML={{
                                    __html:
                                        colorizedCodeSnippet(`<gr>Axios.</gr><r>interceptors</r><gr>.</gr><r>request</r><gr>.</gr><b>use</b><y>(</y>
    <p>(</p><gr>config</gr><p>) => {</p>
        // You can add custom logic here for the request
        <p>return</p> <gr>config;</gr>
    <p>}</p><gr>,</gr>
    <p>(</p><gr>error</gr><p>) => {</p>
        <p>return</p> <o>Promise</o><gr>.</gr><b>reject(</b><gr>error</gr><b>)</b><gr>;</gr>
    <p>}</p>
<y>)</y><gr>;</gr>

<gr>Axios.</gr><r>interceptors</r><gr>.</gr><r>response</r><gr>.</gr><b>use</b><y>(</y>
    <p>(</p><gr>response</gr><p>) => {</p>
        <p>return</p> <gr>response;</gr>
    <p>}</p><gr>,</gr>
    <p>async (</p><gr>error</gr><p>) => {</p>
        <p>const</p> <o>originalRequest</o> <b>=</b> <gr>error.</gr><r>config</r><gr>;</gr>
        // Check if the error is a 401 and that the original request did not already attempt to refresh the token
        <p>if</p> <b>(</b><gr>error.</gr><r>response</r><gr>.</gr><r>status</r> <b>===</b> <gr>HTTPStatusCode.</gr><r>Unauthorized</r> <b>&& !</b><gr>originalRequest.</gr><r>_retry</r><b>) {</b>
            <gr>originalRequest.</gr><r>_retry</r> <b>=</b> <o>true</o><gr>;</gr>

            <p>try</p> <y>{</y>
                // Attempt to refresh the token
                <p>const</p> <o>response</o> <b>=</b> <p>await</p> <b>refresh_token_service</b><p>()</p><gr>;</gr>

                <p>if (</p><gr>response.</gr><r>status</r> <b>===</b> <gr>HTTPStatusCode.</gr><r>Ok</r><p>)</p>
                    // Retry the original request with the new token
                    <p>return</p> <b>Axios</b><p>(</p><gr>originalRequest</gr><p>)</p><gr>;</gr>
            <y>}</y> <p>catch</p> <y>(</y><gr>ex</gr><y>) {</y>
                // If refresh fails, reject the original error
                <p>return</p> <o>Promise</o><gr>.</gr><b>reject</b><p>(</p><gr>error</gr><p>)</p><gr>;</gr>
            <y>}</y>
        <b>}</b>
        // If the error is not a 401 or the retry failed, reject the original error
        <p>return</p> <o>Promise</o><gr>.</gr><b>reject(</b><gr>error</gr><b>)</b><gr>;</gr>
    <p>}</p>
<y>)</y><gr>;</gr>`)
                                }}>
                            </code>
                        </pre>
                    </div>
                    <h1 className="color-white m-black fs-30px mb-10px mt-50px">One last thing...</h1>
                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        Now add a small configuration in package.json, more specifically in the scripts section where we have to modify the "start" and "dev" key to start the local server with the <a className="color-golden-haze" href="HTTPs://en.wikipedia.org/wiki/HTTPS" target="_blank">HTTPS protocol</a>.
                        <br />
                        <br />
                        Why is that? Because the communication between the Frontend and the Backend must be done only using HTTPS protocol to enable the access of HTTP only cookies.
                    </p>
                    <div className="code-snippet">
                        <pre>
                            <code
                                dangerouslySetInnerHTML={{
                                    __html:
                                        colorizedCodeSnippet(`<r>"scripts":</r> <gr>{</gr>
  <r>"dev"</r><gr>:</gr> <g>"next dev --experimental-HTTPs"</g><gr>,</gr>
  <r>"start"</r><gr>:</gr> <g>"next start --experimental-HTTPs"</g>
  ...other configs
<gr>}</gr>`)
                                }}>
                            </code>
                        </pre>
                    </div>
                </div>
                <hr style={{ opacity: .3 }} className="my-50px" />
                <h1 className="color-white m-black fs-30px mb-10px">ASP.NET Core setup</h1>
            </div>
        </>
    )
}

export default BlogOne