import "./Pill.css";
import { PillType } from "./PillType";

const Pill = ({ children, className }: PillType) => {
    return (
        <div className={`pill ${className}`}>
            {children}
        </div>
    )
}

export default Pill;