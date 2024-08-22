import MangaTable from "./components/MangaTable/MangaTable";
import AddManga from "./components/AddManga/AddManga";
import EditManga from "./components/EditManga/EditManga";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Catalog from "../pages/Home/Catalog";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

const EditLayout = () =>{
  return <div className='edit_container'>
    <h2>СПИСОК КНИГ</h2>
    <MangaTable />
    <h2>ИЗМЕНИТЬ КНИГУ</h2>
    <EditManga/>
    <h2>ДОБАВИТЬ КНИГУ</h2>
    <AddManga />
  </div>
}

const Layout = () => {
  return <>
    <Header />
    <Outlet />
    <Cart />
  </>
}

const router = createBrowserRouter([
  {
    path: '/edit',
    element: <EditLayout />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Catalog />
      }
    ]
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
