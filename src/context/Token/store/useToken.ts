import { useContext } from 'react'
import { TokenContext } from '../TokenContext'

export default function useToken() {
  const { ...store } = useContext(TokenContext)
  return { ...store }
}
