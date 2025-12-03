import { Navbar } from './components/layout/Navbar/Navbar'
import { LandingPage } from './pages/Landing/LandingPage'
import { Footer } from './components/layout/Footer/Footer'
import { SubscribeButton } from './components/UI/SubscribeButton'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Navbar />
        <LandingPage />
        <div className="flex justify-center py-8">
          <SubscribeButton text="Subscribe" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
