import { createBrowserRouter, Outlet } from 'react-router-dom'

const routers = createBrowserRouter(
  [
    {
      path: '/',
      Component: () => {
        return (
          <>
            <h1> Hola mundo</h1>
            <Outlet />
          </>
        )
      },
      children: [
        {
          path: 'about',
          element: <h1> About</h1>
        }
      ]
    }
  ]
)

export default routers
