import './App.css'
import HomePage from './components/HomePage'
import { inject } from '@vercel/analytics'


export default function App() {
  inject()
  return <HomePage />
}

