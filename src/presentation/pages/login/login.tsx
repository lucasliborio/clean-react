import React from "react"
import Style from './login-styles.scss'
import { Spinner } from "@/presentation/components/spinner/spinner"
import { LoginHeader } from "@/presentation/components/login-header/login-header"
import { Footer } from "@/presentation/components/footer/footer"
import { CustomInput } from "@/presentation/components/input/custom-input"
import { FormStatus } from "@/presentation/components/form-status/form-status"

export const Login: React.FC = () => {
  return (
    <section className={Style.login}>
      <LoginHeader />
      <form className={Style.form}>
        <h2>Login</h2>
        <CustomInput type="email" name="email" id="" placeholder="Enter your email" />
        <CustomInput type="password" name="password" id="" placeholder="Enter your password" />
        <button type="submit">LogIn</button>
        <span className={Style.link}>Sign In</span>
        <FormStatus />
      </form>
      <Footer />
    </section >
  )
}
