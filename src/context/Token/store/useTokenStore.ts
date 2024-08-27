import React from 'react'
import { useMsal } from '@azure/msal-react'

const useTokenStore = ({ ...rest }) => {
  const [token, setToken] = React.useState<string | null>(null)
  const { instance, accounts } = useMsal()

  // Define the 'request' object within the UserAvatar component
  const request = {
    // scopes: ["User.Read"], // define your scopes here
    account: accounts.length > 0 ? accounts[0] : null,
  }

  // Fetch the access token silently
  if (request.account) {
    instance
      .acquireTokenSilent(request as any)
      .then(response => {
        // console.log("Access Token:", response.idToken);
        setToken(response.idToken)
      })
      .catch(error => {
        console.error('Failed to acquire token silently:', error)
        // Additional error handling here
      })
  }

  return {
    token,
  }
}

export default useTokenStore
