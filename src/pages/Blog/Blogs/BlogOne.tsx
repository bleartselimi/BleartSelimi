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
                    <h1 className="color-white m-black fs-30px">Next.js setup (v14.2.3)</h1>
                    <p className="color-white m-medium fs-18px color-silver lh-150 mt-20px">Install Axios package</p>
                    <div className="important-box mb-20px mt-10px">
                        npm i axios
                    </div>
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
                <h1 className="color-white m-black fs-30px">ASP.NET Core setup (v8.0)</h1>
                <p className="color-white m-medium fs-18px color-silver lh-150 mt-20px">Install JWT Bearer package</p>
                <div className="important-box mb-20px mt-10px">
                    NuGet Package - Microsoft.AspNetCore.Authentication.JwtBearer
                </div>
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    Once we've configured Next.js, we'll move on to the ASP.NET Core part. The first thing we'll do is edit appsettings.json where we'll add some properties we'll need to configure the JWT Token settings.
                    <br />
                    <br />
                    The generation of Secret Key can be done randomly in a long string that has lowercase letters, uppercase letters, numbers and special characters
                </p>
                <div className="code-snippet">
                    <pre>
                        <code
                            dangerouslySetInnerHTML={{
                                __html:
                                    colorizedCodeSnippet(`<r>"JwtSettings"</r><gr>: {</gr>
  <r>"Issuer"</r><gr>:</gr> <g>"</g><b>https://localhost:44315</b><g>"</g><gr>,</gr> //The one that issues the token
  <r>"Audience"</r><gr>:</gr> <g>"</g><b>https://localhost:3000</b><g>"</g><gr>,</gr> //The ones that uses the issued token
  <r>"SecretKey"</r><gr>:</gr> <g>"your_secret_key_goes_here"</g><gr>,</gr> //The SecretKey should be saved in a key vault for security reasons
  <r>"AccessTokenExpirationMinutes"</r><gr>:</gr> <o>15</o><gr>,</gr>
  <r>"RefreshTokenExpirationDays"</r><gr>:</gr> <o>7</o>
<gr>}</gr>`)
                            }}>
                        </code>
                    </pre>
                </div>
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    Now we will add the configurations for JWT in a seperated file, in our case JwtConfig.cs, and we will explain some parts of the configuration.
                    <ul>
                        <li>
                            <br />
                            | Defaul Schemes |
                            <br />
                            Everything set as default for authentication will be replaced with JwtDefaults defaults after applying the configurations
                        </li>
                        <li>
                            <br />
                            | ValidIssuer |
                            <br />
                            ValidIssuer is the party that issues the Token for authentication
                        </li>
                        <li>
                            <br />
                            | ValidAudience |
                            <br />
                            ValidAudience is the recipient or figuratively the consumer of the Token that is expected to be used
                        </li>
                        <li>
                            <br />
                            | IssuerSigningKey |
                            <br />
                            IssuerSigningKey will help specify the key with which we will verify the token, in our case it is the secret key we added above in appsettings.json
                        </li>
                    </ul>
                </p>
                <div className="code-snippet">
                    <pre>
                        <code
                            dangerouslySetInnerHTML={{
                                __html:
                                    colorizedCodeSnippet(`<p>using</p> <o>Microsoft</o><b>.</b><o>AspNetCore</o><b>.</b><o>Authentication</o><b>.</b><o>JwtBearer</o>;
                                        
<p>public static class</p> <o>JwtConfig</o>
<gr>{</gr>
    <p>public static void</p> <b>JwtConfigurations</b><gr>(</gr><p>this</p> <o>IServiceCollection</o> <r>services</r><gr>,</gr> <o>IConfiguration</o> <r>configuration</r><gr>)</gr>
    <gr>{</gr>
        <r>services</r><b>.AddAuthentication</b><gr>(</gr><r>x</r> <b>=></b>
        <gr>{</gr>
            <r>x</r><b>.</b><gr>DefaultAuthenticateScheme</gr> <b>=</b> <o>JwtBearerDefaults</o><b>.</b><gr>AuthenticationScheme;</gr>
            <r>x</r><b>.</b><gr>DefaultChallengeScheme</gr> <b>=</b> <o>JwtBearerDefaults</o><b>.</b><gr>AuthenticationScheme;</gr>
            <r>x</r><b>.</b><gr>DefaultScheme</gr> <b>=</b> <o>JwtBearerDefaults</o><b>.</b><gr>AuthenticationScheme;
        })</gr><b>.AddJwtBearer</b><gr>(</gr><r>x</r> <b>=></b>
        <gr>{</gr>
            <r>x</r><b>.</b><gr>TokenValidationParameters</gr> <b>=</b> <p>new</p> <o>TokenValidationParameters</o>
            <gr>{</gr>
                <gr>ValidIssuer</gr> <b>=</b> <r>configuration</r><b>.GetValue</b><string><gr>(</gr><g>"Issuer"</g><gr>),</gr>
                <gr>ValidAudience</gr> <b>=</b> <r>configuration</r><b>.GetValue</b><string><gr>(</gr><g>"Audience"</g><gr>),</gr>
                <gr>IssuerSigningKey</gr> <b>=</b> <p>new</p> <o>SymmetricSecurityKey</o><gr>(</gr><o>Encoding</o><b>.</b><gr>UTF8</gr><b>.GetBytes</b><gr>(</gr><r>configuration</r><b>.GetValue</b><gr><</gr><p>string</p><gr>></gr><gr>(</gr><g>"SecretKey"</g><gr>)</gr><b>!</b><gr>)),</gr>
                <gr>ValidateIssuer</gr> <b>=</b> <p>true</p><gr>,</gr>
                <gr>ValidateAudience</gr> <b>=</b> <p>true</p><gr>,</gr>
                <gr>ValidateLifetime</gr> <b>=</b> <p>true</p><gr>,</gr>
                <gr>ValidateIssuerSigningKey</gr> <b>=</b> <p>true</p><gr>,</gr>
                <gr>ClockSkew</gr> <b>=</b> <o>TimeSpan</o><b>.FromSeconds</b><gr>(</gr><o>5</o><gr>)</gr> //the default value is 5 min, and we dont want that since the expired token can still be valid even after 5 min, so we set it to only at 5 seconds since any network synchronized machine which all of them should be, are on the same time.
            <gr>};</gr>
        <gr>});</gr>
    <gr>}</gr>
<gr>}</gr>`)
                            }}>
                        </code>
                    </pre>
                </div>
            </div>
        </>
    )
}

export default BlogOne