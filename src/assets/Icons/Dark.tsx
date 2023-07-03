import { IconsType } from "../../types/IconsType"

export const Dark = ({ w, h, className, fill, onClick }: IconsType) => {
  return (
    <svg viewBox="0 0 45 68"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path d="M1.5 0C26 20 25 50 0 67C57 69.5 61 0 1.5 0Z" fill="#D0C7DF" />
    </svg>
  )
}