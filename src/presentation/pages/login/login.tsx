import React from "react"
import Style from './login-styles.scss'
import { Header, Footer, CustomInput, FormStatus } from "@/presentation/components"

export const LoginPage: React.FC = () => {
  return (
    <section className={Style.login}>
      <Header />
      <form className={Style.form}>
        <h2>Login</h2>
        <CustomInput type="email" name="email" placeholder="Enter your email" />
        <CustomInput type="password" name="password" placeholder="Enter your password" />
        <button type="submit">LogIn</button>
        <span className={Style.link}>Sign In</span>
        <FormStatus />
      </form>
      <Footer />
    </section >
  )
}
