import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Home from './components/Home'

const page = () => {
  return (
    <div>
      <Header />
      {/*--------------------------------------*/}
      <section>
        <Home />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default page