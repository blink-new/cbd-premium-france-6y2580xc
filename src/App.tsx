import Header from './components/Header'
import Hero from './components/Hero'
import FleursSection from './components/FleursSection'
import ExtractionsSection from './components/ExtractionsSection'
import SiropsSection from './components/SiropsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FleursSection />
        <ExtractionsSection />
        <SiropsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App