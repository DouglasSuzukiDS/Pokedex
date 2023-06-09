import { IconsProps } from "../../types/IconsType"

export const Bug = ({ w, h, className, fill, onClick }: IconsProps) => {
  return (
    <svg viewBox="0 0 75 85"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path d="M44.0477 33C53.6957 31.6802 57.7585 28.7604 63.0479 22C80.5479 40 78.5478 71.5 52.0477 84.5C39.3029 66.7441 36.4146 55.745 44.0477 33Z" fill="#91C12F" />
      <path d="M30.3622 33C20.7143 31.6802 16.6515 28.7604 11.3621 22C-6.1379 40 -4.13784 71.5 22.3622 84.5C35.1071 66.7441 37.9954 55.745 30.3622 33Z" fill="#91C12F" />
      <path d="M17.8621 17.117C23.3122 24.1768 27.4795 26.4004 37.1121 26.612C46.7447 26.4004 50.9119 24.1768 56.3621 17.117C53.4511 15.1631 51.7187 14.1635 47.8621 13.117L54.3621 4.11704C56.3621 0.617002 52.3621 -1.38298 50.3621 1.11705L41.8621 11.617H32.3621L23.8621 1.11705C21.8621 -1.38298 17.8621 0.617002 19.8621 4.11704L26.3621 13.117C22.5055 14.1635 20.7731 15.1631 17.8621 17.117Z" fill="#91C12F" />
    </svg>
  )
}