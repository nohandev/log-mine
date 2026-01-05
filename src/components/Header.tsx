import { MenuIcon, XSquare } from 'lucide-react'
import { navItems } from '@/services/services'
import Navgation from '@/components/ui/Navgation'
import { useState, type Dispatch, type SetStateAction } from 'react'

const NavDesktop = () => {
  return (
    <div className='flex gap-6 max-lg:hidden'>
      {navItems.map((item) => (
        <Navgation key={item.id}>
          {item.label}
        </Navgation>
      ))}
    </div>
  )
}

const NavMobile = ({
  isOpen,
  setIsOpen
}: {isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div className={`${isOpen ? 'flex' : 'hidden' } h-screen w-full bg-dark-40/85 absolute top-0 left-0 z-10 flex-col gap-6`}>
      <div className='p-6 flex justify-end'>
        <button className='text-red-600' onClick={() => setIsOpen(false)}>
          <XSquare size={36}/>
        </button>
      </div>

      <div className='flex flex-col gap-8 items-center justify-center'>
        {navItems.map((item) => (
        <button 
          key={item.id}
          className='rounded-md font-kufam font-semibold text-primary text-2xl py-2 cursor-pointer focus:underline'>
          {item.label}
        </button>
        ))}
      </div>
    </div>
  )
}

const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className='w-full px-6 py-4 md:py-8 lg:py-10'>
      <nav className='flex justify-between items-center gap-y-12 lg:flex-col lg:justify-center'>
        <div>
          <img
            src='/logo.svg'
            alt='Logo Mine'
            className='w-full max-w-24'/>
        </div>

        <NavDesktop/>
        <NavMobile isOpen={isOpen} setIsOpen={setIsOpen}/>

        <div className='lg:hidden'>
          <button 
            className={`${isOpen && 'hidden'} cursor-pointer text-white`}
            onClick={() => setIsOpen(true)}>
            <MenuIcon size={38}/>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
