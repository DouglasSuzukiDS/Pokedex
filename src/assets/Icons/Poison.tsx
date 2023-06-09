import { IconsProps } from "../../types/IconsType"

export const Poison = ({ w, h, className, fill, onClick }: IconsProps) => {
  return (
    <svg viewBox="0 0 83 80"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 34.9996C0.335979 45.9584 1.65553 51.9105 13 61C9 79.5 25.5 85.5 31.5 71C37.5 83 45.5 83 51.5 71C57.5 85.5 74 79.5 70 61C81.3445 51.9105 82.664 45.9584 83 34.9996C82 17 70 3.40119e-05 41.5 0C13 3.40119e-05 1 17 0 34.9996ZM41.5 16.5C6.5 16.5 9 53.5 41.5 53.5C74 53.5 76.5 16.5 41.5 16.5Z" fill="#B567CE" />
    </svg>
  )
}