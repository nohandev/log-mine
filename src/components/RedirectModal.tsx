import useShowRedirectModal from '@/store/showRedrectModal.store'
import { Check } from 'lucide-react'
import Spinner from '@/components/ui/Spinner'

const RedirectModal = () => {

  const {showRedirectModal } = useShowRedirectModal()

  return (
    <div className={`${showRedirectModal ? 'flex' : 'hidden'} h-screen w-full absolute top-0 left-0 justify-center items-start bg-dark-10/60 z-10 py-6 px-4`}>
      <div className='font-kufam bg-dark-10 rounded-md p-6 border border-dark-30/40'>
        <div className='flex items-center gap-1'>
          <h2 className='text-dark-40 text-xl'>Login realizado com sucesso</h2>
          <Check className='text-primary'/>
        </div>

        <div className='flex flex-col items-center justify-center mt-8 gap-2'>
          <p className='text-dark-40 text-lg'>Redirecionando...</p>
          <Spinner size={26}/>
        </div>
      </div>
    </div>
  )
}

export default RedirectModal
