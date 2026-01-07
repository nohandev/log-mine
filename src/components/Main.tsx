import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email('Insira um endereço de e-mail válido')
    .min(5, 'O e-mail deve ter pelo menos 5 caracteres'),
  
  password: z
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .max(100, 'A senha é muito longa'),
    // .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    // .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    // .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
    // .regex(/[^A-Za-z0-9]/, 'A senha deve conter pelo menos um caractere especial'),

  rememberPassword: z
    .boolean()
})

type LoginSchemaValues = z.infer<typeof LoginSchema>

const Main = () => {
  const { register, handleSubmit, formState: {errors, isValid}, reset} = useForm<LoginSchemaValues>({
    mode: 'onSubmit',    
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberPassword: true
    }
  })

  
  const onSubmit = (data: LoginSchemaValues) => {
    console.log(isValid)
    console.log(data)
    reset()
  }

  return (
    <main className='flex items-center justify-center w-full px-6'>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className='bg-dark-10/80 w-full max-w-96 mt-4 gap-4 flex flex-col rounded-xl border border-dark-30/50 px-8 py-6'>
        <div>
          <img
            src='/logo-solo.svg'
            alt='Logo MineLog'
            className='w-full max-w-8 h-auto mx-auto'/>
        </div>

        <div className='font-kufam flex flex-col gap-2'>
          <div>
            <label 
              className='text-dark-40 text-sm font-medium'
              htmlFor='email'>
              E-mail
            </label>
          </div>
          <div>
            <input 
              {...register('email')}
              id='email'
              placeholder='Insira seu e-mail'
              type='text'
              className='bg-dark-10 px-4 py-3 w-full rounded-sm font-inter text-sm border outline-none border-dark-20 text-dark-40 focus:border-dark-30'/>
          </div>
          {/* gambiarra pra não comprometer a ui, favor não modificar xD */}
          {errors.email?.message ? <span className='text-center text-sm font-inter text-danger font-medium'>{errors.email.message}</span> : <span className='text-transparent font-medium font-inter text-sm'>a</span>}
        </div>

        <div className='font-kufam flex flex-col gap-2'>
          <div>
            <label 
              className='text-dark-40 text-sm font-medium'
              htmlFor='password'>
              Senha
            </label>
          </div>
          <div>
            <input 
              {...register('password')}
              id='password'
              name='password'
              placeholder='Insira sua senha'
              type='text'
              className='bg-dark-10 px-4 py-3 w-full rounded-sm font-inter text-sm border outline-none border-dark-20 text-dark-40 focus:border-dark-30'/>
          </div>

          {errors.password?.message ? <span className='text-center text-sm font-inter text-danger font-medium'>{errors.password.message}</span> : <span className='text-transparent font-medium font-inter text-sm'>a</span>}
        </div>

        <label className='flex items-center gap-2 cursor-pointer relative'>
          <input
            {...register('rememberPassword')}
            type='checkbox'
            className='peer sr-only'
          />

          <svg
            className='hidden peer-checked:block w-3 h-3 text-dark-40 absolute left-0.5'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='3'
          >
            <polyline points='20 6 9 17 4 12' />
          </svg>

          <div className='
            w-4 h-4 rounded-sm border border-dark-30
            bg-dark-20
            peer-checked:bg-primary
            peer-checked:border-primary
            flex items-center justify-center
            
          '>
            
          </div>

          <span className='font-inter text-dark-40 text-xs'>
            Lembrar minha senha
          </span>
        </label>

        <div className='pt-14'>
          <button 
          type='submit' 
          className='w-full py-3 cursor-pointer text-dark-40 bg-primary font-kufam font-semibold rounded-md'>
            Entrar na conta
          </button>
        </div>
      </form>
    </main>
  )
}

export default Main
