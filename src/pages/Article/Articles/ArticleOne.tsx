import { useEffect, useRef } from "react";
import { useGeneralContext } from "../../../hooks/useGeneralContext";
import { ContentPanel } from "../../../widgets"
import "../Article.css";
import { InfoIcon } from "../../../assets";
import { Link } from "react-router-dom";
import ArticleCodeSnippet from "../ArticleCodeSnippet";

const ArticleOne = () => {

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
                    className='content-panel-space-one content-panel-article'
                    areaOne={
                        <h1 className='fs-36px color-white lh-100 text-shadow-white'>Securing JWT Tokens with HTTP-Only Cookies using Next.js and ASP.NET Core: A Defense Against XSS Attacks</h1>
                    }
                    areaThree={
                        <img src="https://images.unsplash.com/photo-1555529902-5261145633bf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    }
                />
                <div className="project-container" ref={projectContainer}>
                    <div className="article-info-wrapper">
                        <span className="color-silver m-semibold fs-18px mt-15px">July 12, 2024</span>
                        <span className="color-silver m-semibold fs-18px mt-15px">15 min read</span>
                    </div>

                    <h1 className="color-white m-black fs-30px mb-10px mt-50px">What is a JWT Token?</h1>

                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        A <a className="color-golden-haze underline" href="https://en.wikipedia.org/wiki/JSON_Web_Token" target="_blank">JWT token</a> is a form of authentication and authorization that is used in a variety of small, medium, and enterprise applications. This is achieved by generating a token from the issuer to the audience (e.g. the user attempting to authenticate). The JWT Token is encrypted using a secret key that must be stored in a place where only authorized parties can access it (e.g.  <a className="color-golden-haze underline" href="https://azure.microsoft.com/en-us/products/key-vault" target="_blank">Azure key vault</a>).
                    </p>

                    <h1 className="color-white m-black fs-30px mt-50px mb-10px">Storing the JWT Token</h1>
                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        The generated token must be used in subsequent API calls because it authorizes access to the data. In most of the cases where I have had the experience to see how this is handled, the Token is stored in <a className="color-golden-haze underline" href="https://www.geeksforgeeks.org/javascript-localstorage/" target="_blank">Localstorage</a>,  <a className="color-golden-haze underline" href="https://en.wikipedia.org/wiki/HTTP_cookie#Session_cookie" target="_blank">Cookies (not HTTP only)</a> and Session storage. All of these are valid places where Token can be stored, but they are vulnerable to <a className="color-golden-haze underline" href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank">XSS attacks</a>.
                    </p>

                    <p className="color-white m-medium fs-18px color-silver lh-150 mt-50px">
                        So in this article, we will see how to implement HTTP-only cookies using Next.js and ASP.NET Core to enhance the security of JWT tokens.
                    </p>
                    <hr style={{ opacity: .3 }} className="my-50px" />
                    <div className="important-box mb-20px mb-50px">
                        <InfoIcon /> <p>THE CODE I AM USING IN THIS ARTICLE IS FROM AN APPLICATION USING CLEAN ARCHITECTURE AND FOR THIS REASON SOME OF THE CODE IS NOT INCLUDED. FOR ANY QUESTIONS OR SUGGESTIONS, FEEL FREE TO WRITE ME VIA <Link className="m-semibold color-golden-haze underline fs-18px mr-7px" to="mailto: bleart.selimi@outlook.com">EMAIL</Link>OR <Link className="m-semibold color-golden-haze underline fs-18px mr-7px" to="https://www.linkedin.com/in/bleart-selimi-677338224/" target="_blank">LINKEDIN</Link></p>
                    </div>
                    <h1 className="color-white m-black fs-30px">Next.js setup (v14.2.3)</h1>
                    <p className="color-white m-medium fs-18px color-silver lh-150 mt-20px">Install Axios package</p>
                    <div className="important-box mb-20px mt-10px">
                        npm i axios
                    </div>
                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        We will be using <a className="color-golden-haze underline" href="https://axios-HTTP.com/docs/intro" target="_blank">Axios</a> for the HTTP client. For Axios, we need to configure a few things. First, we need to create a generic Axios instance that contains the configurations for the base URL, headers, and withCredentials.
                        <br />
                        <br />
                        The withCredentials property indicates whether cookies, authorization headers, and the TLS certificate should be sent in the request or not.
                    </p>
                    <ArticleCodeSnippet snippet={`<p>export const</p> <o>Axios</o> <b>=</b> <gr>axios.</gr><b>create</b><y>(</y><p>{</p>
    <r>baseURL:</r> <gr>process.</gr><r>env</r><gr>.</gr><o>NEXT_PUBLIC_API_BASE_URL</o><gr>,</gr>
    <r>headers:</r> <b>{</b>
        <g>"Content-Type"</g><b>:</b> <g>"application/json"</g>
    <b>}</b><gr>,</gr>
    <r>withCredentials:</r> <o>true</o>
<p>}</p><y>)</y><gr>;</gr>`} />
                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        After configuring some properties in the Axios client, we now need to configure the interceptors as well.
                        <br />
                        <br />
                        So why configure interceptors?
                        <br />
                        <br />
                        Through interceptors we can modify the request we send or the response we receive. We will focus mainly on the response interceptor. Here we will refresh the Token with a new Token after the old one expires. We know about the expiration of the old Token because the API returns the response code <a className="color-golden-haze underline" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401" target="_blank">401 (unauthorized).</a>
                        <br />
                        <br />
                        After the 401 is returned, we need to save the previous request, refresh the Token, and then retry the previously saved request.
                    </p>
                    <ArticleCodeSnippet snippet={`<gr>Axios.</gr><r>interceptors</r><gr>.</gr><r>request</r><gr>.</gr><b>use</b><y>(</y>
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
<y>)</y><gr>;</gr>`} />
                    <h1 className="color-white m-black fs-30px mb-10px mt-50px">One last thing...</h1>
                    <p className="color-white m-medium fs-18px color-silver lh-150">
                        Now add a small configuration in package.json, more specifically in the scripts section where we have to modify the "start" and "dev" key to start the local server with the <a className="color-golden-haze underline" href="https://en.wikipedia.org/wiki/HTTPS" target="_blank">HTTPS protocol</a>.
                        <br />
                        <br />
                        Why is that? Because the communication between the Frontend and the Backend must be done only using HTTPS protocol to enable the access of HTTP only cookies.
                    </p>
                    <ArticleCodeSnippet snippet={`<r>"scripts":</r> <gr>{</gr>
  <r>"dev"</r><gr>:</gr> <g>"next dev --experimental-https"</g><gr>,</gr>
  <r>"start"</r><gr>:</gr> <g>"next start --experimental-https"</g>
  ...other configs
<gr>}</gr>`} />
                </div>
                <hr style={{ opacity: .3 }} className="my-50px" />
                <h1 className="color-white m-black fs-30px">ASP.NET Core setup (v8.0)</h1>
                <p className="color-white m-medium fs-18px color-silver lh-150 mt-20px">Install JWT Bearer package</p>
                <div className="important-box mb-20px mt-10px">
                    NuGet Package - Microsoft.AspNetCore.Authentication.JwtBearer
                </div>
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    Once we've configured Next.js, we'll move on to the ASP.NET Core part. First, we'll edit appsettings.json to add the properties required for configuring the JWT token settings.
                    <br />
                    <br />
                    The generation of Secret Key can be done randomly in a long string that has lowercase letters, uppercase letters, numbers and special characters
                </p>
                <div className="important-box mb-20px mt-10px">
                    <InfoIcon />
                    The secret key should be at least 256 bits (32 bytes) since we are using HMAC SHA-256 (HS256) algorithm.
                </div>
                <ArticleCodeSnippet snippet={`<r>"JwtSettings"</r><gr>: {</gr>
  <r>"Issuer"</r><gr>:</gr> <g>"</g><b>https://localhost:44315</b><g>"</g><gr>,</gr> //The one that issues the token
  <r>"Audience"</r><gr>:</gr> <g>"</g><b>https://localhost:3000</b><g>"</g><gr>,</gr> //The ones that uses the issued token
  <r>"SecretKey"</r><gr>:</gr> <g>"your_secret_key_goes_here"</g><gr>,</gr> //The SecretKey should be saved in a key vault for security reasons
  <r>"AccessTokenExpirationMinutes"</r><gr>:</gr> <o>15</o><gr>,</gr>
  <r>"RefreshTokenExpirationDays"</r><gr>:</gr> <o>7</o>
<gr>}</gr>`} />
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    Now we will add the configurations for JWT in a seperate file, in our case JwtConfig.cs, and we will explain some parts of the configuration.
                </p>
                <ul className="color-white m-medium fs-18px color-silver lh-150">
                    <li>
                        <br />
                        &bull; Default Schemes
                        <br />
                        Everything set as default for authentication will be replaced with JwtDefaults defaults after applying the configurations.
                    </li>
                    <li>
                        <br />
                        &bull; ValidIssuer
                        <br />
                        Issuer validation is the party that issues the Token for authorization.
                    </li>
                    <li>
                        <br />
                        &bull; ValidAudience
                        <br />
                        Audience validation is the recipient or figuratively the consumer of the Token that is expected to be used.
                    </li>
                    <li>
                        <br />
                        &bull; IssuerSigningKey
                        <br />
                        Issuer signing key will help specify the key with which we will verify the token, in our case it is the secret key we added above in appsettings.json.
                    </li>
                    <li>
                        <br />
                        &bull; ValidateIssuer
                        <br />
                        Issuer validation is used to validate whether the request is coming from a secure and trusted source, e.g. "https://bleartselimi.com".
                    </li>
                    <li>
                        <br />
                        &bull; ValidateAudience
                        <br />
                        Audience validation ensures that the token is intended for use in our app, e.g. "https://myapi.example.com".
                    </li>
                    <li>
                        <br />
                        &bull; ValidateLifetime
                        <br />
                        Lifetime validation takes into account checking the expiration time of the Token whether it should be checked or not.
                    </li>
                    <li>
                        <br />
                        &bull; ValidateIssuerSigningKey
                        <br />
                        ValidateIssuerSigningKey can also be considered the most important JWT configuration since we tell our application through this property that the token must be validated through its key, which in our case is the SecretKey of appsettings.json mentioned above.
                    </li>
                    <li>
                        <br />
                        &bull; ClockSkew
                        <br />
                        The ClockSkew property in the TokenValidationParameters class allows for a small clock offset between the token issuer and the consumer. This accounts for small time differences between systems, preventing valid arguments from being mistakenly rejected as expired or invalid.

                        By default, ClockSkew is set to 5 minutes, allowing for a 5 minute difference between token expiration (exp) and non-expiration (nbf) claims and the actual server time. A value that is preferred to be set is between 5-30s as seen in the implementation below.

                        For more on this property, watch <a className="color-golden-haze underline" href="https://www.youtube.com/watch?v=meBxWjA_2YY&ab_channel=NickChapsas" target="_blank">this detailed video</a> for more information by Nick Chapsas.
                    </li>
                </ul>
                <ArticleCodeSnippet snippet={`<p>using</p> <o>Microsoft</o><b>.</b><o>AspNetCore</o><b>.</b><o>Authentication</o><b>.</b><o>JwtBearer</o>;
                                        
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
                <gr>ValidIssuer</gr> <b>=</b> <r>configuration</r><b>.GetValue</b><gr><</gr><p>string</p><gr>></gr><gr>(</gr><g>"Issuer"</g><gr>),</gr>
                <gr>ValidAudience</gr> <b>=</b> <r>configuration</r><b>.GetValue</b><gr><</gr><p>string</p><gr>></gr><gr>(</gr><g>"Audience"</g><gr>),</gr>
                <gr>IssuerSigningKey</gr> <b>=</b> <p>new</p> <o>SymmetricSecurityKey</o><gr>(</gr><o>Encoding</o><b>.</b><gr>UTF8</gr><b>.GetBytes</b><gr>(</gr><r>configuration</r><b>.GetValue</b><gr><</gr><p>string</p><gr>></gr><gr>(</gr><g>"SecretKey"</g><gr>)</gr><b>!</b><gr>)),</gr>
                <gr>ValidateIssuer</gr> <b>=</b> <p>true</p><gr>,</gr>
                <gr>ValidateAudience</gr> <b>=</b> <p>true</p><gr>,</gr>
                <gr>ValidateLifetime</gr> <b>=</b> <p>true</p><gr>,</gr>
                <gr>ValidateIssuerSigningKey</gr> <b>=</b> <p>true</p><gr>,</gr>
                <gr>ClockSkew</gr> <b>=</b> <o>TimeSpan</o><b>.FromSeconds</b><gr>(</gr><o>5</o><gr>)</gr> //the default value is 5 min, and we dont want that since the expired token can still be valid even after 5 min, so we set it to only at 5 seconds since any network synchronized machine which all of them should be, are on the same time.
            <gr>};</gr>
        <gr>});</gr>
    <gr>}</gr>
<gr>}</gr>`} />
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    Inject services and middlewares in Program.cs.
                </p>
                <ArticleCodeSnippet snippet={`<gr><r>builder</r><b>.</b>Services<b>.JwtConfigurations</b>(<r>builder</r><b>.</b>Configuration<b>.GetSection</b>(<g>"JwtSettings"</g>));</gr>`} />
                <ArticleCodeSnippet snippet={`<gr><r>builder</r><b>.</b>Services<b>.</b><b>AddAuthorization</b>();</gr>`} />
                <ArticleCodeSnippet snippet={`<gr><r>builder</r><b>.</b>Services<b>.</b><b>AddHttpContextAccessor</b>();</gr>`} />
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    The correct order is UseAuthentication first and then UseAuthorization second.
                </p>
                <ArticleCodeSnippet snippet={`<gr><r>app</r><b>.</b><b>UseAuthentication</b>();

<r>app</r><b>.</b><b>UseAuthorization</b>();`} />
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    The next thing we need to do is to create a middleware that intercepts the request to the api so we can take the token that we have in HTTP Only Cookies and put it in the Authorization header. We'll do that in the RequestMiddleware.cs file.
                </p>
                <ArticleCodeSnippet snippet={`<p>using</p> <o>System<b>.</b>Net<gr>;</gr></o>
<p>using</p> <o>UserManagement<b>.</b>Domain<b>.</b>Enums<gr>;</gr></o>
<p>using</p> <o>UserManagement<b>.</b>Domain<b>.</b>Interfaces<b>.</b>Jwt<gr>;</gr></o>

<p>public class</p> <o>RequestMiddleware<gr>(</gr>RequestDelegate <r>next</r><gr>,</gr> IDomainJwtService <r>iDomainJwtService</r><gr>)</gr></o>
<gr>{</gr>
    <p>private readonly</p> <o>RequestDelegate</o> <gr>_next</gr> <b>=</b> <r>next</r><gr>;</gr>
    <p>private readonly</p> <o>IDomainJwtService</o> <gr>_iDomainJwtService</gr> <b>=</b> <r>iDomainJwtService</r><gr>;</gr>

    <p>public async</p> <o>Task</o> <b>Invoke</b><gr>(</gr><o>HttpContext</o> <r>context</r><gr>)</gr>
    <gr>{</gr>
        <p>if</p> <gr>(</gr><b>!</b><r>context</r><b>.</b><gr>Request<b>.</b>Headers</gr><b>.ContainsKey</b><gr>(</gr><g>"Authorization"</g><gr>))</gr>
        <gr>{</gr>
            <p>if</p> <gr>(<r>context</r><b>.<gr>Request</gr>.<gr>Cookies</gr>.TryGetValue</b>(<g>"AccessToken"</g><gr>,</gr> <p>out string</p><b>?</b> <r>jwt</r>))</gr>
            <gr>{</gr>
                <p>if</p> <gr>(_iDomainJwtService<b>.VerifyToken</b>(<r>jwt</r>, <o>TokenTypeEnum</o><b>.</b>AccessToken))</gr>
                    <gr><r>context</r><b>.</b>Request<b>.</b>Headers<b>.Append</b>(<g>"Authorization"</g>, <g>$"Bearer <gr>{</gr><r>jwt</r><gr>}</gr>"</g>);</gr>
                <p>else</p>
                <gr>{</gr>
                    <gr><r>context</r><b>.</b>Response<b>.</b>Cookies<b>.Delete</b>(<g>"AccessToken"</g>);</gr>
                    <gr><r>context</r><b>.</b>Response<b>.</b>StatusCode <b>=</b> (<p>int</p>)<o>HttpStatusCode</o><b>.</b>Unauthorized;</gr>
                    <p>return</p><gr>;</gr>
                <gr>}</gr>
            <gr>}</gr>
        <gr>}</gr>
        <gr><p>await</p> _next(<r>context</r>);</gr>
    <gr>}</gr>
<gr>}</gr>`} />
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    Inject middleware before app.UseAuthentication() in Program.cs.
                </p>
                <ArticleCodeSnippet snippet={`<gr><r>app</r><b>.UseMiddleware</b><<o>RequestMiddleware</o>>();</gr>
...the rest of request pipeline`} />
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    For our next steps, we need to create two functions, one that generates Tokens (Access and Refresh) based on the properties that we pass, and one function that refreshes the Token. But first let's create a User Token DTO, Claim Model and Token Enum since we need them beforehand.
                </p>
                <ArticleCodeSnippet snippet={`<gr><p>public class</p> <o>UserTokenDto</o>
{
    <p>public required</p> <o>Guid</o> UserId { <p>get<gr>;</gr> set<gr>;</gr></p> }
    <p>public required string</p> FirstName { <p>get<gr>;</gr> set<gr>;</gr></p> }
    <p>public required string</p> LastName { <p>get<gr>;</gr> set<gr>;</gr></p> }
    <p>public required string</p> Email { <p>get<gr>;</gr> set<gr>;</gr></p> }
    <p>public string</p><b>?</b> CookieName { <p>get<gr>;</gr> set<gr>;</gr></p> }
    <p>public</p> <o>DateTime</o><b>?</b> TokenExpirationDate { <p>get<gr>;</gr> set<gr>;</gr></p> }
    <p>public</p> <o>List</o><<o>UserTokenClaim</o>><b>?</b> Claims { <p>get<gr>;</gr> set<gr>;</gr></p> }
    <p>public</p> <o>TokenTypeEnum</o><b>?</b> TokenType { <p>get<gr>;</gr> set<gr>;</gr></p> }
}

<p>public class</p> <o>UserTokenClaim</o>
{
    <p>public required string</p> ClaimKey { <p>get<gr>;</gr> set<gr>;</gr></p> }
    <p>public required string</p> ClaimValue { <p>get<gr>;</gr> set<gr>;</gr></p> }
}

<p>public enum</p> <o>TokenTypeEnum</o>
{
    AccessToken <b>=</b> <o>0</o>,
    RefreshToken <b>=</b> <o>1</o>,
    ResetPassword <b>=</b> <o>2</o>
}</gr>`} />
                <ArticleCodeSnippet snippet={`<gr><p>public string</p> <b>GenerateJwtToken</b>(<o>UserTokenDto</o> <r>user</r>)
{
    <p>try</p>
    {
        <p>if</p> (<r>user</r><b>.</b>TokenExpirationDate <p>is not null</p>)
        {
            <o>JwtSecurityTokenHandler</o> <r>tokenHandler</r> = <p>new</p>();
            <p>byte</p>[] <r>key</r> = <o>Encoding</o><b>.</b>UTF8<b>.GetBytes</b>(<r>configuration</r><b>.GetSection</b>(<g>"JwtSettings:SecretKey"</g>)<b>.</b>Value<b>!</b>);

            <o>List</o><<o>Claim</o>> <r>claims</r> <b>=</b> [
                <p>new</p>(<o>JwtRegisteredClaimNames</o>.Jti, <o>Guid</o><b>.NewGuid</b>()<b>.ToString</b>()),
                <p>new</p>(<o>JwtRegisteredClaimNames</o>.Sub, <r>user</r>.Email),
                <p>new</p>(<o>JwtRegisteredClaimNames</o>.Email, <r>user</r>.Email),
                <p>new</p>(<g>"UserId"</g>, <r>user</r>.UserId<b>.ToString</b>()),
                <p>new</p>(<g>"FirstName"</g>, <r>user</r>.FirstName),
                <p>new</p>(<g>"LastName"</g>, <r>user</r>.LastName),
                <p>new</p>(<g>"TokenType"</g>, <r>user</r>.TokenType<b>.ToString</b>()<b>!</b>),
            ];

            <lgr>// Add aditional custom claims</lgr>
            <p>if</p> (<r>user</r>.Claims <p>is not null</p>)
                <p>foreach</p> (<p>var</p> <r>claim</r> <p>in</p> <r>user</r><b>.</b>Claims)
                    <r>claims</r><b>.Add</b>(<p>new</p> <o>Claim</o>(<r>claim</r><b>.</b>ClaimKey, <r>claim</r><b>.</b>ClaimValue));

            <o>SecurityTokenDescriptor</o> <r>tokenDescriptor</r> <b>=</b> <p>new</p>()
            {
                Issuer = <r>configuration</r>[<g>"JwtSettings:Issuer"</g>],
                Audience = <r>configuration</r>[<g>"JwtSettings:Audience"</g>],
                Subject = <p>new</p> <o>ClaimsIdentity</o>(<r>claims</r>),
                Expires = <r>user</r><b>.</b>TokenExpirationDate,
                SigningCredentials = <p>new</p> <o>SigningCredentials</o>(<p>new</p> <o>SymmetricSecurityKey</o>(<r>key</r>), <o>SecurityAlgorithms</o><b>.</b>HmacSha256Signature),
            };

            <p>string</p> <r>token</r> <b>=</b> <r>tokenHandler</r><b>.WriteToken</b>(<r>tokenHandler</r><b>.CreateToken</b>(<r>tokenDescriptor</r>));

            <p>return</p> <r>token</r>;
        }
        <p>else throw new</p> <o>Exception</o>(<g>"TokenExpirationDate is null!"</g>);
    }
    <p>catch</p> (<o>Exception</o> <r>ex</r>)
    {
        <p>throw new</p> <o>Exception</o>(<g>"Failed to generate token!"</g>);
    }
}</gr>`} />
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    Another function that will come into play is the verification of the Token whether it is valid or not. We will do this by checking the token type enum (AccessToken or RefreshToken) and ValidTo.
                </p>
                <ArticleCodeSnippet snippet={`<gr><p>public bool</p> <b>VerifyToken</b>(<p>string</p> <r>token</r>, <o>TokenTypeEnum</o> <r>type</r>)
{
    <o>JwtSecurityTokenHandler</o> <r>tokenHandler</r> <b>=</b> <p>new</p>();
    <p>byte</p>[] <r>key</r> <b>=</b> <o>Encoding</o><b>.</b>UTF8<b>.GetBytes</b>(<r>configuration</r>[<g>"JwtSettings:SecretKey"</g>]<b>!</b>);

    <p>try</p>
    {
        <r>tokenHandler</r><b>.ValidateToken</b>(<r>token</r>, <p>new</p> <o>TokenValidationParameters</o>
        {
            ValidateIssuer = <p>true</p>,
            ValidateAudience = <p>true</p>,
            ValidateLifetime = <p>true</p>,
            ValidateIssuerSigningKey = <p>true</p>,
            ValidIssuer = <r>configuration</r>[<g>"JwtSettings:Issuer"</g>],
            ValidAudience = <r>configuration</r>[<g>"JwtSettings:Audience"</g>],
            IssuerSigningKey = <p>new</p> <o>SymmetricSecurityKey</o>(<r>key</r>)
        }, out SecurityToken validatedToken);

        <o>JwtSecurityToken</o> <r>jwtSecurityToken</r> <p>=</p> (<o>JwtSecurityToken</o>)<r>validatedToken</r>;
        <p>string</p> <r>tokenType</r> <b>=</b> <r>jwtSecurityToken</r><b>.</b>Claims<b>.FirstOrDefault</b>(<r>x</r> <b>=></b> <r>x</r><b>.</b>Type <b>==</b> <g>"TokenType"</g>)<b>?.</b>Value<b>!</b>;

        <p>return</p> <r>tokenType</r> == <r>type</r><b>.ToString</b>() <b>&&</b> <r>jwtSecurityToken</r><b>.</b>ValidTo <b>></b> <o>DateTime</o><b>.</b>UtcNow;
    }
    <p>catch</p> (<o>Exception</o> <r>ex</r>)
    {
        <p>return false</p>;
    }
}</gr>`} />
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    And now, let's create the RefreshToken function. Here, we access MySQL database through a call to the stored procedure where we get the user's information to update the new claims data of the JWT token. You can change and manage this part by adapting it to your current infrastructure.
                    <br />
                    <br />
                    In this implementation, we save the refresh token together with the access token in HTTP-only cookies. However, it is preferable to store the refresh token in the database. Every time we try to refresh the token, we validate the token from the database to create a new access token.
                </p>
                <ArticleCodeSnippet snippet={`<gr><p>public async</p> <o>Task</o><<o>ApiResponse</o><<p>object</p>>> <b>RefreshToken</b>()
{
    <p>try</p>
    {
        <r>_httpContextAccessor</r><b>.</b>HttpContext<b>!.</b>Request<b>.</b>Cookies<b>.TryGetValue</b>(<g>"RefreshToken"</g>, <p>out string</p><b>?</b> <r>token</r>);
        <p>if</p> (<r>token</r> <p>is not null</p> <b>&& VerifyToken</b>(<r>token</r>, <o>TokenTypeEnum</o><b>.</b>RefreshToken))
        {
            <o>JwtSecurityToken</o> <r>jwtSecurityToken</r> <b>=</b> <p>new</p> <o>JwtSecurityTokenHandler</o>()<b>.ReadJwtToken</b>(<r>token</r>);

            <p>using var</p> <r>connection</r> <b>=</b> <r>_mySqlDatabaseService</r><b>.CreateConnection</b>();
            connection.Open();

            <p>using var</p> <r>command</r> = <p>new</p> <o>MySqlCommand</o>(<g>"user_get_authenticated_user"</g>, (<o>MySqlConnection</o>)<r>connection</r>);

            <r>command</r><b>.</b>CommandType = <o>CommandType</o><b>.</b>StoredProcedure;
            <r>command</r><b>.</b>Parameters<b>.AddWithValue</b>("<g>@p_user_id</g>", <r>jwtSecurityToken</r><b>.</b>Claims<b>.First</b>(<r>x</r> <b>=></b> <r>x</r><b>.</b>Type <b>==</b> <g>"UserId"</g>)<b>.</b>Value);

            <p>using var</p> <r>reader</r> <b>=</b> <p>await</p> <r>command</r><b>.ExecuteReaderAsync</b>();
            <p>if</p> (<p>await</p> <r>reader</r><b>.ReadAsync</b>())
            {
                <o>UserDto</o> <r>response</r> <b>=</b> <o>JsonConvert</o><b>.DeserializeObject</b><<o>UserDto</o>>((<p>string</p>)<r>reader</r>[<g>"user_details"</g>])<b>!</b>;

                <o>UserTokenDto</o> <r>newAccessTokenDto</r> = new()
                {
                    UserId <b>=</b> <r>response</r><b>.</b>UserId,
                    Email <b>=</b> <r>response</r>.Emails<b>.FirstOrDefault</b>(<r>x</r> <b>=></b> <r>x</r><b>.</b>IsPrimaryEmail)<b>!.</b>Email,
                    FirstName <b>=</b> <r>response</r>.FirstName,
                    LastName <b>=</b> <r>response</r>.LastName,
                    CookieName <b>=</b> <g>"AccessToken"</g>,
                    TokenExpirationDate = <o>DateTime</o><b>.</b>UtcNow<b>.AddMinutes</b>(<p>int</p><b>.Parse</b>(<r>configuration</r>[<g>"JwtSettings:AccessTokenExpirationMinutes"</g>]<b>!</b>)),
                    TokenType = <o>TokenTypeEnum</o><b>.</b>AccessToken
                };

               <o>UserTokenDto</o> <r>newRefreshTokenDto</r> = new()
                {
                    UserId <b>=</b> <r>response</r><b>.</b>UserId,
                    Email <b>=</b> <r>response</r>.Emails<b>.FirstOrDefault</b>(<r>x</r> <b>=></b> <r>x</r><b>.</b>IsPrimaryEmail)<b>!.</b>Email,
                    FirstName <b>=</b> <r>response</r>.FirstName,
                    LastName <b>=</b> <r>response</r>.LastName,
                    CookieName = <g>"RefreshToken"</g>,
                    TokenExpirationDate = <o>DateTime</o><b>.</b>UtcNow<b>.AddDays</b>(<p>int</p><b>.Parse</b>(<r>configuration</r>[<g>"JwtSettings:RefreshTokenExpirationDays"</g>]<b>!</b>)),
                    TokenType = <o>TokenTypeEnum</o><b>.</b>RefreshToken
                };

                <p>string</p> <r>newAccessToken</r> <b>= GenerateJwtToken</b>(<r>newAccessTokenDto</r>);
                <p>string</p> <r>newRefreshToken</r> <b>= GenerateJwtToken</b>(<r>newRefreshTokenDto</r>);

                <b>SetTokenCookies</b>(<r>newAccessTokenDto</r><b>.</b>CookieName, <r>newAccessToken</r>, <r>newAccessTokenDto</r><b>.</b>TokenExpirationDate);
                <b>SetTokenCookies</b>(<r>newRefreshTokenDto</r><b>.</b>CookieName, <r>newRefreshToken</r>, <r>newRefreshTokenDto</r><b>.</b>TokenExpirationDate);

                <p>return new</p> <o>ApiResponse</o><<p>object</p>>(<o>HttpStatusCode</o><b>.</b>OK, <p>true</p>, <g>"Token refreshed successfully."</g>);
            }
            <p>else throw new</p> <o>Exception</o>(<g>""</g>);
        }
         <p>else throw new</p> <o>ApiResponse</o><<p>object</p>>(<o>HttpStatusCode</o><b>.</b>BadRequest, <p>false</p>, <g>"Failed to refresh token!"</g>);
    }
    <p>catch</p> (<o>Exception</o> <r>ex</r>)
    {
        <p>throw new</p> <o>Exception</o>(<g>"Failed to refresh token!"</g>);
    }
}</gr>`} />
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    Now let's create a function that sets Access and Refresh Tokens in the response that we access through the injected dependency _httpContextAccessor (IHttpContextAccessor).
                </p>
                <ArticleCodeSnippet snippet={`<gr><p>public void</p> <b>SetTokenCookies</b>(<p>string</p> <r>cookieName</r>, <p>string</p> <r>token</r>, <o>DateTime</o><b>?</b> <r>expires</r>)
{
    <p>try</p>
    {
        <o>CookieOptions</o> <r>cookieOptions</r> <b>=</b> <p>new</p>()
        {
            HttpOnly <b>=</b> <p>true</p>,
            Secure <b>=</b> <p>true</p>,
            SameSite <b>=</b> <o>SameSiteMode</o><b>.</b>Strict,
            Expires <b>=</b> <r>expires</r>
        };

        <r>_httpContextAccessor</r><b>.</b>HttpContext<b>!.</b>Response<b>.</b>Cookies<b>.Append</b>(<r>cookieName</r>, <r>token</r>, <r>cookieOptions</r>);
    }
    <p>catch</p> (<o>Exception</o> <r>ex</r>)
    {
        <p>throw new</p> <o>Exception</o>(<g>"Failed to set token on cookies!"</g>);
    }
}</gr>`} />
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    After we add everything, we will see an example of the implementation, more precisely, at sign-in.
                    <br />
                    <br />
                    Here we will create a Dto for the user who is signed in (we get the data from database).
                </p>
                <ArticleCodeSnippet snippet={`<gr><o>UserSignedInDto</o> <r>result</r> <b>=</b> <p>new</p>()
{
    UserId = (<o>Guid</o>)<r>reader</r>[<g>"user_id"</g>],
    Email = (<p>string</p>)<r>reader</r>[<g>"email"</g>],
    FirstName = (<p>string</p>)<r>reader</r>[<g>"first_name"</g>],
    LastName = (<p>string</p>)<r>reader</r>[<g>"last_name"</g>]
};</gr>`} />
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    After that, we will create a DTO for AccessToken and one for RefreshToken because we need to define their contents.
                </p>
                <ArticleCodeSnippet snippet={`<gr><p>var</p> <r>accessTokenUserDto</r> = <p>new</p> <o>UserTokenDto</o>()
{
    UserId = <r>result</r><b>.</b>UserId,
    Email = <r>result</r><b>.</b>Email,
    FirstName = <r>result</r><b>.</b>FirstName,
    LastName = <r>result</r><b>.</b>LastName,
    CookieName = <g>"AccessToken"</g>,
    TokenExpirationDate = <o>DateTime</o><b>.</b>UtcNow<b>.AddMinutes</b>(<p>int</p><b>.Parse</b>(<r>configuration</r>[<g>"JwtSettings:AccessTokenExpirationMinutes"</g>]<b>!</b>)),
    TokenType = <o>TokenTypeEnum</o><b>.</b>AccessToken
};

<p>var</p> <r>refreshTokenUserDto</r> = new UserTokenDto()
{
    UserId = <r>result</r><b>.</b>UserId,
    Email = <r>result</r><b>.</b>Email,
    FirstName = <r>result</r><b>.</b>FirstName,
    LastName = <r>result</r><b>.</b>LastName,
    CookieName =  <g>"RefreshToken"</g>,
    TokenExpirationDate = <o>DateTime</o><b>.</b>UtcNow<b>.AddDays</b>(<p>int</p><b>.Parse</b>(<r>configuration</r>[<g>"JwtSettings:RefreshTokenExpirationDays"</g>]<b>!</b>)),
    TokenType = <o>TokenTypeEnum</o><b>.</b>RefreshToken
};</gr>`} />
                <p className="color-white m-medium fs-18px color-silver lh-150">
                    Based on the created token DTOs, we will create the Access and Refresh tokens and set them in HTTP Only Cookies.
                </p>
                <ArticleCodeSnippet snippet={`<gr><p>string</p> <r>accessToken</r> = <r>iDomainJwtService</r><b>.GenerateJwtToken</b>(<r>accessTokenUserDto</r>);
<p>string</p> <r>refreshToken</r> = <r>iDomainJwtService</r><b>.GenerateJwtToken</b>(<r>refreshTokenUserDto</r>);

<r>iDomainJwtService</r><b>.SetTokenCookies</b>(<r>accessTokenUserDto</r><b>.</b>CookieName, <r>accessToken</r>, <r>accessTokenUserDto</r><b>.</b>TokenExpirationDate);
<r>iDomainJwtService</r><b>.SetTokenCookies</b>(<r>refreshTokenUserDto</r><b>.</b>CookieName, <r>refreshToken</r>, <r>refreshTokenUserDto</r><b>.</b>TokenExpirationDate);</gr>`} />
                <hr style={{ opacity: .3 }} className="my-50px" />
                <h1 className="color-white m-black fs-30px mt-50px">Thanks a Bunch 👏</h1>
                <p className="color-white m-medium fs-18px color-silver lh-150 mt-10px">
                    Thanks for sticking around and reading this article! If you have any questions or suggestions, write me on <Link className="m-semibold color-golden-haze underline fs-18px mr-7px" to="https://www.linkedin.com/in/bleart-selimi-677338224/" target="_blank">LinkedIn</Link>or email me at <Link className="m-semibold color-golden-haze underline fs-18px mr-7px" to="mailto: bleart.selimi@outlook.com">bleart.selimi@outlook.com</Link>
                </p>
            </div>
        </>
    )
}

export default ArticleOne