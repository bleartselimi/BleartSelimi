import "./ArrowsButton.css";
import { ArrowsButtonType } from "./ArrowsButtonType";

const ArrowsButton = ({ text }: ArrowsButtonType) => {
    return (
        <div className="arrows-button s-black"><span>&lt;</span> {text} <span>&gt;</span></div>
    )
}

export default ArrowsButton