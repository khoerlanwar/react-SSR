import { Link, useLocation } from 'react-router-dom'
import SEOConfiguration from './config-meta'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount, decrement } from './store/countingValue'

export default function Router() {
  return [
    { path: '/', element: Home },
    { path: '/about', element: About },
    { path: '/about/anakonda', element: AboutAnakonda },
  ]
}

export function Home() {
  const isLocation = useLocation();
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state.counting.value)

  useEffect(() => { }, [isLocation, stateValue])

  console.log(stateValue)

  return (
    <div>
      <SEOConfiguration
        title="Home Page"
        description="Home Description"
        image={`/avataaars.png`}
      />
      <button onClick={() => dispatch(increment())}>Tambah</button>
      <button onClick={() => dispatch(decrement())}>Kurang</button>
      {stateValue}
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <img src="/avataaars.png" style={{
        height: '100px',
        width: '100px'
      }} />
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
      <img src="/avataaars3.png" style={{
        height: '100px',
        width: '100px'
      }} />
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
        <img src="/avataaars2.png" style={{
          height: '100px',
          width: '100px'
        }} />
      </div>
    </div >
  )
}