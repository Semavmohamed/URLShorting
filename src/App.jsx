import Navbar from './component/Navbar'
import './App.css'
import imgback from './assets/bg-boost-desktop.svg'
import Define from './sections/Define'
import Advance from './sections/Advance';
import Form from './sections/Form';
import Footer from './sections/Footer';
import Boost from './sections/Boost';

function App() {

  return (
    <>
      <Navbar />
      <Define />
      <div className='bg-background pb-40'>
        <Form />
        <Advance />
      </div>
      <div className=' bg-primary'
        style={{
          backgroundImage: `url(${imgback})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Boost />
      </div>
      <div className='bg-backfooter'>
        <Footer />
      </div>
    </>
  )
}

export default App
