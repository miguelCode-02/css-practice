import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import BoxModel from './components/boxModel/BoxModel'

const routers = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,
      children: [
        {
          path: 'about',
          element: <h1> About</h1>
        }
      ]
    },
    {
      path: 'box-model',
      Component: BoxModel
    }
  ]
)

export default routers
