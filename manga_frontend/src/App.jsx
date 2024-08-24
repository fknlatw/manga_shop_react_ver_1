import MangaTable from "./components/MangaTable/MangaTable";
import AddManga from "./components/AddManga/AddManga";
import EditManga from "./components/EditManga/EditManga";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Catalog from "../pages/Catalog/Catalog";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Main from "../pages/Main/Main";
import AboutUs from "../pages/AboutUs/AboutUs"

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
        path: '/catalog',
        element: <Catalog />
      },
      {
        path: '/',
        element: <Main/>
      },
      {
        path: '/about',
        element: <AboutUs/>
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
