import "./EmailButton.css";
import { Link } from "react-router-dom";
import { EmailButtonType } from "./EmailButtonType";

const GitHubButton = ({ children, to }: EmailButtonType) => {
    return (
        <Link to={to} className="email-button">
            {children}
        </Link>
    )
}

export default GitHubButton