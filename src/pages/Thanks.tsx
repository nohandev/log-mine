import { motion } from 'motion/react'
import { ArrowLeft, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Thanks() {
  return (
    <div className='min-h-screen bg-linear-to-b from-black via-neutral-950 to-neutral-900 flex items-center justify-center px-4'>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='max-w-md w-full text-center space-y-8'
      >
        {/* Mensagem */}
        <div className='space-y-4'>
          <h1 className='text-3xl md:text-4xl font-semibold text-white'>
            Obrigado por ver meu projeto :)
          </h1>

          <p className='text-neutral-400 text-base md:text-lg'>
            Espero que tenha curtido a experiência.  
            Se quiser acompanhar outros projetos ou deixar um feedback,
            os links estão logo abaixo.
          </p>
        </div>

        {/* Botões */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>

          {/* Voltar para o projeto */}
          <Link
            to='/'
            className='inline-flex items-center justify-center gap-2
                       rounded-xl bg-white text-black font-medium
                       px-6 py-3
                       hover:bg-neutral-200
                       transition-all duration-200'
          >
            <ArrowLeft size={18} />
            Voltar ao projeto
          </Link>

          {/* GitHub */}
          <a
            href='https://github.com/nohandev'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-2
                       rounded-xl border border-neutral-700
                       text-white font-medium
                       px-6 py-3
                       hover:bg-neutral-800
                       transition-all duration-200'
          >
            <Github size={18} />
            GitHub
          </a>

        </div>
      </motion.div>
    </div>
  )
}

export default Thanks