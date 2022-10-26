import React, { ReactHTMLElement } from 'react'
import { render } from '@testing-library/react'
import { LoginPage } from './login'

describe('Login Component', () => {
  test('should not render spinner and error message on start', () => {
    const { getByTestId } = render(<LoginPage />)
    const erroWrap = getByTestId('error-wrap')
    expect(erroWrap.childElementCount).toBe(0)
  })
  test('should start with button disabled', () => {
    const { getByTestId } = render(<LoginPage />)
    const submitButton = getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
})
