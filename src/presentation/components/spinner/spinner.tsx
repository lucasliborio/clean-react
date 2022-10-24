import React from "react"
import Style from './spinner-styles.scss'

type Props = {
  className: string
}
export const Spinner: React.FC<Props> = (props: Props) => {
  return (
    <div className={[Style.spinner, props.className].join(' ')}><div></div><div></div><div></div><div></div></div>
  )
}
