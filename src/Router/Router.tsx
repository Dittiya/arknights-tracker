import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import History from "../History/History"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/History',
    element: <History />
  }
])

export default router
