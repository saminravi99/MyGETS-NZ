/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable react-hooks/rules-of-hooks */
// pages/dashboard.js
import getTenant from '@/apis/marketplace/getTenant'
import { MyGetsTable } from '@/components/Tables/Table'
import useToken from '@/context/Token/store/useToken'
import PrivateRoute from '@/routes/PrivateRoute'
import { useEffect } from 'react'

const Tenants = () => {
  // const [data, setData] = useState([])

  const { token } = useToken()
  console.log(token)
  useEffect(() => {
    if (token) {
      getTenant(token).then(res => {
        console.log(res)
      })
    }
  }, [token])
  return (
    <PrivateRoute>
      <MyGetsTable />
    </PrivateRoute>
  )
}

export default Tenants
