import { Link, useLocation } from 'react-router-dom'
import SEOConfiguration from './config-meta'
import { useEffect } from 'react';

export default function Router() {
  return [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
  ]
}

export function Home() {
  const location = useLocation();

  useEffect(() => { }, [location])

  return (
    <div>
      <SEOConfiguration title="Home Page" description="Home Description" image="/vite.svg" />
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  )
}

export function About() {
  const location = useLocation();

  useEffect(() => { }, [location])
  return (
    <div>
      <SEOConfiguration title="About Page" description="About Description" image="/vite.svg" />
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  )
}