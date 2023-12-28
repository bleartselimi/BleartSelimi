import { IconsType } from "./IconsType";

export const MenuIcon = ({ width = 20, height = 20, className, onClick, fill = "#ffffff" }: IconsType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            width={width}
            height={height}
            className={className}
            onClick={onClick}
        >
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M0 8h20V5H0v3zM0 16h13v-3H0v3z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export const ArrowTopRightIcon = ({ width = 24, height = 24, className, onClick, fill = "#DBC282" }: IconsType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            className={className}
            onClick={onClick}
        >
            <path
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 17L17 7M7 7h10v10"
            ></path>
        </svg>
    );
}

export const ArrowRightIcon = ({ width = 24, height = 24, className, onClick, fill = "#DBC282" }: IconsType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            className={className}
            onClick={onClick}
        >
            <path
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            ></path>
            <path
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 16l4-4-4-4M8 12h8"
            ></path>
        </svg>
    );
}

export const GithubIcon = ({ width = 20, height = 20, className, onClick, fill = "#ffffff" }: IconsType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            width={width}
            height={height}
            className={className}
            onClick={onClick}
        >
            <g clipPath="url(#clip0_256_467)">
                <path
                    stroke={fill}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.667"
                    d="M7.5 15.833c-4.167 1.25-4.167-2.083-5.834-2.5m11.667 5v-3.225a2.809 2.809 0 00-.784-2.175c2.617-.291 5.367-1.283 5.367-5.833a4.533 4.533 0 00-1.25-3.125 4.225 4.225 0 00-.075-3.142s-.983-.291-3.258 1.234a11.15 11.15 0 00-5.834 0C5.224.542 4.241.833 4.241.833a4.225 4.225 0 00-.075 3.142 4.533 4.533 0 00-1.25 3.15c0 4.517 2.75 5.508 5.367 5.833a2.808 2.808 0 00-.784 2.15v3.225"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_256_467">
                    <path fill="#fff" d="M0 0H20V20H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export const EmailIcon = ({ width = 20, height = 20, className, onClick, fill = "#ffffff" }: IconsType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            width={width}
            height={height}
            className={className}
            onClick={onClick}
        >
            <path
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.334 3.333h13.333c.917 0 1.667.75 1.667 1.667v10c0 .916-.75 1.666-1.667 1.666H3.334c-.917 0-1.667-.75-1.667-1.666V5c0-.917.75-1.667 1.667-1.667z"
            ></path>
            <path
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.334 5L10 10.833 1.667 5"
            ></path>
        </svg>
    );
}