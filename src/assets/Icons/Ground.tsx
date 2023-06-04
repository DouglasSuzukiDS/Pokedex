import { IconsProps } from "../../types/IconsProps"

export const Ground = ({ w, h, className, fill, onClick }: IconsProps) => {
  return (
    <svg viewBox="0 0 100 57"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path d="M14.5 57H0L16.5 12.5H31L14.5 57Z" fill="#D97845" />
      <path d="M100 57H27L49 0H78L100 57Z" fill="#D97845" />
    </svg>
  )
}