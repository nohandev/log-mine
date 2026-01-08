import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeClosed } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useShowRedirectModal from '@/store/showRedrectModal.store'
import { type LoginSchemaValues, LoginSchema } from '@/types/types'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

const Main = () => {
  const navigate = useNavigate()
  const { showRedirectModal, setShowRedirectModal } = useShowRedirectModal()

  useEffect(() => {
    if (!showRedirectModal ) return

    setTimeout(() => {
      navigate('/thanks')
      setShowRedirectModal()
    }, 3000)

  }, [showRedirectModal])

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const { register, handleSubmit, formState: {errors}, reset} = useForm<LoginSchemaValues>({
    mode: 'onSubmit',    
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberPassword: true
    }
  })

  const onSubmit = () => {
    reset()
    setShowRedirectModal()
  }

  return (
    <main className='flex items-center justify-center w-full px-6'>
      <motion.form
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }} 
        transition={{
          delay: 1.9,
          ease: [0.34, 1.56, 0.64, 1],
          duration: 0.4
        }}
        onSubmit={handleSubmit(onSubmit)}
        className='bg-dark-10/80 w-full max-w-96 mt-24 lg:mt-4 gap-4 flex flex-col rounded-xl border border-dark-30/50 px-8 py-6'>
        <div>
          <motion.img
          whileHover={{
            scale: 1.2,
            transition:{
              duration: 0.4,
              ease: [0.2, 0.8, 0.4, 1]
            },
          }}
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
              className='bg-dark-10 px-4 py-3 w-full rounded-sm font-inter text-sm border outline-none border-dark-20 text-dark-40 transition-colors hover:border-dark-30 focus:border-dark-30'/>
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
          <div className='relative'>
            <input 
            {...register('password')}
            id='password'
            name='password'
            placeholder='Insira sua senha'
            type={showPassword ? 'text' : 'password'}
            className='bg-dark-10 px-4 py-3 w-full rounded-sm font-inter text-sm border outline-none border-dark-20 text-dark-40 transition-colors hover:border-dark-30 focus:border-dark-30'/>

            <button 
            type='button'
            className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-dark-40 hover:text-primary'
            onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size={18}/> : <EyeClosed size={18}/>}
            </button>
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
            strokeWidth='3'>
            <polyline points='20 6 9 17 4 12' />
          </svg>

          <div className='w-4 h-4 rounded-sm border border-dark-30 bg-dark-20 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center'>
          </div>

          <span className='font-inter text-dark-40 text-xs transition-colors hover:text-primary'>
            Lembrar minha senha
          </span>
        </label>

        <div className='pt-4'>
          <motion.button
          whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.3,
            ease: [0, 0.55, 0.45, 1]
          }
          }}
          whileTap={{
            scale: 0.9
          }} 
          type='submit' 
          className='w-full py-3 cursor-pointer text-dark-40 bg-primary font-kufam font-semibold rounded-md'>
            Entrar na conta
          </motion.button>
        </div>

        <p className='font-inter font-medium text-primary cursor-pointer text-center hover:underline'>
          Esqueceu a senha?
        </p>
      </motion.form>
    </main>
  )
}

export default Main
