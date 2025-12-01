import Footer from './components/layout/footer/Footer.jsx'
import { SubscribeButton } from './components/UI/SubscribeButton'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <SubscribeButton text="Subscribe" />

      <Footer />
    </div>
  )
}

export default App
