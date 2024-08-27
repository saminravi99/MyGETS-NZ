/* eslint-disable react/prop-types */
import Loader from '@/components/Loader/Loader'
import { loginRequest } from '@/config/authConfig'
import PrivateLayout from '@/layouts/PrivateLayout'
import { InteractionType } from '@azure/msal-browser'
import { MsalAuthenticationTemplate } from '@azure/msal-react'
import React from 'react'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const authRequest = {
    ...loginRequest,
  }
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
      // errorComponent={ErrorComponent}
      loadingComponent={Loader}
    >
      <PrivateLayout>{children}</PrivateLayout>
    </MsalAuthenticationTemplate>
  )
}

export default PrivateRoute
