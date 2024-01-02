import "./ArrowsButton.css";
import { ArrowsButtonType } from "./ArrowsButtonType";

const ArrowsButton = ({ text, onClick }: ArrowsButtonType) => {
    return (
        <button onClick={onClick} className="arrows-button s-black"><span className="arrows-button-chevron arrows-button-chevron-one">&lt;</span> {text} <span className="arrows-button-chevron arrows-button-chevron-two">&gt;</span></button>
    )
}

export default ArrowsButton