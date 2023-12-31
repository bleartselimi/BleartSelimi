import "./ArrowsButton.css";
import { ArrowsButtonType } from "./ArrowsButtonType";

const ArrowsButton = ({ text, onClick }: ArrowsButtonType) => {
    return (
        <div onClick={onClick} className="arrows-button s-extrabold"><span>&lt;</span> {text} <span>&gt;</span></div>
    )
}

export default ArrowsButton