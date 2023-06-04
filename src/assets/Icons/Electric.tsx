import { IconsProps } from "../../types/IconsProps"

export const Electric = ({ w, h, className, fill, onClick }: IconsProps) => {
  return (
    <svg viewBox="0 0 63 82"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path d="M47.5 82L0 25.5H24.5L15 0H47.5L63 45.5H38.5L47.5 82Z" fill="#F4D23C" />
    </svg>
  )
}