import { IconsProps } from "../../types/IconsProps"

export const Flying = ({ w, h, className, fill, onClick }: IconsProps) => {
  return (
    <svg viewBox="0 0 86 79"
      width={w} height={h} className={className} fill={fill} onClick={onClick}>
      <path d="M85.8631 0C77.1975 12.6723 68.8768 16.7451 48.3631 19C10.3632 14 -6.63684 36 2.36309 60.5C15.3631 85 44.3631 83 56.3631 60.5C54.905 60.3364 54.1692 60.1243 53.3631 59C66.8967 58.0321 69.0144 54.6862 72.3631 48.5C63.6473 54.8062 58.5913 54.9586 49.3631 51C65.0773 51.5908 69.552 47.6534 74.8631 38C60.8481 47.3283 54.6024 45.0678 43.584 41.0799L43.3631 41C75.6175 41.3898 83.8631 28 85.8631 0Z" fill="#89AAE3" />
    </svg>
  )
}