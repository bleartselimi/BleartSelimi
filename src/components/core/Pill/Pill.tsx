import "./Pill.css";
import { PillType } from "./PillType";

const Pill = ({ children }: PillType) => {
    return (
        <div className="pill">
            {children}
        </div>
    )
}

export default Pill;