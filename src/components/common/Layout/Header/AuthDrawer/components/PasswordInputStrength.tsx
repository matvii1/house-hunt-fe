import { cn } from '@/lib/utils'

import { specialCharPattern } from '@/components/common/Layout/Header/AuthDrawer/signup/SignupForm/useSignupForm'
import { FC, InputHTMLAttributes, forwardRef, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { Progress } from '../../../../../ui/progress'
import { LoginFormType } from '../login/LoginForm/useLoginForm'
import PasswordInput from './PasswordInput'

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>

const PasswordInputStrength: FC<PasswordInputProps> = forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ ...props }, ref) => {
  const form = useFormContext<LoginFormType>()
  const password = form.watch('password')

  function evaluatePasswordStrength(password: string) {
    let strength = 10

    if (password?.length >= 8) strength += 22
    if (/[a-z]/.test(password)) strength += 11
    if (/[A-Z]/.test(password)) strength += 11
    if (/\d/.test(password)) strength += 22
    if (specialCharPattern.test(password)) strength += 22

    if (strength >= 90) strength = 100

    return strength
  }

  const strength = useMemo(() => evaluatePasswordStrength(password), [password])

  const weakPassword = strength < 40
  const moderatePassword = strength >= 40 && strength < 90
  const strongPassword = strength >= 90

  return (
    <div>
      <PasswordInput ref={ref} {...props} />

      <Progress
        className={cn('mt-4 h-3 rounded-md')}
        isColorful
        value={strength}
      />

      <p
        className={cn('mt-1 text-xs', {
          'text-red-500': weakPassword,
          'text-yellow-500': moderatePassword,
          'text-green-500': strongPassword
        })}>
        {weakPassword && 'Weak'}
        {moderatePassword && 'Moderate'}
        {strongPassword && 'String'} password
      </p>
    </div>
  )
})

export default PasswordInputStrength
