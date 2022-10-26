import React, { useState } from "react"
import Style from './login-styles.scss'
import { Header, Footer, CustomInput, FormStatus } from "@/presentation/components"
import { FormContext } from "@/presentation/context/form/form-context"

type StateProps = {
  isLoading: boolean
  errorMessage: string
}
export const LoginPage: React.FC = () => {
  const [state, setState] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <section className={Style.login}>
      <Header />
      <FormContext.Provider value={state}>
        <form className={Style.form}>
          <h2>Login</h2>
          <CustomInput type="email" name="email" placeholder="Enter your email" />
          <CustomInput type="password" name="password" placeholder="Enter your password" />
          <button type="submit">LogIn</button>
          <span className={Style.link}>Sign In</span>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </section >
  )
}
