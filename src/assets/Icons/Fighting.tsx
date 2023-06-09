import { IconsProps } from "../../types/IconsType"

export const Fighting = ({ w, h, className, fill, onClick }: IconsProps) => {
  return (
    <svg viewBox="0 0 86 61"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path d="M12.5 58V21C12 16 8 17 6 21L0 32V47L6 58C7.5 62 12.5 62 12.5 58Z" fill="#CE416B" />
      <path d="M30 0H17V60.5H86L84.5 0H72V21C72 25 67 25 67 21V0H53.5V21C53.5 25 48.5 25.5 48.5 21V0H35.5V21C35.5 25 30 25 30 21V0Z" fill="#CE416B" />
    </svg>
  )
}