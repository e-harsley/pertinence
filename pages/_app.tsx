import '../styles/globals.css'
import AuthenticatedLayout from '../layout/AuthenticatedLayout'
import UnAuthenticatedLayout from '../layout/UnAuthenticatedLayout'
import SettingsLayout from '../layout/settingsLayout'
const layouts = {
  AuthenticatedLayout: AuthenticatedLayout,
  UnAuthenticatedLayout: UnAuthenticatedLayout,
  SettingsLayout: SettingsLayout
};
import { AnimateSharedLayout, motion } from "framer-motion"
import {GlobalProvider} from '../context/Provider'
import { ToastProvider, useToasts } from 'react-toast-notifications';
const pageVariants = {
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: '-100vw'
  }
};

const pageTransition = {
  duration: 0.8 
}


function MyApp({ Component, pageProps, router }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  
  return (
    <GlobalProvider>
      <ToastProvider>
        <Layout>
        <AnimateSharedLayout exitBeforeEnter>
        <motion.div
      key={router.route}
      initial="out"
      animate="in"
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
    >
      <Component {...pageProps} key={router.route} />
      </motion.div>
      </AnimateSharedLayout>
    </Layout>
    </ToastProvider>
    </GlobalProvider>
    
    
    
    )
}

export default MyApp
