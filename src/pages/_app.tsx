import { msalInstance } from '@/config/authConfig'
import TokenProvider from '@/context/Token/TokenContext'
import '@/styles/globals.css'
import { MsalProvider } from '@azure/msal-react'
import {
  FluentProvider,
  RendererProvider,
  SSRProvider,
  createDOMRenderer,
  teamsDarkTheme,
  type GriffelRenderer,
} from '@fluentui/react-components'
import { type NextComponentType } from 'next'
import type {
  AppContext,
  AppInitialProps,
  AppLayoutProps,
  AppProps,
} from 'next/app'

type EnhancedAppProps = AppProps & {
  renderer?: GriffelRenderer
} & AppLayoutProps

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
  renderer,
}: EnhancedAppProps) => {
  const getLayout = Component.getLayout || ((page: any) => page)
  return (
    // 👇 Accepts a renderer from <Document /> or creates a default one
    //    Also triggers rehydration a client
    <RendererProvider renderer={renderer || createDOMRenderer()}>
      <SSRProvider>
        <FluentProvider theme={teamsDarkTheme}>
          <MsalProvider instance={msalInstance}>
            <TokenProvider rest={null}>
              {getLayout(<Component {...pageProps} />)}
            </TokenProvider>
          </MsalProvider>
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  )
}

export default MyApp
