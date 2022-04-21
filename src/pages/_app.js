import 'bootstrap/dist/css/bootstrap.css'
import "../styles/globals.css"
import BasicLayout from "../components/pagesLayout/BasicLayout";

function MyApp({ Component, pageProps }) {
  return(
      <>
      <BasicLayout>
          <main className="mx-5">
              <Component {...pageProps} />
          </main>
      </BasicLayout>
      </>
  )
}

export default MyApp
