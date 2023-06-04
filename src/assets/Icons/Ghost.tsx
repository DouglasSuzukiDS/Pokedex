import { IconsProps } from "../../types/IconsProps"

export const Ghost = ({ w, h, className, fill, onClick }: IconsProps) => {
  return (
    <svg viewBox="0 0 82 84"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path fillRule="evenodd" clipRule="evenodd" d="M75.5595 77.4017C70.3776 75.3216 69.2562 73.187 69.0595 68.4017C99.06 37.4016 71.56 -10.0984 26.06 1.90177C-29.4397 24.9016 11.5603 106.402 75.5595 77.4017ZM21.0605 26.9016C23.5766 34.9284 26.691 36.6216 35.0605 34.9016C32.0603 48.9016 10.5603 43.4016 21.0605 26.9016ZM60.0603 27.4016C57.5442 35.4284 54.4299 37.1216 46.0603 35.4016C49.0605 49.4016 70.5606 43.9016 60.0603 27.4016Z" fill="#5269AD" />
    </svg>
  )
}