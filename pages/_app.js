import '../styles/globals.css'
//this function basically is present in all pages.This can be used to keep state across pages.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
