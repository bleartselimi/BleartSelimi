import "./ArrowsButton.css";
import { ArrowsButtonType } from "./ArrowsButtonType";

const ArrowsButton = ({ text }: ArrowsButtonType) => {
    return (
        <div className="arrows-button s-extrabold"><span>&lt;</span> {text} <span>&gt;</span></div>
    )
}

export default ArrowsButton