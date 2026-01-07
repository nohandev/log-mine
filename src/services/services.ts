import { 
  type FooterItemsType, 
  type NavItemsType
} from '@/types/types'

export const navItems:NavItemsType[] = [
  {
    id: 'login',
    label: 'Entrar',
    href: '/login',
    variant: 'link',
  },
  {
    id: 'forum',
    label: 'Forum',
    href: '/forum',
    variant: 'link',
  },
  {
    id: 'sobre',
    label: 'Sobre',
    href: '/sobre',
    variant: 'link',
  },
  {
    id: 'mojang',
    label: 'Mojang',
    href: '/mojang',
    variant: 'link',
  },
  {
    id: 'perguntas',
    label: 'Perguntas',
    href: '/faq',
    variant: 'link',
  },
]

export const footerItems: FooterItemsType[] = [
  {
    id: 'power',
    img: '/icons/power.svg',
    alt: 'Power Icon',
    label: 'Jogue também offline'
  },
  {
    id: 'user',
    img: '/icons/user.svg',
    alt: 'user Icon',
    label: '67 Jogadores'
  },
  {
    id: 'controller',
    img: '/icons/controller.svg',
    alt: 'Controller Icon',
    label: 'Compatível com uso remoto'
  },
  {
    id: 'vibrate',
    img: '/icons/vibrate.svg',
    alt: 'Vibrate Icon',
    label: 'Vibração no controle'
  },
  {
    id: 'baby',
    img: '/icons/baby.svg',
    alt: 'Baby Icon',
    label: 'Permitido para menores'
  },
]