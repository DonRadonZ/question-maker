import { RouterProvider } from "react-router-dom"
import GlobalStyles from "../shared/theme/GlobalStyles"
import router from "./routes/router"


function App() {
  

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App
