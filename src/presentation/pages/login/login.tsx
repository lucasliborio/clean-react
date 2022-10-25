import React from "react"
import Style from './login-styles.scss'
import { Spinner } from "@/presentation/components/spinner/spinner"
import { Logo } from "@/presentation/components/logo/logo"
export const Login: React.FC = () => {
  return (
    <section className={Style.login}>
      <header className={Style.header}>
        <Logo/>
        <h1>4dev - Survey for devs</h1>
      </header>
      <form className={Style.form}>
        <h2>Login</h2>
        <div className={Style.inputWrapper}>
          <input type="email" name="email" id="" placeholder="Enter your email" />
          <span className={Style.status}>🔴</span>
        </div>
        <div className={Style.inputWrapper}>
          <input type="password" name="password" id="" placeholder="Enter your password" />
          <span className={Style.status}>🔴</span>
        </div>
        <button type="submit">LogIn</button>
        <span className={Style.link}>Sign In</span>
        <div className={Style.errorWrapper}>
          <Spinner className={Style.spinner}/>
          <span className={Style.error}>Error</span>
        </div>
      </form>
      <footer className={Style.footer}>f</footer>
    </section>
  )
}
