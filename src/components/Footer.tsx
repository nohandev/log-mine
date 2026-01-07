import { footerItems } from "@/services/services"

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center'>
      <div className='hidden lg:flex gap-8 pt-12'>
        {footerItems.map(item => (
          <div key={item.id} className='flex flex-col gap-4'>
            <div>
              <img
                src={item.img}
                alt={item.alt}

                className='w-full max-w-8 h-auto object-cover mx-auto'/>
            </div>

            <div>
              <p className='text-lg font-kufam text-dark-40 text-center'>{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='max-lg:absolute bottom-0'>
        <div className='flex gap-2 font-inter py-4 w-full justify-center'>
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
