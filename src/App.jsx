import Footer from './components/footer/Footer'
import { SubscribeButton } from './components/SubscribeButton'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <SubscribeButton text="Subscribe" />

      <Footer />
    </div>
  )
}

export default App
