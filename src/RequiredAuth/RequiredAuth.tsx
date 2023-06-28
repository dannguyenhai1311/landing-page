import { Navigate, Outlet, useLocation } from 'react-router-dom'

// type Props = {
//   allowRoles?: Array<string | undefined>
// }

export const RequiredAuth = () => {
  const userToken = localStorage.getItem("token")
  return userToken  ? (
    <Outlet />
  ) : userToken ? (
    <Navigate to="/LivingLab" />
  ) : (
    <Navigate to="/login"  replace={true} />
  )
}
