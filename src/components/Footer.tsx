import { footerItems } from '@/services/services'
import { motion, type TargetAndTransition, type Variants } from 'motion/react'

const Footer = () => {

  const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // efeito cascata
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const floatAnimation = (index: number): TargetAndTransition => ({
  y: [0, -12, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: [0.37, 0, 0.63, 1],
    delay: (index + 1) * 0.4,
  },
})

  return (
    <footer className='flex flex-col items-center justify-center mt-0 lg:mt-14'>
      <motion.div 
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{
        once: true,
        amount: 0.8
      }}
      className='hidden lg:flex gap-8 pt-12'>
        {footerItems.map((item, index) => (
          <motion.div 
          variants={itemVariants}
          key={item.id}
          className='flex flex-col gap-4'>
            <motion.div>
              <motion.img
              animate={floatAnimation(index)}
              src={item.img}
              alt={item.alt}
              className='w-full max-w-8 h-auto object-cover mx-auto'/>
            </motion.div>

            <div>
              <p className='text-lg font-kufam text-dark-40 text-center'>{item.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className='pb-6 lg:py-6'>
        <div className='flex gap-2 font-inter w-full justify-center'>
          <p className='text-dark-40/80'>Desenvolvido por:</p>
          <a 
          href='https://github.com/nohandev'
          className='text-primary cursor-pointer hover:underline'
          target='_blank'>
            @nohandev
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
