import { IconsProps } from "../../types/IconsType"

export const Psychic = ({ w, h, className, fill, onClick }: IconsProps) => {
  return (
    <svg viewBox="0 0 74 78"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path d="M49 34.2543C49 44.7542 39.5 43.7543 37.5 34.7543C37.2214 33.5002 35.5 32.7542 35.5 36.2543C36.2612 48.9369 54 47.7542 55 34.2543C55 16.2542 25.5 15.7543 23 34.2543C23 75.2543 74 66.7543 74 34.2543C74 -12.246 2 -10.746 0 34.7543C0 75.754 36 88.254 69.5 68.754C31 83.754 8.5 61.254 12.5 34.7543C18 3.25413 61 7.75412 61 34.2543C61 58.7543 29 57.7543 31 34.2543C33.5 24.2543 49 25.2542 49 34.2543Z" fill="#FA7179" />
    </svg>
  )
}