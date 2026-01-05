
type NavigationPropsType = {
  children: React.ReactNode
  props?: React.ReactNode
}

const Navgation = ({
  children,
  ...props
}: NavigationPropsType) => {
  // como a aplicação é simples, eu vou retornar um botão, entretanto, o ideal é retornar um link.
  return (
    <button 
      className='rounded-md font-kufam font-semibold py-2 px-12 cursor-pointer text-dark-40 hover:bg-dark-40 hover:text-primary'
      {...props}>
        {children}
    </button>
  )
}

export default Navgation
