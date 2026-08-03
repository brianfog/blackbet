import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bfooter from "./Components/BLKfoot";
import Blkheader from "./Components/blkHead";
import BlkHome from "./Pages/BlkHome";




function App() {
  return (
    <>
      <BrowserRouter>
        <Blkheader />
        <Routes>
          <Route path="/" element={<BlkHome/>}/>
        </Routes>
        <Bfooter />
      </BrowserRouter>
    </>
  )
}

export default App
