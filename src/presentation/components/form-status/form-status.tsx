import { FormContext } from "@/presentation/context/form/form-context"
import React, { useContext } from "react"
import { Spinner } from "../spinner/spinner"
import Styles from './form-status-styles.scss'

export const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(FormContext)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrapper}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <span className={Styles.error}>Error</span>}
    </div>
  )
}
