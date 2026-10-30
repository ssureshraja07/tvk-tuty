
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar, { useLanguage } from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import RaiseIssues from './pages/RaiseIssues.jsx'
import Employment from './pages/Employment.jsx'
import AboutParty from './pages/AboutParty.jsx'
import Candidates from './pages/Candidates.jsx'
import ElectionGuarantees from './pages/ElectionGuarantees.jsx'
import JoinUs from './pages/JoinUs.jsx'

import ScrollReveal from './components/ScrollReveal.jsx'

const DISTRICT = {
  en: 'Thoothukudi District',
  ta: 'தூத்துக்குடி மாவட்டம்'
}

// Scroll to top whenever route changes
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [location.pathname])

  return null
}

// Floating Scroll To Top Button
function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
      aria-label="Scroll to top"
      className={`
        fixed bottom-7 right-6 z-[999]
        flex h-12 w-12 items-center justify-center
        rounded-full bg-[#920000] text-white
        text-2xl font-bold shadow-xl
        transition-all duration-500
        hover:-translate-y-2 hover:bg-[#b08a00]
        ${
          visible
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-5 opacity-0'
        }
      `}
    >
      ↑
    </button>
  )
}

// Temporary page
function Page({ id }) {
  const { t } = useLanguage()

  return (
    <main className="mx-auto min-h-[60vh] max-w-7xl px-6 py-16 pt-36">
      <h1 className="text-4xl font-extrabold text-white">
        {t[id]}
      </h1>
    </main>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">

      <ScrollManager />
      <ScrollReveal />

      {/* Global Navbar */}
      <Navbar district={DISTRICT} />

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={<Home district={DISTRICT} />}
        />

        <Route
          path="/election/candidates"
          element={<Candidates />}
        />

        <Route
          path="/election/guarantees"
          element={<ElectionGuarantees />}
        />

        <Route
          path="/election/disclosure"
          element={<Page id="disclosure" />}
        />

        <Route
          path="/party/about"
          element={<AboutParty />}
        />

        <Route
          path="/party/action"
          element={<Page id="action" />}
        />

        <Route
          path="/party/ideology"
          element={<Page id="ideology" />}
        />

        <Route
          path="/raise-issues"
          element={<RaiseIssues />}
        />

        <Route
          path="/employment"
          element={<Employment />}
        />

        <Route
          path="/events"
          element={<Page id="events" />}
        />

        <Route
          path="/join-us"
          element={<JoinUs />}
        />
      </Routes>

      {/* Global Footer */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollTopButton />

    </div>
  )
}
