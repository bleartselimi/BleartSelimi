import "./Avatar.css";
import { AvatarType } from "./AvatarType"

const Avatar = ({ img }: AvatarType) => {
    return (
        <div className="avatar">
            <img src={img} alt="Bleart Selimi avatar profile picture" />
        </div>
    )
}

export default Avatar