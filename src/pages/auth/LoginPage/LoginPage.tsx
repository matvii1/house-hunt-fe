import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import PasswordInputControl from '@/pages/auth/components/PasswordInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z
    .string({
      description: 'First name'
    })
    .email({
      message: 'Invalid email format'
    }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .regex(new RegExp(/[a-z]/), {
      message: 'Password must contain at least one lowercase letter'
    })
    .regex(new RegExp(/[A-Z]/), {
      message: 'Password must contain at least one uppercase letter'
    })
    .regex(new RegExp(/[0-9]/), {
      message: 'Password must contain at least one number'
    })
    .regex(new RegExp(/[!@#$%^&*(),.?":{}|<>]/), {
      message: 'Password must contain at least one special character'
    })
})

export type FormType = z.infer<typeof formSchema>

function LoginPage() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit(values: FormType) {
    console.log(values)
    
    toast({
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      )
    })
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <div className="w-[400px] rounded-md border-2 border-border px-8 py-6">
        <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
          Form Example
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 flex flex-col gap-3">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInputControl
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )
              }}
            />
            <Button type="submit" className="mt-3">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
