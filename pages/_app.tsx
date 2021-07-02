import '../styles/globals.css'
import AuthenticatedLayout from '../layout/AuthenticatedLayout'
import UnAuthenticatedLayout from '../layout/UnAuthenticatedLayout'

const layouts = {
  AuthenticatedLayout: AuthenticatedLayout,
  UnAuthenticatedLayout: UnAuthenticatedLayout,
};


function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
