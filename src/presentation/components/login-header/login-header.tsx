import React, { memo } from "react"
import { Logo } from "../logo/logo"
import Style from './login-header-styles.scss'

type Props = {
  className: string
}
// eslint-disable-next-line react/display-name
const LoginHeader: React.FC = memo(() => {
  return (
    <header className={Style.header}>
      <Logo />
      <h1>4dev - Survey for devs</h1>
    </header>
  )
})

export {
  LoginHeader
}
