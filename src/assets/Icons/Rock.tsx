import { IconsType } from "../../types/IconsType"

export const Rock = ({ w, h, className, fill, onClick }: IconsType) => {
  return (
    <svg viewBox="0 0 87 70"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path d="M17.5 61L0 55V34L27 0L65.5 1L60.5 32L17.5 61Z" fill="#C5B78C" />
      <path d="M67 32L74 0L87 39L77 47.5L67 32Z" fill="#C5B78C" />
      <path d="M71.5 51L62 37.5L27 63.5L48 69.5L71.5 51Z" fill="#C5B78C" />
    </svg>
  )
}