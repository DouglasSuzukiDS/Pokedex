import { IconsType } from "../../types/IconsType"

export const Water = ({ w, h, className, fill, onClick }: IconsType) => {
  return (
    <svg viewBox="0 0 60 87"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path fillRule="evenodd" clipRule="evenodd" d="M29.5042 87C11.5042 87 -7.49578 66 3.0042 45C13.5042 24 29.5042 0 29.5042 0C29.5042 0 45.5043 24 56.0043 45C66.5043 66 47.5043 87 29.5042 87ZM14.5042 54.5C17.5042 72.5 34.0042 76.5 45.0042 61.5C43.0042 87.5 4.00423 80.5 14.5042 54.5Z" fill="#5090D6" />
    </svg>
  )
}