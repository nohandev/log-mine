import { motion } from 'motion/react'
import React from 'react'

interface SpinnerProps {
  size?: number // tamanho em pixels
  color?: string // cor do spinner
  duration?: number // duração da animação em segundos
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 40,
  color = 'text-primary',
  duration = 1.2,
}) => {
  return (
    <motion.div
      className={`inline-block ${color}`}
      style={{
        width: size,
        height: size,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: 'currentColor',
        borderTopColor: 'transparent',
        borderRadius: '50%',
      }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration,
        ease: [0.42, 0, 0.58, 1],
      }}
    />
  )
}

export default Spinner