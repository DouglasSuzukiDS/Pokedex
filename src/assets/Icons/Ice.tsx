import { IconsProps } from "../../types/IconsType"

export const Ice = ({ w, h, className, fill, onClick }: IconsProps) => {
  return (
    <svg viewBox="0 0 101 84"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path d="M48 37.5V13L24.5 0V26.5L48 37.5Z" fill="#73CEC0" />
      <path d="M48 42L24.5 30.5L0 42L24.5 53.5L48 42Z" fill="#73CEC0" />
      <path d="M48 71V46.5L24.5 57.5V83L48 71Z" fill="#73CEC0" />
      <path d="M53 38V13.5L76.5 0.5V27L53 38Z" fill="#73CEC0" />
      <path d="M53 42.5L76.5 31L101 42.5L76.5 54L53 42.5Z" fill="#73CEC0" />
      <path d="M53 71.5V47L76.5 58V83.5L53 71.5Z" fill="#73CEC0" />
    </svg>
  )
}