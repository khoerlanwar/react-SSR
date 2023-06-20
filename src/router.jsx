import { Link, useLocation } from 'react-router-dom'
import SEOConfiguration from './config-meta'
import { useEffect } from 'react';

export default function Router() {
  return [
    { path: '/', element: Home },
    { path: '/about', element: About },
    { path: '/about/anakonda', element: AboutAnakonda },
  ]
}

export function Home() {
  const isLocation = useLocation();

  useEffect(() => { }, [isLocation])

  return (
    <div>
      <SEOConfiguration
        title="Home Page"
        description="Home Description"
        image={`/avataaars.png`}
      />
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  )
}

export function About() {
  const isLocation = useLocation();

  useEffect(() => { }, [isLocation])
  return (
    <div>
      <SEOConfiguration
        title="About Page"
        description="About Description"
        image={`/avataaars1.png`}
      />
      <h1>About</h1>
      <Link to="/">Home</Link>
      <Link to="/about/anakonda">Anakonda</Link>
    </div>
  )
}

export function AboutAnakonda() {
  const isLocation = useLocation();
  useEffect(() => { }, [isLocation])

  return (
    <div>
      <SEOConfiguration
        title="AboutAnakonda Page"
        description="AboutAnakonda Description"
        image={`/avataaars2.png`}
      />
      <h1>About Anakonda</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">Anakonda</Link>
      </div>
    </div >
  )
}