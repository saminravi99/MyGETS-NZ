/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { MyGetsButton } from '@/components/Buttons/Button'
import { MyGetsTable } from '@/components/Tables/Table'
import { b2cPolicies } from '@/config/authConfig'
import PrivateLayout from '@/layouts/PrivateLayout'
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from '@azure/msal-react'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { instance, accounts } = useMsal()
  const router = useRouter()

  // checks if user is logged in. If not, remove cookie

  // login function
  const handleAuth = async (authority: any) => {
    try {
      await instance.loginPopup({
        authority,
        scopes: ['openid', 'profile', 'offline_access'],
      })
    } catch (error) {
      console.error('Authentication failed: ', error)
    }
  }

  return (
    <main
    // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <UnauthenticatedTemplate>
          <div
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
          >
            <MyGetsButton
              onClick={() =>
                handleAuth(b2cPolicies.authorities.signInSignUp.authority)
              }
            >
              Login with Azure
            </MyGetsButton>
          </div>
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <PrivateLayout>
            <MyGetsTable />
          </PrivateLayout>
        </AuthenticatedTemplate>
      </div>
    </main>
  )
}
