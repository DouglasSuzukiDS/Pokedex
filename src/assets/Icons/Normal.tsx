import { IconsProps } from "../../types/IconsProps"

export const Normal = ({ w, h, className, fill, onClick }: IconsProps) => {
  return (
    <svg viewBox="0 0 85 85"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path fillRule="evenodd" clipRule="evenodd" d="M42.5 85C65.9721 85 85 65.9721 85 42.5C85 19.0279 65.9721 0 42.5 0C19.0279 0 0 19.0279 0 42.5C0 65.9721 19.0279 85 42.5 85ZM42.5 70C57.6878 70 70 57.6878 70 42.5C70 27.3122 57.6878 15 42.5 15C27.3122 15 15 27.3122 15 42.5C15 57.6878 27.3122 70 42.5 70Z" fill="#919AA2" />
    </svg>
  )
}