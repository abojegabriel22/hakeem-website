
import { useEffect, useState } from 'react'
import './App.css'
import { SiteLayout } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { BookingPage } from './pages/BookingPage'
import { CreditsPage } from './pages/CreditsPage'
import { HomePage } from './pages/HomePage'
import { ManagementPage } from './pages/ManagementPage'
import { ProducingPage } from './pages/ProducingPage'

const pages = {
  '/': { title: 'Hakeem Kae-Kazim | Actor, Producer, Director', component: <HomePage /> },
  '/about': { title: 'About | Hakeem Kae-Kazim', component: <AboutPage /> },
  '/credits': { title: 'Selected Credits | Hakeem Kae-Kazim', component: <CreditsPage /> },
  '/producing': { title: 'Producing & Directing | Hakeem Kae-Kazim', component: <ProducingPage /> },
  '/booking': { title: 'Booking | Hakeem Kae-Kazim', component: <BookingPage /> },
  '/management': { title: 'Management | Hakeem Kae-Kazim', component: <ManagementPage /> },
}

type PagePath = keyof typeof pages

function App() {
  const [path, setPath] = useState<PagePath>(() => {
    const initialPath = window.location.hash.slice(1) || '/'
    return initialPath in pages ? initialPath as PagePath : '/'
  })

  useEffect(() => {
    const updatePath = () => {
      const nextPath = window.location.hash.slice(1) || '/'
      setPath(nextPath in pages ? nextPath as PagePath : '/')
    }

    window.addEventListener('hashchange', updatePath)
    return () => window.removeEventListener('hashchange', updatePath)
  }, [])

  useEffect(() => {
    document.title = pages[path].title
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [path])

  return <SiteLayout>{pages[path].component}</SiteLayout>
}

export default App
