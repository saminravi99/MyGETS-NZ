import { createContext } from 'react'
import useTokenStore from './store/useTokenStore'

export const TokenContext = createContext(null as any)

const TokenProvider = ({
  children,
  ...rest
}: {
  children: React.ReactNode
  rest: any
}) => {
  const { ...store } = useTokenStore(rest)
  return <TokenContext.Provider value={store}>{children}</TokenContext.Provider>
}

export default TokenProvider
