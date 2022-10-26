import React from 'react'
import { render } from '@testing-library/react'
import { LoginPage } from './login'

describe('Login Component', () => {
  test('should not render spinner and error message on start', () => {
    const { getByTestId } = render(<LoginPage />)
    const erroWrap = getByTestId('error-wrap')
    expect(erroWrap.childElementCount).toBe(0)
  })
})
