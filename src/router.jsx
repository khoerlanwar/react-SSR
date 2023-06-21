import { Link, useLocation } from 'react-router-dom'
import SEOConfiguration from './config-meta'
import { useEffect } from 'react';
import { countingValue } from './store/countingValue'
import { arrayStore } from './store/updateArray'

export default function Router() {
  return [
    { path: '/', element: Home },
    { path: '/about', element: About },
    { path: '/about/profile', element: Profile },
    { path: '*', element: NotFound },
  ]
}

export function Home() {
  const isLocation = useLocation();
  const { count } = countingValue((state) => state.initial);
  const increment = countingValue((state) => state.increment);
  const decrement = countingValue((state) => state.decrement);
  const incrementByAmount = countingValue((state) => state.incrementByAmount)

  useEffect(() => { }, [isLocation])

  return (
    <div>
      <SEOConfiguration
        title="Home Page"
        description="Home Description"
        image="avataaars.png"
      />
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
      <button onClick={() => incrementByAmount(10)}>Tambah 10</button>
      {count}
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
        image="avataaars1.png"
      />
      <h1>About</h1>
      <Link to="/">Home</Link>
      <Link to="/about/profile">About Profile</Link>
      <img src="/avataaars3.png" style={{
        height: '100px',
        width: '100px'
      }} />
    </div>
  )
}

export function Profile() {
  const isLocation = useLocation();
  const { array } = arrayStore((state) => state.initial);
  const isUpdated = arrayStore((state) => state.updateArray);

  const handleUpdateArray = () => {
    isUpdated(['berhasil', 'tambah', 'new array'])
  }

  useEffect(() => { }, [isLocation])

  return (
    <div>
      <SEOConfiguration
        title="About Profile Page"
        description="AboutAnakonda Description"
        image="avataaars2.png"
      />
      <h1>About Profile</h1>
      <button onClick={handleUpdateArray}>Tambah Array</button>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about/profile">About</Link>
        <img src="/avataaars2.png" style={{
          height: '100px',
          width: '100px'
        }} />
      </div>
    </div >
  )
}

export function NotFound() {
  return (
    <div>404 Not Found</div>
  )
}