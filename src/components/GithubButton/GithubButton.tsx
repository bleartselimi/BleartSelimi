import "./GithubButton.css";
import { Link } from "react-router-dom";
import { GithubButtonType } from "./GithubButtonType";

const GitHubButton = ({ children, to }: GithubButtonType) => {
    return (
        <Link to={to} className="github-button">
            {children}
        </Link>
    )
}

export default GitHubButton