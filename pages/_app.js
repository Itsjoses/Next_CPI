import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'
import ContextProvider from '@/useContext/ContextProvider'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return <ContextProvider>
    <Component {...pageProps} />
    <ToastContainer/>
  </ContextProvider>
}

export default MyApp
