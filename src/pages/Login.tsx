import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import RedirectModal from '@/components/RedirectModal'

const Login = () => {
  return (
    <div className='bg-[linear-gradient(to_bottom,#121212_0%,#12121299_33%,#12121200_66%,#121212_100%),url(/background.png)] min-h-screen bg-center object-cover'>
      <RedirectModal/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Login
