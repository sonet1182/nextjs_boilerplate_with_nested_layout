import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const NoLayout = ({ children }) => children

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || NoLayout

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
}, []);

return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)
}

export default MyApp
