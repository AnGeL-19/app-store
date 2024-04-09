
import {
  Outlet,
 // RouterProvider,
 // Route,
 Link
} from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div className="min-h-screen w-full">
      {/* <h1>ADMIN</h1>
      <Link to="/admin/products">PRODUCTS</Link>
      <Link to="/admin/games">GAMES</Link>
      <Link to="/admin/companies">COMPANIES</Link>
      <Link to="/admin/auth/login">LOGIN</Link>
      <hr /> */}
      <Outlet />
    </div>
  )
}
