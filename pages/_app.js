import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className="bg-[#1F1F1F] pt-8 min-h-screen">
    <Component {...pageProps} />
  </div>
}

export default MyApp
