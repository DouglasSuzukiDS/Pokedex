import { IconsProps } from "../../types/IconsType"

export const Pokeball = ({ w, h, className, fill, onClick }: IconsProps) => {
  return (
    <svg viewBox="0 0 201 200"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path fillRule="evenodd" clipRule="evenodd" d="M200.12 100C200.12 155.228 155.349 200 100.12 200C44.8916 200 0.120117 155.228 0.120117 100H200.12Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M200.12 100C200.12 44.7715 155.349 0 100.12 0C44.8916 0 0.120117 44.7715 0.120117 100H200.12Z" fill="#FF1C1C" />
      <path d="M2.12016 120H198.12C201.293 106.164 201.313 96.1757 198.12 80H2.12016C-0.879883 96.5 -0.528087 105.192 2.12016 120Z" fill="black" />
      <circle cx="100.12" cy="100" r="50" fill="black" />
      <circle cx="100.12" cy="100" r="25" fill="white" />
    </svg>
  )
}