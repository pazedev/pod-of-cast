import Footer from './components/footer/Footer'
import { SubscribeButton } from './components/SubscribeButton'
import DownloadSection from './components/downloadSection/DownloadSection'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <SubscribeButton text="Subscribe" />

      <DownloadSection />

      <Footer />
    </div>
  )
}

export default App
