import React from "react"
import Styles from './custom-input-styles.scss'
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const CustomInput: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.inputWrapper}>
      <input {...props} />
      <span className={Styles.status}>🔴</span>
    </div>
  )
}
