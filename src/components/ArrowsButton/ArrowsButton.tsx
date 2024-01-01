import "./ArrowsButton.css";
import { ArrowsButtonType } from "./ArrowsButtonType";

const ArrowsButton = ({ text, onClick }: ArrowsButtonType) => {
    return (
        <div onClick={onClick} className="arrows-button s-extrabold"><span className="arrows-button-chevron arrows-button-chevron-one">&lt;</span> {text} <span className="arrows-button-chevron arrows-button-chevron-two">&gt;</span></div>
    )
}

export default ArrowsButton