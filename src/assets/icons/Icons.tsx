import { IconsType } from "./IconsType";

export const LogoIcon = ({ width = 43, height = 32, className, onClick, fill = "#ffffff" }: IconsType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 42 23"
            width={width}
            height={height}
            className={className}
            onClick={onClick}
        >
            <path
                fill={fill}
                d="M.71 22V1h11.22c2.9 0 5.04.52 6.42 1.56 1.38 1.02 2.07 2.33 2.07 3.93 0 1.06-.3 2.01-.9 2.85-.58.82-1.43 1.47-2.55 1.95-1.12.48-2.5.72-4.14.72l.6-1.62c1.64 0 3.05.23 4.23.69 1.2.46 2.12 1.13 2.76 2.01.66.86.99 1.9.99 3.12 0 1.82-.76 3.24-2.28 4.26-1.5 1.02-3.7 1.53-6.6 1.53H.71zm6.96-4.95h4.26c.78 0 1.36-.14 1.74-.42.4-.28.6-.69.6-1.23s-.2-.95-.6-1.23c-.38-.28-.96-.42-1.74-.42H7.19V9.07h3.78c.8 0 1.38-.13 1.74-.39.38-.28.57-.67.57-1.17 0-.52-.19-.91-.57-1.17-.36-.26-.94-.39-1.74-.39h-3.3v11.1zm24.073 5.43c-1.76 0-3.46-.2-5.1-.6-1.64-.4-2.99-.92-4.05-1.56l2.28-5.16c1 .58 2.11 1.05 3.33 1.41 1.24.34 2.44.51 3.6.51.68 0 1.21-.04 1.59-.12.4-.1.69-.23.87-.39.18-.18.27-.39.27-.63 0-.38-.21-.68-.63-.9-.42-.22-.98-.4-1.68-.54-.68-.16-1.43-.32-2.25-.48-.82-.18-1.65-.41-2.49-.69-.82-.28-1.58-.65-2.28-1.11a5.29 5.29 0 01-1.65-1.8c-.42-.76-.63-1.7-.63-2.82 0-1.3.36-2.48 1.08-3.54.74-1.08 1.83-1.94 3.27-2.58 1.46-.64 3.27-.96 5.43-.96 1.42 0 2.82.15 4.2.45 1.38.3 2.62.76 3.72 1.38l-2.13 5.13a15.94 15.94 0 00-3.03-1.17c-.96-.26-1.9-.39-2.82-.39-.68 0-1.22.06-1.62.18-.4.12-.69.28-.87.48-.16.2-.24.42-.24.66 0 .36.21.65.63.87.42.2.97.37 1.65.51.7.14 1.46.29 2.28.45.84.16 1.67.38 2.49.66.82.28 1.57.65 2.25 1.11.7.46 1.26 1.06 1.68 1.8.42.74.63 1.66.63 2.76 0 1.28-.37 2.46-1.11 3.54-.72 1.06-1.8 1.92-3.24 2.58-1.44.64-3.25.96-5.43.96z"
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

export const InfoIcon = ({ width = 24, height = 24, className, onClick, fill = "#DBC282" }: IconsType) => {
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
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 16v-4M12 8h.01"
            ></path>
        </svg>
    );
}