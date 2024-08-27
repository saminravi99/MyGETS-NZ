/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable react-hooks/rules-of-hooks */
// pages/dashboard.js
import { MyGetsTable } from '@/components/Tables/Table'
import PrivateRoute from '@/routes/PrivateRoute'

const Dashboard = () => {
  return (
    <PrivateRoute>
      <MyGetsTable />
    </PrivateRoute>
  )
}

export default Dashboard
