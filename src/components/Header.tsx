import { MenuIcon, XSquare } from 'lucide-react'
import { navItems } from '@/services/services'
import { motion, type Variants, AnimatePresence } from 'motion/react'
import { useState, type Dispatch, type SetStateAction } from 'react'

const navDesktopContainer: Variants = {
  hidden: { 
    opacity: 0, 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
}

const navDesktopItem: Variants = {
  hidden: { 
    opacity: 0, 
    rotate: -10,
    y: -20 
  },
  visible: {
    opacity: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.68, -0.6, 0.32, 1.6],
    },
  },
}

const navMobileContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
}

const navMobileItem: Variants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.7, 0, 0.84, 0],
      duration: 0.3
    }
  }
}

const NavDesktop = () => {
  return (
    <motion.div
      variants={navDesktopContainer} 
      initial='hidden'
      animate='visible'
      className='flex gap-6 max-lg:hidden'>
      {navItems.map((item) => (
        <motion.button 
        key={item.id}
        variants={navDesktopItem}
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
        className='rounded-md font-kufam font-semibold py-2 px-12 cursor-pointer text-dark-40 hover:bg-dark-40 hover:text-primary'>
          {item.label}
        </motion.button>
      ))}
    </motion.div>
  )
}

const NavMobile = ({
  isOpen,
  setIsOpen
}: {isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <AnimatePresence>
    { isOpen && 
      <motion.div 
        initial={{
          opacity: 0,
          scale: 0
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        exit={{
          opacity: 0,
          scale: 0
        }}
        key='container'
        className='h-screen w-full bg-dark-40/85 absolute top-0 left-0 z-10 flex flex-col gap-6'>
        <div className='p-6 flex justify-end'>
          <button className='text-red-600' onClick={() => setIsOpen(false)}>
            <XSquare size={36}/>
          </button>
        </div>

        <motion.div 
        variants={navMobileContainer}
        initial='hidden'
        animate='visible'
        className='flex flex-col gap-8 items-center justify-center'>
          {navItems.map((item) => (
          <motion.button 
            key={item.id}
            variants={navMobileItem}
            className='rounded-md font-kufam font-semibold text-primary text-2xl py-2 cursor-pointer focus:underline'>
            {item.label}
          </motion.button>
          ))}
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className='w-full px-6 py-4 md:py-8 lg:py-10'>
      <nav className='flex justify-between items-center gap-y-12 lg:flex-col lg:justify-center'>
        <motion.div 
        initial={{opacity: 0, y: -40}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.9, ease: [0.33, 1, 0.68, 1]}}
        whileHover={{
          scale: 1.5,
          rotate: -360,
          transition:{
            ease: [0.85, 0, 0.15, 1],
            duration: 0.6
          }
        }}>
          <img
            src='/logo.svg'
            alt='Logo Mine'
            className='w-full max-w-24'/>
        </motion.div>

        <NavDesktop/>
        <NavMobile isOpen={isOpen} setIsOpen={setIsOpen}/>

        <motion.div 
        initial={{
          opacity: 0,
          y: -40
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.4,
          duration: 0.9, 
          ease: [0.33, 1, 0.68, 1]
        }}
        className='lg:hidden'>
          <button 
            className={`${isOpen && 'hidden'} cursor-pointer text-white`}
            onClick={() => setIsOpen(true)}>
            <MenuIcon size={38}/>
          </button>
        </motion.div>
      </nav>
    </header>
  )
}

export default Header
