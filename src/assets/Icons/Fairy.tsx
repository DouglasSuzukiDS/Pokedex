import { IconsType } from "../../types/IconsType"

export const Fairy = ({ w, h, className, fill, onClick }: IconsType) => {
  return (
    <svg viewBox="0 0 97 97"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path fillRule="evenodd" clipRule="evenodd" d="M48.5 0L35 23.5L19.5 19L23.5 35L0 48L23 62L19 78L34.5 73.5L48 97L61.5 73L77 77.5L73 61.5L97 48.5L73.5 35.5L77.5 19.5L62 24L48.5 0ZM42.5 42L31.5 48L42 55L48 65.5L54 54.5L65.5 48.5L54.5 42.5L48.5 31.5L42.5 42Z" fill="#EC8FE6" />
    </svg>
  )
}